import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Clock, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';
import CTAButton from '../components/CTAButton';
import TherapyCard from '../components/TherapyCard';
import { therapiesData, therapyList } from '../data/therapiesData';

export default function TherapyDetail() {
  const { slug } = useParams();
  const therapy = therapiesData[slug];

  if (!therapy) {
    return (
      <div className="min-h-screen bg-brand-white pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-cormorant text-4xl text-brand-navy mb-4">Therapy Not Found</h1>
          <Link to="/therapies" className="text-brand-teal hover:text-brand-tealLight">
            Return to Therapies
          </Link>
        </div>
      </div>
    );
  }

  const relatedTherapies = therapy.relatedTherapies
    .map(relatedSlug => {
      const relatedData = therapiesData[relatedSlug];
      const relatedInfo = therapyList.find(t => t.slug === relatedSlug);
      return { ...relatedData, ...relatedInfo, slug: relatedSlug };
    })
    .slice(0, 3);

  return (
    <div className="bg-brand-white pt-24">
      {/* Therapy Hero */}
      <section className="min-h-[60vh] relative flex items-center justify-center px-6 bg-gradient-to-br from-brand-deep via-brand-black to-brand-black">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="font-cormorant text-6xl md:text-8xl text-brand-navy mb-6">
              {therapy.title}
            </h1>
            <p className="text-brand-muted text-xl md:text-2xl leading-relaxed mb-8">
              {therapy.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="glass-card px-6 py-3">
                <div className="font-mono text-brand-teal text-xs uppercase tracking-wider mb-1">
                  Session Duration
                </div>
                <div className="text-brand-navy font-dm font-medium">
                  {therapy.sessionDuration}
                </div>
              </div>
              <div className="glass-card px-6 py-3">
                <div className="font-mono text-brand-teal text-xs uppercase tracking-wider mb-1">
                  Typical Course
                </div>
                <div className="text-brand-navy font-dm font-medium">
                  {therapy.typicalCourse}
                </div>
              </div>
              <div className="glass-card px-6 py-3">
                <div className="font-mono text-brand-teal text-xs uppercase tracking-wider mb-1">
                  Type
                </div>
                <div className="text-brand-navy font-dm font-medium">
                  {therapy.nonInvasive ? 'Non-invasive' : 'Minimally Invasive'}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Initial Workup */}
      <section className="py-24 px-6 bg-brand-ice">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <SectionLabel>BEFORE YOU BEGIN</SectionLabel>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-navy mb-12">
              Pre-Treatment Assessment
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {therapy.workup.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="flex items-start gap-4 glass-card p-6">
                  <CheckCircle className="text-brand-teal flex-shrink-0 mt-1" size={20} />
                  <span className="text-brand-muted">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal variant="fadeLeft">
              <div>
                <SectionLabel>PROCEDURE</SectionLabel>
                <h2 className="font-cormorant text-5xl md:text-6xl text-brand-navy mb-12">
                  How It Works
                </h2>
                <div className="space-y-6">
                  {therapy.procedure.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="font-mono text-2xl text-brand-teal/30 flex-shrink-0 w-12">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <p className="text-brand-muted leading-relaxed pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.2}>
              <div className="glass-card p-12 bg-gradient-to-br from-brand-teal/5 to-transparent border-brand-teal/30">
                <div className="aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <Clock className="mx-auto mb-4 text-brand-teal" size={64} strokeWidth={1} />
                    <div className="font-mono text-brand-teal text-sm uppercase tracking-wider mb-2">
                      Supervision
                    </div>
                    <div className="text-brand-navy font-dm text-lg">
                      {therapy.supervision}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Clinical Benefits */}
      <section className="py-24 px-6 bg-brand-ice">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionLabel>THERAPEUTIC OUTCOMES</SectionLabel>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-navy mb-16">
              Clinical Benefits
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {therapy.benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="glass-card p-6 hover:border-brand-teal transition-all duration-300">
                  <CheckCircle className="text-brand-teal mb-4" size={24} />
                  <h3 className="text-brand-navy font-dm font-medium text-lg">
                    {benefit}
                  </h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Session Details */}
      <section className="py-16 px-6 bg-brand-white border-y border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-mono text-brand-teal text-xs uppercase tracking-wider mb-2">
                Duration
              </div>
              <div className="text-brand-navy font-dm text-lg">
                {therapy.sessionDuration}
              </div>
            </div>
            <div className="text-center">
              <div className="font-mono text-brand-teal text-xs uppercase tracking-wider mb-2">
                Typical Course
              </div>
              <div className="text-brand-navy font-dm text-lg">
                {therapy.typicalCourse}
              </div>
            </div>
            <div className="text-center">
              <div className="font-mono text-brand-teal text-xs uppercase tracking-wider mb-2">
                Invasiveness
              </div>
              <div className="text-brand-navy font-dm text-lg">
                {therapy.nonInvasive ? 'Non-invasive' : 'Minimal'}
              </div>
            </div>
            <div className="text-center">
              <div className="font-mono text-brand-teal text-xs uppercase tracking-wider mb-2">
                Supervision
              </div>
              <div className="text-brand-navy font-dm text-lg">
                Medical
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Follow-up */}
      <section className="py-24 px-6 bg-brand-ice">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionLabel>POST-TREATMENT</SectionLabel>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-navy mb-8">
              Follow-up & Monitoring
            </h2>
            <p className="text-brand-muted leading-relaxed text-lg">
              {therapy.followUp}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Therapies */}
      {relatedTherapies.length > 0 && (
        <section className="py-24 px-6 bg-brand-white">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <SectionLabel>COMPLEMENTARY THERAPIES</SectionLabel>
              <h2 className="font-cormorant text-5xl md:text-6xl text-brand-navy mb-16">
                Often Combined With
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedTherapies.map((related, index) => (
                <ScrollReveal key={related.slug} delay={index * 0.1}>
                  <TherapyCard
                    icon={related.icon}
                    title={related.title}
                    description={related.subtitle}
                    slug={related.slug}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 px-6 bg-brand-ice">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-navy mb-8">
              Ready to Begin?
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Schedule a consultation to discuss your diagnostic assessment and personalized {therapy.title.toLowerCase()} protocol.
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
