import { motion } from 'framer-motion';
import { Sparkles, Activity, Shield, Droplets, Target, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';
import CTAButton from '../components/CTAButton';

export default function Gynaecology() {
  const conditions = [
    {
      category: 'Hormonal Health',
      items: ['PCOS / PCOD', 'Hormonal Imbalance', 'Perimenopause / Menopause']
    },
    {
      category: 'Functional Health',
      items: ['Stress Urinary Incontinence', 'Pelvic Floor Weakness', 'Early Cystocele']
    },
    {
      category: 'Regenerative & Intimate Health',
      items: ['Vaginal Dryness', 'Reduced Tissue Tone', 'Discomfort']
    }
  ];

  const therapies = [
    {
      name: 'HIFEM',
      desc: 'High-Intensity Focused Electromagnetic technology to strengthen pelvic floor muscles and improve continence non-invasively.',
      icon: Target
    },
    {
      name: 'HIFU',
      desc: 'High-Intensity Focused Ultrasound for tissue tightening and structural support in selected clinical cases.',
      icon: Shield
    },
    {
      name: 'Regenerative Yoga Therapy',
      desc: 'Core component of the Almacura model, focused on stress regulation and functional recovery of pelvic health.',
      icon: Activity
    }
  ];

  return (
    <div className="bg-brand-white pt-24">
      {/* Hero Section */}
      <section 
        className="min-h-[80vh] relative flex items-center justify-center px-6"
        style={{
          background: 'linear-gradient(135deg, #FDF9F6 0%, #FAF2EB 50%, #F9F1E8 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <SectionLabel color="#DCC2A1">FUNCTIONAL & REGENERATIVE GYNAECOLOGY</SectionLabel>
            <h1 className="font-cormorant italic text-6xl md:text-8xl text-brand-navy mb-8">
              Soft Clinical. <br />
              <span className="text-brand-gold-soft">Functional Restoration.</span>
            </h1>
            <p className="text-brand-muted text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto font-dm">
              Non-surgical, functional, and regenerative approaches focusing on hormonal, pelvic, and tissue health for women.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 -right-64 w-128 h-128 bg-brand-gold-soft/05 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-64 -left-64 w-128 h-128 bg-brand-gold-soft/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 bg-brand-white border-y border-brand-beige">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal variant="fadeUp">
              <div className="space-y-8">
                <SectionLabel color="#DCC2A1">THE VERTICAL</SectionLabel>
                <h2 className="font-cormorant text-4xl md:text-6xl text-brand-navy leading-tight">
                  Addressing the Gaps in Traditional Care
                </h2>
                <div className="space-y-6 text-brand-muted font-dm text-lg leading-relaxed">
                  <p>
                    Functional & Regenerative Gynaecology at ALMACURA bridges the gap between conventional treatments and patient wellness. We focus on non-invasive, structural, and hormonal restoration to improve quality of life.
                  </p>
                  <p>
                    Rather than just addressing symptoms, we assess underlying hormonal balance, metabolic health, and tissue integrity using a multi-dimensional clinical approach.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.2}>
              <div className="bg-brand-beige p-8 md:p-12 rounded-sm border border-brand-gold-soft/20 ring-1 ring-brand-gold-soft/10 ring-offset-8 ring-offset-white">
                <h3 className="font-mono text-brand-gold-soft text-sm uppercase mb-8 tracking-widest">Target Conditions</h3>
                <div className="space-y-8">
                  {conditions.map((group) => (
                    <div key={group.category}>
                      <h4 className="font-dm font-semibold text-brand-navy text-sm uppercase mb-3 tracking-wider">{group.category}</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                        {group.items.map(item => (
                          <li key={item} className="flex items-center gap-2 text-brand-muted text-sm">
                            <span className="w-1 h-1 rounded-full bg-brand-gold-soft"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pathway Section */}
      <section className="py-24 px-6 bg-brand-ice">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <ScrollReveal>
            <SectionLabel color="#DCC2A1">CLINICAL PATHWAY</SectionLabel>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-navy mb-12">
              Three-Stage Restoration Protocol
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                step: '01', 
                title: 'Hormonal & Metabolic Assessment', 
                desc: 'Identifying underlying imbalances to personalize the clinical roadmap.' 
              },
              { 
                step: '02', 
                title: 'Functional Restoration', 
                desc: 'Pelvic muscle strengthening and neuromuscular support via HIFEM.' 
              },
              { 
                step: '03', 
                title: 'Tissue Regeneration', 
                desc: 'Improving tissue tone and enhancing support structures utilizing HIFU and supportive therapies.' 
              }
            ].map((path, index) => (
              <ScrollReveal key={path.step} delay={index * 0.1}>
                <div className="relative p-8 bg-white/50 border border-brand-gold-soft/20 hover:bg-white hover:border-brand-gold-soft/40 transition-all duration-300">
                  <div className="font-mono text-brand-gold-soft text-sm mb-4">{path.step}</div>
                  <h3 className="font-cormorant text-2xl text-brand-navy mb-4 font-semibold italic">{path.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{path.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Therapies Grid */}
      <section className="py-24 px-6 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionLabel color="#DCC2A1">ADVANCED THERAPIES</SectionLabel>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-navy mb-16">
              Precision Technologies
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-12">
            {therapies.map((therapy, index) => (
              <ScrollReveal key={therapy.name} delay={index * 0.1}>
                <div className="group h-full flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full border border-brand-gold-soft/40 flex items-center justify-center mb-8 group-hover:bg-brand-gold-soft group-hover:border-brand-gold-soft transition-all duration-300 ease-out">
                    <therapy.icon className="text-brand-gold-soft group-hover:text-white transition-colors duration-300" size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-dm font-semibold text-brand-navy text-xl mb-4 tracking-wide uppercase">{therapy.name}</h3>
                  <p className="text-brand-muted leading-relaxed text-sm mb-8">
                    {therapy.desc}
                  </p>
                  <motion.button 
                    whileHover={{ gap: '12px' }}
                    className="mt-auto flex items-center gap-2 text-brand-gold-soft font-mono text-xs uppercase tracking-widest hover:text-brand-gold transition-colors"
                  >
                    Clinical Insight <ArrowRight size={14} />
                  </motion.button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 px-6 relative" style={{ background: 'linear-gradient(rgba(220,194,161,0.05) 0%, rgba(220,194,161,0.15) 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-cormorant text-4xl md:text-6xl text-brand-navy mb-8">
              Start Your Journey to Recovery
            </h2>
            <p className="text-brand-muted text-lg font-dm mb-12">
              Every specialized program at ALMACURA begins with a structured clinical consultation to ensure the highest standard of personalized care.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <CTAButton variant="primary" to="/contact" className="w-full sm:w-auto">Book Consultation</CTAButton>
              <WhatsAppButton />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

// Internal WhatsApp component for quick integration
function WhatsAppButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="px-6 py-4 bg-white border border-brand-gold-soft/30 text-brand-gold-soft font-dm uppercase tracking-widest text-[11px] font-bold rounded-sm shadow-sm hover:shadow-md transition-all duration-300"
      onClick={() => window.open('https://wa.me/919989033686', '_blank')}
    >
      WhatsApp Consultation
    </motion.button>
  );
}
