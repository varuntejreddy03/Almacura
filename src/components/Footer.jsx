import { Link } from 'react-router-dom';
import { Mail, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-gold/30">
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
            <p className="text-brand-muted text-sm leading-relaxed">
              Institute of Integrative Medicine & Health Span Optimization
            </p>
            <p className="text-brand-dim text-xs mt-4 italic">
              All Paths to Vitality
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-dm font-semibold text-brand-white mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'Diagnostics', 'Longevity', 'Founder'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                    className="text-brand-muted hover:text-brand-teal transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Therapies */}
          <div>
            <h4 className="font-dm font-semibold text-brand-white mb-4 uppercase tracking-wider text-sm">
              Therapies
            </h4>
            <ul className="space-y-2">
              {['HBOT', 'EECP', 'PRP', 'Ozone', 'Nutrition'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Nutrition' ? '/nutrition' : `/therapies/${item.toLowerCase()}`}
                    className="text-brand-muted hover:text-brand-teal transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-dm font-semibold text-brand-white mb-4 uppercase tracking-wider text-sm">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-brand-muted text-sm">
                <Phone size={16} className="text-brand-teal mt-1 flex-shrink-0" />
                <div>
                  <div>+91 9989033686</div>
                  <div className="text-xs text-brand-dim">Phone & WhatsApp</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-brand-muted text-sm">
                <Mail size={16} className="text-brand-teal mt-1 flex-shrink-0" />
                <a href="mailto:doctorkvsreddy@yahoo.com" className="hover:text-brand-teal transition-colors">
                  doctorkvsreddy@yahoo.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-brand-muted text-sm">
                <Clock size={16} className="text-brand-teal mt-1 flex-shrink-0" />
                <div>
                  <div>Mon–Sat</div>
                  <div className="text-xs text-brand-dim">9:00 AM – 6:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-dim text-sm">
            © {new Date().getFullYear()} ALMACURA. All rights reserved.
          </p>
          <p className="text-brand-dim text-xs text-center md:text-right">
            Institute of Integrative Medicine & Health Span Optimization · Hyderabad, India
          </p>
        </div>
      </div>
    </footer>
  );
}
