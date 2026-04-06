import { motion } from 'framer-motion';
import { ArrowRight, Activity, ShieldCheck, HeartPulse, Sparkles, Brain, Target, Zap, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';

export default function HealthspanOptimization() {
  return (
    <div className="bg-brand-white pt-32 pb-24 px-6 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <ScrollReveal variant="fadeUp">
          <div className="flex flex-col items-center text-center mb-24 max-w-[900px] mx-auto">
            <SectionLabel>OPTIMIZATION</SectionLabel>
            <h1 className="font-dm text-[clamp(44px,8vw,80px)] leading-[0.95] text-brand-navy font-bold tracking-tight mb-8">
              Healthspan <br className="hidden md:block" /> Optimization
            </h1>
            <p className="text-brand-muted text-xl leading-relaxed italic max-w-2xl font-cormorant border-l-4 border-brand-teal/20 pl-8">
              "Beyond Lifespan — Optimize Your Healthspan. Focus on the quality of life, not just its quantity."
            </p>
          </div>
        </ScrollReveal>

        {/* The Concept */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-12">
                <div>
                  <h3 className="font-dm font-bold text-[11px] uppercase tracking-[.4em] text-brand-teal mb-6">The Goal</h3>
                  <p className="font-cormorant text-4xl text-brand-navy leading-tight italic">Maintain peak biological <br /> output for longer.</p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-brand-ice flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all shadow-sm">
                      <Zap size={20} />
                    </div>
                    <div>
                      <h4 className="font-dm font-bold text-[11px] uppercase tracking-widest text-brand-navy mb-2">Energy Restoration</h4>
                      <p className="text-brand-muted text-sm leading-relaxed">Optimization at a cellular level to enhance vitality and reduce fatigue.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-brand-ice flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all shadow-sm">
                      <Brain size={20} />
                    </div>
                    <div>
                      <h4 className="font-dm font-bold text-[11px] uppercase tracking-widest text-brand-navy mb-2">Brain Performance</h4>
                      <p className="text-brand-muted text-sm leading-relaxed">Cognitive support through neuro-restorative therapies and optimized oxygenation.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-brand-ice flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all shadow-sm">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-dm font-bold text-[11px] uppercase tracking-widest text-brand-navy mb-2">Longevity Protocols</h4>
                      <p className="text-brand-muted text-sm leading-relaxed">Systemic interventions designed to slow biological aging and improve cellular health.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-brand-ice rounded-[50px] p-12 overflow-hidden group border border-white">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-bl-full group-hover:scale-125 transition-transform duration-700" />
                <div className="relative z-10">
                  <h3 className="font-dm font-bold text-[11px] uppercase tracking-widest text-brand-teal mb-6">Optimization Focus</h3>
                  <div className="space-y-6 mb-10">
                    {[
                      { label: 'Energy Management', icon: Zap },
                      { label: 'Brain Performance', icon: Brain },
                      { label: 'Hormonal Balance', icon: Sparkles },
                      { label: 'Cellular Health', icon: HeartPulse }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-white/60 rounded-2xl border border-white">
                        <item.icon className="text-brand-teal" size={18} />
                        <span className="font-dm font-bold text-[10px] uppercase tracking-widest text-brand-navy">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-brand-muted text-sm italic leading-loose border-l-2 border-brand-teal/20 pl-4 uppercase tracking-wider">Focusing on biological health, not just chronological age.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Programs */}
        <section className="mb-32">
          <ScrollReveal>
            <div className="text-center mb-16">
              <SectionLabel>SPECIALIZED PROTOCOLS</SectionLabel>
              <h2 className="font-cormorant text-4xl sm:text-5xl text-brand-navy mt-4">Healthspan Programs</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Longevity Program', icon: Clock, desc: 'A holistic strategy for long-term health and cellular repair.' },
              { name: 'Energy Optimization', icon: Zap, desc: 'Targeting mitochondrial health to boost baseline energy levels.' },
              { name: 'Anti-aging Protocol', icon: Sparkles, desc: 'Regenerative interventions for skin, tissue, and biological markers.' },
              { name: 'Brain Health Program', icon: Brain, desc: 'Enhancing cognitive output and neurological resilience.' }
            ].map((p, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="group bg-white p-10 rounded-[45px] shadow-2xl shadow-brand-navy/5 border border-brand-ice hover:border-brand-teal/30 transition-all duration-500 h-full flex flex-col justify-between overflow-hidden relative">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-ice rounded-full group-hover:scale-[3] transition-transform duration-700" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-brand-ice flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all shadow-sm mb-10">
                      <p.icon size={28} />
                    </div>
                    <h3 className="font-cormorant text-2xl text-brand-navy font-bold mb-4">{p.name}</h3>
                    <p className="text-brand-muted text-[13px] leading-relaxed mb-10 uppercase tracking-widest">{p.desc}</p>
                  </div>
                  <div className="relative z-10 flex items-center gap-2 text-brand-teal font-dm font-bold text-[10px] uppercase tracking-widest border-t border-brand-ice pt-8 group-hover:gap-4 transition-all">
                    Inquire Protocol <ArrowRight size={14} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Ideal For */}
        <section className="py-24 px-10 sm:px-16 bg-brand-ice rounded-[60px] relative overflow-hidden group">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-[3s]" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <SectionLabel>AUDIENCE</SectionLabel>
              <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-brand-navy mt-4 mb-12 italic">Ideal For</h2>
              <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mb-16">
                {[
                  { label: 'Professionals', icon: Target },
                  { label: 'Athletes', icon: Activity },
                  { label: 'Preventive health seekers', icon: ShieldCheck }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-3xl bg-white flex items-center justify-center text-brand-teal shadow-xl shadow-brand-navy/5 border border-white">
                      <item.icon size={28} />
                    </div>
                    <span className="font-dm font-bold text-[11px] uppercase tracking-[.3em] text-brand-navy">{item.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-brand-muted text-lg font-dm tracking-wide leading-relaxed max-w-2xl mx-auto mb-12">Optimization starts with understanding. Every program begins with a structured clinical assessment.</p>
              <Link to="/contact">
                <button className="px-12 py-5 bg-brand-navy text-white rounded-full font-dm font-bold text-[11px] uppercase tracking-[.3em] hover:bg-brand-teal transition-all shadow-2xl shadow-brand-navy/20">
                  Book Optimization Visit
                </button>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </div>
  );
}
