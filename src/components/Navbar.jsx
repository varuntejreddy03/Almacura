import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Diagnostics', path: '/diagnostics' },
  { name: 'Longevity', path: '/longevity' },
  { name: 'Therapies', path: '/therapies' },
  { name: 'Nutrition', path: '/nutrition' },
  { name: 'Founder', path: '/founder' },
  { name: 'FAQs', path: '/faq' }
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-brand-black/95 backdrop-blur-xl' 
            : 'bg-brand-black/90 backdrop-blur-md'
        }`}
      >
        {/* Teal accent bar at very top */}
        <div className="h-1 bg-brand-teal w-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Left */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/Almacura_Logo_Icon_80px.png"
                alt="ALMACURA"
                className="h-10 w-10 object-contain flex-shrink-0"
                width="40"
                height="40"
                loading="eager"
              />
              <span className="font-cormorant text-[18px] font-semibold tracking-[0.18em] uppercase text-white">
                ALMACURA
              </span>
            </Link>

            {/* Nav Links + CTA - Right */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-dm font-medium text-[13px] tracking-[0.14em] uppercase transition-colors duration-150 ${
                    location.pathname === link.path
                      ? 'text-white'
                      : 'text-[#7A8FA0] hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Solid Teal CTA Button */}
              <Link to="/contact">
                <button className="px-6 py-2.5 bg-brand-teal text-white font-dm font-semibold text-[11px] tracking-[0.2em] uppercase hover:bg-brand-tealLight transition-all duration-200">
                  Book Consultation
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-brand-white p-2 -mr-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
            className="fixed inset-0 z-40 bg-brand-black lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center min-h-screen px-6 py-24">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: shouldReduceMotion ? 0 : index * 0.08 }}
                  className="w-full text-center py-4"
                >
                  <Link
                    to={link.path}
                    className="font-cormorant text-4xl text-brand-white hover:text-brand-teal transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : navLinks.length * 0.08 }}
                className="w-full max-w-xs mt-8"
              >
                <Link to="/contact">
                  <button className="w-full px-8 py-4 bg-brand-teal text-white font-dm font-semibold uppercase tracking-widest text-sm hover:bg-brand-tealLight transition-all duration-300">
                    Book Consultation
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
