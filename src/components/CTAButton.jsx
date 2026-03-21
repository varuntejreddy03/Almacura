import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CTAButton({ children, variant = 'primary', to, onClick, className = '' }) {
  const baseClasses = "px-8 py-4 font-dm font-semibold uppercase tracking-widest text-sm transition-all duration-300 rounded-sm";
  
  const variants = {
    primary: "bg-brand-teal text-white hover:bg-brand-blue hover:shadow-xl hover:scale-105 active:scale-95",
    secondary: "bg-white border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white hover:shadow-lg active:scale-95"
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to}>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={classes}
        >
          {children}
        </motion.button>
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
