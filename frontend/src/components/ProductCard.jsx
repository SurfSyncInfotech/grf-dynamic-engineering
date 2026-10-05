import { Link, useNavigate } from 'react-router-dom';

const getImageUrl = (img) => {
  if (!img) return "";
  if (img.url) {
    if (img.url.startsWith("http")) return img.url;
    const baseUrl = (import.meta.env.VITE_API_URL || "https://grf-8fnl.onrender.com/api").replace("/api", "");
    return `${baseUrl}${img.url}`;
  }
  return `data:${img.contentType};base64,${img.data}`;
};

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleGetQuote = () => {
    const params = new URLSearchParams();
    params.set('product', product.category);
    if (product.specs && product.specs['Capacity Range']) {
      params.set('capacity', product.specs['Capacity Range']);
    }
    navigate(`/contact?${params.toString()}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="glass-panel glass-panel-hover rounded-sm overflow-hidden flex flex-col group h-full transition-all duration-500">

      {/* CAD blueprint mockup block - Obsidian style */}
      <div className={`aspect-[4/3] w-full ${product.images && product.images.length > 0 ? 'bg-transparent' : 'bg-[#0a0d18]/80'} flex items-center justify-center p-6 text-center border-b border-white/[0.03] select-none relative overflow-hidden`}>

        {product.images && product.images.length > 0 ? (
          <img
            src={getImageUrl(product.images[0])}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
            style={{ imageRendering: 'auto' }}
          />
        ) : (
          <>
            {/* Technical grids */}
            <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none"></div>
            <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>

            {/* Drafting metrics */}
            <div className="absolute top-2.5 left-2.5 text-[8px] font-mono text-slate-500">X: 198.81 / Y: 72.10</div>
            <div className="absolute bottom-2.5 right-2.5 text-[8px] font-mono text-slate-500">SCALE: 1:20 [METRIC]</div>
            <div className="absolute top-2.5 right-2.5 text-[8px] font-mono text-brand-accent/60 font-semibold">GRF-MODEL_PL-{product._id || product.id}</div>
            <div className="absolute bottom-2.5 left-2.5 text-[8px] font-mono text-slate-500">MATERIAL: SS 316L / MS</div>

            {/* Concentric blueprint guides */}
            <div className="absolute h-32 w-32 rounded-full border border-dashed border-slate-700/50 flex items-center justify-center">
              <div className="h-24 w-24 rounded-full border border-dashed border-brand-accent/15 spin-slow-hover"></div>
            </div>

            {/* Dimension markings */}
            <div className="absolute left-6 right-6 h-px border-t border-dashed border-slate-700/50 flex justify-between px-2 text-[7px] font-mono text-slate-500">
              <span>| MIN CAPACITY</span>
              <span>MAX PRESSURE |</span>
            </div>

            {/* Floating specification tag */}
            <div className="z-10 px-4 bg-[#0b0d16]/95 p-4 border border-white/5 rounded-sm shadow-lg relative max-w-[200px]">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-brand-accent"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-brand-accent"></div>

              <p className="heading-font text-white font-bold text-xs sm:text-sm leading-snug tracking-wide uppercase transition-colors duration-300">
                {product.name}
              </p>
              <span className="text-[8px] tracking-widest text-brand-accent font-bold mt-1 block font-mono">
                CAD // PL-{product._id || product.id}
              </span>
            </div>
          </>
        )}
      </div>

      {/* Information details */}
      <div className="p-6 flex-1 flex flex-col justify-between text-left">
        <div>
          {/* Category tag */}
          <div className="mb-4">
            <span className="inline-block whitespace-nowrap bg-brand-accent/5 border border-brand-accent/20 text-brand-accent text-[9px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-widest">
              {product.category}
            </span>
          </div>

          <h3 className="heading-font text-white text-lg font-bold mb-3 tracking-wide group-hover:text-brand-accent transition-colors duration-300">
            {product.name}
          </h3>

          <p className="text-slate-400 text-sm line-clamp-3 mb-6 leading-relaxed font-light">
            {product.description}
          </p>
        </div>

        {/* Button Actions */}
        <div className="grid grid-cols-2 gap-4 pt-5 border-t border-white/[0.04]">
          <Link
            to={`/products/${product._id || product.id}`}
            className="w-full text-center border border-white/10 hover:border-white text-slate-300 hover:text-white py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white/[0.02] active:scale-95"
          >
            Details
          </Link>
          <button
            onClick={handleGetQuote}
            className="w-full bg-gradient-to-r from-brand-accent to-blue-600 hover:brightness-115 text-white py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md shadow-brand-accent/10 active:scale-95 cursor-pointer"
          >
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}
