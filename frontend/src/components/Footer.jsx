import { Link } from 'react-router-dom';
import logo from '../assets/logo1.jpeg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-obsidian border-t border-white/[0.04] text-slate-400">
      
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Column 1: Company Logo & Pitch */}
          <div className="flex flex-col space-y-5 text-left">
            <Link to="/" onClick={handleScrollToTop} className="flex items-center gap-3 group">
              <img src={logo} alt="GRF Logo" className="h-11 w-auto object-contain transition-transform group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="heading-font text-xl font-extrabold tracking-wider text-white">
                  GRF <span className="text-brand-accent">DYNAMIC</span>
                </span>
                <span className="text-[9px] tracking-[0.25em] text-slate-500 font-semibold uppercase mt-0.5 leading-none">
                  Engineering
                </span>
              </div>
            </Link>
            
            <p className="text-sm leading-relaxed text-slate-500 font-light">
              G R F Dynamic Engineering is a premier industrial manufacturing and custom fabrication company. We engineer high-quality storage tanks, silo systems, reactor vessels, and custom process equipment.
            </p>
            
            <div className="pt-2">
              <span className="inline-block bg-brand-accent/5 border border-brand-accent/20 text-brand-accent text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
                ISO 9001:2015 Certified
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="text-left">
            <h3 className="heading-font text-white text-md font-bold tracking-wider mb-6 relative after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-8 after:h-[2px] after:bg-brand-accent">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/" onClick={handleScrollToTop} className="hover:text-brand-accent hover:translate-x-1 inline-block transition-all duration-300">Home</Link>
              </li>
              <li>
                <Link to="/products" onClick={handleScrollToTop} className="hover:text-brand-accent hover:translate-x-1 inline-block transition-all duration-300">Our Products</Link>
              </li>
              <li>
                <Link to="/about" onClick={handleScrollToTop} className="hover:text-brand-accent hover:translate-x-1 inline-block transition-all duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/why-choose-us" onClick={handleScrollToTop} className="hover:text-brand-accent hover:translate-x-1 inline-block transition-all duration-300">Why Choose Us</Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleScrollToTop} className="hover:text-brand-accent hover:translate-x-1 inline-block transition-all duration-300">Contact & Quote Form</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="lg:col-span-2 text-left">
            <h3 className="heading-font text-white text-md font-bold tracking-wider mb-6 relative after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-8 after:h-[2px] after:bg-brand-accent">
              Registered Office & Coordinates
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              {/* Address details */}
              <div className="flex items-start gap-3.5">
                <div className="bg-white/[0.02] border border-white/5 p-2 rounded-sm text-brand-accent shrink-0 mt-0.5 shadow-md">
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-slate-500 leading-relaxed font-light">
                  Shop No.5, Chaudhary Market, C/O Chaudhary Road Car,<br />
                  Dehradun Road, Opp. Indian Oil Petrol Pump,<br />
                  Near Laxman Puram (Opp. Transport Nagar),<br />
                  Saharanpur - 247001, Uttar Pradesh, India
                </p>
              </div>
              
              {/* Contact numbers */}
              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="bg-white/[0.02] border border-white/5 p-2 rounded-sm text-brand-accent shrink-0 shadow-md">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a href="tel:+919557530193" className="hover:text-white font-medium transition-colors text-slate-300 font-mono">+91 95575 30193</a>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="bg-white/[0.02] border border-white/5 p-2 rounded-sm text-brand-accent shrink-0 shadow-md">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href="mailto:grfdynamicengineering@gmail.com" className="hover:text-white font-medium transition-colors text-slate-300 font-mono break-all">grfdynamicengineering@gmail.com</a>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="bg-white/[0.02] border border-white/5 p-2 rounded-sm text-brand-accent shrink-0 shadow-md">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-slate-500 font-light text-xs sm:text-sm">Mon - Sat: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom copyright section */}
      <div className="bg-[#030407] py-8 border-t border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-600 gap-4">
          <p>&copy; {currentYear} G R F Dynamic Engineering. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <span>Saharanpur, Uttar Pradesh, India</span>
            <span>|</span>
            <span>Precision Engineered &bull; Built to Last</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
