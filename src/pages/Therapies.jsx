import { motion } from 'framer-motion';
import { ArrowRight, Activity, ShieldCheck, Microscope, HeartPulse, Sparkles, ChevronRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';
import TherapyCard from '../components/TherapyCard';
import { therapyList, therapiesData } from '../data/therapiesData';

export default function Therapies() {
  return (
    <div className="bg-brand-white pt-32 pb-24 px-6 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <ScrollReveal variant="fadeUp">
          <div className="flex flex-col items-center text-center mb-24 max-w-[900px] mx-auto">
            <SectionLabel>EVIDENCE-BASED CARE</SectionLabel>
            <h1 className="font-dm text-[clamp(44px,8vw,80px)] leading-[0.95] text-brand-navy font-bold tracking-tight mb-8">
              Clinical <br className="hidden md:block" /> Protocols
            </h1>
            <p className="text-brand-muted text-xl leading-relaxed italic max-w-2xl font-cormorant border-l-4 border-brand-teal/20 pl-8">
              "Advanced therapeutic modalities designed to restore function, optimize cellular health, and address chronic disease."
            </p>
          </div>
        </ScrollReveal>

        {/* Therapy Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
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

        {/* Global Strategy / CTA */}
        <section className="py-24 px-10 sm:px-16 bg-brand-ice rounded-[60px] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-[3s]" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-cormorant text-4xl sm:text-6xl text-brand-navy mb-8 font-bold italic">Not sure which therapy is right?</h2>
              <p className="text-brand-muted text-lg font-dm tracking-wide leading-relaxed max-w-2xl mx-auto mb-12">
                "Our medical team can guide you through a free suitability assessment to understand which protocol aligns best with your biological needs."
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/contact">
                  <button className="px-12 py-5 bg-brand-navy text-white rounded-full font-dm font-bold text-[11px] uppercase tracking-[.3em] hover:bg-brand-teal transition-all shadow-2xl shadow-brand-navy/20">
                    Check My Suitability
                  </button>
                </Link>
                <a href="https://wa.me/919989033686" target="_blank" rel="noopener noreferrer">
                  <button className="px-12 py-5 border-2 border-brand-teal text-brand-teal rounded-full font-dm font-bold text-[11px] uppercase tracking-[.3em] hover:bg-brand-teal hover:text-white transition-all flex items-center justify-center gap-3">
                    <MessageCircle size={18} /> Protocol Inquiry
                  </button>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Philosophy Footnote */}
        <div className="mt-24 text-center pb-24 overflow-visible">
          <SectionLabel className="overflow-visible">CLINICAL PHILOSOPHY</SectionLabel>
          <div className="font-cormorant text-[clamp(40px,10vw,120px)] font-bold text-brand-navy italic opacity-[0.03] select-none leading-none mt-12 overflow-visible">
            Measured Results
          </div>
        </div>
      </div>
    </div>
  );
}
