import { Award, BookOpen, Heart, Microscope, TrendingUp, Users } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';
import CTAButton from '../components/CTAButton';

export default function Founder() {
  const timeline = [
    {
      year: '1990s',
      title: 'Medical Foundation',
      description: 'Completed MBBS and MS in General Surgery, establishing strong clinical foundation in surgical medicine.'
    },
    {
      year: '2000s',
      title: 'Clinical Practice',
      description: 'Extensive surgical practice with focus on patient outcomes, recovery optimization, and long-term health.'
    },
    {
      year: '2010s',
      title: 'Integrative Medicine',
      description: 'Expanded into integrative approaches, exploring advanced therapeutic technologies and regenerative medicine.'
    },
    {
      year: '2020s',
      title: 'Longevity Medicine',
      description: 'Specialized in health span optimization, biological age reversal, and preventive medical interventions.'
    },
    {
      year: '2025',
      title: 'ALMACURA Founded',
      description: 'Established institute dedicated to integrative medicine, advanced diagnostics, and evidence-based regenerative therapies.'
    }
  ];

  const interests = [
    {
      icon: Microscope,
      title: 'Integrative Medicine',
      description: 'Combining conventional diagnostics with innovative therapeutic modalities for comprehensive patient care.'
    },
    {
      icon: TrendingUp,
      title: 'Longevity Medicine',
      description: 'Biological age optimization through cellular health enhancement and metabolic intervention strategies.'
    },
    {
      icon: Heart,
      title: 'Advanced Therapeutic Technologies',
      description: 'Implementation of HBOT, EECP, PRP, Ozone, Photobiomodulation, and Molecular Hydrogen therapies.'
    },
    {
      icon: Users,
      title: 'Preventive Healthcare',
      description: 'Proactive health optimization to prevent disease rather than merely treating symptoms after onset.'
    }
  ];

  return (
    <div className="bg-brand-white pt-24">
      {/* Hero */}
      <section className="py-24 px-6 bg-brand-ice">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal variant="fadeLeft">
              <div className="relative">
                <img
                  src="/07_round_signage_mockup.png"
                  alt="ALMACURA Institute Signage"
                  className="w-full max-w-sm rounded-sm object-cover mx-auto"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.2}>
              <div>
                <SectionLabel>FOUNDER & DIRECTOR</SectionLabel>
                <h1 className="font-cormorant text-6xl md:text-7xl text-brand-navy mb-6 italic">
                  Dr. Vijay Shekar Reddy
                </h1>
                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="glass-card px-4 py-2">
                    <span className="font-mono text-brand-teal text-sm uppercase tracking-wider">
                      MBBS
                    </span>
                  </div>
                  <div className="glass-card px-4 py-2">
                    <span className="font-mono text-brand-teal text-sm uppercase tracking-wider">
                      MS (General Surgery)
                    </span>
                  </div>
                </div>
                <div className="space-y-6 text-brand-muted leading-relaxed">
                  <p>
                    With over three decades of clinical experience, Dr. Vijay Shekar Reddy has dedicated his career to advancing patient care through the integration of modern diagnostics and innovative therapeutic technologies.
                  </p>
                  <p>
                    His journey from conventional surgical practice to integrative medicine reflects a commitment to addressing root causes rather than merely treating symptoms. He recognized that optimal health requires more than reactive intervention — it demands proactive optimization.
                  </p>
                  <p className="text-brand-navy font-dm font-medium">
                    ALMACURA represents the culmination of this vision: a medical institute where diagnostics guide therapy, evidence informs protocol, and patient outcomes are systematically measured and optimized.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 px-6 bg-brand-white">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <SectionLabel>PROFESSIONAL JOURNEY</SectionLabel>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-navy mb-16">
              Three Decades of Medical Excellence
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-24 top-0 bottom-0 w-px bg-brand-teal/30"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <ScrollReveal key={item.year} delay={index * 0.1}>
                  <div className="relative pl-12 md:pl-40">
                    {/* Year Badge */}
                    <div className="absolute left-0 md:left-0 top-0 w-20 glass-card px-4 py-2 -translate-x-1/2 md:translate-x-0">
                      <div className="font-mono text-brand-teal text-sm text-center">
                        {item.year}
                      </div>
                    </div>
                    {/* Dot */}
                    <div className="absolute left-0 md:left-24 top-3 w-3 h-3 bg-brand-teal rounded-full -translate-x-1/2"></div>
                    {/* Content */}
                    <div className="glass-card p-6">
                      <h3 className="font-dm font-semibold text-brand-navy text-xl mb-3">
                        {item.title}
                      </h3>
                      <p className="text-brand-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-24 px-6 bg-brand-ice">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <SectionLabel>VISION</SectionLabel>
            <div className="border-l-4 border-brand-teal pl-8 md:pl-12">
              <blockquote className="text-4xl md:text-5xl lg:text-6xl font-cormorant italic text-brand-teal leading-tight mb-8">
                "To create a medical institute that integrates modern diagnostics with innovative therapies — improving long-term health outcomes for every patient."
              </blockquote>
              <div className="text-brand-muted leading-relaxed space-y-4">
                <p>
                  Dr. Reddy's vision extends beyond conventional treatment paradigms. He believes that medicine should not merely respond to disease but actively work to preserve, optimize, and restore health.
                </p>
                <p>
                  This philosophy drives every aspect of ALMACURA — from the diagnostic-first approach to the selection of evidence-based therapies, from personalized protocols to systematic outcome measurement.
                </p>
                <p className="text-brand-navy font-dm font-medium">
                  The goal is not just to treat illness. The goal is to optimize human vitality.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Areas of Interest */}
      <section className="py-24 px-6 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionLabel>AREAS OF EXPERTISE</SectionLabel>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-navy mb-16">
              Clinical Focus & Research Interests
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {interests.map((interest, index) => (
              <ScrollReveal key={interest.title} delay={index * 0.1}>
                <div className="glass-card p-8 h-full hover:border-brand-teal transition-all duration-300">
                  <interest.icon className="mb-6 text-brand-teal" size={48} strokeWidth={1.5} />
                  <h3 className="font-dm font-semibold text-brand-navy text-2xl mb-4">
                    {interest.title}
                  </h3>
                  <p className="text-brand-muted leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Team Identity */}
      <section className="py-24 px-6 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionLabel>INSTITUTE IDENTITY</SectionLabel>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-navy mb-16">
              Clinical Excellence, Branded Experience
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="relative rounded-sm overflow-hidden">
                <div className="absolute inset-0 bg-brand-white/40 z-10"></div>
                <img
                  src="/08_scrubs_front.png"
                  alt="ALMACURA Clinical Staff Uniform - Front"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative rounded-sm overflow-hidden">
                <div className="absolute inset-0 bg-brand-white/40 z-10"></div>
                <img
                  src="/09_scrubs_back.png"
                  alt="ALMACURA Clinical Staff Uniform - Back"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 text-center max-w-2xl mx-auto">
              <p className="text-brand-muted leading-relaxed">
                Every detail reflects our commitment to clinical excellence — from branded uniforms that establish professional identity to premium facilities that ensure patient comfort and confidence.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 bg-brand-ice">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionLabel>MEDICAL PHILOSOPHY</SectionLabel>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-navy mb-12">
              Principles of Practice
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            {[
              {
                principle: 'Diagnostics Before Therapy',
                description: 'Never guess. Always assess. Every therapeutic intervention must be preceded by comprehensive diagnostic evaluation.'
              },
              {
                principle: 'Evidence-Informed Protocols',
                description: 'Therapies must have established mechanisms of action and clinical evidence. No unproven treatments. No exaggerated claims.'
              },
              {
                principle: 'Personalized Medicine',
                description: 'No two patients are identical. Protocols must be tailored to individual biomarkers, health status, and therapeutic goals.'
              },
              {
                principle: 'Measured Outcomes',
                description: 'What gets measured gets optimized. Track biomarkers, assess clinical response, and adjust protocols based on data.'
              }
            ].map((item, index) => (
              <ScrollReveal key={item.principle} delay={index * 0.1}>
                <div className="glass-card p-8">
                  <h3 className="font-dm font-semibold text-brand-navy text-xl mb-3 uppercase tracking-wide">
                    {item.principle}
                  </h3>
                  <p className="text-brand-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-brand-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-navy mb-8">
              Experience Integrative Medicine
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Schedule a consultation with Dr. Reddy to discuss your health optimization goals and explore personalized therapeutic protocols.
            </p>
            <CTAButton variant="primary" to="/contact">
              Book Consultation
            </CTAButton>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
