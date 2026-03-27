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
              {['Home', 'Diagnostics', 'Healthspan', 'Founder', 'FAQs'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Healthspan' ? '/longevity' : (item.toLowerCase() === 'home' ? '/' : (item === 'FAQs' ? '/faq' : `/${item.toLowerCase()}`))}
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
              Clinical Verticals
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'Integrative Medicine', path: '/therapies' },
                { name: 'Healthspan Optimisation', path: '/longevity' },
                { name: 'Gynaecology', path: '/gynaecology' },
                { name: 'Nutrition', path: '/nutrition' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-brand-blue transition-colors text-sm"
                  >
                    {item.name}
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
                  <div className="font-medium">+91 9989033686</div>
                  <div className="text-[11px] text-white/50 tracking-wider">PHONE & WHATSAPP</div>
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
                  <div>Monday–Saturday</div>
                  <div className="text-[11px] text-white/50 tracking-wider uppercase">9:00 AM – 6:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-white/50 text-xs">
              © {new Date().getFullYear()} ALMACURA. All rights reserved.
            </p>
            <Link to="/terms" className="text-white/40 hover:text-white transition-colors text-xs underline underline-offset-4 decoration-white/20">
              Terms of Treatment
            </Link>
          </div>
          <p className="text-white/30 text-[10px] text-center md:text-right uppercase tracking-[0.2em]">
            Integrative Medicine · Healthspan · Gynaecology
          </p>
        </div>
      </div>
    </footer>
  );
}
