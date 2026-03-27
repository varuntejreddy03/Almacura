import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Microscope, Heart, Leaf, ArrowDown, Shield, Target, Waves, Zap, ShieldCheck, Brain, Sparkles } from 'lucide-react';
import { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';
import CTAButton from '../components/CTAButton';
import TherapyCard from '../components/TherapyCard';
import { therapyList } from '../data/therapiesData';

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const shouldReduceMotion = useReducedMotion();

  const faqs = [
    {
      question: "Are these therapies medically approved?",
      answer: "Yes. All therapies offered at ALMACURA are evidence-based and administered under medical supervision. We follow established clinical protocols and safety standards."
    },
    {
      question: "How many sessions are required?",
      answer: "Session requirements vary by therapy and individual response. HBOT typically requires 20-40 sessions, EECP requires 35 sessions, while PRP may need 3-6 sessions. Your personalized protocol will be determined after diagnostic assessment."
    },
    {
      question: "Are the therapies safe?",
      answer: "Yes. All therapies are non-invasive or minimally invasive, performed under medical supervision with continuous monitoring. Pre-treatment assessments ensure patient safety and suitability."
    },
    {
      question: "What diagnostics are needed before starting?",
      answer: "Each therapy requires specific pre-assessments. Common requirements include blood biomarkers, metabolic panels, cardiac screening, and functional assessments. Your complete workup will be determined during initial consultation."
    }
  ];

  const marqueeItems = [
    'HBOT', 'EECP', 'PRP', 'OZONE', 'PHOTOBIOMODULATION', 
    'MOLECULAR HYDROGEN', 'PAIN MANAGEMENT', 'REGENERATIVE GYNAECOLOGY', 
    'METABOLIC OPTIMISATION', 'CELLULAR HEALTH'
  ];

  return (
    <div className="bg-brand-white overflow-x-hidden">
      {/* Section 1: Hero */}
      <section 
        className="relative flex flex-col items-center overflow-hidden px-4 sm:px-6 min-h-screen"
        style={{
          background: 'linear-gradient(135deg, #E8F5F5 0%, #EBF6F8 35%, #F0F9FF 65%, #E8F5F2 100%)'
        }}
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Teal glow top-right */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at 85% 15%, rgba(11,110,110,0.12) 0%, transparent 55%)'
            }}
          />
          {/* Blue glow bottom-left */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at 10% 90%, rgba(26,143,191,0.08) 0%, transparent 50%)'
            }}
          />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto w-full flex flex-col items-center pt-48 pb-64">
          <motion.h1
            className="font-dm tracking-tight mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.3, duration: shouldReduceMotion ? 0 : 0.8 }}
              className="block leading-none"
              style={{
                fontSize: 'clamp(40px, 8vw, 76px)',
                color: '#0D2137',
                fontWeight: 700
              }}
            >
              All Paths
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.5, duration: shouldReduceMotion ? 0 : 0.8 }}
              className="block leading-none mt-2"
              style={{
                fontSize: 'clamp(40px, 8vw, 76px)',
                color: '#0B6E6E',
                fontWeight: 700,
                fontStyle: 'italic',
                textShadow: '0 2px 20px rgba(11,110,110,0.05)'
              }}
            >
              To Vitality
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.8 }}
            className="mx-auto px-4"
            style={{
              fontSize: '17px',
              color: '#4A6477',
              lineHeight: 1.8,
              maxWidth: '650px',
              marginTop: '12px'
            }}
          >
            Treating Disease. Restoring Vitality. Optimising Healthspan. <br className="hidden md:block" />
            <span className="text-[13px] opacity-70 font-dm uppercase tracking-[0.2em] mt-5 block text-brand-teal font-bold">
              Integrative Medicine & Healthspan Optimisation
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 1 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-brand-navy text-white font-dm font-bold uppercase tracking-[0.2em] text-[12px] rounded-full shadow-[0_15px_35px_rgba(13,33,55,0.25)] hover:shadow-brand-teal/40 hover:bg-brand-teal transition-all duration-500"
              >
                Book Consultation
              </motion.button>
            </Link>
            
            <Link to="/therapies">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-[1.5px] border-brand-teal text-brand-teal font-dm font-bold uppercase tracking-[0.2em] text-[12px] rounded-full hover:bg-brand-teal/5 transition-all duration-500 bg-white/40 backdrop-blur-sm"
              >
                Explore Therapies
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Cinematic Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer group"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-teal/80 to-transparent group-hover:h-16 transition-all duration-700"></div>
          <span className="font-dm text-[9px] uppercase tracking-[0.4em] text-brand-teal font-bold opacity-60 group-hover:opacity-100 transition-opacity">Scroll to Explore</span>
          <div className="relative w-6 h-10 border-[1.5px] border-brand-teal/40 rounded-full flex justify-center p-1.5 group-hover:border-brand-teal/80 transition-all duration-500">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-brand-teal rounded-full"
            />
          </div>
        </motion.div>

        {/* Upgraded Scrolling Ticker Bar - Glassmorphism */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-20">
          <div className="relative bg-white/60 backdrop-blur-3xl border-t border-brand-teal/10 py-5 shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
            <motion.div
              animate={{ x: [0, -1500] }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="flex whitespace-nowrap"
            >
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-10 px-5">
                  {marqueeItems.map((text) => (
                    <div key={text} className="flex items-center gap-10">
                      <span className="font-dm text-[11px] font-bold tracking-[0.25em] uppercase text-brand-navy/60 hover:text-brand-teal transition-colors duration-300">
                        {text}
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-teal/30"></div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Institute Introduction */}
      <section className="py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-12 bg-brand-ice">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <ScrollReveal variant="fadeUp">
              <div className="relative">
                <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-cormorant italic text-brand-teal leading-tight">
                  "We believe health should be preserved, optimized, and restored — not merely treated."
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.2}>
              <div className="space-y-4 sm:space-y-6 text-brand-muted leading-loose lg:border-l lg:border-brand-teal lg:pl-8">
                <p>
                  ALMACURA is an integrative medical institute dedicated to health span optimization through advanced diagnostics and evidence-based regenerative therapies. We do not treat symptoms in isolation. We assess, identify root causes, and intervene with precision.
                </p>
                <p>
                  Our approach combines modern diagnostic medicine with innovative therapeutic technologies — Hyperbaric Oxygen Therapy, Enhanced External Counter Pulsation, Platelet-Rich Plasma, Ozone Therapy, Photobiomodulation, Molecular Hydrogen, and targeted Pain Management.
                </p>
                <p>
                  Every therapy is preceded by comprehensive diagnostic workup. Every protocol is personalized. Every outcome is measured. This is clinical medicine designed for long-term vitality, not short-term relief.
                </p>
                <p className="text-brand-navy font-dm font-medium">
                  We are not a wellness center. We are a medical institute committed to restoring and optimizing human health.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 3: Clinical Pathway Model */}
      <section className="py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-12 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionLabel>THE ALMACURA MODEL</SectionLabel>
            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-brand-navy mb-12 sm:mb-16">
              A Structured Pathway to Vitality
            </h2>
          </ScrollReveal>

          <div className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {[
              { num: '01', icon: Microscope, title: 'ASSESSMENT', desc: 'Structured evaluation first' },
              { num: '02', icon: Activity, title: 'DIAGNOSIS', desc: 'Identifying root causes' },
              { num: '03', icon: Heart, title: 'TREATMENT', desc: 'Integrative clinical care' },
              { num: '04', icon: Shield, title: 'RESTORATION', desc: 'Functional recovery focus' },
              { num: '05', icon: Target, title: 'HEALTHSPAN', desc: 'Long-term vitality support' }
            ].map((step, index) => (
              <div key={step.num}>
                <ScrollReveal delay={index * 0.1}>
                  <div className="relative">
                    <div className="glass-card p-6 sm:p-8 text-center group hover:border-brand-teal transition-all duration-300">
                      <div className="font-mono text-brand-teal text-sm mb-4">{step.num}</div>
                      <step.icon className="mx-auto mb-4 text-brand-teal" size={40} strokeWidth={1.5} />
                      <h3 className="font-dm font-semibold text-brand-navy text-base sm:text-lg mb-2 uppercase tracking-wider">
                        {step.title}
                      </h3>
                      <p className="text-brand-muted text-sm">{step.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
                {index < 4 && (
                  <div className="flex md:hidden justify-center py-4">
                    <ArrowDown className="text-brand-teal/30" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Three Pillars + Nutrition */}
      <section className="py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-12 bg-brand-ice">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionLabel>CORE PILLARS</SectionLabel>
            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-brand-navy mb-12 sm:mb-16">
              The Foundation of Our Practice
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
            {[
              {
                icon: Activity,
                title: 'Integrative Medicine',
                desc: 'For patients with existing medical conditions. Diagnosis → Treatment → Recovery.',
                link: '/therapies'
              },
              {
                icon: Heart,
                title: 'Healthspan Optimisation',
                desc: 'For individuals seeking long-term vitality. Assessment → Optimisation → Prevention.',
                link: '/longevity'
              },
              {
                icon: Shield,
                title: 'Gynaecology',
                desc: 'Focusing on women’s hormonal, functional, and pelvic healthy non-invasively.',
                link: '/gynaecology'
              }
            ].map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal key={pillar.title} delay={index * 0.1}>
                  <div className="glass-card p-6 sm:p-8 h-full group hover:border-brand-teal transition-all duration-300">
                    <Icon className="mb-4 sm:mb-6 text-brand-teal" size={40} strokeWidth={1.5} />
                    <h3 className="font-cormorant text-2xl sm:text-3xl text-brand-navy mb-3 sm:mb-4">{pillar.title}</h3>
                    <p className="text-brand-muted leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{pillar.desc}</p>
                    <Link
                      to={pillar.link}
                      className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-teal transition-colors text-sm font-medium"
                    >
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="glass-card p-6 sm:p-8 bg-brand-ice border-brand-teal/30">
              <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
                <Leaf className="text-brand-green flex-shrink-0" size={40} strokeWidth={1.5} />
                <div className="flex-1">
                  <h3 className="font-cormorant text-2xl sm:text-3xl text-brand-navy mb-3 sm:mb-4">Nutrition</h3>
                  <p className="text-brand-muted leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                    Clinical nutrition protocols that support all three pillars. Not diet advice — targeted metabolic intervention based on diagnostic findings to optimize therapeutic outcomes.
                  </p>
                  <a
                    href="/nutrition"
                    className="inline-flex items-center gap-2 text-brand-teal hover:text-brand-blue transition-colors text-sm font-medium"
                  >
                    View Nutrition Protocols <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4.5: Vitality Axis */}
      <section className="py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionLabel>THE VITALITY AXIS</SectionLabel>
            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-brand-navy mb-8">
              The Science of Vitality
            </h2>
            <p className="text-brand-muted text-lg max-w-2xl mb-12">
              Health depends on interconnected physiological systems. All therapies at ALMACURA are designed to restore and optimise these systems.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: 'Circulation', icon: Activity },
              { title: 'Oxygen Delivery', icon: Waves },
              { title: 'Cellular Energy', icon: Zap },
              { title: 'Inflammation Balance', icon: ShieldCheck },
              { title: 'Gut Health', icon: Heart },
              { title: 'Neuro-Emotional', icon: Brain },
              { title: 'Hormonal Balance', icon: Sparkles }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={index * 0.05}>
                  <div className="flex items-center gap-4 p-4 rounded-sm border border-brand-teal/10 hover:border-brand-teal/30 hover:bg-brand-ice/30 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/05 flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <span className="font-dm font-medium text-brand-navy text-sm uppercase tracking-wide">{item.title}</span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4.6: Programs */}
      <section className="py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-12 bg-brand-ice">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionLabel>STRUCTURED PROGRAMS</SectionLabel>
            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-brand-navy mb-16">
              Clinical Programs for Restoration
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Integrative Medicine',
                programs: ['Cardiac Recovery & Circulation', 'Diabetes Complication Recovery', 'Pain Recovery Program']
              },
              {
                title: 'Healthspan Optimisation',
                programs: ['Vitality & Energy Restoration', 'Executive Healthspan Optimisation', 'Preventive Care Program']
              },
              {
                title: 'Women’s Health',
                programs: ['Hormonal Balance Program', 'Pelvic Health Program', 'Menopause Support Program']
              }
            ].map((category, index) => (
              <ScrollReveal key={category.title} delay={index * 0.1}>
                <div className="glass-card p-8 h-full bg-white">
                  <h3 className="font-cormorant text-2xl text-brand-teal mb-6 italic underline underline-offset-8 decoration-brand-teal/20">{category.title}</h3>
                  <ul className="space-y-4">
                    {category.programs.map(program => (
                      <li key={program} className="flex items-start gap-3 group translate-z-0">
                        <ArrowRight size={14} className="text-brand-teal mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                        <span className="text-brand-muted text-[15px] leading-tight group-hover:text-brand-navy transition-colors">{program}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-brand-teal/10">
                    <Link to="/contact" className="text-brand-teal font-mono text-[11px] uppercase tracking-widest font-bold flex items-center gap-2 hover:gap-3 transition-all">
                      Enquire Now <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Signature Therapies Grid */}
      <section className="py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionLabel>SIGNATURE THERAPIES</SectionLabel>
            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-brand-navy mb-12 sm:mb-16">
              Advanced Medical Therapies
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {therapyList.map((therapy, index) => (
              <ScrollReveal key={therapy.slug} delay={index * 0.05} className={index === 6 ? 'lg:col-start-2 lg:col-span-1' : ''}>
                <TherapyCard
                  icon={therapy.icon}
                  title={therapy.slug.toUpperCase().replace('-', ' ')}
                  description={therapy.shortDescription}
                  slug={therapy.slug}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Stats / Credibility Bar */}
      <section ref={statsRef} className="py-12 sm:py-16 px-6 sm:px-8 md:px-12" style={{background: 'linear-gradient(135deg, #0B6E6E, #0D2137)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: 30, suffix: '+', label: 'Years Clinical Experience' },
              { value: 7, suffix: '', label: 'Advanced Therapies' },
              { value: 4, suffix: '', label: 'Diagnostic Pathways' },
              { value: 1, suffix: '', label: 'Integrated Protocol' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-white mb-2">
                  {statsInView && <CountUp end={stat.value} duration={2} delay={index * 0.2} />}
                  {stat.suffix}
                </div>
                <div className="font-mono text-white/70 text-[10px] sm:text-xs uppercase tracking-wider px-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Founder Preview */}
      <section className="py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-12 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal variant="fadeUp">
              <div className="w-64 h-72 bg-brand-white border border-brand-teal/20 rounded-sm flex flex-col items-center justify-center gap-4 mx-auto">
                <div className="w-16 h-16 rounded-full border border-brand-teal/40 flex items-center justify-center">
                  <span className="font-cormorant text-2xl italic text-brand-teal/60">DR</span>
                </div>
                <div className="text-center">
                  <p className="font-cormorant text-lg text-brand-navy tracking-wide">
                    Vijay Shekar Reddy
                  </p>
                  <p className="font-mono text-[10px] text-brand-teal tracking-[0.2em] mt-1 uppercase">
                    MBBS · MS (Surgery)
                  </p>
                  <p className="font-mono text-[10px] text-brand-muted tracking-[0.12em] mt-2 uppercase">
                    30+ Years Clinical Experience
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.2}>
              <div>
                <SectionLabel>FOUNDER & DIRECTOR</SectionLabel>
                <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-brand-navy mb-3 sm:mb-4">
                  Dr. Vijay Shekar Reddy
                </h2>
                <div className="font-mono text-brand-teal text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6">
                  MBBS · MS (General Surgery)
                </div>
                <div className="space-y-3 sm:space-y-4 text-brand-muted leading-loose mb-6 sm:mb-8 text-sm sm:text-base">
                  <p>
                    With over 30 years of clinical experience, Dr. Reddy has dedicated his career to integrative medicine and health span optimization. His vision extends beyond conventional treatment paradigms to embrace innovative therapeutic technologies.
                  </p>
                  <p>
                    He founded ALMACURA to create a medical institute where diagnostics guide therapy, where evidence informs protocol, and where patient outcomes are measured and optimized.
                  </p>
                </div>
                <div className="border-l-2 border-brand-teal pl-4 sm:pl-6 mb-6 sm:mb-8">
                  <p className="font-cormorant italic text-xl sm:text-2xl text-brand-teal leading-relaxed">
                    "To create a medical institute that integrates modern diagnostics with innovative therapies — improving long-term health outcomes for every patient."
                  </p>
                </div>
                <a
                  href="/founder"
                  className="inline-flex items-center gap-2 text-brand-teal hover:text-brand-blue transition-colors font-medium text-sm sm:text-base"
                >
                  Read Full Profile <ArrowRight size={20} />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 8: FAQ Preview */}
      <section className="py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-12 bg-brand-ice">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionLabel>FREQUENTLY ASKED</SectionLabel>
            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-brand-navy mb-12 sm:mb-16">
              Common Questions
            </h2>
          </ScrollReveal>

          <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="glass-card overflow-hidden">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                    className="w-full px-6 sm:px-8 py-5 sm:py-6 flex justify-between items-start gap-4 text-left hover:bg-brand-border/20 transition-colors min-h-[44px]"
                  >
                    <span className="font-dm font-medium text-brand-navy text-sm sm:text-base">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: activeAccordion === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-brand-teal flex-shrink-0 mt-1"
                    >
                      <ArrowRight size={18} />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: activeAccordion === index ? 'auto' : 0,
                      opacity: activeAccordion === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-8 pb-5 sm:pb-6 text-brand-muted leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center">
              <CTAButton variant="secondary" to="/faq" className="w-full sm:w-auto">
                View All FAQs
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 9: Contact / CTA Banner */}
      <section className="py-16 sm:py-20 md:py-24 pb-20 px-6 sm:px-8 md:px-12 relative overflow-visible" style={{background: 'linear-gradient(135deg, #0B6E6E 0%, #1A8FBF 100%)'}}>
        <div className="max-w-4xl mx-auto text-center relative z-10 overflow-visible">
          <ScrollReveal>
            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 sm:mb-8 overflow-visible">
              Begin Your Journey to Vitality
            </h2>
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-6 text-white/90 mb-8 sm:mb-12 font-mono text-xs sm:text-sm">
              <div className="flex items-center justify-center gap-2">
                <span className="text-white font-semibold">Phone:</span>
                <span>+91 9989033686</span>
              </div>
              <div className="hidden sm:block text-white/50">·</div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-white font-semibold">WhatsApp:</span>
                <span>+91 9989033686</span>
              </div>
              <div className="hidden sm:block text-white/50">·</div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-white font-semibold">Email:</span>
                <span className="break-all">doctorkvsreddy@yahoo.com</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 w-full max-w-xs sm:max-w-none mx-auto">
              <CTAButton variant="primary" to="/contact" className="w-full sm:w-auto">
                Book Consultation
              </CTAButton>
              <Link to="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-white border-2 border-white text-brand-teal font-dm font-semibold uppercase tracking-widest text-sm rounded-sm hover:bg-white/10 hover:text-white transition-all duration-300"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
            <div className="font-mono text-white/70 text-[10px] sm:text-xs uppercase tracking-wider">
              Monday–Saturday · 9:00 AM – 6:00 PM
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
