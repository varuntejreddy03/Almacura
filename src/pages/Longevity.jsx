import { Clock, TrendingDown, Activity, Shield, Users, Briefcase, Heart as HeartIcon, User } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';
import CTAButton from '../components/CTAButton';

export default function Longevity() {
  const [expandedStep, setExpandedStep] = useState(null);

  const protocolSteps = [
    {
      num: 1,
      therapy: 'HBOT',
      title: 'Hyperbaric Oxygen Therapy',
      description: 'Enhanced oxygen delivery and tissue regeneration',
      detail: 'Increases tissue oxygenation, promotes cellular repair, enhances mitochondrial function, and accelerates healing processes at the cellular level.'
    },
    {
      num: 2,
      therapy: 'Photobiomodulation',
      title: 'Light-Based Mitochondrial Therapy',
      description: 'Mitochondrial energy optimization',
      detail: 'Stimulates ATP production, reduces oxidative stress, enhances cellular energy metabolism, and supports healthy aging at the mitochondrial level.'
    },
    {
      num: 3,
      therapy: 'Hydrogen Therapy',
      title: 'Molecular Hydrogen',
      description: 'Selective antioxidant protection',
      detail: 'Neutralizes harmful free radicals, reduces systemic inflammation, protects cellular structures, and supports longevity pathways.'
    },
    {
      num: 4,
      therapy: 'Ozone Therapy',
      title: 'Medical Ozone',
      description: 'Oxygen metabolism enhancement',
      detail: 'Improves oxygen utilization, modulates immune function, enhances circulation, and supports cellular detoxification processes.'
    },
    {
      num: 5,
      therapy: 'Nutrition Protocol',
      title: 'Metabolic Nutrition Support',
      description: 'Cellular health optimization',
      detail: 'Targeted nutritional intervention based on biomarker assessment to support cellular function, reduce inflammation, and optimize metabolic health.'
    }
  ];

  const patientProfiles = [
    {
      icon: Briefcase,
      title: 'Performance Optimization',
      description: 'Professionals seeking cognitive enhancement, energy optimization, and sustained peak performance.'
    },
    {
      icon: HeartIcon,
      title: 'Metabolic Risk Management',
      description: 'Patients with pre-diabetes, cardiovascular risk factors, or metabolic syndrome seeking preventive intervention.'
    },
    {
      icon: Shield,
      title: 'Preventive Healthcare',
      description: 'Health-conscious individuals investing in long-term vitality and disease prevention.'
    },
    {
      icon: User,
      title: 'Healthy Aging',
      description: 'Aging population seeking to maintain function, vitality, and quality of life through evidence-based interventions.'
    }
  ];

  const followUpCards = [
    {
      title: 'Biomarker Tracking',
      description: 'Regular assessment of inflammatory markers, oxidative stress indicators, and metabolic parameters.'
    },
    {
      title: 'Clinical Response Evaluation',
      description: 'Functional capacity testing, symptom tracking, and quality of life metrics throughout protocol.'
    },
    {
      title: 'Periodic Reassessment',
      description: 'Comprehensive diagnostic re-evaluation to measure biological age changes and protocol effectiveness.'
    }
  ];

  return (
    <div className="bg-brand-black pt-24">
      {/* Hero */}
      <section className="min-h-[70vh] relative flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-brand-teal/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <SectionLabel>BIOLOGICAL AGE OPTIMIZATION</SectionLabel>
            <h1 className="font-cormorant text-6xl md:text-8xl mb-8">
              <span className="text-brand-white">Your Biological Age</span>
              <br />
              <span className="text-gradient-teal italic">Can Be Different</span>
            </h1>
            <p className="text-brand-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Chronological age is fixed. Biological age is modifiable. Our longevity protocol targets cellular function, mitochondrial health, and systemic optimization.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Biological Age Explainer */}
      <section className="py-24 px-6 bg-brand-deep">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal variant="fadeLeft">
              <div className="relative">
                {/* Visual Diagram */}
                <div className="glass-card p-12">
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-brand-muted text-sm uppercase">Chronological Age</span>
                        <span className="font-cormorant text-3xl text-brand-white">50</span>
                      </div>
                      <div className="h-3 bg-brand-border rounded-full overflow-hidden">
                        <div className="h-full bg-brand-dim" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <TrendingDown className="text-brand-teal" size={32} />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-brand-teal text-sm uppercase">Biological Age (Target)</span>
                        <span className="font-cormorant text-3xl text-brand-teal">38</span>
                      </div>
                      <div className="h-3 bg-brand-border rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-brand-teal to-brand-tealLight" style={{ width: '38%' }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-brand-border">
                    <div className="font-mono text-brand-teal text-xs uppercase tracking-wider mb-2">
                      Optimization Potential
                    </div>
                    <div className="font-cormorant text-4xl text-brand-white">
                      12 Years
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.2}>
              <div className="space-y-6 text-brand-muted leading-relaxed">
                <p>
                  Biological age reflects the functional state of your cells, tissues, and organ systems. It is measured through biomarkers of inflammation, oxidative stress, metabolic function, and cellular health.
                </p>
                <p>
                  Unlike chronological age, biological age can be modified through targeted interventions. Our longevity protocol combines advanced therapies designed to reduce cellular aging, enhance mitochondrial function, and optimize systemic health.
                </p>
                <p className="text-brand-white font-dm font-medium">
                  The goal is not to live longer in decline. The goal is to extend health span — the years lived in optimal function and vitality.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Longevity Therapies Protocol */}
      <section className="py-24 px-6 bg-brand-black">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <SectionLabel>THE LONGEVITY PROTOCOL</SectionLabel>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-white mb-16">
              Five-Step Cellular Optimization
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            {protocolSteps.map((step, index) => (
              <ScrollReveal key={step.num} delay={index * 0.1}>
                <div className="glass-card overflow-hidden">
                  <button
                    onClick={() => setExpandedStep(expandedStep === step.num ? null : step.num)}
                    className="w-full px-8 py-6 flex items-start gap-6 text-left hover:bg-brand-border/20 transition-colors"
                  >
                    <div className="font-mono text-4xl text-brand-teal/30 flex-shrink-0">
                      {String(step.num).padStart(2, '0')}
                    </div>
                    <div className="flex-1">
                      <div className="font-mono text-brand-teal text-xs uppercase tracking-wider mb-2">
                        {step.therapy}
                      </div>
                      <h3 className="font-dm font-semibold text-brand-white text-xl mb-2">
                        {step.title}
                      </h3>
                      <p className="text-brand-muted text-sm">
                        {step.description}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedStep === step.num ? 90 : 0 }}
                      className="text-brand-teal flex-shrink-0"
                    >
                      <Activity size={20} />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedStep === step.num ? 'auto' : 0,
                      opacity: expandedStep === step.num ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pl-24 text-brand-muted leading-relaxed">
                      {step.detail}
                    </div>
                  </motion.div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Follow-up & Monitoring */}
      <section className="py-24 px-6 bg-brand-deep">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionLabel>MONITORING & ASSESSMENT</SectionLabel>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-white mb-16">
              Continuous Optimization
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {followUpCards.map((card, index) => (
              <ScrollReveal key={card.title} delay={index * 0.1}>
                <div className="glass-card p-8 h-full hover:border-brand-teal transition-all duration-300">
                  <Clock className="mb-6 text-brand-teal" size={40} strokeWidth={1.5} />
                  <h3 className="font-dm font-semibold text-brand-white text-xl mb-4 uppercase tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-brand-muted leading-relaxed text-sm">
                    {card.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Enroll */}
      <section className="py-24 px-6 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionLabel>PATIENT PROFILES</SectionLabel>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-white mb-16">
              Who Should Enroll
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {patientProfiles.map((profile, index) => (
              <ScrollReveal key={profile.title} delay={index * 0.1}>
                <div className="glass-card p-8 h-full hover:border-brand-teal transition-all duration-300">
                  <profile.icon className="mb-6 text-brand-teal" size={40} strokeWidth={1.5} />
                  <h3 className="font-dm font-semibold text-brand-white text-xl mb-4">
                    {profile.title}
                  </h3>
                  <p className="text-brand-muted leading-relaxed">
                    {profile.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-brand-deep">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-white mb-8">
              Start Your Longevity Assessment
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Begin with comprehensive diagnostic evaluation to establish your biological age baseline and design your personalized optimization protocol.
            </p>
            <CTAButton variant="primary" to="/contact">
              Schedule Assessment
            </CTAButton>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
