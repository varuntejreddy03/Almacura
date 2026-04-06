import { motion } from 'framer-motion';
import { ArrowRight, Activity, ShieldCheck, Target, Zap, Clock, Sparkles, Brain, Heart, Leaf, ChevronRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';

export default function Programs() {
  const programs = [
    {
      title: 'Detox Program',
      icon: Leaf,
      desc: 'Systemic detoxification protocols focusing on cellular health and liver optimization.',
      benefit: 'Bundled therapies + better outcomes',
      features: ['Cellular Cleansing', 'Metabolic Reset', 'Antioxidant Support']
    },
    {
      title: 'Energy Boost Program',
      icon: Zap,
      desc: 'Mitochondrial revitalization through oxygenation and nutrient optimization.',
      benefit: 'Bundled therapies + better outcomes',
      features: ['Mitochondrial Activation', 'ATP Synthesis Support', 'Fatigue Reduction']
    },
    {
      title: 'Longevity Program',
      icon: Clock,
      desc: 'Advanced protocols for biological age optimization and cellular resilience.',
      benefit: 'Bundled therapies + better outcomes',
      features: ['Cellular Repair', 'DNA Support', 'Systemic Anti-aging']
    },
    {
      title: 'Fertility Support Program',
      icon: Heart,
      desc: 'Integrative approach to reproductive health and hormonal balance.',
      benefit: 'Bundled therapies + better outcomes',
      features: ['Hormonal Balance', 'Pelvic Health', 'Biological Optimization']
    }
  ];

  return (
    <div className="bg-brand-white pt-32 pb-24 px-6 sm:px-8 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <ScrollReveal variant="fadeUp">
          <div className="flex flex-col items-center text-center mb-24 max-w-[900px] mx-auto">
            <SectionLabel>TREATMENT BUNDLES</SectionLabel>
            <h1 className="font-dm text-[clamp(44px,8vw,80px)] leading-[0.95] text-brand-navy font-bold tracking-tight mb-8 uppercase">
              Clinical <br className="hidden md:block" /> Programs
            </h1>
            <p className="text-brand-muted text-xl leading-relaxed italic max-w-2xl font-cormorant border-l-4 border-brand-teal/20 pl-8">
              "Designed for better results — Bundled therapies for comprehensive health outcomes."
            </p>
          </div>
        </ScrollReveal>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {programs.map((p, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="bg-white p-12 rounded-[50px] shadow-2xl shadow-brand-navy/5 border border-brand-ice hover:border-brand-teal/30 transition-all duration-500 group relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-ice rounded-bl-full group-hover:scale-125 transition-transform duration-700" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-brand-ice flex items-center justify-center text-brand-teal mb-8 group-hover:bg-brand-teal group-hover:text-white transition-all shadow-sm">
                    <p.icon size={28} />
                  </div>
                  <h3 className="font-cormorant text-4xl text-brand-navy font-bold mb-6 italic underline underline-offset-8 decoration-brand-teal/10">{p.title}</h3>
                  <p className="text-brand-muted text-lg leading-relaxed mb-10 max-w-md">{p.desc}</p>
                  
                  <div className="space-y-4 mb-12">
                    {p.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                          <ChevronRight size={14} />
                        </div>
                        <span className="font-dm font-bold text-[11px] uppercase tracking-widest text-brand-navy/70">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <div className="mb-8 p-4 bg-brand-ice/60 rounded-3xl border border-white">
                      <div className="font-dm font-bold text-[9px] uppercase tracking-[.3em] text-brand-teal mb-1">Outcome Focus</div>
                      <div className="text-brand-navy font-dm font-bold text-xs tracking-widest uppercase">{p.benefit}</div>
                    </div>
                    
                    <Link to="/contact">
                      <button className="w-full py-5 bg-brand-navy text-white rounded-3xl font-dm font-bold text-[11px] uppercase tracking-[.3em] hover:bg-brand-teal transition-all shadow-xl shadow-brand-navy/10 flex items-center justify-center gap-3">
                        Enquire for Program <ArrowRight size={16} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Global Strategy Section */}
        <section className="py-24 px-10 sm:px-16 bg-brand-navy rounded-[60px] text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,110,110,0.3),transparent_50%)]" />
          <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionLabel className="text-white/40">WHY PROGRAMS?</SectionLabel>
              <h2 className="font-cormorant text-4xl sm:text-6xl text-white mt-4 mb-8">Precision Bundling</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-xl">
                Clinical programs combine synergistic therapies to achieve biological outcomes that single treatments cannot reach alone. Our programs are supervised by medical professionals throughout the duration.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-10 py-5 bg-white text-brand-navy rounded-full font-dm font-bold text-[11px] uppercase tracking-[.3em] hover:bg-brand-teal hover:text-white transition-all shadow-2xl">
                    View Pricing Structure
                  </button>
                </Link>
                <a href="https://wa.me/919989033686" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-10 py-5 border-2 border-white/20 text-white rounded-full font-dm font-bold text-[11px] uppercase tracking-[.3em] hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                    <MessageCircle size={18} /> Protocol Talk
                  </button>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 w-full">
              {[
                { title: 'Better Biological Synergism', icon: Activity },
                { title: 'Bundled Pricing Models', icon: ShieldCheck },
                { title: 'Structured Recovery Timeline', icon: Clock },
                { title: 'Measurable Outcome Tracking', icon: Microscope }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[40px] flex items-center gap-6 group hover:border-brand-teal/40 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-teal shadow-xl shadow-brand-navy/5">
                    <item.icon size={22} />
                  </div>
                  <span className="font-dm font-bold text-xs uppercase tracking-widest text-white/80">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
