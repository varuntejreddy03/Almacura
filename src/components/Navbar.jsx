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
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(11,110,110,0.1)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
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
              <span className="font-cormorant text-[18px] sm:text-[20px] font-semibold tracking-[0.18em] uppercase text-brand-navy">
                ALMACURA
              </span>
            </Link>

            {/* Nav Links + CTA - Right */}
            <div className="hidden lg:flex items-center" style={{ gap: '36px' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group transition-all duration-200"
                  style={{
                    fontSize: '13px',
                    letterSpacing: '1.2px',
                    color: location.pathname === link.path ? '#0B6E6E' : '#0D2137',
                    fontWeight: 500,
                    textTransform: 'uppercase'
                  }}
                >
                  {link.name}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: location.pathname === link.path ? '100%' : 0 }}
                    whileHover={{ width: '100%' }}
                    className="absolute -bottom-1 left-0 bg-brand-teal"
                    style={{ height: '2px' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              ))}
              
              {/* Enhanced Gradient CTA Button */}
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="font-dm uppercase"
                  style={{
                    borderRadius: '6px',
                    padding: '12px 28px',
                    background: '#0B6E6E',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    fontSize: '13px',
                    boxShadow: '0 4px 15px rgba(11,110,110,0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#095C5C';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(11,110,110,0.45)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#0B6E6E';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(11,110,110,0.3)';
                  }}
                >
                  Book Consultation
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button - Enhanced */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-brand-navy p-3 -mr-2 rounded-sm hover:bg-brand-ice/50 active:bg-brand-ice transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
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
            className="fixed inset-0 z-40 bg-white lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center min-h-screen px-6 py-24">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: shouldReduceMotion ? 0 : index * 0.08 }}
                  className="w-full text-center py-5"
                >
                  <Link
                    to={link.path}
                    className={`font-cormorant text-4xl transition-colors block py-2 ${
                      location.pathname === link.path
                        ? 'text-brand-teal'
                        : 'text-brand-navy hover:text-brand-teal'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : navLinks.length * 0.08 }}
                className="w-full max-w-xs mt-10 px-6"
              >
                <Link to="/contact">
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-8 py-5 bg-gradient-to-r from-brand-teal to-brand-blue text-white font-dm font-semibold uppercase tracking-widest text-base rounded-sm shadow-xl shadow-brand-teal/30 active:shadow-lg transition-all duration-300"
                  >
                    Book Consultation
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
