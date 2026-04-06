import { motion } from 'framer-motion';
import { ArrowRight, Activity, ShieldCheck, Microscope, HeartPulse, Sparkles, ChevronRight, MessageCircle, MapPin, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';

export default function About() {
  return (
    <div className="bg-brand-white pt-32 pb-24 px-6 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <ScrollReveal variant="fadeUp">
          <div className="flex flex-col items-center text-center mb-24 max-w-[900px] mx-auto">
            <SectionLabel>INSTITUTIONAL PROFILE</SectionLabel>
            <h1 className="font-dm text-[clamp(44px,8vw,80px)] leading-[0.95] text-brand-navy font-bold tracking-tight mb-8">
              Almacura <br className="hidden md:block" /> Center & Institute
            </h1>
            <p className="text-brand-muted text-xl leading-relaxed italic max-w-2xl font-cormorant border-l-4 border-brand-teal/20 pl-8">
              "30+ years of medical expertise combined with advanced therapy integration."
            </p>
          </div>
        </ScrollReveal>

        {/* Core Profile */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <ScrollReveal>
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-ice rounded-[50px] rotate-3 group-hover:rotate-0 transition-transform duration-700" />
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80" 
                  alt="Almacura Institute" 
                  className="relative rounded-[45px] shadow-2xl transition-all duration-700 h-[600px] object-cover"
                />
                <div className="absolute top-10 left-10 bg-white/10 backdrop-blur-3xl border border-white/20 p-8 rounded-[35px] text-white">
                  <div className="font-cormorant text-5xl font-bold italic mb-2">30+</div>
                  <div className="font-dm text-[9px] uppercase tracking-widest font-bold">Years Clinical Expertise</div>
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-12">
              <div>
                <SectionLabel>ESTABLISHED EXPERTISE</SectionLabel>
                <h2 className="font-cormorant text-4xl sm:text-5xl text-brand-navy mt-4 mb-8">Multi-specialty hospital background</h2>
                <div className="space-y-6 text-brand-muted text-lg leading-loose mb-10">
                  <p>Almacura is founded on the principles of integrated clinical medicine. Led by Dr. Vijay Shekar Reddy (MBBS, MS - General Surgery), the institute reflects a deep clinical heritage from multi-specialty hospital backgrounds.</p>
                  <p>Our focus is integrating modern, advanced therapies (HBOT, Ozone, IV Nutrient, Hydrogen, Red Light, Acupuncture) into a cohesive pathway that addresses both clinical disease and long-term vitality.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: 'Integrating modern & advanced therapies', icon: Zap },
                  { title: 'Evidence-informed clinical protocols', icon: ShieldCheck },
                  { title: 'Expert physician oversight & supervision', icon: Activity }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 p-6 bg-brand-ice/50 rounded-3xl border border-transparent hover:border-brand-teal/20 hover:bg-white hover:shadow-xl hover:shadow-brand-navy/5 transition-all group">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all shadow-sm">
                      <item.icon size={20} />
                    </div>
                    <span className="font-dm font-bold text-[10px] uppercase tracking-widest text-brand-navy leading-none">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-24 px-10 sm:px-16 bg-brand-navy rounded-[60px] text-white overflow-hidden relative mb-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,110,110,0.3),transparent_50%)]" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <SectionLabel className="text-white/40">OUR FUTURE</SectionLabel>
              <h2 className="font-cormorant text-4xl sm:text-6xl text-white mt-4 mb-8">Our Vision</h2>
              <p className="text-white/60 text-xl font-cormorant italic leading-relaxed mb-12">
                "To become India’s leading integrative medicine network, delivering healthspan optimization through precision science and clinical excellence."
              </p>
              <div className="h-0.5 w-24 bg-brand-teal/30 mx-auto mb-12" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="font-dm text-3xl font-bold italic text-brand-teal mb-2">Expansion</div>
                  <div className="font-dm text-[9px] uppercase tracking-widest text-white/40">Scalable Network Model</div>
                </div>
                <div>
                  <div className="font-dm text-3xl font-bold italic text-brand-teal mb-2">Innovation</div>
                  <div className="font-dm text-[9px] uppercase tracking-widest text-white/40">Next-gen Bio-tech</div>
                </div>
                <div>
                  <div className="font-dm text-3xl font-bold italic text-brand-teal mb-2">Outcome</div>
                  <div className="font-dm text-[9px] uppercase tracking-widest text-white/40">Validated Results</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact/Location Bar */}
        <section className="py-12 bg-white rounded-[40px] border border-brand-ice shadow-xl shadow-brand-navy/5 px-10 sm:px-16 flex flex-col md:grid md:grid-cols-3 gap-12 items-center">
          <div className="flex items-center gap-6 group">
            <div className="w-12 h-12 rounded-2xl bg-brand-ice flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all shadow-sm">
              <MapPin size={24} />
            </div>
            <div>
              <div className="font-dm text-[11px] uppercase tracking-widest text-brand-teal font-bold mb-1">Maps</div>
              <a
                href="https://maps.google.com/?q=Secunderabad%2C+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm font-bold text-xs uppercase tracking-widest text-brand-navy underline hover:text-brand-teal transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6 group">
            <div className="w-12 h-12 rounded-2xl bg-brand-ice flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all shadow-sm">
              <HeartPulse size={24} />
            </div>
            <div>
              <div className="font-dm text-[11px] uppercase tracking-widest text-brand-teal font-bold mb-1">Our Approach</div>
              <div className="font-dm font-bold text-xs uppercase tracking-widest text-brand-navy">Patient Focused</div>
            </div>
          </div>

          <Link to="/contact" className="w-full">
            <button className="w-full py-5 bg-brand-navy text-white rounded-3xl font-dm font-bold text-[11px] uppercase tracking-[.3em] hover:bg-brand-teal transition-all shadow-xl shadow-brand-navy/10 flex items-center justify-center gap-3">
              Book Appointment <ArrowRight size={16} />
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}
