import { Link } from 'react-router-dom';
import { Mail, Phone, Clock } from 'lucide-react';

export default function Footer() {
  const mapsUrl = 'https://maps.google.com/?q=Almacura+Clinic+%26+Institute,+Secunderabad,+Hyderabad';

  return (
    <footer className="bg-brand-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Tagline */}
          <div>
            <div className="mb-4">
              <img 
                src="/logo.png" 
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

          <div>
            <h4 className="font-dm font-semibold text-white mb-4 uppercase tracking-wider text-sm">
              Explore
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Programs', path: '/programs' },
                { name: 'For Doctors', path: '/for-doctors' },
                { name: 'FAQs', path: '/faq' }
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

          <div>
            <h4 className="font-dm font-semibold text-white mb-4 uppercase tracking-wider text-sm">
              Clinical Hub
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'Integrative Medicine', path: '/integrative-medicine' },
                { name: 'Healthspan Optimization', path: '/healthspan-optimization' },
                { name: 'All Therapies', path: '/therapies' },
                { name: 'Contact', path: '/contact' }
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

            <div className="mt-6 rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <iframe
                title="Almacura Clinic Location"
                src="https://www.google.com/maps?q=Almacura+Clinic+%26+Institute,+Secunderabad,+Hyderabad&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-44"
                allowFullScreen
              />
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-xs uppercase tracking-widest text-brand-teal hover:text-white transition-colors"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="border-t border-white/5 pt-12 mt-12">
          <p className="text-white/30 text-[10px] leading-relaxed uppercase tracking-wider text-center max-w-4xl mx-auto">
            <span className="text-white/50 block mb-2">⚠️ DISCLAIMER</span>
            These therapies are complementary and not a substitute for conventional medical treatment. 
            Results may vary between individuals. Always consult with our medical team to determine 
            suitability for your specific health profile.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-white/40 text-xs font-dm tracking-widest uppercase">
              © {new Date().getFullYear()} ALMACURA. ALL PATHS TO VITALITY.
            </p>
            <Link to="/terms" className="text-white/40 hover:text-white transition-colors text-xs underline underline-offset-4 decoration-white/20 uppercase tracking-widest font-dm">
              Terms of Treatment
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-white/20 text-[9px] tracking-[0.3em] uppercase hidden sm:block">Building India's Leading Integrative Medicine Network</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
