import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Activity, Microscope, Heart, Leaf, ArrowDown } from 'lucide-react';
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

  const marqueeText = "HBOT · EECP · PRP · OZONE · PHOTOBIOMODULATION · MOLECULAR HYDROGEN · PAIN MANAGEMENT · ";

  return (
    <div className="bg-brand-black overflow-x-hidden">
      {/* Section 1: Hero */}
      <section className="min-h-screen relative flex items-center justify-center gradient-mesh noise-texture overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/20 to-brand-black"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            className="flex items-center gap-3 font-dm font-light text-xs tracking-[0.4em] uppercase text-brand-teal/70 mb-6 sm:mb-8"
          >
            <span className="w-8 h-px bg-brand-teal/40"></span>
            <span>ALMACURA · HYDERABAD · EST. 2025</span>
            <span className="w-8 h-px bg-brand-teal/40"></span>
          </motion.div>

          <motion.h1
            className="font-cormorant italic mb-4 sm:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.3, duration: shouldReduceMotion ? 0 : 0.8 }}
              className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-brand-white tracking-wide"
            >
              All Paths
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.5, duration: shouldReduceMotion ? 0 : 0.8 }}
              className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gradient-teal tracking-wide"
            >
              To Vitality
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.8 }}
            className="text-brand-muted text-base sm:text-lg md:text-xl leading-relaxed max-w-sm sm:max-w-2xl mx-auto mb-8 sm:mb-12 px-4"
          >
            Advanced diagnostics, regenerative therapies, and longevity medicine designed to restore health and optimize human vitality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 1 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-5 w-full max-w-xs sm:max-w-none mx-auto"
          >
            <CTAButton variant="primary" to="/contact" className="w-full sm:w-auto">
              Book Consultation
            </CTAButton>
            <CTAButton variant="secondary" to="/therapies" className="w-full sm:w-auto">
              Explore Therapies
            </CTAButton>
          </motion.div>
        </div>

        {/* Scrolling Marquee */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-3 sm:py-4 border-t border-brand-border/30">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap font-mono text-brand-dim text-xs sm:text-sm"
          >
            <span>{marqueeText}</span>
            <span>{marqueeText}</span>
            <span>{marqueeText}</span>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Institute Introduction */}
      <section className="py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-12 bg-brand-deep">
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
                <p className="text-brand-white font-dm font-medium">
                  We are not a wellness center. We are a medical institute committed to restoring and optimizing human health.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 3: Clinical Pathway Model */}
      <section className="py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-12 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionLabel>THE ALMACURA MODEL</SectionLabel>
            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-brand-white mb-12 sm:mb-16">
              A Structured Pathway to Vitality
            </h2>
          </ScrollReveal>

          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { num: '01', icon: Microscope, title: 'DIAGNOSTICS', desc: 'Comprehensive assessment first' },
              { num: '02', icon: Heart, title: 'LONGEVITY', desc: 'Biological age optimization' },
              { num: '03', icon: Activity, title: 'THERAPIES', desc: 'Evidence-based interventions' },
              { num: '04', icon: Leaf, title: 'NUTRITION', desc: 'Metabolic correction support' }
            ].map((step, index) => (
              <div key={step.num}>
                <ScrollReveal delay={index * 0.1}>
                  <div className="relative">
                    <div className="glass-card p-6 sm:p-8 text-center group hover:border-brand-teal transition-all duration-300">
                      <div className="font-mono text-brand-teal text-sm mb-4">{step.num}</div>
                      <step.icon className="mx-auto mb-4 text-brand-teal" size={40} strokeWidth={1.5} />
                      <h3 className="font-dm font-semibold text-brand-white text-base sm:text-lg mb-2 uppercase tracking-wider">
                        {step.title}
                      </h3>
                      <p className="text-brand-muted text-sm">{step.desc}</p>
                    </div>
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-brand-teal/30">
                        <ArrowRight className="absolute -right-2 -top-2 text-brand-teal/30" size={16} />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
                {index < 3 && (
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
      <section className="py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-12 bg-brand-deep">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionLabel>CORE PILLARS</SectionLabel>
            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-brand-white mb-12 sm:mb-16">
              The Foundation of Our Practice
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
            {[
              {
                icon: Microscope,
                title: 'Diagnostics',
                desc: 'Comprehensive biomarker assessment, metabolic panels, and functional testing before any therapeutic intervention.',
                link: '/diagnostics'
              },
              {
                icon: Heart,
                title: 'Longevity',
                desc: 'Biological age optimization through targeted therapies designed to enhance cellular function and extend health span.',
                link: '/longevity'
              },
              {
                icon: Activity,
                title: 'Therapies',
                desc: 'Seven advanced medical therapies including HBOT, EECP, PRP, Ozone, Photobiomodulation, Hydrogen, and Pain Management.',
                link: '/therapies'
              }
            ].map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 0.1}>
                <div className="glass-card p-6 sm:p-8 h-full group hover:border-brand-teal transition-all duration-300">
                  <pillar.icon className="mb-4 sm:mb-6 text-brand-teal" size={40} strokeWidth={1.5} />
                  <h3 className="font-cormorant text-2xl sm:text-3xl text-brand-white mb-3 sm:mb-4">{pillar.title}</h3>
                  <p className="text-brand-muted leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{pillar.desc}</p>
                  <a
                    href={pillar.link}
                    className="inline-flex items-center gap-2 text-brand-teal hover:text-brand-tealLight transition-colors text-sm font-medium"
                  >
                    Learn More <ArrowRight size={16} />
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="glass-card p-6 sm:p-8 bg-brand-card/40 border-brand-teal/30">
              <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
                <Leaf className="text-brand-green flex-shrink-0" size={40} strokeWidth={1.5} />
                <div className="flex-1">
                  <h3 className="font-cormorant text-2xl sm:text-3xl text-brand-white mb-3 sm:mb-4">Nutrition</h3>
                  <p className="text-brand-muted leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                    Clinical nutrition protocols that support all three pillars. Not diet advice — targeted metabolic intervention based on diagnostic findings to optimize therapeutic outcomes.
                  </p>
                  <a
                    href="/nutrition"
                    className="inline-flex items-center gap-2 text-brand-green hover:text-brand-teal transition-colors text-sm font-medium"
                  >
                    View Nutrition Protocols <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5: Signature Therapies Grid */}
      <section className="py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-12 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionLabel>SIGNATURE THERAPIES</SectionLabel>
            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-brand-white mb-12 sm:mb-16">
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
      <section ref={statsRef} className="py-12 sm:py-16 px-6 sm:px-8 md:px-12 bg-brand-deep border-y border-brand-gold/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: 30, suffix: '+', label: 'Years Clinical Experience' },
              { value: 7, suffix: '', label: 'Advanced Therapies' },
              { value: 4, suffix: '', label: 'Diagnostic Pathways' },
              { value: 1, suffix: '', label: 'Integrated Protocol' }
            ].map((stat, index) => (
              <div key={index} className="text-center border-brand-border" style={{
                borderRight: index % 2 === 0 && index < 2 ? '1px solid' : 'none',
                borderBottom: index < 2 ? '1px solid' : 'none'
              }}>
                <div className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-brand-white mb-2">
                  {statsInView && <CountUp end={stat.value} duration={2} delay={index * 0.2} />}
                  {stat.suffix}
                </div>
                <div className="font-mono text-brand-teal text-[10px] sm:text-xs uppercase tracking-wider px-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Founder Preview */}
      <section className="py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-12 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal variant="fadeUp">
              <div className="w-64 h-72 bg-brand-card border border-brand-teal/20 rounded-sm flex flex-col items-center justify-center gap-4 mx-auto">
                <div className="w-16 h-16 rounded-full border border-brand-teal/40 flex items-center justify-center">
                  <span className="font-cormorant text-2xl italic text-brand-teal/60">DR</span>
                </div>
                <div className="text-center">
                  <p className="font-cormorant text-lg text-brand-white tracking-wide">
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
                <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-brand-white mb-3 sm:mb-4">
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
                  className="inline-flex items-center gap-2 text-brand-teal hover:text-brand-tealLight transition-colors font-medium text-sm sm:text-base"
                >
                  Read Full Profile <ArrowRight size={20} />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 8: FAQ Preview */}
      <section className="py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-12 bg-brand-deep">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionLabel>FREQUENTLY ASKED</SectionLabel>
            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-brand-white mb-12 sm:mb-16">
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
                    <span className="font-dm font-medium text-brand-white text-sm sm:text-base">{faq.question}</span>
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
      <section className="py-16 sm:py-20 md:py-24 pb-20 px-6 sm:px-8 md:px-12 bg-gradient-to-br from-brand-teal/10 via-brand-black to-brand-black relative overflow-visible">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-teal to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 overflow-visible">
          <ScrollReveal>
            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-white mb-6 sm:mb-8 overflow-visible">
              Begin Your Journey to Vitality
            </h2>
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-6 text-brand-muted mb-8 sm:mb-12 font-mono text-xs sm:text-sm">
              <div className="flex items-center justify-center gap-2">
                <span className="text-brand-teal">Phone:</span>
                <span>+91 9989033686</span>
              </div>
              <div className="hidden sm:block text-brand-dim">·</div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-brand-teal">WhatsApp:</span>
                <span>+91 9989033686</span>
              </div>
              <div className="hidden sm:block text-brand-dim">·</div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-brand-teal">Email:</span>
                <span className="break-all">doctorkvsreddy@yahoo.com</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 w-full max-w-xs sm:max-w-none mx-auto">
              <CTAButton variant="primary" to="/contact" className="w-full sm:w-auto">
                Book Consultation
              </CTAButton>
              <CTAButton variant="secondary" to="/contact" className="w-full sm:w-auto">
                Contact Us
              </CTAButton>
            </div>
            <div className="font-mono text-brand-dim text-[10px] sm:text-xs uppercase tracking-wider">
              Monday–Saturday · 9:00 AM – 6:00 PM
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
