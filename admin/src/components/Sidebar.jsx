import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { 
  FileText, 
  Package, 
  PlusCircle,
  User, 
  LogOut,
  Menu,
  X,
  HelpCircle
} from "lucide-react";
import { useState } from "react";

const Sidebar = ({ hasNewQuotes }) => {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navItems = [
    { name: "Product List", path: "/products", icon: Package, roles: ["super_admin", "sales", "manager"] },
    { name: "Add Product", path: "/products/add", icon: PlusCircle, roles: ["super_admin", "sales", "manager"] },
    { name: "Quotation List", path: "/quotes", icon: FileText, roles: ["super_admin", "sales", "manager"] },
    { name: "FAQ Manager", path: "/faqs", icon: HelpCircle, roles: ["super_admin", "sales", "manager"] },
  ];

  const filteredNavItems = navItems.filter(
    (item) => !item.roles || item.roles.includes(admin?.role)
  );

  const roleLabel = {
    super_admin: "Admin",
    manager: "Admin",
    sales: "Admin",
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-brand-steel rounded-sm border border-white/10 text-white cursor-pointer"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar Overlay for Mobile */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 z-30 bg-black/60 backdrop-blur-xs"
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-64 bg-brand-charcoal border-r border-white/[0.04]
        flex flex-col justify-between transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        {/* Top: Logo & Title */}
        <div className="p-6 border-b border-white/[0.04] relative">
          <div className="absolute top-2 left-2 border-t border-l border-brand-accent/30 w-3 h-3"></div>
          <div className="absolute top-2 right-2 border-t border-r border-brand-accent/30 w-3 h-3"></div>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-sm bg-brand-accent flex items-center justify-center font-bold text-black heading-font text-lg shadow-md shadow-brand-accent/20">
              G
            </div>
            <div>
              <h1 className="heading-font text-white font-bold text-sm tracking-wider leading-none">
                GRF DYNAMIC
              </h1>
              <p className="text-[9px] font-mono text-brand-accent tracking-[0.15em] mt-1">
                ENGINEERING SYS
              </p>
            </div>
          </div>
        </div>

        {/* Middle: Navigation Links */}
        <nav className="flex-1 py-6 overflow-y-auto space-y-1 px-3">
          {filteredNavItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `
                flex items-center px-4 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-200 border-l-2 cursor-pointer
                ${isActive 
                  ? "bg-brand-accent/10 border-brand-accent text-brand-accent" 
                  : "border-transparent text-slate-400 hover:bg-white/[0.02] hover:text-white"
                }
              `}
            >
              <div className="flex items-center space-x-3 flex-1">
                <item.icon size={16} />
                <span>{item.name}</span>
              </div>
              {item.path === "/quotes" && hasNewQuotes && (
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse mr-1 shadow-md shadow-emerald-500/50" />
              )}
            </NavLink>
          ))}
        </nav>

        {/* Bottom: User Info & Logout */}
        <div className="p-4 border-t border-white/[0.04] bg-white/[0.01]">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-sm bg-brand-steel flex items-center justify-center border border-white/5">
              <User size={18} className="text-brand-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-white truncate uppercase tracking-wide">
                {admin?.name}
              </p>
              <span className="inline-block mt-0.5 bg-brand-accent/10 text-brand-accent text-[9px] font-bold px-1.5 py-0.5 uppercase rounded-sm border border-brand-accent/20">
                {roleLabel[admin?.role] || admin?.role}
              </span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-sm border border-white/10 hover:border-red-500/30 bg-brand-charcoal text-slate-400 hover:text-red-400 text-xs font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer"
          >
            <LogOut size={14} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
