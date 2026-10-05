import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { productsApi } from "../api/api";
import { useToast } from "../context/ToastContext";
import {
  Package,
  ArrowLeft,
  Upload,
  PlusCircle,
  MinusCircle,
  X,
  Save,
  Loader2
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

const AddProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const isEditMode = !!id;

  // Form State
  const [form, setForm] = useState({
    name: "",
    category: "Storage Tank",
    description: "",
    brochureUrl: "",
    material: [],
    capacityRange: { min: "", max: "", unit: "Liters" },
    specifications: [{ key: "", value: "" }],
    isActive: true,
    isFeatured: false,
    order: "",
  });

  // Selected Upload Files State
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [filePreviews, setFilePreviews] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [existingPdf, setExistingPdf] = useState(null);
  const [removeExistingPdf, setRemoveExistingPdf] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const categories = [
    "Storage Tank",
    "Milk Storage Tank",
    "Silo System",
    "Brewery Tank",
    "Reactor Vessel",
    "High Pressure Vessel",
    "Mixing Tank",
    "Jacketed Vessel",
    "Underground Oil Storage Tank",
    "Custom Equipment"
  ];

  const materialsList = ["Stainless Steel", "Mild Steel", "Custom"];

  // Fetch product if in edit mode
  useEffect(() => {
    if (isEditMode) {
      const fetchProduct = async () => {
        try {
          setLoading(true);
          const product = await productsApi.getOne(id);
          setForm({
            name: product.name || "",
            category: product.category || "Storage Tank",
            description: product.description || "",
            brochureUrl: product.brochureUrl || "",
            material: product.material || [],
            capacityRange: {
              min: product.capacityRange?.min || "",
              max: product.capacityRange?.max || "",
              unit: product.capacityRange?.unit || "Liters",
            },
            specifications: product.specifications && product.specifications.length > 0
              ? product.specifications.map(spec => ({ key: spec.key, value: spec.value }))
              : [{ key: "", value: "" }],
            isActive: product.isActive ?? true,
            isFeatured: product.isFeatured ?? false,
            order: product.order || 0,
          });
          setExistingImages(product.images || []);
          setExistingPdf(product.pdf || null);
        } catch (err) {
          console.error(err);
          showToast("Failed to fetch product details.", "error");
          navigate("/products");
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [id, isEditMode, navigate]);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Material checklist change
  const handleMaterialChange = (materialName) => {
    const current = [...form.material];
    if (current.includes(materialName)) {
      setForm({ ...form, material: current.filter(m => m !== materialName) });
    } else {
      setForm({ ...form, material: [...current, materialName] });
    }
  };

  // Spec rows dynamic handling
  const handleSpecChange = (index, field, value) => {
    const updated = [...form.specifications];
    updated[index][field] = value;
    setForm({ ...form, specifications: updated });
  };

  const addSpecRow = () => {
    setForm({
      ...form,
      specifications: [...form.specifications, { key: "", value: "" }]
    });
  };

  const removeSpecRow = (index) => {
    if (form.specifications.length === 1) return;
    setForm({
      ...form,
      specifications: form.specifications.filter((_, idx) => idx !== index)
    });
  };

  // File Upload Handlers
  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    setUploadError("");

    if (selectedFiles.length + files.length > 10) {
      setUploadError("Maximum 10 images allowed per equipment.");
      return;
    }

    const newFiles = [...selectedFiles, ...files];
    setSelectedFiles(newFiles);

    // Create object urls for preview
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setFilePreviews([...filePreviews, ...newPreviews]);
  };

  const removeSelectedFile = (index) => {
    // Revoke and filter previews
    URL.revokeObjectURL(filePreviews[index]);
    setFilePreviews(filePreviews.filter((_, idx) => idx !== index));
    setSelectedFiles(selectedFiles.filter((_, idx) => idx !== index));
  };

  const removeExistingImage = (index) => {
    setExistingImages(existingImages.filter((_, idx) => idx !== index));
  };

  const handlePdfSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.type !== "application/pdf") {
      setUploadError("Please upload a PDF document.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setUploadError("PDF file size must be under 10MB.");
      return;
    }
    setUploadError("");
    setSelectedPdf(file);
    setRemoveExistingPdf(false);
  };

  const clearSelectedPdf = () => {
    setSelectedPdf(null);
    setUploadError("");
  };

  const removeExistingPdfHandler = () => {
    setExistingPdf(null);
    setRemoveExistingPdf(true);
    setUploadError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.category) {
      showToast("Name and Category are required.", "warning");
      return;
    }

    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("category", form.category);
      formData.append("description", form.description);
      formData.append("brochureUrl", form.brochureUrl);
      formData.append("isActive", form.isActive);
      formData.append("isFeatured", form.isFeatured);
      formData.append("order", form.order === "" ? 0 : form.order);

      formData.append("material", JSON.stringify(form.material));
      formData.append("capacityRange", JSON.stringify(form.capacityRange));

      const cleanSpecs = form.specifications.filter(s => s.key && s.value);
      formData.append("specifications", JSON.stringify(cleanSpecs));

      // Append upload files
      selectedFiles.forEach(file => {
        formData.append("images", file);
      });

      if (selectedPdf) {
        formData.append("pdf", selectedPdf);
      }

      if (isEditMode) {
        formData.append("existingImages", JSON.stringify(existingImages));
        if (removeExistingPdf) {
          formData.append("removePdf", "true");
        }
        await productsApi.update(id, formData);
        showToast("Equipment updated successfully.", "success");
      } else {
        await productsApi.create(formData);
        showToast("New equipment added to catalog.", "success");
      }
      navigate("/products");
    } catch (err) {
      console.error(err);
      showToast(err.response?.data?.message || "Failed to save product.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="py-20 text-center flex flex-col justify-center items-center">
        <Loader2 size={32} className="animate-spin text-brand-accent mb-4" />
        <p className="text-xs text-slate-500 font-mono">Loading product editor...</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* Header and Back Link */}
      <div className="flex items-center justify-between border-b border-white/[0.04] pb-5">
        <div className="flex items-center space-x-3">
          <Link
            to="/products"
            className="p-1.5 hover:bg-white/5 text-slate-400 hover:text-white rounded-sm border border-white/5 transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} />
          </Link>
          <div>
            <h1 className="heading-font text-2xl font-bold text-white uppercase tracking-wider">
              {isEditMode ? "Edit Equipment Specs" : "Add New Equipment"}
            </h1>
            <p className="text-xs text-slate-500 font-mono mt-1">
              {isEditMode ? "Modify existing equipment dimensions & media" : "Register a new industrial vessel to the public catalog"}
            </p>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="glass-panel p-6 rounded-sm border border-white/[0.04] space-y-6">

        {/* Name and Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-[10px] font-mono text-slate-500 uppercase block">Equipment Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Jacketed Reactor Vessel 5KL"
              className="w-full px-4 py-2.5 bg-[#0a0d18] border border-white/5 focus:border-brand-accent/30 rounded-sm text-xs text-white placeholder-slate-600 focus:outline-none transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-mono text-slate-500 uppercase block">Category *</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-[#0a0d18] border border-white/5 focus:border-brand-accent/30 rounded-sm text-xs text-slate-400 focus:outline-none transition-colors cursor-pointer"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-slate-500 uppercase block">Equipment Description</label>
          <textarea
            name="description"
            rows={4}
            value={form.description}
            onChange={handleChange}
            placeholder="Technical details, features, typical applications, quality standards..."
            className="w-full px-4 py-2.5 bg-[#0a0d18] border border-white/5 focus:border-brand-accent/30 rounded-sm text-xs text-white placeholder-slate-600 focus:outline-none transition-colors resize-y"
          />
        </div>

        {/* Material & Capacity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Material Selection */}
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-slate-500 uppercase block">Material Construction</label>
            <div className="flex flex-col space-y-1">
              {materialsList.map(mat => (
                <label key={mat} className="flex items-center space-x-2 text-xs text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.material.includes(mat)}
                    onChange={() => handleMaterialChange(mat)}
                    className="rounded-xs border border-white/10 bg-[#0a0d18] text-brand-accent focus:ring-0 w-3.5 h-3.5 cursor-pointer"
                  />
                  <span>{mat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Capacity Range */}
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-slate-500 uppercase block">Capacity Range</label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                placeholder="Min"
                value={form.capacityRange.min}
                onChange={(e) => setForm({
                  ...form,
                  capacityRange: { ...form.capacityRange, min: parseInt(e.target.value) || "" }
                })}
                className="w-full px-3 py-2 bg-[#0a0d18] border border-white/5 focus:border-brand-accent/30 rounded-sm text-xs text-white placeholder-slate-700 focus:outline-none"
              />
              <input
                type="number"
                placeholder="Max"
                value={form.capacityRange.max}
                onChange={(e) => setForm({
                  ...form,
                  capacityRange: { ...form.capacityRange, max: parseInt(e.target.value) || "" }
                })}
                className="w-full px-3 py-2 bg-[#0a0d18] border border-white/5 focus:border-brand-accent/30 rounded-sm text-xs text-white placeholder-slate-700 focus:outline-none"
              />
            </div>
            <select
              value={form.capacityRange.unit}
              onChange={(e) => setForm({
                ...form,
                capacityRange: { ...form.capacityRange, unit: e.target.value }
              })}
              className="w-full px-3 py-1.5 bg-[#0a0d18] border border-white/5 focus:border-brand-accent/30 rounded-sm text-[10px] text-slate-400 cursor-pointer"
            >
              <option value="Liters">Liters</option>
              <option value="KL">KL (Kilo Liters)</option>
              <option value="KG">KG (Kilograms)</option>
              <option value="Tons">Tons</option>
              <option value="Gallons">Gallons</option>
            </select>
          </div>
        </div>

        {/* Dynamic Specifications */}
        <div className="space-y-3 border-t border-white/[0.04] pt-5">
          <div className="flex items-center justify-between">
            <label className="text-[10px] font-mono text-slate-500 uppercase">Technical Dimensions / Specs Sheet</label>
            <button
              type="button"
              onClick={addSpecRow}
              className="flex items-center space-x-1 text-xs text-brand-accent hover:text-white transition-colors cursor-pointer"
            >
              <PlusCircle size={14} />
              <span>Add Spec Row</span>
            </button>
          </div>

          <div className="space-y-2.5 max-h-[200px] overflow-y-auto pr-2">
            {form.specifications.map((spec, index) => (
              <div key={index} className="flex items-center space-x-3">
                <input
                  type="text"
                  value={spec.key}
                  onChange={(e) => handleSpecChange(index, "key", e.target.value)}
                  placeholder="Parameter (e.g. Diameter)"
                  className="flex-1 px-4 py-2 bg-[#0a0d18] border border-white/5 focus:border-brand-accent/30 rounded-sm text-xs text-white placeholder-slate-700 focus:outline-none"
                />
                <input
                  type="text"
                  value={spec.value}
                  onChange={(e) => handleSpecChange(index, "value", e.target.value)}
                  placeholder="Measurement (e.g. 1500 mm)"
                  className="flex-1 px-4 py-2 bg-[#0a0d18] border border-white/5 focus:border-brand-accent/30 rounded-sm text-xs text-white placeholder-slate-700 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => removeSpecRow(index)}
                  disabled={form.specifications.length === 1}
                  className="p-2 text-slate-600 hover:text-red-400 disabled:opacity-30 disabled:hover:text-slate-600 transition-colors cursor-pointer"
                >
                  <MinusCircle size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Existing Images (Edit mode only) */}
        {isEditMode && existingImages.length > 0 && (
          <div className="space-y-2 border-t border-white/[0.04] pt-5">
            <label className="text-[10px] font-mono text-slate-500 uppercase block">Existing Catalog Images</label>
            <div className="grid grid-cols-5 gap-4">
              {existingImages.map((img, index) => (
                <div key={index} className="aspect-[4/3] bg-brand-steel border border-white/10 rounded-sm overflow-hidden relative">
                  <img
                    src={getImageUrl(img)}
                    alt="existing preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeExistingImage(index)}
                    className="absolute top-1 right-1 p-0.5 bg-black/60 hover:bg-black/90 text-white rounded-full cursor-pointer"
                  >
                    <X size={10} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Media uploads */}
        <div className="space-y-3 border-t border-white/[0.04] pt-5">
          <label className="text-[10px] font-mono text-slate-500 uppercase block">Upload New Images (Max 10)</label>

          <div className="border border-dashed border-white/10 hover:border-brand-accent/20 rounded-sm bg-[#0a0d18]/45 transition-colors p-6 text-center relative">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileSelect}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="flex flex-col items-center justify-center space-y-2">
              <Upload size={20} className="text-slate-400" />
              <p className="text-xs text-slate-300">Drag & drop files here, or click to browse</p>
              <p className="text-[9px] text-slate-500 font-mono">PNG, JPG, JPEG, WEBP allowed</p>
            </div>
          </div>

          {uploadError && <p className="text-xs text-red-400 font-mono">{uploadError}</p>}

          {filePreviews.length > 0 && (
            <div className="grid grid-cols-5 gap-4 mt-4">
              {filePreviews.map((preview, index) => (
                <div key={index} className="aspect-[4/3] bg-brand-steel border border-white/10 rounded-sm overflow-hidden relative">
                  <img src={preview} alt="preview" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => removeSelectedFile(index)}
                    className="absolute top-1 right-1 p-0.5 bg-black/60 hover:bg-black/90 text-white rounded-full cursor-pointer"
                  >
                    <X size={10} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-3 border-t border-white/[0.04] pt-5">
          <label className="text-[10px] font-mono text-slate-500 uppercase block">Optional PDF Document</label>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border border-dashed border-white/10 rounded-sm bg-[#0a0d18]/45 p-4 transition-colors">
              <input
                type="file"
                accept="application/pdf"
                onChange={handlePdfSelect}
                className="w-full text-xs text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:bg-brand-accent file:text-white cursor-pointer"
              />
              {selectedPdf && (
                <div className="mt-3 flex items-center justify-between gap-3 text-xs text-slate-300">
                  <span>Selected PDF: <span className="text-brand-accent">{selectedPdf.name}</span></span>
                  <button
                    type="button"
                    onClick={clearSelectedPdf}
                    className="text-brand-accent hover:text-white text-[10px] uppercase tracking-widest"
                  >
                    Clear
                  </button>
                </div>
              )}
            </div>

            <div className="border border-dashed border-white/10 rounded-sm bg-[#0a0d18]/45 p-4 transition-colors">
              <div className="flex items-center justify-between gap-3 text-xs text-slate-300">
                <div>
                  <div className="font-semibold text-slate-100 text-[11px] mb-1">Current PDF</div>
                  {isEditMode && existingPdf ? (
                    <p>
                      <span className="text-brand-accent">{existingPdf.filename || "Uploaded PDF"}</span>
                    </p>
                  ) : (
                    <p className="text-slate-500">No PDF uploaded yet.</p>
                  )}
                </div>
                {isEditMode && existingPdf && (
                  <button
                    type="button"
                    onClick={removeExistingPdfHandler}
                    className="text-red-400 hover:text-white text-[10px] uppercase tracking-widest"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Boolean Toggles & Order */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white/[0.04] pt-5 items-center">
          <label className="flex items-center space-x-2 text-xs text-slate-300 cursor-pointer">
            <input
              type="checkbox"
              checked={form.isActive}
              onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
              className="rounded-xs border border-white/10 bg-[#0a0d18] text-brand-accent focus:ring-0 w-4 h-4 cursor-pointer"
            />
            <span>Show on Website</span>
          </label>

          <div className="space-y-1">
            <label className="text-[8px] font-mono text-slate-500 uppercase block">Catalog Order (Priority)</label>
            <input
              type="number"
              name="order"
              value={form.order}
              onChange={(e) => setForm({ ...form, order: e.target.value === "" ? "" : parseInt(e.target.value, 10) })}
              className="w-full px-3 py-1.5 bg-[#0a0d18] border border-white/5 focus:border-brand-accent/30 rounded-sm text-xs text-white placeholder-slate-700 focus:outline-none"
            />
          </div>
        </div>

        {/* Footer actions */}
        <div className="border-t border-white/[0.04] pt-5 flex items-center justify-end space-x-3">
          <Link
            to="/products"
            className="px-6 py-2.5 bg-transparent hover:bg-white/5 border border-white/5 rounded-sm text-xs font-bold text-slate-400 hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="flex items-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-brand-accent to-blue-600 hover:brightness-110 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-200 shadow-md shadow-brand-accent/10 cursor-pointer"
          >
            {submitting ? (
              <>
                <Loader2 size={12} className="animate-spin" />
                <span>Saving...</span>
              </>
            ) : (
              <>
                <Save size={12} />
                <span>Save Equipment</span>
              </>
            )}
          </button>
        </div>

      </form >
    </div >
  );
};

export default AddProduct;
