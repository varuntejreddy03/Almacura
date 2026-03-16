import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';

export default function TherapyCard({ icon, title, description, slug, sessionDuration }) {
  const Icon = Icons[icon] || Icons.Activity;

  return (
    <Link to={`/therapies/${slug}`}>
      <motion.div
        whileHover={{ y: -4 }}
        className="glass-card p-6 h-full group relative overflow-hidden transition-all duration-300 hover:border-brand-teal"
      >
        <div className="absolute left-0 top-0 h-full w-1 bg-brand-teal scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
        
        <div className="mb-4 text-brand-teal">
          <Icon size={32} strokeWidth={1.5} />
        </div>
        
        <h3 className="font-cormorant text-2xl text-brand-white mb-3">{title}</h3>
        
        {sessionDuration && (
          <div className="font-mono text-xs text-brand-teal uppercase tracking-wider mb-3">
            {sessionDuration}
          </div>
        )}
        
        <p className="text-brand-muted text-sm leading-relaxed mb-4">{description}</p>
        
        <div className="flex items-center gap-2 text-brand-teal text-sm font-dm font-medium group-hover:text-brand-tealLight transition-colors">
          <span>View Details</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </motion.div>
    </Link>
  );
}
