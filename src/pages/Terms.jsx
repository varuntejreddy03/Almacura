import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';

export default function Terms() {
  const sections = [
    {
      title: '1. Scope of Services',
      content: [
        'ALMACURA provides medical services based on a structured model of integrative medicine and healthspan optimisation.',
        'Treatment plans may include: conventional medical care, advanced therapeutic modalities (e.g., HBOT, EECP, ozone therapy, photobiomodulation, hydrogen therapy), supportive interventions including Yoga therapy, and selected complementary approaches when clinically appropriate.',
        'All treatments are offered as part of a supervised clinical program.'
      ]
    },
    {
      title: '2. Individualised Treatment Approach',
      content: [
        'Each patient is unique. Treatment protocols are individualised based on clinical evaluation, guided by diagnostic findings, and modified based on patient response.',
        'No single therapy or program is universally applicable to all patients.'
      ]
    },
    {
      title: '3. Role of Integrative Therapies',
      content: [
        'Integrative therapies at ALMACURA are designed to: support physiological function, enhance recovery, improve quality of life, and complement standard medical care.',
        'These therapies are adjunctive in nature and are not intended to replace essential medical or surgical treatment where indicated.'
      ]
    },
    {
      title: '4. Complementary Systems of Care',
      content: [
        'Yoga therapy forms an integral component of the ALMACURA model and may be recommended as part of treatment.',
        'In selected cases, other established systems such as Ayurvedic therapies or Homeopathy may be incorporated as supportive modalities, based on clinical judgment.',
        'These are used to complement primary treatment, not as standalone substitutes in critical conditions.'
      ]
    },
    {
      title: '5. Expected Outcomes',
      content: [
        'Response to treatment varies between individuals.',
        'While many patients experience improvement in symptoms, better functional capacity, and enhanced well-being, ALMACURA does not guarantee specific outcomes or cure.',
        'Treatment aims to support improvement and optimisation, not provide assured results.'
      ]
    },
    {
      title: '6. Patient Responsibilities',
      content: [
        'Patients are expected to: provide accurate medical history, follow prescribed treatment schedules, adhere to recommended lifestyle and dietary guidance, and inform the clinical team about any changes in condition.',
        'Active patient participation is essential for optimal outcomes.'
      ]
    },
    {
      title: '7. Medical Supervision',
      content: [
        'All therapies are provided under medical supervision.',
        'Certain treatments may require: prior evaluation, ongoing monitoring, and modification based on tolerance and response.',
        'The clinical team reserves the right to: defer or discontinue therapy if medically indicated.'
      ]
    },
    {
      title: '8. Limitations of Therapy',
      content: [
        'Integrative therapies may not be suitable in: acute medical emergencies, unstable medical conditions, or specific contraindicated scenarios.',
        'Patients requiring urgent or specialised care may be referred appropriately.'
      ]
    },
    {
      title: '9. Safety and Risk Disclosure',
      content: [
        'All medical and therapeutic interventions carry some degree of risk.',
        'Efforts are made to: ensure safety, follow established protocols, and minimise complications.',
        'Patients will be informed of relevant risks where applicable.'
      ]
    },
    {
      title: '10. Program-Based Care',
      content: [
        'ALMACURA offers structured programs rather than isolated therapies.',
        'This approach is designed to: improve clinical outcomes, ensure continuity of care, and provide measurable progress.'
      ]
    },
    {
      title: '11. Healthspan Optimisation Services',
      content: [
        'Healthspan optimisation services are preventive and supportive in nature.',
        'These are intended to: enhance physiological resilience and improve long-term health. They are not substitutes for medical treatment of active disease.'
      ]
    },
    {
      title: '12. No Emergency Services',
      content: [
        'ALMACURA is not an emergency care facility.',
        'Patients requiring urgent medical attention should seek appropriate emergency services.'
      ]
    },
    {
      title: '13. Consent',
      content: [
        'All treatments are undertaken with informed patient consent. Patients will be provided with information about the proposed treatment, including its nature, purpose, benefits, and risks, before proceeding.'
      ]
    }
  ];

  return (
    <div className="bg-brand-white pt-24 pb-24">
      <section className="px-6 py-24 bg-brand-ice mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <SectionLabel>LEGAL & CLINICAL STANDARDS</SectionLabel>
            <h1 className="font-cormorant text-6xl md:text-7xl text-brand-navy mb-8 italic">
              Terms of Treatment
            </h1>
            <p className="text-brand-muted text-xl leading-relaxed max-w-2xl mx-auto font-dm uppercase tracking-widest text-xs">
              Institute of Integrative Medicine & Healthspan Optimisation
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <ScrollReveal key={section.title} delay={index * 0.05} variant="fadeUp">
                <div>
                  <h2 className="font-cormorant text-2xl md:text-3xl text-brand-navy mb-6 font-semibold italic border-b border-brand-teal/20 pb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((p, pIndex) => (
                      <p key={pIndex} className="text-brand-muted font-dm leading-relaxed text-base">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
