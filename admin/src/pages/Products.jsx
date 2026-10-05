import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate, useOutletContext } from "react-router-dom";
import { productsApi } from "../api/api";
import { useToast } from "../context/ToastContext";
import {
  Plus,
  Edit2,
  Trash2,
  AlertCircle
} from "lucide-react";

const getImageUrl = (img) => {
  if (!img) return "";
  if (img.url) {
    if (img.url.startsWith("http")) return img.url;
    const baseUrl = (import.meta.env.VITE_API_URL || "https://grf-8fnl.onrender.com/api").replace("/api", "");
    return `${baseUrl}${img.url}`;
  }
  return `data:${img.contentType};base64,${img.data}`;
};

const Products = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();

  // Lifted States from AppLayout Outlet Context
  const {
    products, setProducts,
    productsLoading: loading, setProductsLoading: setLoading,
    productsError: error, setProductsError: setError
  } = useOutletContext();
  
  const [deleteId, setDeleteId] = useState(null);

  const fetchProducts = async (showLoading = true) => {
    try {
      if (showLoading) {
        setLoading(true);
        setError(null);
      }
      const data = await productsApi.getAll({ all: true });
      setProducts(data);
    } catch (err) {
      console.error(err);
      if (showLoading && products.length === 0) {
        setError("Failed to fetch products catalog.");
      }
    } finally {
      if (showLoading) setLoading(false);
    }
  };

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts(true);
    } else {
      // Revalidate silently in the background
      fetchProducts(false);
    }
  }, []);

  const handleOpenAdd = () => {
    navigate("/products/add");
  };

  const handleOpenEdit = (product) => {
    navigate(`/products/edit/${product._id}`);
  };

  const triggerDeleteProduct = (id) => {
    setDeleteId(id);
  };

  const confirmDeleteProduct = async () => {
    if (!deleteId) return;
    try {
      await productsApi.delete(deleteId);
      showToast("Product deleted successfully.", "success");
      setProducts(products.filter(p => p._id !== deleteId));
    } catch (err) {
      console.error(err);
      showToast("Failed to delete product.", "error");
    } finally {
      setDeleteId(null);
    }
  };

  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-7xl mx-auto animate-fadeIn">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/[0.04] pb-5">
        <div>
          <h1 className="heading-font text-2xl font-black text-white uppercase tracking-wider">
            Equipment Catalog
          </h1>
          <p className="text-xs text-slate-500 font-mono mt-1">
            Configure industrial products, specifications, and CAD blueprints
          </p>
        </div>

        <div className="bg-[#0a0d18] border border-white/5 px-4 py-2 rounded-sm text-right shrink-0">
          <span className="text-[10px] text-slate-500 uppercase font-mono block">Total Products</span>
          <p className="text-xl font-bold text-white leading-tight font-mono">
            {products.length} <span className="text-brand-accent text-xs font-normal">items</span>
          </p>
        </div>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-sm p-4 flex items-center space-x-3 text-red-200">
          <AlertCircle size={18} className="shrink-0 text-red-400" />
          <span className="text-xs font-mono">{error}</span>
        </div>
      )}

      {/* Grid: Products List */}
      {loading ? (
        <div className="py-20 text-center flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-brand-accent mb-3"></div>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Opening catalog warehouse...</span>
        </div>
      ) : products.length === 0 ? (
        <div className="py-20 text-center text-slate-500 glass-panel rounded-sm">
          <p className="text-xs font-mono">No products in database catalog. Add one above!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product._id} className="glass-panel rounded-sm overflow-hidden flex flex-col justify-between group transition-all duration-300 border border-white/5 hover:border-brand-accent/25">
              
              {/* Product Image Area */}
              <div className="aspect-[4/3] w-full bg-[#0a0d18]/80 flex items-center justify-center relative border-b border-white/[0.03] overflow-hidden select-none">
                
                {product.images && product.images.length > 0 ? (
                  <img 
                    src={getImageUrl(product.images[0])} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <>
                    {/* CAD Fallback visual styling */}
                    <div className="absolute inset-0 blueprint-grid opacity-20"></div>
                    
                    <div className="absolute top-2 left-2 text-[7px] font-mono text-slate-500">X: 204.09 / Y: 110.1</div>
                    <div className="absolute bottom-2 right-2 text-[7px] font-mono text-slate-500">SCALE: NONE</div>
                    
                    <div className="z-10 px-4 bg-brand-charcoal/95 p-4 border border-white/5 rounded-sm text-center">
                      <p className="heading-font text-white font-bold text-xs uppercase leading-snug">
                        {product.name}
                      </p>
                      <span className="text-[7px] tracking-widest text-brand-accent font-bold mt-1 block font-mono">
                        CAD PREVIEW DRAWING
                      </span>
                    </div>
                  </>
                )}

                {/* Badges */}
                <div className="absolute top-3 right-3 flex flex-col gap-1.5">
                  {!product.isActive && (
                    <span className="bg-red-500 text-white text-[8px] font-mono font-bold px-1.5 py-0.5 uppercase tracking-wider rounded-sm shadow-md">
                      Inactive
                    </span>
                  )}
                </div>
              </div>

              {/* Details & Specs Summary */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2 text-left">
                  <span className="inline-block whitespace-nowrap bg-brand-accent/5 border border-brand-accent/20 text-brand-accent text-[8px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-widest">
                    {product.category}
                  </span>
                  
                  <h3 className="heading-font text-white text-md font-bold leading-snug uppercase tracking-wide group-hover:text-brand-accent transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-slate-400 text-xs line-clamp-2 font-light leading-relaxed">
                    {product.description || "No description provided."}
                  </p>

                  <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-white/[0.03]">
                    <span>Capacity: </span>
                    <span className="text-slate-300 font-bold">
                      {product.capacityRange?.min || 0} - {product.capacityRange?.max || "N/A"} {product.capacityRange?.unit || "Liters"}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-white/[0.04] no-print">
                  <button
                    onClick={() => handleOpenEdit(product)}
                    className="flex-1 bg-white/[0.02] hover:bg-brand-accent hover:text-black border border-white/10 hover:border-brand-accent text-slate-300 font-bold py-2 px-3 rounded-sm text-[10px] uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center space-x-1.5"
                  >
                    <Edit2 size={12} />
                    <span>Edit Specs</span>
                  </button>
                  <button
                    onClick={() => triggerDeleteProduct(product._id)}
                    className="p-2 border border-white/5 hover:border-red-500 bg-white/[0.02] text-slate-500 hover:text-red-400 rounded-sm transition-colors cursor-pointer"
                    title="Delete Product"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteId && createPortal(
        (() => {
          const productToDelete = products.find(p => p._id === deleteId);
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
              <div className="bg-brand-charcoal border border-red-500/20 max-w-md w-full rounded-sm p-6 relative overflow-hidden shadow-2xl shadow-red-500/5 animate-scaleUp">
                
                {/* CAD blueprint style corner markers */}
                <div className="absolute top-2 left-2 border-t border-l border-red-500/30 w-3 h-3"></div>
                <div className="absolute top-2 right-2 border-t border-r border-red-500/30 w-3 h-3"></div>
                <div className="absolute bottom-2 left-2 border-b border-l border-red-500/30 w-3 h-3"></div>
                <div className="absolute bottom-2 right-2 border-b border-r border-red-500/30 w-3 h-3"></div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-sm shrink-0">
                    <Trash2 size={24} />
                  </div>
                  <div className="space-y-2 flex-1">
                    <span className="text-[9px] font-mono text-red-400 uppercase tracking-widest block">
                      Security Action Required // Delete
                    </span>
                    <h3 className="heading-font text-white text-md font-bold uppercase tracking-wider">
                      Confirm Deletion
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Are you sure you want to delete <span className="text-white font-semibold font-mono">{productToDelete?.name || "this product"}</span>? This will remove it from the catalog permanently.
                    </p>
                    
                    {productToDelete?.category && (
                      <div className="mt-2 text-[10px] font-mono text-slate-500 bg-[#0a0d18] border border-white/5 p-2 rounded-xs">
                        <div className="flex justify-between">
                          <span>CATEGORY:</span>
                          <span className="text-slate-300 font-bold">{productToDelete.category}</span>
                        </div>
                        {productToDelete.capacityRange && (
                          <div className="flex justify-between mt-1">
                            <span>CAPACITY:</span>
                            <span className="text-slate-300 font-bold">
                              {productToDelete.capacityRange.min} - {productToDelete.capacityRange.max} {productToDelete.capacityRange.unit}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 flex justify-end space-x-3 border-t border-white/[0.04] pt-4">
                  <button
                    onClick={() => setDeleteId(null)}
                    className="px-4 py-2 border border-white/10 hover:bg-white/[0.02] text-slate-400 hover:text-white rounded-sm text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmDeleteProduct}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-sm text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-red-600/10 cursor-pointer"
                  >
                    Delete Item
                  </button>
                </div>

              </div>
            </div>
          );
        })(),
        document.body
      )}

    </div>
  );
};

export default Products;
