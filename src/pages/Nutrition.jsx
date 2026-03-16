import { Leaf, Microscope, Activity, TrendingUp } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';
import CTAButton from '../components/CTAButton';

export default function Nutrition() {
  const assessmentCards = [
    {
      icon: Microscope,
      title: 'Micronutrient Deficiency Testing',
      description: 'Comprehensive analysis of vitamin, mineral, and essential nutrient status to identify deficiencies impacting cellular function and therapeutic outcomes.'
    },
    {
      icon: Activity,
      title: 'Metabolic Evaluation',
      description: 'Assessment of glucose metabolism, insulin sensitivity, lipid profile, and metabolic markers to guide nutritional intervention strategies.'
    },
    {
      icon: TrendingUp,
      title: 'Personalized Dietary Correction',
      description: 'Evidence-based nutritional protocols designed to address identified deficiencies, support therapeutic interventions, and optimize metabolic health.'
    }
  ];

  return (
    <div className="bg-brand-black pt-24">
      {/* Hero */}
      <section className="min-h-[60vh] relative flex items-center justify-center px-6 bg-brand-deep">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <SectionLabel>METABOLIC INTERVENTION</SectionLabel>
            <h1 className="font-cormorant text-6xl md:text-8xl text-brand-white mb-8">
              Nutrition Is Clinical Correction.
            </h1>
            <p className="text-brand-muted text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
              Not diet advice. Not supplementation. Targeted metabolic intervention based on diagnostic findings.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Assessment Section */}
      <section className="py-24 px-6 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionLabel>NUTRITIONAL ASSESSMENT</SectionLabel>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-white mb-16">
              Diagnostic-Driven Nutrition
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {assessmentCards.map((card, index) => (
              <ScrollReveal key={card.title} delay={index * 0.1}>
                <div className="glass-card p-8 h-full hover:border-brand-green transition-all duration-300">
                  <card.icon className="mb-6 text-brand-green" size={40} strokeWidth={1.5} />
                  <h3 className="font-dm font-semibold text-brand-white text-xl mb-4 uppercase tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-brand-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic Nutrition Support */}
      <section className="py-24 px-6 bg-brand-deep">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionLabel>SUPPORTING YOUR THERAPY</SectionLabel>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-white mb-16">
              Nutrition Underpins Every Protocol
            </h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal variant="fadeLeft">
              {/* Visual Diagram */}
              <div className="relative">
                <div className="glass-card p-12">
                  <div className="relative aspect-square">
                    {/* Center Circle - Nutrition */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-brand-green/20 border-2 border-brand-green flex items-center justify-center">
                      <div className="text-center">
                        <Leaf className="mx-auto mb-2 text-brand-green" size={32} />
                        <div className="font-mono text-brand-green text-xs uppercase">Nutrition</div>
                      </div>
                    </div>

                    {/* Radiating Nodes */}
                    {[
                      { label: 'HBOT', angle: 0 },
                      { label: 'EECP', angle: 90 },
                      { label: 'Longevity', angle: 180 },
                      { label: 'PRP', angle: 270 }
                    ].map((node, index) => {
                      const radius = 140;
                      const angleRad = (node.angle * Math.PI) / 180;
                      const x = Math.cos(angleRad) * radius;
                      const y = Math.sin(angleRad) * radius;

                      return (
                        <div key={node.label}>
                          {/* Connection Line */}
                          <div
                            className="absolute top-1/2 left-1/2 h-px bg-brand-teal/30"
                            style={{
                              width: `${radius}px`,
                              transform: `rotate(${node.angle}deg)`,
                              transformOrigin: '0 0'
                            }}
                          ></div>
                          {/* Node */}
                          <div
                            className="absolute w-20 h-20 rounded-full bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center"
                            style={{
                              top: `calc(50% + ${y}px)`,
                              left: `calc(50% + ${x}px)`,
                              transform: 'translate(-50%, -50%)'
                            }}
                          >
                            <div className="font-mono text-brand-teal text-xs text-center uppercase">
                              {node.label}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.2}>
              <div className="space-y-6 text-brand-muted leading-relaxed">
                <p>
                  Nutritional status directly impacts therapeutic outcomes. Micronutrient deficiencies impair cellular function, reduce treatment efficacy, and limit recovery potential.
                </p>
                <p>
                  Our nutrition protocols are not generic dietary recommendations. They are targeted metabolic interventions designed to:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-green mt-1">•</span>
                    <span>Support HBOT outcomes through optimized oxygen utilization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-green mt-1">•</span>
                    <span>Enhance EECP effectiveness via cardiovascular nutrition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-green mt-1">•</span>
                    <span>Maximize PRP regenerative potential through collagen synthesis support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-green mt-1">•</span>
                    <span>Amplify longevity protocols with cellular health optimization</span>
                  </li>
                </ul>
                <p className="text-brand-white font-dm font-medium">
                  Every nutritional recommendation is based on your diagnostic findings and therapeutic goals.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Protocol Examples */}
      <section className="py-24 px-6 bg-brand-black">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <SectionLabel>INTERVENTION EXAMPLES</SectionLabel>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-white mb-16">
              Targeted Nutritional Protocols
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              {
                condition: 'Vitamin D Deficiency',
                impact: 'Impairs immune function, reduces bone health, affects mood regulation',
                intervention: 'Therapeutic vitamin D3 supplementation with monitoring to achieve optimal serum levels (40-60 ng/mL)'
              },
              {
                condition: 'Omega-3 Insufficiency',
                impact: 'Increases inflammation, impairs cardiovascular health, reduces cellular membrane integrity',
                intervention: 'High-dose EPA/DHA supplementation targeting anti-inflammatory ratios and cardiovascular protection'
              },
              {
                condition: 'Magnesium Depletion',
                impact: 'Affects energy production, muscle function, cardiovascular health, and stress response',
                intervention: 'Bioavailable magnesium forms (glycinate, threonate) dosed to correct deficiency and support ATP synthesis'
              },
              {
                condition: 'Protein Inadequacy',
                impact: 'Limits tissue repair, reduces PRP effectiveness, impairs immune function',
                intervention: 'Calculated protein intake optimization (1.2-2.0 g/kg) with amino acid profile assessment'
              }
            ].map((protocol, index) => (
              <ScrollReveal key={protocol.condition} delay={index * 0.1}>
                <div className="glass-card p-8 hover:border-brand-green transition-all duration-300">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="font-mono text-brand-green text-xs uppercase tracking-wider mb-2">
                        Condition
                      </div>
                      <div className="text-brand-white font-dm font-medium">
                        {protocol.condition}
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-brand-teal text-xs uppercase tracking-wider mb-2">
                        Clinical Impact
                      </div>
                      <div className="text-brand-muted text-sm">
                        {protocol.impact}
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-brand-gold text-xs uppercase tracking-wider mb-2">
                        Intervention
                      </div>
                      <div className="text-brand-muted text-sm">
                        {protocol.intervention}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Follow-up */}
      <section className="py-24 px-6 bg-brand-deep">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionLabel>MONITORING & REASSESSMENT</SectionLabel>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-white mb-8">
              Continuous Optimization
            </h2>
            <div className="space-y-6 text-brand-muted leading-relaxed">
              <p>
                Nutritional interventions are monitored through periodic biomarker reassessment. We track deficiency correction, metabolic improvements, and therapeutic outcome enhancement.
              </p>
              <p>
                Dietary protocols are adjusted based on clinical response, treatment phase, and evolving health goals. This is not static supplementation — this is dynamic metabolic optimization.
              </p>
              <p className="text-brand-white font-dm font-medium">
                Nutrition is not an afterthought. It is integral to every therapeutic protocol at ALMACURA.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="text-center mt-12">
              <CTAButton variant="primary" to="/contact">
                Schedule Nutritional Assessment
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
