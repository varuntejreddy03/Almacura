import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CTAButton({ children, variant = 'primary', to, onClick, className = '' }) {
  const baseClasses = "px-8 py-3 font-dm font-semibold uppercase tracking-widest text-sm transition-all duration-300";
  
  const variants = {
    primary: "bg-brand-teal text-brand-white hover:bg-brand-tealLight hover:shadow-lg hover:shadow-brand-teal/20",
    secondary: "bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black"
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
