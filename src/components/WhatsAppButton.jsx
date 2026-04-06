import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = '919989033686';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 5000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 12000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end gap-4 pointer-events-none">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="bg-white px-6 py-4 rounded-[25px] shadow-2xl border border-brand-teal/10 pointer-events-auto"
          >
            <div className="font-dm text-[9px] uppercase tracking-[.3em] font-bold text-brand-teal mb-1">Expert Guidance</div>
            <div className="font-cormorant text-base text-brand-navy font-bold italic">Check therapy suitability?</div>
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r border-b border-brand-teal/10 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-[24px] bg-brand-teal flex items-center justify-center text-white shadow-2xl shadow-brand-teal/20 hover:bg-brand-navy hover:shadow-brand-navy/20 transition-all duration-500 pointer-events-auto group relative overflow-hidden"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 to-transparent group-hover:opacity-0 transition-opacity" />
        <MessageCircle size={30} strokeWidth={1.5} />
      </motion.a>
    </div>
  );
}
