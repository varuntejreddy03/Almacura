import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';
import TherapyCard from '../components/TherapyCard';
import { therapyList, therapiesData } from '../data/therapiesData';

export default function Therapies() {
  return (
    <div className="bg-brand-black pt-24">
      {/* Hero */}
      <section className="min-h-[60vh] relative flex items-center justify-center px-6 bg-brand-deep">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <SectionLabel>EVIDENCE-BASED INTERVENTIONS</SectionLabel>
            <h1 className="font-cormorant text-6xl md:text-8xl text-brand-white mb-8">
              Advanced Medical Therapies
            </h1>
            <p className="text-brand-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Seven therapeutic modalities designed to restore function, optimize cellular health, and enhance human vitality. Each therapy is preceded by diagnostic assessment and administered under medical supervision.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Therapy Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapyList.map((therapy, index) => {
              const therapyData = therapiesData[therapy.slug];
              return (
                <ScrollReveal key={therapy.slug} delay={index * 0.05}>
                  <TherapyCard
                    icon={therapy.icon}
                    title={therapyData.title}
                    description={therapy.shortDescription}
                    slug={therapy.slug}
                    sessionDuration={therapyData.sessionDuration}
                  />
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-brand-deep">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="text-5xl md:text-6xl font-cormorant italic text-brand-teal leading-tight mb-8">
              "Every therapy is evidence-respecting. Every protocol is personalized. Every outcome is measured."
            </div>
            <p className="text-brand-muted leading-relaxed max-w-2xl mx-auto">
              We do not offer unproven treatments. We do not make exaggerated claims. We provide medical therapies with established mechanisms of action, administered with precision and monitored for effectiveness.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
