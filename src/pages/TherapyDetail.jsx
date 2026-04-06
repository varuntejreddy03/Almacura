import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Clock, ArrowRight, ShieldCheck, Target, AlertCircle, ChevronRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';
import { therapiesData, therapyList } from '../data/therapiesData';

export default function TherapyDetail() {
  const { slug } = useParams();
  const therapy = therapiesData[slug];

  if (!therapy) {
    return (
      <div className="min-h-screen bg-brand-white pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-cormorant text-4xl text-brand-navy mb-4 font-bold">Therapy Protocol Not Found</h1>
          <Link to="/therapies" className="text-brand-teal hover:text-brand-navy transition-colors font-dm font-bold text-[11px] uppercase tracking-widest">
            Return to All Therapies
          </Link>
        </div>
      </div>
    );
  }

  const relatedTherapies = therapy.relatedTherapies
    ? therapy.relatedTherapies.map(relatedSlug => {
        const relatedData = therapiesData[relatedSlug];
        const relatedInfo = therapyList.find(t => t.slug === relatedSlug);
        return { ...relatedData, ...relatedInfo, slug: relatedSlug };
      }).slice(0, 3)
    : [];

  return (
    <div className="bg-brand-white pt-20">
      {/* Dynamic Therapy Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-brand-ice/50" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(11,110,110,0.05),transparent_70%)]" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10 pt-20 pb-32">
          <ScrollReveal variant="fadeUp">
            <div className="flex flex-col items-center gap-2 mb-8">
              <SectionLabel>CLINICAL PROTOCOL</SectionLabel>
            </div>
            <h1 className="font-dm text-[clamp(44px,8vw,86px)] leading-[0.95] text-brand-navy font-bold tracking-tight mb-8">
              {therapy.title}
            </h1>
            <p className="text-brand-muted text-xl sm:text-2xl leading-relaxed italic max-w-2xl mx-auto font-cormorant mt-6 mb-12">
              "{therapy.subtitle}"
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { label: 'Session Duration', value: therapy.sessionDuration },
                { label: 'Typical Course', value: therapy.typicalCourse },
                { label: 'Methodology', value: therapy.nonInvasive ? 'Non-invasive' : 'Advanced Method' },
                { label: 'Clinical Review', value: 'Physician Managed' }
              ].map((spec, i) => (
                <div key={i} className="bg-white/60 backdrop-blur-xl border border-white p-6 rounded-3xl shadow-xl shadow-brand-navy/5">
                  <div className="font-dm text-[9px] uppercase tracking-[.25em] text-brand-teal font-bold mb-2">{spec.label}</div>
                  <div className="text-brand-navy font-dm font-bold text-sm tracking-[0.1em] uppercase">{spec.value}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ArrowRight size={24} className="rotate-90" />
          </motion.div>
        </div>
      </section>

      {/* Core Description & Benefits */}
      <section className="py-24 px-6 sm:px-8 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <ScrollReveal>
              <div className="bg-brand-ice p-12 rounded-[50px] relative overflow-hidden group border border-white h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-bl-full group-hover:scale-125 transition-transform duration-700" />
                <h2 className="font-cormorant text-4xl text-brand-navy mb-8 font-bold italic">What is {therapy.title.split('(')[0].trim()}?</h2>
                <p className="text-brand-muted text-lg leading-relaxed mb-10">
                  {therapy.description}
                </p>
                <div className="space-y-6">
                  <div className="font-dm font-bold text-[11px] uppercase tracking-widest text-brand-teal mb-4">Therapy Benefits</div>
                  <div className="grid grid-cols-1 gap-4">
                    {therapy.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-white/60 rounded-2xl border border-white group/item hover:border-brand-teal/30 transition-all">
                        <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal group-hover/item:bg-brand-teal group-hover/item:text-white transition-all">
                          <CheckCircle size={16} />
                        </div>
                        <span className="font-dm font-bold text-[10px] uppercase tracking-widest text-brand-navy">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-16">
              <ScrollReveal delay={0.2}>
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                      <Target size={20} />
                    </div>
                    <h3 className="font-dm font-bold text-[11px] uppercase tracking-[.4em] text-brand-navy">Core Applications</h3>
                  </div>
                  <h4 className="font-cormorant text-4xl text-brand-navy italic mb-8">Used For</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {therapy.usedFor.map((use, i) => (
                      <div key={i} className="flex items-center gap-3 py-3 border-b border-brand-ice">
                        <ChevronRight size={14} className="text-brand-teal" />
                        <span className="font-dm font-bold text-[10px] uppercase tracking-widest text-brand-navy/70">{use}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="bg-brand-navy p-10 rounded-[40px] text-white overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full group-hover:scale-125 transition-transform duration-700" />
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-teal">
                      <AlertCircle size={20} />
                    </div>
                    <h3 className="font-dm font-bold text-[11px] uppercase tracking-[.4em] text-white/60">Precautions</h3>
                  </div>
                  <h4 className="font-cormorant text-4xl text-white italic mb-8">Not Suitable For</h4>
                  <div className="space-y-4">
                    {therapy.notSuitableFor.length > 0 ? (
                      therapy.notSuitableFor.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 opacity-60">
                          <CheckCircle size={14} className="mt-1 flex-shrink-0 text-brand-teal" />
                          <span className="text-[13px] uppercase tracking-widest leading-relaxed">{item}</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-white/40 italic uppercase text-xs tracking-widest">No major contraindications reported. Consult with our medical staff for suitability.</p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Procedure Steps */}
      <section className="py-24 px-6 sm:px-8 md:px-12 bg-brand-ice bg-opacity-50">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <SectionLabel>THE JOURNEY</SectionLabel>
              <h2 className="font-cormorant text-4xl sm:text-5xl text-brand-navy mt-4 italic">Protocol Execution</h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {therapy.procedure.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-3xl border border-white shadow-xl shadow-brand-navy/5 group hover:border-brand-teal/20 transition-all flex items-start gap-8">
                  <div className="font-cormorant text-3xl font-bold italic text-brand-teal/20 group-hover:text-brand-teal/60 transition-colors w-10 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-brand-navy font-dm font-bold text-[11px] uppercase tracking-[.25em] leading-relaxed pt-2">
                    {step}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 sm:px-8 md:px-12 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(11,110,110,0.2),transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-cormorant text-4xl sm:text-6xl text-white mb-8">Ready for {therapy.title.split('(')[0].trim()}?</h2>
            <p className="text-white/60 text-lg sm:text-xl font-cormorant italic mb-12">"Every protocol is evidence-informed and personalized to your diagnostic profile."</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-12 py-5 bg-brand-teal text-white rounded-full font-dm font-bold text-[11px] uppercase tracking-[.3em] hover:bg-white hover:text-brand-navy transition-all shadow-2xl shadow-brand-teal/20">
                  Book Clinical Assessment
                </button>
              </Link>
              <a href="https://wa.me/919989033686" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-12 py-5 border-2 border-white/20 text-white rounded-full font-dm font-bold text-[11px] uppercase tracking-[.3em] hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                  <MessageCircle size={18} /> Protocol Inquiry
                </button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Therapies */}
      {relatedTherapies.length > 0 && (
        <section className="py-24 px-6 sm:px-8 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <SectionLabel>COMPLEMENTARY PROTOCOLS</SectionLabel>
                <h2 className="font-cormorant text-4xl sm:text-5xl text-brand-navy mt-4 italic">Often Combined With</h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedTherapies.map((rel, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <Link to={`/therapies/${rel.slug}`}>
                    <div className="bg-brand-ice/50 p-8 rounded-[40px] border border-transparent hover:border-brand-teal/20 transition-all group h-full flex flex-col justify-between">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-teal shadow-sm group-hover:bg-brand-teal group-hover:text-white transition-all">
                          <CheckCircle size={20} />
                        </div>
                        <h4 className="font-dm font-bold text-[11px] uppercase tracking-widest text-brand-navy">{rel.title}</h4>
                      </div>
                      <div className="text-brand-teal font-dm font-bold text-[9px] uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                        View Protocol <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
