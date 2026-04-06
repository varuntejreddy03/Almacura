import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Microscope, Heart, Leaf, Shield, Target, Waves, Zap, ShieldCheck, Brain, Sparkles, Stethoscope, ChevronRight, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';
import SuitabilityModal from '../components/SuitabilityModal';
import TherapyCard from '../components/TherapyCard';
import { therapyList } from '../data/therapiesData';

export default function Home() {
  const [isSuitabilityModalOpen, setIsSuitabilityModalOpen] = useState(false);
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const shouldReduceMotion = useReducedMotion();

  const coreTherapies = therapyList.slice(0, 6);

  const supportConditions = [
    { title: 'Chronic fatigue', icon: Zap },
    { title: 'Diabetes support', icon: Activity },
    { title: 'Pain & inflammation', icon: ShieldCheck },
    { title: 'Neurological recovery', icon: Brain },
    { title: 'Fertility & hormonal balance', icon: Sparkles },
    { title: 'Skin & anti-aging', icon: Heart }
  ];

  const testimonials = [
    {
      text: "Improved my energy levels significantly. I feel more vibrant and ready for the day after HBOT.",
      author: "Energy Patient"
    },
    {
      text: "Pain reduced without surgery. The integrative approach actually worked when standard treatments failed.",
      author: "Chronic Pain Patient"
    },
    {
      text: "Very professional and scientific approach. The diagnostic phase was thorough and reassuring.",
      author: "Health Optimization Patient"
    }
  ];

  return (
    <div className="bg-brand-white overflow-x-hidden pt-20">
      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-32 overflow-hidden">
        {/* Cinematic Backdrop */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-ice via-white to-brand-ice/40" />
          <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-teal/5 rounded-full blur-[120px] mix-blend-multiply transition-all duration-[20s] animate-pulse" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] mix-blend-multiply" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
          <ScrollReveal variant="fadeUp">
            <div className="flex flex-col items-center gap-1.5 mb-8">
              <span className="font-dm text-[9px] uppercase tracking-[0.6em] text-brand-teal font-bold opacity-60">Institute of Integrative Medicine & Healthspan Optimization</span>
              <div className="w-10 h-[1.5px] bg-brand-teal/20"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.2}>
            <h1 className="font-dm tracking-tight mb-8">
              <span className="block text-[clamp(44px,8vw,86px)] leading-[0.95] text-brand-navy font-bold">ALMACURA</span>
              <span className="block text-[clamp(32px,6vw,62px)] leading-tight text-brand-teal italic font-cormorant mt-2">All Paths to Vitality</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.4}>
            <p className="max-w-2xl mx-auto text-brand-muted text-lg sm:text-xl leading-relaxed mb-12 px-4">
              Evidence-based therapies combining modern medicine <br className="hidden md:block" /> with advanced bio-optimization technologies.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 px-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-10 py-5 bg-brand-navy text-white font-dm font-bold uppercase tracking-[0.2em] text-[11px] rounded-full shadow-[0_20px_40px_rgba(13,33,55,0.2)] hover:shadow-brand-teal/30 hover:bg-brand-teal transition-all duration-500"
                >
                  Book Doctor Consultation
                </motion.button>
              </Link>
              
              <motion.button
                onClick={() => setIsSuitabilityModalOpen(true)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 bg-white border border-brand-teal/20 text-brand-teal font-dm font-bold uppercase tracking-[0.2em] text-[11px] rounded-full shadow-lg shadow-brand-teal/5 hover:bg-brand-teal/5 transition-all duration-500 backdrop-blur-xl"
              >
                Check Therapy Suitability (Free)
              </motion.button>
            </div>
          </ScrollReveal>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-20 select-none pointer-events-none hidden md:flex"
        >
          <span className="font-dm text-[8px] uppercase tracking-[0.4em] font-bold text-brand-navy">Explore More</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[1px] h-10 bg-brand-navy"
          />
        </motion.div>
      </section>

      {/* Section 2: "NOT SURE WHERE TO START?" */}
      <section className="py-24 px-6 sm:px-8 md:px-12 bg-brand-ice relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 px-4">
            <ScrollReveal>
              <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-brand-navy mb-4">Not sure where to start?</h2>
              <p className="text-brand-muted text-lg tracking-wide italic">Choose what suits your needs best</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal delay={0.2}>
              <div className="bg-white p-10 sm:p-12 rounded-[40px] shadow-2xl shadow-brand-navy/5 border border-white relative overflow-hidden group hover:border-brand-teal/40 transition-all duration-500 h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-bl-full group-hover:scale-125 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-8">
                    <Stethoscope size={24} />
                  </div>
                  <h3 className="font-cormorant text-3xl text-brand-navy mb-4 font-bold">Paid Medical Consultation</h3>
                  <div className="space-y-4 mb-10 text-brand-muted">
                    <div className="flex items-center gap-3">
                      <ChevronRight size={14} className="text-brand-teal" />
                      <span className="font-dm font-bold text-[11px] uppercase tracking-wider">Detailed assessment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ChevronRight size={14} className="text-brand-teal" />
                      <span className="font-dm font-bold text-[11px] uppercase tracking-wider">Diagnosis & treatment plan</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ChevronRight size={14} className="text-brand-teal" />
                      <span className="font-dm font-bold text-[11px] uppercase tracking-wider">Doctor-led protocols</span>
                    </div>
                  </div>
                  <Link to="/contact">
                    <button className="w-full py-4 bg-brand-navy text-white rounded-2xl font-dm font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-brand-teal transition-all shadow-xl shadow-brand-navy/10">
                      Book Doctor Visit
                    </button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="bg-white p-10 sm:p-12 rounded-[40px] shadow-2xl shadow-brand-navy/5 border border-white relative overflow-hidden group hover:border-brand-teal/40 transition-all duration-500 h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-bl-full group-hover:scale-125 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-8">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="font-cormorant text-3xl text-brand-navy mb-4 font-bold">Free Suitability Guidance</h3>
                  <div className="space-y-4 mb-10 text-brand-muted">
                    <div className="flex items-center gap-3">
                      <ChevronRight size={14} className="text-brand-teal" />
                      <span className="font-dm font-bold text-[11px] uppercase tracking-wider">Understand available therapies</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ChevronRight size={14} className="text-brand-teal" />
                      <span className="font-dm font-bold text-[11px] uppercase tracking-wider">Know if you are a candidate</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ChevronRight size={14} className="text-brand-teal" />
                      <span className="font-dm font-bold text-[11px] uppercase tracking-wider">No obligation</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsSuitabilityModalOpen(true)}
                    className="w-full py-4 border-2 border-brand-navy text-brand-navy rounded-2xl font-dm font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-brand-navy hover:text-white transition-all"
                  >
                    Get Free Guidance
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="text-center mt-12 overflow-visible">
            <span className="font-dm text-[10px] uppercase tracking-[0.4em] text-brand-teal/60 font-bold overflow-visible">Start with clarity before you commit</span>
          </div>
        </div>
      </section>

      {/* Section 3: OUR APPROACH */}
      <section className="py-24 px-6 sm:px-8 md:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:items-center">
            <ScrollReveal>
              <div className="relative">
                <SectionLabel>OUR APPROACH</SectionLabel>
                <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-brand-navy mb-8 leading-[1.1]">
                  Integrative Medicine + Healthspan Optimization
                </h2>
                <p className="text-brand-muted text-lg max-w-xl leading-loose mb-10">
                  We bridge the gap between conventional medicine, preventive care, and advanced longevity science. Our protocols focus on treating the root cause, not just symptoms.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { title: 'Conventional medicine', icon: Stethoscope },
                    { title: 'Preventive care', icon: Shield },
                    { title: 'Longevity science', icon: Target }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-ice flex items-center justify-center text-brand-teal">
                        <item.icon size={18} />
                      </div>
                      <span className="font-dm font-bold text-[10px] uppercase tracking-widest text-brand-navy">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="relative h-[400px] sm:h-[500px] rounded-[40px] overflow-hidden group">
                <div className="absolute inset-0 bg-brand-navy" />
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80" 
                  alt="Modern Clinic" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[3s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <div className="flex items-center gap-3 text-white border-l-2 border-brand-teal pl-6">
                    <span className="font-cormorant text-2xl italic tracking-wide">Excellence in Integrative Care</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 4: OUR CORE THERAPIES */}
      <section className="py-24 px-6 sm:px-8 md:px-12 bg-brand-ice">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <SectionLabel>OUR CORE THERAPIES</SectionLabel>
              <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-brand-navy mt-4">Advanced Therapeutic Solutions</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreTherapies.map((therapy, index) => (
              <ScrollReveal key={therapy.slug} delay={index * 0.05}>
                <TherapyCard
                  icon={therapy.icon}
                  title={therapy.title || therapy.slug.toUpperCase().replace('-', ' ')}
                  description={therapy.shortDescription}
                  slug={therapy.slug}
                />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/therapies">
              <button className="px-8 py-4 border-b-2 border-brand-teal text-brand-teal font-dm font-bold text-[11px] uppercase tracking-[.3em] hover:text-brand-navy hover:border-brand-navy transition-all duration-300">
                View All Clinical Protocols
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: CONDITIONS WE SUPPORT */}
      <section className="py-24 px-6 sm:px-8 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <SectionLabel>CLINICAL FOCUS</SectionLabel>
              <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-brand-navy mt-4">Conditions We Support</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 md:gap-8 overflow-visible">
            {supportConditions.map((condition, index) => (
              <ScrollReveal key={condition.title} delay={index * 0.05} className="overflow-visible">
                <div className="flex flex-col items-center text-center p-6 rounded-[30px] border border-brand-ice hover:border-brand-teal/20 hover:bg-brand-ice/30 transition-all duration-300 group overflow-visible">
                  <div className="w-14 h-14 rounded-2xl bg-brand-ice mb-6 flex items-center justify-center text-brand-teal group-hover:scale-110 transition-transform duration-500 overflow-visible">
                    <condition.icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="font-dm font-bold text-[10px] uppercase tracking-widest text-brand-navy leading-none overflow-visible whitespace-pre-wrap">{condition.title}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: HOW IT WORKS */}
      <section className="py-24 px-6 sm:px-8 md:px-12 bg-brand-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-20">
              <SectionLabel className="text-white/40">THE PROCESS</SectionLabel>
              <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-white mt-4">How it works</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative">
            {/* Desktop Connector Line */}
            <div className="hidden lg:block absolute top-[60px] left-20 right-20 h-[1px] bg-white/10" />

            {[
              { num: '01', title: 'Consultation / Free Guidance', desc: 'Starting your path with clarity' },
              { num: '02', title: 'Medical Assessment', desc: 'Evidence-informed evaluations' },
              { num: '03', title: 'Personalized Therapy Plan', desc: 'Protocol tailored to your biology' },
              { num: '04', title: 'Treatment Sessions', desc: 'Scientifically administered care' },
              { num: '05', title: 'Monitoring & Optimization', desc: 'Tracking progress & outcomes' }
            ].map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="relative z-10 flex flex-col items-center text-center lg:text-left lg:items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-cormorant text-2xl font-bold italic text-brand-teal group-hover:border-brand-teal group-hover:bg-brand-teal/10 transition-all duration-500 mb-8">
                    {step.num}
                  </div>
                  <h3 className="font-dm font-bold text-sm uppercase tracking-widest text-white mb-3">{step.title}</h3>
                  <p className="text-white/40 text-[13px] leading-relaxed group-hover:text-white/60 transition-colors uppercase tracking-wider">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: OUR TEAM & STATS */}
      <section className="py-24 px-6 sm:px-8 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <SectionLabel>OUR EXPERTISE</SectionLabel>
                <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-brand-navy mb-8">Led by experienced medical professionals</h2>
                <div className="space-y-6 text-brand-muted text-lg leading-loose mb-10">
                  <p>With over 30 years of clinical expertise, our medical team brings together advanced specialization and integrative thinking to provide evidence-informed therapy protocols.</p>
                  <div className="grid grid-cols-2 gap-12 pt-4">
                    <div ref={statsRef}>
                      <div className="font-cormorant text-5xl text-brand-teal font-bold mb-2">
                        {statsInView && <CountUp end={30} suffix="+" />}
                      </div>
                      <div className="font-dm text-[9px] uppercase tracking-[.3em] font-bold text-brand-navy/40">Years Clinical Expertise</div>
                    </div>
                    <div>
                      <div className="font-cormorant text-5xl text-brand-teal font-bold mb-2">
                        {statsInView && <CountUp end={100} suffix="%" />}
                      </div>
                      <div className="font-dm text-[9px] uppercase tracking-[.3em] font-bold text-brand-navy/40">Evidence Informed</div>
                    </div>
                  </div>
                  <p className="font-italic pt-4 border-l-4 border-brand-teal/20 pl-6 text-brand-navy font-cormorant text-2xl italic">"We are committed to delivering science-backed protocols that ensure patient safety and maximize therapeutic outcomes."</p>
                </div>
                <Link to="/about">
                  <button className="flex items-center gap-3 text-brand-teal group font-dm font-bold text-[11px] uppercase tracking-[.3em]">
                    Meet the Team <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </Link>
              </div>
            </ScrollReveal>
            
            <ScrollReveal variant="fadeUp" delay={0.3}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-brand-ice rounded-[50px] rotate-2 transition-transform group-hover:rotate-0 duration-700" />
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80" 
                  alt="Medical Team" 
                  className="relative rounded-[40px] shadow-2xl transition-all duration-700"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 8: TESTIMONIALS */}
      <section className="py-24 px-6 sm:px-8 md:px-12 bg-brand-ice overflow-hidden">
        <div className="max-w-7xl mx-auto text-center px-4">
          <ScrollReveal>
            <SectionLabel>VOICES OF VITALITY</SectionLabel>
            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-brand-navy mb-16">Patient Experiences</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white p-10 rounded-[35px] shadow-xl shadow-brand-navy/5 border border-white group hover:border-brand-teal/20 transition-all duration-500 flex flex-col justify-between h-full">
                  <div className="font-dm text-4xl text-brand-teal/10 mb-6 select-none">“</div>
                  <p className="text-brand-navy text-lg font-cormorant leading-relaxed italic mb-8 flex-1">"{t.text}"</p>
                  <div className="flex items-center gap-4 border-t border-brand-ice pt-8">
                    <div className="w-10 h-10 rounded-full bg-brand-ice flex items-center justify-center text-brand-teal font-dm text-[11px] font-bold">PT</div>
                    <div>
                      <div className="font-dm font-bold text-[9px] uppercase tracking-widest text-brand-navy">{t.author}</div>
                      <div className="font-dm text-[8px] uppercase tracking-widest text-brand-teal/60 font-bold">Verified Result</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: FINAL CTA */}
      <section className="py-24 px-6 sm:px-8 md:px-12 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0D2137 0%, #0B6E6E 100%)'}}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(11,110,110,0.4),transparent_50%)]" />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [-20, 20, -20]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-[50%] -right-[20%] w-[1000px] h-[1000px] bg-brand-teal/20 rounded-full blur-[150px]" 
          />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 px-4">
          <ScrollReveal>
            <h2 className="font-cormorant text-5xl sm:text-6xl md:text-8xl text-white mb-8 leading-[0.95]">
              Ready to restore <br className="hidden md:block" /> your vitality?
            </h2>
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-16 italic font-dm tracking-wide">Take the first step towards evidence-based health optimization.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-12 py-5 bg-white text-brand-navy font-dm font-bold uppercase tracking-[.25em] text-[12px] rounded-full shadow-2xl shadow-black/20 hover:bg-brand-teal hover:text-white transition-all duration-500"
                >
                  Book Consultation
                </motion.button>
              </Link>
              
              <a href="https://wa.me/919989033686" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-12 py-5 bg-transparent border-2 border-white/20 text-white font-dm font-bold uppercase tracking-[.25em] text-[12px] rounded-full flex items-center justify-center gap-3 hover:bg-white/5 hover:border-white transition-all duration-500"
                >
                  <MessageCircle size={18} /> WhatsApp Us
                </motion.button>
              </a>
            </div>
            
            <div className="mt-20 flex flex-col items-center gap-4">
              <img 
                src="/Almacura_Logo_Transparent.png" 
                alt="ALMACURA" 
                className="h-12 w-auto opacity-45" 
              />
              <span className="font-dm text-[10px] uppercase tracking-[.6em] text-white/30 font-bold whitespace-nowrap">ALMACURA · SECUNDARABAD · HYDERABAD</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SuitabilityModal 
        isOpen={isSuitabilityModalOpen} 
        onClose={() => setIsSuitabilityModalOpen(false)} 
      />
    </div>
  );
}
