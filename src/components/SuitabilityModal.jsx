import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MessageSquare, Phone } from 'lucide-react';

export default function SuitabilityModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-navy/60 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-brand-ice text-brand-navy/40 hover:text-brand-navy transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                  <CheckCircle2 size={24} />
                </div>
                <h2 className="font-cormorant text-3xl text-brand-navy">Check Suitability</h2>
              </div>

              <p className="text-brand-muted leading-relaxed mb-8">
                Unsure if our therapies are right for you? Get a free suitability guidance session to understand available options and if you are a candidate.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex gap-4 p-4 rounded-2xl bg-brand-ice/50 border border-brand-teal/10 hover:border-brand-teal/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-teal shadow-sm flex-shrink-0">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <h3 className="font-dm font-bold text-[11px] uppercase tracking-wider text-brand-navy mb-1">WhatsApp Us</h3>
                    <p className="text-sm text-brand-muted">Instant guidance from our medical coordinators.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-2xl bg-brand-ice/50 border border-brand-teal/10 hover:border-brand-teal/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-teal shadow-sm flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h3 className="font-dm font-bold text-[11px] uppercase tracking-wider text-brand-navy mb-1">Request Callback</h3>
                    <p className="text-sm text-brand-muted">We'll call you back to discuss your health goals.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/919989033686"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-brand-teal text-white py-4 px-6 rounded-xl font-dm font-bold text-[11px] uppercase tracking-[0.2em] text-center hover:bg-brand-navy transition-all shadow-lg shadow-brand-teal/20"
                >
                  WhatsApp Now
                </a>
                <button 
                  onClick={onClose}
                  className="flex-1 bg-brand-navy text-white py-4 px-6 rounded-xl font-dm font-bold text-[11px] uppercase tracking-[0.2em] text-center hover:bg-brand-teal transition-all shadow-lg shadow-brand-navy/20"
                >
                  Book Visit
                </button>
              </div>

              <p className="text-[10px] text-center text-brand-muted mt-6 uppercase tracking-widest opacity-60">
                No obligation · Expert clinical guidance
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
