import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useOutletContext } from "react-router-dom";
import { leadsApi, analyticsApi } from "../api/api";
import { useToast } from "../context/ToastContext";
import {
  FileText,
  Search,
  Filter,
  Trash2,
  X,
  Eye,
  Mail,
  Phone,
  MessageSquare,
  Building,
  ArrowUpDown
} from "lucide-react";

const Quotes = () => {
  const { showToast } = useToast();

  // Lifted States & Methods from AppLayout Outlet Context
  const {
    inquiries, setInquiries,
    inquiriesLoading: loading, setInquiriesLoading: setLoading,
    inquiriesError: error, setInquiriesError: setError,
    whatsappClickCount, setWhatsappClickCount,
    fetchInquiries, fetchWhatsAppClicks
  } = useOutletContext();

  // Search & Filter States
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // Sorting
  const [sortOrder, setSortOrder] = useState("desc"); // desc = newest first

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
    "Custom Equipment",
    "Other"
  ];

  useEffect(() => {
    // Revalidate silently in the background on mount
    fetchInquiries(false);
  }, []);

  const triggerDelete = (id) => {
    setDeleteId(id);
  };

  const confirmDelete = async () => {
    if (!deleteId) return;

    try {
      await leadsApi.deleteLead(deleteId);
      showToast("Quotation request deleted successfully.", "success");
      setInquiries(inquiries.filter((item) => item._id !== deleteId));
      if (selectedInquiry?._id === deleteId) {
        setIsDetailsOpen(false);
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to delete request.", "error");
    } finally {
      setDeleteId(null);
    }
  };

  const handleOpenDetails = (inquiry) => {
    setSelectedInquiry(inquiry);
    setIsDetailsOpen(true);
  };

  // Filter & Search Logic
  const filteredInquiries = inquiries
    .filter((item) => {
      const matchSearch =
        item.name?.toLowerCase().includes(search.toLowerCase()) ||
        item.email?.toLowerCase().includes(search.toLowerCase()) ||
        item.company?.toLowerCase().includes(search.toLowerCase()) ||
        item.phone?.includes(search);
      const matchCategory = categoryFilter === "" || item.productInterest === categoryFilter;
      return matchSearch && matchCategory;
    })
    .sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="p-6 space-y-6">
      {/* Title section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/[0.04] pb-5">
        <div>
          <h1 className="heading-font text-2xl font-bold text-white uppercase tracking-wider">
            Client Quotation Requests
          </h1>
          <p className="text-xs text-slate-500 font-mono mt-1">
            Total {filteredInquiries.length} quotation requests received from public website forms
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-4">
          {/* WhatsApp click analytics stat pill */}
          <div className="flex items-center space-x-3 bg-emerald-950/20 border border-emerald-500/20 px-4 py-2 rounded-sm shadow-md shadow-emerald-500/[0.02]">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <div>
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">WhatsApp Clicks</span>
              <p className="text-base font-bold text-emerald-400 leading-none mt-0.5">{whatsappClickCount}</p>
            </div>
          </div>

          <button
            onClick={() => setSortOrder(sortOrder === "desc" ? "asc" : "desc")}
            className="flex items-center space-x-1.5 px-3 py-2.5 bg-[#0a0d18] border border-white/5 hover:border-brand-accent/20 rounded-sm text-xs text-slate-300 font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <ArrowUpDown size={12} className="text-brand-accent" />
            <span>Sort: {sortOrder === "desc" ? "Newest" : "Oldest"}</span>
          </button>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div className="relative">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search by client name, email, company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#0a0d18] border border-white/5 focus:border-brand-accent/30 rounded-sm text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
          />
        </div>

        {/* Category Filter */}
        <div className="relative">
          <Filter size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#0a0d18] border border-white/5 focus:border-brand-accent/30 rounded-sm text-xs text-slate-400 focus:outline-none transition-colors appearance-none cursor-pointer uppercase font-bold tracking-wider"
          >
            <option value="">All Product Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Refresh button */}
        <button
          onClick={fetchInquiries}
          className="w-full md:w-auto px-4 py-2.5 bg-brand-charcoal border border-white/5 hover:border-brand-accent/20 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-200 cursor-pointer"
        >
          Refresh Data
        </button>
      </div>

      {/* Main Table */}
      <div className="glass-panel rounded-sm shadow-xl overflow-hidden border border-white/[0.04]">
        {loading ? (
          <div className="py-20 text-center flex flex-col justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-brand-accent mb-4"></div>
            <p className="text-xs text-slate-500 font-mono">Fetching client quotes database...</p>
          </div>
        ) : error ? (
          <div className="py-20 text-center text-red-400">
            <p className="text-xs font-mono">{error}</p>
          </div>
        ) : filteredInquiries.length === 0 ? (
          <div className="py-20 text-center text-slate-500">
            <p className="text-xs font-mono">No quotation requests found matching the filter criteria.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-400">
              <thead>
                <tr className="border-b border-white/[0.04] text-slate-500 font-mono text-[9px] uppercase tracking-wider bg-white/[0.01]">
                  <th className="py-4 px-6">Client Info</th>
                  <th className="py-4 px-6">Company / Designation</th>
                  <th className="py-4 px-6">Required Equipment</th>
                  <th className="py-4 px-6">Specs Preference</th>
                  <th className="py-4 px-6">Date Received</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.02]">
                {filteredInquiries.map((inquiry) => (
                  <tr key={inquiry._id} className="hover:bg-white/[0.01] transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-bold text-white uppercase">{inquiry.name}</div>
                      <div className="text-[10px] text-slate-500 font-mono mt-0.5 space-y-0.5">
                        <div className="flex items-center gap-1.5"><Mail size={10} className="text-brand-accent/50" /> {inquiry.email}</div>
                        <div className="flex items-center gap-1.5"><Phone size={10} className="text-brand-accent/50" /> {inquiry.phone}</div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      {inquiry.company ? (
                        <>
                          <div className="text-slate-300 font-semibold uppercase">{inquiry.company}</div>
                          {inquiry.designation && <div className="text-[10px] text-slate-500">{inquiry.designation}</div>}
                        </>
                      ) : (
                        <span className="text-slate-600 italic">Individual Client</span>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-block whitespace-nowrap bg-brand-accent/5 border border-brand-accent/25 text-brand-accent text-[9px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-wide">
                        {inquiry.productInterest}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-[10px] text-slate-300 font-medium space-y-0.5">
                        <div>Capacity: <span className="text-white font-semibold font-mono">{inquiry.capacityRequired || "Custom Spec"}</span></div>
                        <div>Material: <span className="text-white font-semibold font-mono">{inquiry.material || "Custom Spec"}</span></div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-500 font-mono text-[10px]">
                      {new Date(inquiry.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                      })}
                    </td>
                    <td className="py-4 px-6 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end space-x-2">
                        <button
                          onClick={() => handleOpenDetails(inquiry)}
                          className="p-1.5 text-slate-400 hover:text-brand-accent transition-colors border border-white/5 hover:border-brand-accent/20 bg-[#0a0d18] rounded-sm cursor-pointer inline-flex items-center justify-center"
                          title="View Full Inquiry"
                        >
                          <Eye size={12} />
                        </button>
                        <button
                          onClick={() => triggerDelete(inquiry._id)}
                          className="p-1.5 text-slate-500 hover:text-red-400 transition-colors border border-white/5 hover:border-red-500/20 bg-[#0a0d18] rounded-sm cursor-pointer inline-flex items-center justify-center"
                          title="Delete Request"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* View Details Side-Drawer/Modal */}
      {isDetailsOpen && selectedInquiry && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Overlay */}
          <div
            onClick={() => setIsDetailsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-md bg-brand-charcoal border-l border-white/5 h-full flex flex-col justify-between shadow-2xl z-10 p-6 overflow-y-auto">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/[0.04] pb-4">
                <div className="flex items-center space-x-2 text-brand-accent">
                  <FileText size={18} />
                  <span className="heading-font text-xs font-bold uppercase tracking-wider">Inquiry details</span>
                </div>
                <button
                  onClick={() => setIsDetailsOpen(false)}
                  className="p-1 hover:bg-white/5 text-slate-400 hover:text-white rounded-full transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Client Info Block */}
              <div className="space-y-3 p-4 bg-[#0a0d18]/60 border border-white/[0.03] rounded-sm">
                <div className="text-[10px] font-mono text-slate-500 uppercase">Client Profile</div>
                <h3 className="heading-font text-white font-bold text-lg uppercase tracking-wide">
                  {selectedInquiry.name}
                </h3>
                {selectedInquiry.company && (
                  <div className="flex items-start gap-2 text-xs text-slate-300">
                    <Building size={14} className="text-slate-500 mt-0.5" />
                    <div>
                      <span className="font-semibold uppercase block">{selectedInquiry.company}</span>
                      {selectedInquiry.designation && <span className="text-[10px] text-slate-500">{selectedInquiry.designation}</span>}
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <Mail size={12} className="text-slate-500" />
                  <span>{selectedInquiry.email}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <Phone size={12} className="text-slate-500" />
                  <span>{selectedInquiry.phone}</span>
                </div>
                {selectedInquiry.whatsapp && (
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <MessageSquare size={12} className="text-emerald-500" />
                    <span className="text-emerald-400">WhatsApp: {selectedInquiry.whatsapp}</span>
                  </div>
                )}
              </div>

              {/* Requirement details */}
              <div className="space-y-4">
                <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
                  Equipment specifications
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-[#0a0d18]/40 border border-white/[0.02] rounded-sm">
                    <span className="text-[8px] font-mono text-slate-500 uppercase block mb-1">Equipment Category</span>
                    <span className="text-xs text-white font-bold uppercase">{selectedInquiry.productInterest}</span>
                  </div>
                  <div className="p-3 bg-[#0a0d18]/40 border border-white/[0.02] rounded-sm">
                    <span className="text-[8px] font-mono text-slate-500 uppercase block mb-1">Required Capacity</span>
                    <span className="text-xs text-white font-bold font-mono">{selectedInquiry.capacityRequired || "Custom Spec"}</span>
                  </div>
                  <div className="p-3 bg-[#0a0d18]/40 border border-white/[0.02] rounded-sm">
                    <span className="text-[8px] font-mono text-slate-500 uppercase block mb-1">Material Preference</span>
                    <span className="text-xs text-white font-bold font-mono">{selectedInquiry.material || "Custom Spec"}</span>
                  </div>
                  <div className="p-3 bg-[#0a0d18]/40 border border-white/[0.02] rounded-sm">
                    <span className="text-[8px] font-mono text-slate-500 uppercase block mb-1">Submission Date</span>
                    <span className="text-xs text-white font-mono">{new Date(selectedInquiry.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              {/* Client message / notes */}
              <div className="space-y-2">
                <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
                  Client Message / Specifications Note
                </h4>
                <div className="p-4 bg-[#0a0d18]/40 border border-white/[0.02] rounded-sm min-h-[100px] text-xs text-slate-300 leading-relaxed font-light whitespace-pre-line">
                  {selectedInquiry.message || "No custom message or special notes provided by client."}
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="border-t border-white/[0.04] pt-4 mt-8">
              <a
                href={`https://wa.me/${selectedInquiry.phone.replace(/[^0-9]/g, "")}?text=Hello%20${encodeURIComponent(selectedInquiry.name)},%20this%20is%20GRF%20Dynamic%20Engineering%20regarding%20your%20inquiry%20for%20${encodeURIComponent(selectedInquiry.productInterest)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] uppercase tracking-wider rounded-sm transition-all text-center cursor-pointer"
              >
                <MessageSquare size={12} />
                <span>WhatsApp Client</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteId && createPortal(
        (() => {
          const quoteToDelete = inquiries.find(q => q._id === deleteId);
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
                      Security Action Required // Delete Inquiry
                    </span>
                    <h3 className="heading-font text-white text-md font-bold uppercase tracking-wider">
                      Confirm Deletion
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Are you sure you want to delete this quotation request? This action cannot be undone.
                    </p>
                    
                    {quoteToDelete && (
                      <div className="mt-2 text-[10px] font-mono text-slate-500 bg-[#0a0d18] border border-white/5 p-2 rounded-xs">
                        <div className="flex justify-between">
                          <span>CLIENT:</span>
                          <span className="text-slate-300 font-bold">{quoteToDelete.name}</span>
                        </div>
                        {quoteToDelete.company && (
                          <div className="flex justify-between mt-1">
                            <span>COMPANY:</span>
                            <span className="text-slate-300 font-bold">{quoteToDelete.company}</span>
                          </div>
                        )}
                        <div className="flex justify-between mt-1">
                          <span>INTEREST:</span>
                          <span className="text-slate-300 font-bold uppercase">{quoteToDelete.productInterest}</span>
                        </div>
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
                    onClick={confirmDelete}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-sm text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-red-600/10 cursor-pointer"
                  >
                    Delete Request
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

export default Quotes;
