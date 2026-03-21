import { MessageCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export default function WhatsAppButton() {
  const phoneNumber = '919989033686';
  const message = 'Hello, I would like to know more about ALMACURA therapies.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 glass-card w-14 h-14 rounded-sm flex items-center justify-center group hover:border-brand-teal hover:shadow-lg transition-all duration-300"
      whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: shouldReduceMotion ? 0 : 1 }}
    >
      <MessageCircle size={24} className="text-brand-teal group-hover:text-brand-blue transition-colors" strokeWidth={1.5} />
    </motion.a>
  );
}
