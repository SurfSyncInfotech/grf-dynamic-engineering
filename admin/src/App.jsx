import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ToastProvider } from "./context/ToastContext";
import { useToast } from "./context/ToastContext";
import { leadsApi, analyticsApi } from "./api/api";
import ProtectedRoute from "./components/ProtectedRoute";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

// Pages
import Login from "./pages/Login";
import Quotes from "./pages/Quotes";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import FAQs from "./pages/FAQs";

// Layout for authorized sections
const AppLayout = () => {
  const location = useLocation();
  const { showToast } = useToast();

  // Products global state
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);
  const [productsError, setProductsError] = useState(null);

  // Inquiries (Quotes) global state
  const [inquiries, setInquiries] = useState([]);
  const [inquiriesLoading, setInquiriesLoading] = useState(true);
  const [inquiriesError, setInquiriesError] = useState(null);
  const [whatsappClickCount, setWhatsappClickCount] = useState(0);

  // FAQs global state
  const [faqs, setFaqs] = useState([]);
  const [faqsLoading, setFaqsLoading] = useState(true);
  const [faqsError, setFaqsError] = useState(null);

  // Tracking last seen quote time
  const [lastSeenQuoteTime, setLastSeenQuoteTime] = useState(() => {
    return Number(localStorage.getItem("admin_last_seen_quote_time")) || 0;
  });

  const fetchWhatsAppClicks = async () => {
    try {
      const data = await analyticsApi.getWhatsAppClicks();
      if (data && data.success) {
        setWhatsappClickCount(data.count);
      }
    } catch (err) {
      console.error("Failed to fetch WhatsApp click counts", err);
    }
  };

  const fetchInquiries = async (showLoading = true) => {
    try {
      if (showLoading) {
        setInquiriesLoading(true);
        setInquiriesError(null);
      }
      const data = await leadsApi.getLeads();
      const list = data.leads || data || [];
      setInquiries(list);
      await fetchWhatsAppClicks();
    } catch (err) {
      console.error(err);
      if (showLoading) {
        setInquiriesError("Failed to fetch quotation request list.");
        showToast("Error loading quotation requests.", "error");
      }
    } finally {
      if (showLoading) {
        setInquiriesLoading(false);
      }
    }
  };

  // Poll for inquiries every 10 seconds (10000ms)
  useEffect(() => {
    fetchInquiries(true);

    const interval = setInterval(() => {
      fetchInquiries(false);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Update last seen quote time when viewing the /quotes page
  useEffect(() => {
    if (location.pathname === "/quotes" && inquiries.length > 0) {
      const maxTime = inquiries.reduce((max, item) => {
        const itemTime = new Date(item.createdAt).getTime();
        return itemTime > max ? itemTime : max;
      }, 0);

      if (maxTime > lastSeenQuoteTime) {
        setLastSeenQuoteTime(maxTime);
        localStorage.setItem("admin_last_seen_quote_time", String(maxTime));
      }
    }
  }, [location.pathname, inquiries, lastSeenQuoteTime]);

  // If first time loading or no time set, initialize lastSeenQuoteTime with the current max time to start clean
  useEffect(() => {
    if (inquiries.length > 0 && lastSeenQuoteTime === 0) {
      const maxTime = inquiries.reduce((max, item) => {
        const itemTime = new Date(item.createdAt).getTime();
        return itemTime > max ? itemTime : max;
      }, 0);
      setLastSeenQuoteTime(maxTime);
      localStorage.setItem("admin_last_seen_quote_time", String(maxTime));
    }
  }, [inquiries, lastSeenQuoteTime]);

  // Determine if there are new unread quotes
  const hasNewQuotes = inquiries.some((inquiry) => {
    const inquiryTime = new Date(inquiry.createdAt).getTime();
    return inquiryTime > lastSeenQuoteTime;
  });

  // Map route paths to header titles
  const getSectionTitle = (path) => {
    if (path.startsWith("/products/edit")) {
      return "Edit Equipment Spec";
    }
    switch (path) {
      case "/products":
        return "Equipment Catalog";
      case "/products/add":
        return "Add New Equipment";
      case "/quotes":
        return "Quotation Requests";
      case "/faqs":
        return "FAQ & Chatbot Manager";
      default:
        return "Control Panel";
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-brand-obsidian text-slate-100 selection:bg-brand-accent/20">
      {/* Sidebar Nav */}
      <Sidebar hasNewQuotes={hasNewQuotes} />

      {/* Main content viewport */}
      <div className="flex-grow flex flex-col min-w-0">
        {/* Header bar */}
        <Navbar sectionTitle={getSectionTitle(location.pathname)} />

        {/* Scrollable workspace */}
        <main className="flex-1 overflow-y-auto bg-brand-obsidian relative">
          <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>
          <Outlet context={{
            products, setProducts, productsLoading, setProductsLoading, productsError, setProductsError,
            inquiries, setInquiries, inquiriesLoading, setInquiriesLoading, inquiriesError, setInquiriesError, whatsappClickCount, setWhatsappClickCount,
            fetchInquiries, fetchWhatsAppClicks,
            faqs, setFaqs, faqsLoading, setFaqsLoading, faqsError, setFaqsError
          }} />
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <Router>
          <Routes>
            {/* Public Login Endpoint */}
            <Route path="/login" element={<Login />} />

            {/* Secure Protected Workspace Panel */}
            <Route element={<ProtectedRoute allowedRoles={["super_admin", "sales", "manager"]} />}>
              <Route element={<AppLayout />}>
                <Route path="/" element={<Navigate to="/products" replace />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/add" element={<AddProduct />} />
                <Route path="/products/edit/:id" element={<AddProduct />} />
                <Route path="/quotes" element={<Quotes />} />
                <Route path="/faqs" element={<FAQs />} />
              </Route>
            </Route>

            {/* Wildcard Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
