import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';
import CTAButton from '../components/CTAButton';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Are these therapies medically approved?",
      answer: "Yes. All therapies offered at ALMACURA are evidence-based medical interventions with established mechanisms of action. They are administered under medical supervision following established clinical protocols and safety standards. We do not offer experimental or unproven treatments."
    },
    {
      question: "How many sessions are required?",
      answer: "Session requirements vary by therapy and individual response. HBOT typically requires 20-40 sessions, EECP requires 35 sessions, PRP may need 3-6 sessions, Ozone therapy 10-20 sessions, Photobiomodulation 15-30 sessions, and Hydrogen therapy 20-40 sessions. Your personalized protocol will be determined after comprehensive diagnostic assessment and will be adjusted based on clinical response."
    },
    {
      question: "Are the therapies safe?",
      answer: "Yes. All therapies are performed under medical supervision with continuous monitoring. Pre-treatment diagnostic assessments ensure patient safety and therapy suitability. Most therapies are non-invasive or minimally invasive. Potential contraindications are identified during initial evaluation. Our protocols prioritize patient safety while maximizing therapeutic benefit."
    },
    {
      question: "Are the treatments painful?",
      answer: "Most therapies are non-invasive and painless. HBOT, EECP, Ozone, Photobiomodulation, and Hydrogen therapies involve no pain. PRP involves injection and may cause mild discomfort. Pain Portal Blocks involve targeted injections with local anesthetic. Any discomfort is minimal and temporary. Patient comfort is monitored throughout all procedures."
    },
    {
      question: "Who is eligible for HBOT?",
      answer: "HBOT eligibility is determined through pre-treatment assessment including cardiac evaluation, lung function testing, and blood work. Most patients are suitable candidates. Contraindications include untreated pneumothorax, certain lung conditions, and specific medications. Your eligibility will be confirmed during initial consultation and diagnostic workup."
    },
    {
      question: "Do I need a referral?",
      answer: "No referral is required. You can schedule a consultation directly. However, if you have existing medical records or recent diagnostic reports, bringing them to your initial consultation can be helpful. We will conduct our own comprehensive diagnostic assessment as part of the protocol."
    },
    {
      question: "What diagnostics are needed before starting?",
      answer: "Diagnostic requirements vary by therapy. Common assessments include complete blood count, metabolic panels, inflammatory markers, cardiac screening, and functional assessments. Therapy-specific requirements include G6PD testing for Ozone therapy, cardiac stress testing for EECP, and platelet assessment for PRP. Your complete diagnostic workup will be determined during initial consultation."
    },
    {
      question: "Can therapies be combined?",
      answer: "Yes. Many therapies are synergistic and can be combined for enhanced outcomes. Common combinations include HBOT with Photobiomodulation for tissue healing, EECP with nutritional support for cardiovascular health, and Ozone with Hydrogen for oxidative stress reduction. Combination protocols are designed based on your diagnostic findings and therapeutic goals."
    },
    {
      question: "What makes ALMACURA different from a regular clinic?",
      answer: "ALMACURA is an integrative medical institute, not a conventional clinic. We require comprehensive diagnostics before any therapy. We offer advanced therapeutic technologies not available in standard clinics. We personalize every protocol based on biomarker data. We measure outcomes systematically. We focus on health optimization and longevity, not just symptom treatment. This is precision medicine, not reactive healthcare."
    },
    {
      question: "Is EECP suitable for heart patients?",
      answer: "EECP is specifically designed for cardiac patients with angina, coronary artery disease, or heart failure. It is a non-invasive alternative to surgical intervention for many patients. However, suitability must be confirmed through comprehensive cardiac evaluation including ECG, stress testing, and clinical assessment. Your cardiologist's input may be incorporated into the treatment plan."
    },
    {
      question: "How long until I see results?",
      answer: "Response timelines vary by therapy and individual factors. Some patients report improvements within the first few sessions, while optimal outcomes typically emerge after completing the recommended course. HBOT and EECP show progressive benefits over weeks. PRP effects develop over 4-6 weeks. Longevity protocols require months for biological age markers to shift. We track progress through periodic biomarker reassessment and clinical evaluation."
    },
    {
      question: "Are the therapies covered by insurance?",
      answer: "Insurance coverage varies by provider and policy. Some therapies may be covered for specific medical indications. We recommend checking with your insurance provider regarding coverage for the specific therapy you are considering. Our team can provide documentation and medical necessity letters to support insurance claims where applicable."
    },
    {
      question: "What is the cost of treatment?",
      answer: "Treatment costs vary by therapy type, session frequency, and protocol duration. Comprehensive pricing information is provided during initial consultation after your personalized protocol is designed. We believe in transparent pricing with no hidden costs. Investment in health optimization should be informed and intentional."
    },
    {
      question: "Can I continue my regular medications?",
      answer: "In most cases, yes. However, certain medications may need adjustment or temporary discontinuation for specific therapies. This will be assessed during your diagnostic evaluation. Never discontinue prescribed medications without consulting your physician. We coordinate with your existing healthcare providers to ensure safe, integrated care."
    },
    {
      question: "What happens after completing the protocol?",
      answer: "Post-protocol care includes comprehensive reassessment of biomarkers and clinical outcomes. Based on results, we may recommend maintenance sessions, protocol adjustments, or transition to preventive monitoring. The goal is sustained optimization, not temporary improvement. Long-term health requires ongoing attention and periodic reassessment."
    }
  ];

  return (
    <div className="bg-brand-white pt-24">
      {/* Hero */}
      <section className="py-24 px-6 bg-brand-ice">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <SectionLabel>FREQUENTLY ASKED QUESTIONS</SectionLabel>
            <h1 className="font-cormorant text-6xl md:text-8xl text-brand-navy mb-8">
              Your Questions Answered
            </h1>
            <p className="text-brand-muted text-lg leading-relaxed max-w-2xl mx-auto">
              Clear, direct answers about our therapies, protocols, and approach to integrative medicine.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* FAQ List */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <ScrollReveal key={index} delay={index * 0.02}>
                    <div className="glass-card overflow-hidden">
                      <button
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        className="w-full px-8 py-6 flex justify-between items-start gap-6 text-left hover:bg-brand-border/20 transition-colors"
                      >
                        <div className="flex-1">
                          <h3 className="font-dm font-semibold text-brand-navy text-lg mb-1">
                            {faq.question}
                          </h3>
                        </div>
                        <motion.div
                          animate={{ rotate: activeIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-brand-teal flex-shrink-0 mt-1"
                        >
                          {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                        </motion.div>
                      </button>
                      <motion.div
                        initial={false}
                        animate={{
                          height: activeIndex === index ? 'auto' : 0,
                          opacity: activeIndex === index ? 1 : 0
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-6 text-brand-muted leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Sticky CTA Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <ScrollReveal delay={0.3}>
                  <div className="glass-card p-8 bg-gradient-to-br from-brand-teal/10 to-transparent border-brand-teal/30">
                    <h3 className="font-cormorant text-3xl text-brand-navy mb-4">
                      Still Have Questions?
                    </h3>
                    <p className="text-brand-muted leading-relaxed mb-6">
                      Schedule a consultation to discuss your specific health concerns and explore personalized therapeutic options.
                    </p>
                    <CTAButton variant="primary" to="/contact" className="w-full justify-center">
                      Book Consultation
                    </CTAButton>
                    
                    <div className="mt-8 pt-8 border-t border-brand-border">
                      <div className="space-y-4 text-sm">
                        <div>
                          <div className="font-mono text-brand-teal text-xs uppercase tracking-wider mb-1">
                            Phone & WhatsApp
                          </div>
                          <div className="text-brand-navy">
                            +91 9989033686
                          </div>
                        </div>
                        <div>
                          <div className="font-mono text-brand-teal text-xs uppercase tracking-wider mb-1">
                            Email
                          </div>
                          <div className="text-brand-navy break-all">
                            doctorkvsreddy@yahoo.com
                          </div>
                        </div>
                        <div>
                          <div className="font-mono text-brand-teal text-xs uppercase tracking-wider mb-1">
                            Hours
                          </div>
                          <div className="text-brand-navy">
                            Mon–Sat, 9:00 AM – 6:00 PM
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-24 px-6 bg-brand-ice">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-navy mb-8">
              Need More Information?
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Explore our therapy pages for detailed information about each treatment modality, or contact us directly for personalized guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton variant="secondary" to="/therapies">
                View All Therapies
              </CTAButton>
              <CTAButton variant="primary" to="/contact">
                Contact Us
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
