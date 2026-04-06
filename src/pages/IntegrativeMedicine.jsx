import { motion } from 'framer-motion';
import { ArrowRight, Activity, ShieldCheck, Microscope, HeartPulse, Sparkles, ChevronRight, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';

export default function IntegrativeMedicine() {
  return (
    <div className="bg-brand-white pt-32 pb-24 px-6 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <ScrollReveal variant="fadeUp">
          <div className="flex flex-col items-center text-center mb-24 max-w-[900px] mx-auto">
            <SectionLabel>SPECIALIZATION</SectionLabel>
            <h1 className="font-dm text-[clamp(44px,8vw,80px)] leading-[0.95] text-brand-navy font-bold tracking-tight mb-8">
              Integrative <br className="hidden md:block" /> Medicine
            </h1>
            <p className="text-brand-muted text-xl leading-relaxed italic max-w-2xl font-cormorant border-l-4 border-brand-teal/20 pl-8">
              "A medical approach that combines conventional treatments with evidence-based complementary therapies to treat the root cause, not just symptoms."
            </p>
          </div>
        </ScrollReveal>

        {/* What is Integrative Medicine? */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="bg-brand-ice rounded-[50px] p-12 overflow-hidden group border border-white">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-bl-full group-hover:scale-125 transition-transform duration-700" />
                <h2 className="font-cormorant text-4xl sm:text-5xl text-brand-navy mb-8">What is Integrative Medicine?</h2>
                <div className="space-y-6 text-brand-muted text-lg leading-relaxed mb-6">
                  <p>Integrative medicine is a healing-oriented medicine that takes account of the whole person, including all aspects of lifestyle. It emphasizes the therapeutic relationship between practitioner and patient, is informed by evidence, and makes use of all appropriate therapeutic approaches, healthcare professionals and disciplines to achieve optimal health and healing.</p>
                  <p>At Almacura, we bridge the gap between traditional hospital-based protocols and advanced regenerative therapies.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-white/60 rounded-2xl border border-white">
                    <Activity className="text-brand-teal" size={18} />
                    <span className="font-dm font-bold text-[10px] uppercase tracking-widest text-brand-navy">Conventional treatments</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/60 rounded-2xl border border-white">
                    <Sparkles className="text-brand-teal" size={18} />
                    <span className="font-dm font-bold text-[10px] uppercase tracking-widest text-brand-navy">Evidence-based complementary therapies</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-12">
                <div>
                  <h3 className="font-dm font-bold text-[11px] uppercase tracking-[.4em] text-brand-teal mb-6">Core Focus</h3>
                  <p className="font-cormorant text-3xl text-brand-navy leading-tight italic">Treat the root cause, <br /> not just symptoms.</p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-brand-ice flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all shadow-sm">
                      <Microscope size={20} />
                    </div>
                    <div>
                      <h4 className="font-dm font-bold text-[11px] uppercase tracking-widest text-brand-navy mb-2">Diagnostic Precision</h4>
                      <p className="text-brand-muted text-sm leading-relaxed">Every protocol starts with personalized medical diagnostics to identify biological imbalances.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-brand-ice flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all shadow-sm">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h4 className="font-dm font-bold text-[11px] uppercase tracking-widest text-brand-navy mb-2">Clinical Oversight</h4>
                      <p className="text-brand-muted text-sm leading-relaxed">Our therapies are doctor-led and medical-staff monitored to ensure safety and clinical accuracy.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-brand-ice flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all shadow-sm">
                      <HeartPulse size={20} />
                    </div>
                    <div>
                      <h4 className="font-dm font-bold text-[11px] uppercase tracking-widest text-brand-navy mb-2">Dynamic Optimization</h4>
                      <p className="text-brand-muted text-sm leading-relaxed">Protocols are adjusted based on physiological response and recurring biomarker assessments.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Included Therapies */}
        <section className="mb-32">
          <ScrollReveal>
            <div className="text-center mb-16">
              <SectionLabel>THERAPEUTIC ENGINE</SectionLabel>
              <h2 className="font-cormorant text-4xl sm:text-5xl text-brand-navy mt-4">Therapies Included</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Ozone Therapy', slug: 'ozone', icon: Sparkles, desc: 'Advanced oxidation for immune modulation.' },
              { name: 'IV Therapy', slug: 'iv-therapy', icon: Activity, desc: 'Precision nutrient infusion for biological restoration.' },
              { name: 'Hydrogen Therapy', slug: 'hydrogen', icon: HeartPulse, desc: 'Selective antioxidant gas for metabolic support.' },
              { name: 'Acupuncture', slug: 'acupuncture', icon: Target, desc: 'Evidence-informed neuro-meridian balancing.' }
            ].map((t, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <Link to={`/therapies/${t.slug}`}>
                  <div className="group bg-white p-8 rounded-[40px] shadow-2xl shadow-brand-navy/5 border border-brand-ice hover:border-brand-teal/30 transition-all duration-500 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-brand-ice flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all shadow-sm mb-6">
                        <t.icon size={24} />
                      </div>
                      <h3 className="font-dm font-bold text-sm uppercase tracking-widest text-brand-navy mb-4">{t.name}</h3>
                      <p className="text-brand-muted text-[13px] leading-relaxed mb-6 uppercase tracking-wider">{t.desc}</p>
                    </div>
                    <div className="flex items-center gap-2 text-brand-teal font-dm font-bold text-[10px] uppercase tracking-widest">
                      Protocol Detail <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Who Benefits? */}
        <section className="py-24 px-10 sm:px-16 bg-brand-navy rounded-[60px] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,110,110,0.3),transparent_50%)]" />
          <div className="relative z-10">
            <ScrollReveal>
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <SectionLabel className="text-white/40">CANDIDATES</SectionLabel>
                  <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-white mt-4 mb-8">Who Benefits?</h2>
                  <p className="text-white/60 text-lg leading-relaxed mb-10">Integrative medicine protocols are particularly effective for patients seeking support beyond standard symptom management.</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Chronic illness patients',
                      'Post-surgery recovery',
                      'Immune dysfunction',
                      'Lifestyle disorders',
                      'Autoimmune support',
                      'Neurological conditions'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal">
                          <ChevronRight size={14} />
                        </div>
                        <span className="font-dm font-bold text-[10px] uppercase tracking-widest text-white/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[40px] w-full">
                  <h3 className="font-cormorant text-2xl text-brand-teal italic mb-6">Patient Inquiry</h3>
                  <div className="space-y-6">
                    <p className="text-white/60 text-sm leading-relaxed tracking-wide">Looking to see if our integrative protocols are suitable for your medical history?</p>
                    <Link to="/contact">
                      <button className="w-full py-5 bg-white text-brand-navy rounded-2xl font-dm font-bold text-[11px] uppercase tracking-[.25em] hover:bg-brand-teal hover:text-white transition-all shadow-2xl">
                        Enquire for Consultation
                      </button>
                    </Link>
                    <p className="text-center text-[9px] uppercase tracking-[.2em] text-white/30">Standard diagnostic protocols apply</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </div>
  );
}
