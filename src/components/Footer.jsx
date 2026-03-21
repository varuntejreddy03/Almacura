import { Link } from 'react-router-dom';
import { Mail, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Tagline */}
          <div>
            <div className="mb-4">
              <img 
                src="/Almacura_Logo_Cropped_Transparent.png" 
                alt="ALMACURA — All Paths to Vitality" 
                className="h-16 w-auto object-contain opacity-90"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Institute of Integrative Medicine & Health Span Optimization
            </p>
            <p className="text-white/40 text-xs mt-4 italic">
              All Paths to Vitality
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-dm font-semibold text-white mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'Diagnostics', 'Longevity', 'Founder'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                    className="text-white/70 hover:text-brand-blue transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Therapies */}
          <div>
            <h4 className="font-dm font-semibold text-white mb-4 uppercase tracking-wider text-sm">
              Therapies
            </h4>
            <ul className="space-y-2">
              {['HBOT', 'EECP', 'PRP', 'Ozone', 'Nutrition'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Nutrition' ? '/nutrition' : `/therapies/${item.toLowerCase()}`}
                    className="text-white/70 hover:text-brand-blue transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-dm font-semibold text-white mb-4 uppercase tracking-wider text-sm">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Phone size={16} className="text-brand-teal mt-1 flex-shrink-0" />
                <div>
                  <div>+91 9989033686</div>
                  <div className="text-xs text-white/50">Phone & WhatsApp</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Mail size={16} className="text-brand-teal mt-1 flex-shrink-0" />
                <a href="mailto:doctorkvsreddy@yahoo.com" className="hover:text-brand-blue transition-colors">
                  doctorkvsreddy@yahoo.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Clock size={16} className="text-brand-teal mt-1 flex-shrink-0" />
                <div>
                  <div>Mon–Sat</div>
                  <div className="text-xs text-white/50">9:00 AM – 6:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} ALMACURA. All rights reserved.
          </p>
          <p className="text-white/50 text-xs text-center md:text-right">
            Institute of Integrative Medicine & Health Span Optimization · Hyderabad, India
          </p>
        </div>
      </div>
    </footer>
  );
}
