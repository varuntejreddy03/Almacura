import { Microscope, Activity, Flame, Heart, Zap, Stethoscope } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';
import CTAButton from '../components/CTAButton';

export default function Diagnostics() {
  const categories = [
    {
      icon: Activity,
      title: 'Blood Biomarkers',
      description: 'Comprehensive blood analysis including complete blood count, metabolic markers, liver and kidney function, and nutritional status assessment.'
    },
    {
      icon: Zap,
      title: 'Metabolic Panel',
      description: 'Glucose metabolism, insulin sensitivity, lipid profile, and metabolic syndrome markers to assess cellular energy production.'
    },
    {
      icon: Flame,
      title: 'Inflammatory Markers',
      description: 'CRP, ESR, and advanced inflammatory markers to identify systemic inflammation and guide therapeutic intervention.'
    },
    {
      icon: Heart,
      title: 'Hormonal Profile',
      description: 'Thyroid function, adrenal hormones, and sex hormone panels to evaluate endocrine system balance and optimization potential.'
    },
    {
      icon: Stethoscope,
      title: 'Cardiac Screening',
      description: 'ECG, stress testing, and cardiac biomarkers to assess cardiovascular health and therapy suitability.'
    },
    {
      icon: Microscope,
      title: 'Functional Assessments',
      description: 'Oxidative stress markers, mitochondrial function indicators, and cellular health parameters for longevity protocols.'
    }
  ];

  const therapyWorkup = [
    { therapy: 'HBOT', assessment: 'Cardiac & Pulmonary', markers: 'CBC, Cardiac enzymes, Lung function' },
    { therapy: 'EECP', assessment: 'Comprehensive Cardiac', markers: 'ECG, Stress test, Lipid profile' },
    { therapy: 'PRP', assessment: 'Hematological', markers: 'CBC, Platelet count, Coagulation panel' },
    { therapy: 'Ozone', assessment: 'G6PD & Liver Function', markers: 'G6PD enzyme, LFT, Oxidative markers' },
    { therapy: 'Photobiomodulation', assessment: 'Baseline Functional', markers: 'Inflammatory markers, Pain assessment' },
    { therapy: 'Hydrogen', assessment: 'Oxidative Stress', markers: 'ROS markers, Inflammatory panel' }
  ];

  return (
    <div className="bg-brand-black pt-24">
      {/* Hero */}
      <section className="min-h-[60vh] relative flex items-center justify-center px-6 noise-texture">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(46, 139, 139, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(46, 139, 139, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <SectionLabel>ASSESSMENT FIRST</SectionLabel>
            <h1 className="font-cormorant text-6xl md:text-8xl mb-8">
              <span className="text-brand-teal italic">Diagnostics First.</span>
              <br />
              <span className="text-brand-white">Therapy Later.</span>
            </h1>
            <p className="text-brand-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              We do not guess. We assess, identify root causes, and intervene with precision. Every therapeutic protocol begins with comprehensive diagnostic evaluation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Diagnostic Categories Grid */}
      <section className="py-24 px-6 bg-brand-deep">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionLabel>DIAGNOSTIC CATEGORIES</SectionLabel>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-white mb-16">
              Comprehensive Assessment Protocols
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <ScrollReveal key={category.title} delay={index * 0.1}>
                <div className="glass-card p-8 h-full hover:border-brand-teal transition-all duration-300">
                  <category.icon className="mb-6 text-brand-teal" size={40} strokeWidth={1.5} />
                  <h3 className="font-dm font-semibold text-brand-white text-xl mb-4 uppercase tracking-wide">
                    {category.title}
                  </h3>
                  <p className="text-brand-muted leading-relaxed text-sm">
                    {category.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Therapy-Specific Workup Table */}
      <section className="py-24 px-6 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionLabel>THERAPY-SPECIFIC REQUIREMENTS</SectionLabel>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-white mb-16">
              Pre-Treatment Assessment Matrix
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="overflow-x-auto">
              <table className="w-full glass-card">
                <thead>
                  <tr className="border-b border-brand-border">
                    <th className="px-6 py-4 text-left font-dm font-semibold text-brand-white uppercase tracking-wider text-sm">
                      Therapy
                    </th>
                    <th className="px-6 py-4 text-left font-dm font-semibold text-brand-white uppercase tracking-wider text-sm">
                      Pre-Assessment Required
                    </th>
                    <th className="px-6 py-4 text-left font-dm font-semibold text-brand-white uppercase tracking-wider text-sm">
                      Key Markers
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {therapyWorkup.map((row, index) => (
                    <tr
                      key={row.therapy}
                      className="border-b border-brand-border hover:bg-brand-teal/5 transition-colors"
                    >
                      <td className="px-6 py-4 font-mono text-brand-teal text-sm">
                        {row.therapy}
                      </td>
                      <td className="px-6 py-4 text-brand-muted text-sm">
                        {row.assessment}
                      </td>
                      <td className="px-6 py-4 font-mono text-brand-white text-xs">
                        {row.markers}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy Block */}
      <section className="py-24 px-6 bg-brand-deep">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="text-6xl md:text-7xl font-cormorant italic text-brand-teal leading-tight mb-8">
                "We do not guess. We assess, identify, and act."
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-6 text-brand-muted leading-relaxed text-center max-w-3xl mx-auto">
              <p>
                Every patient at ALMACURA undergoes comprehensive diagnostic evaluation before any therapeutic intervention. This is not optional. This is protocol.
              </p>
              <p>
                We measure biomarkers, assess metabolic function, evaluate inflammatory status, and identify deficiencies. Only then do we design personalized therapeutic protocols.
              </p>
              <p className="text-brand-white font-dm font-medium">
                Diagnostics guide therapy. Evidence informs protocol. Outcomes are measured and optimized.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-12">
              <CTAButton variant="primary" to="/contact">
                Schedule Diagnostic Assessment
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
