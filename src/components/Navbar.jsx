import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Integrative Medicine', path: '/integrative-medicine' },
  { name: 'Healthspan', path: '/healthspan-optimization' },
  { name: 'Therapies', path: '/therapies' },
  { name: 'Programs', path: '/programs' },
  { name: 'For Doctors', path: '/for-doctors' },
  { name: 'About', path: '/about' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-none"
      >
        {/* Top Bar - Administrative & Mission */}
        <div className="bg-brand-navy text-white/40 py-1.5 px-8 hidden sm:block border-b border-white/5 pointer-events-auto">
          <div className="max-w-[1440px] mx-auto flex justify-between items-center">
            <span className="text-[8px] font-bold tracking-[0.4em] uppercase">Institute of Integrative Medicine & Healthspan Optimisation</span>
            <div className="flex gap-6 items-center">
              <span className="text-[8px] font-bold tracking-[0.4em] uppercase">Hyderabad</span>
              <span className="h-3 w-[1px] bg-white/10"></span>
              <span className="text-[8px] font-bold tracking-[0.4em] uppercase">2025 PROTOCOL</span>
            </div>
          </div>
        </div>

        {/* Main Nav Bar */}
        <div className={`transition-all duration-700 ${scrolled ? 'pt-2' : 'pt-4'}`}>
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
            <div 
              className={`flex items-center justify-between transition-all duration-700 rounded-full px-8 py-4 ${
                scrolled 
                  ? 'bg-white/95 backdrop-blur-3xl shadow-[0_20px_50px_rgba(11,110,110,0.12)] border border-brand-teal/10' 
                  : 'bg-white/60 backdrop-blur-xl border border-white/40 shadow-sm'
              }`}
            >
              {/* Logo - Left */}
              <Link to="/" className="flex items-center gap-5 group flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="ALMACURA"
                  className="h-9 w-9 object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="flex flex-col border-l border-brand-navy/10 pl-5">
                  <span className="font-cormorant text-[20px] font-bold tracking-[0.3em] text-brand-navy leading-none">
                    ALMACURA
                  </span>
                  <span className="font-dm text-[7px] tracking-[0.5em] text-brand-teal uppercase mt-1.5 font-bold opacity-60">
                    Clinic & Institute
                  </span>
                </div>
              </Link>

              {/* Nav Links - Right-aligned */}
              <div className="hidden lg:flex items-center gap-12">
                <nav className="flex items-center gap-9">
                  <Link 
                    to="/integrative-medicine" 
                    className={`font-dm text-[11px] font-bold tracking-[0.2em] uppercase transition-all flex items-center h-10 ${
                      location.pathname === '/integrative-medicine' ? 'text-brand-teal' : 'text-brand-navy/60 hover:text-brand-teal'
                    }`}
                  >
                    Integrative Medicine
                  </Link>
                  <Link 
                    to="/healthspan-optimization" 
                    className={`font-dm text-[11px] font-bold tracking-[0.2em] uppercase transition-all flex items-center h-10 ${
                      location.pathname === '/healthspan-optimization' ? 'text-brand-teal' : 'text-brand-navy/60 hover:text-brand-teal'
                    }`}
                  >
                    Healthspan
                  </Link>
                  <Link 
                    to="/therapies" 
                    className={`font-dm text-[11px] font-bold tracking-[0.2em] uppercase transition-all flex items-center h-10 ${
                      location.pathname === '/therapies' ? 'text-brand-teal' : 'text-brand-navy/60 hover:text-brand-teal'
                    }`}
                  >
                    Therapies
                  </Link>
                  <Link 
                    to="/for-doctors" 
                    className={`font-dm text-[11px] font-bold tracking-[0.2em] uppercase transition-all flex items-center h-10 ${
                      location.pathname === '/for-doctors' ? 'text-brand-teal' : 'text-brand-navy/60 hover:text-brand-teal'
                    }`}
                  >
                    For Doctors
                  </Link>
                </nav>
                
                <Link to="/contact" className="flex items-center h-10">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-brand-navy text-white px-8 py-3 rounded-full font-dm font-bold text-[11px] tracking-[0.2em] uppercase shadow-lg shadow-brand-navy/10 hover:shadow-brand-teal/20 hover:bg-brand-teal transition-all h-full flex items-center justify-center min-w-[140px]"
                  >
                    Book Now
                  </motion.button>
                </Link>
              </div>

              {/* Mobile Menu Button - Also Center Aligned */}
              <div className="lg:hidden flex items-center h-10">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-3 rounded-full hover:bg-brand-teal/5 text-brand-navy transition-colors pointer-events-auto"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            {/* Ultra-High-Fidelity Backdrop */}
            <div className="absolute inset-0 bg-white/98 backdrop-blur-[40px]"></div>
            
            <div className="relative h-full flex flex-col justify-between px-8 py-14 z-10 overflow-hidden">
              {/* Header inside menu */}
              <div className="flex flex-col items-center">
                <span className="font-dm text-[9px] uppercase tracking-[0.4em] text-brand-teal font-bold mb-3">Institute Menu</span>
                <div className="w-10 h-[1.5px] bg-brand-teal/20"></div>
              </div>

              {/* Main Links Container - Scrollable if needed */}
              <div className="w-full flex flex-col items-center gap-1.5 overflow-y-auto pt-4 pb-8 no-scrollbar">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: shouldReduceMotion ? 0 : index * 0.04,
                        duration: 0.3
                      }}
                      className="w-full text-center"
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`group relative inline-block py-2 font-cormorant transition-all duration-300 ${
                          isActive
                            ? 'text-brand-teal font-bold italic'
                            : 'text-brand-navy hover:text-brand-teal'
                        }`}
                        style={{ fontSize: '26px' }}
                      >
                        {link.name}
                        {isActive && (
                          <motion.div 
                            layoutId="activeTabMobile"
                            className="absolute -bottom-1 left-2 right-2 h-[1px] bg-brand-teal"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer CTA & Contact Bar */}
              <div className="flex flex-col items-center gap-6 mt-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="w-full"
                >
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full">
                    <motion.button 
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-4 bg-brand-navy text-white font-dm font-bold uppercase tracking-[0.2em] text-[10px] rounded-full shadow-xl shadow-brand-navy/10 transition-all"
                    >
                      Book Prime Consultation
                    </motion.button>
                  </Link>
                  <div className="flex flex-col items-center gap-2 mt-6 opacity-40 font-dm text-[8px] uppercase tracking-widest font-bold text-brand-navy">
                    <span>Direct: +91 91234 56789</span>
                    <span>@Almacura.Hyd</span>
                  </div>
                </motion.div>

                {/* Decorative Brand Mark - Reduced scale */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.02 }}
                  transition={{ delay: 0.6 }}
                  className="font-cormorant text-5xl font-bold uppercase tracking-[0.4em] text-brand-navy leading-none pointer-events-none select-none"
                >
                  ALMA
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* REFINED "Back to Hub" Button - Top Left position for better UX */}
      {location.pathname !== '/' && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed top-28 left-6 sm:left-12 z-[50]"
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-white/70 backdrop-blur-xl border border-brand-teal/10 pl-3 pr-6 py-2.5 rounded-full shadow-xl shadow-brand-navy/5 hover:border-brand-teal/30 transition-all group pointer-events-auto"
            >
              <div className="w-7 h-7 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </div>
              <span className="font-dm font-bold text-[9px] uppercase tracking-[0.2em] text-brand-navy opacity-80 group-hover:opacity-100 transition-opacity">Back to Hub</span>
            </motion.button>
          </Link>
        </motion.div>
      )}
    </>
  );
}
