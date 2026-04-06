import { motion } from 'framer-motion';
import { ArrowRight, Activity, ShieldCheck, Microscope, HeartPulse, Sparkles, ChevronRight, MessageCircle, FileText, Share2, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';

export default function ForDoctors() {
  return (
    <div className="bg-brand-white pt-32 pb-24 px-6 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <ScrollReveal variant="fadeUp">
          <div className="flex flex-col items-center text-center mb-24 max-w-[900px] mx-auto">
            <SectionLabel>PARTNERSHIP</SectionLabel>
            <h1 className="font-dm text-[clamp(44px,8vw,80px)] leading-[0.95] text-brand-navy font-bold tracking-tight mb-8">
              Collaborate <br className="hidden md:block" /> With Us
            </h1>
            <p className="text-brand-muted text-xl leading-relaxed italic max-w-2xl font-cormorant border-l-4 border-brand-teal/20 pl-8">
              "We partner with doctors for co-managed patient care, transparent communication, and ethical practice."
            </p>
          </div>
        </ScrollReveal>

        {/* Why Refer? */}
        <ScrollReveal>
          <div className="mb-32">
            <div className="text-center mb-16">
              <SectionLabel>REFERRAL VALUE</SectionLabel>
              <h2 className="font-cormorant text-4xl sm:text-5xl text-brand-navy mt-4 italic">Why Refer?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Advanced Therapies', 
                  icon: Microscope, 
                  desc: 'Access to evidence-based therapies (HBOT, Ozone, Hydrogen) not available in standard hospital settings.' 
                },
                { 
                  title: 'No Patient Diversion', 
                  icon: Shield, 
                  desc: 'We focus strictly on the referred therapies and return the patient to your care for primary medical management.' 
                },
                { 
                  title: 'Regular Updates', 
                  icon: FileText, 
                  desc: 'Transparent reporting and regular clinical updates on your patient’s progress during therapeutic interventions.' 
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-12 rounded-[50px] shadow-2xl shadow-brand-navy/5 border border-white group hover:border-brand-teal/40 transition-all duration-500 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-brand-ice flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all shadow-sm mb-8">
                    <item.icon size={28} />
                  </div>
                  <h3 className="font-dm font-bold text-sm uppercase tracking-widest text-brand-navy mb-4">{item.title}</h3>
                  <p className="text-brand-muted text-[13px] leading-relaxed uppercase tracking-wider">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Referral Section */}
        <section className="py-24 px-10 sm:px-16 bg-brand-ice rounded-[60px] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-[3s]" />
          <div className="relative z-10">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionLabel>MODELS OF CARE</SectionLabel>
                <h2 className="font-cormorant text-4xl sm:text-6xl text-brand-navy mt-4 mb-8">Co-Managed Care</h2>
                <div className="space-y-6 mb-12">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-teal shadow-md">
                      <ChevronRight size={16} />
                    </div>
                    <span className="font-dm font-bold text-[11px] uppercase tracking-widest text-brand-navy/80">Collaborative Clinical Decision Making</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-teal shadow-md">
                      <ChevronRight size={16} />
                    </div>
                    <span className="font-dm font-bold text-[11px] uppercase tracking-widest text-brand-navy/80">Ethical Clinical Practice Baseline</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-teal shadow-md">
                      <ChevronRight size={16} />
                    </div>
                    <span className="font-dm font-bold text-[11px] uppercase tracking-widest text-brand-navy/80">Transparent Case Communication</span>
                  </div>
                </div>

                <a 
                  href="https://wa.me/919989033686"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-10 py-5 bg-brand-navy text-white rounded-full font-dm font-bold text-[11px] uppercase tracking-[.3em] hover:bg-brand-teal transition-all shadow-2xl shadow-brand-navy/20"
                >
                  <MessageCircle size={18} /> WhatsApp Referral Button
                </a>
              </div>

              <div className="bg-white p-12 rounded-[50px] shadow-2xl shadow-brand-navy/5 border border-white w-full">
                <h3 className="font-cormorant text-3xl text-brand-navy font-bold mb-8">Protocol Inquiry</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Dr. Name" className="flex-1 p-4 bg-brand-ice rounded-2xl font-dm text-[11px] uppercase tracking-widest border border-transparent focus:border-brand-teal outline-none transition-all" />
                    <input type="text" placeholder="Specialization" className="flex-1 p-4 bg-brand-ice rounded-2xl font-dm text-[11px] uppercase tracking-widest border border-transparent focus:border-brand-teal outline-none transition-all" />
                  </div>
                  <input type="email" placeholder="Professional Email" className="w-full p-4 bg-brand-ice rounded-2xl font-dm text-[11px] uppercase tracking-widest border border-transparent focus:border-brand-teal outline-none transition-all" />
                  <textarea placeholder="Referral Query / Case Discussion" className="w-full p-4 bg-brand-ice rounded-2xl font-dm text-[11px] uppercase tracking-widest border border-transparent focus:border-brand-teal outline-none transition-all h-32" />
                  <button className="w-full py-5 bg-brand-teal text-white rounded-2xl font-dm font-bold text-[11px] uppercase tracking-[.3em] hover:bg-brand-navy transition-all shadow-xl shadow-brand-teal/20">
                    Request Protocol Discussion
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Branding Footer Mark */}
        <div className="mt-24 text-center pb-24 overflow-visible">
          <SectionLabel className="overflow-visible">HYDERABAD CLINICAL NETWORK</SectionLabel>
          <div className="font-cormorant text-[120px] font-bold text-brand-navy italic opacity-[0.03] select-none leading-none mt-12 overflow-visible">
            Network Reach
          </div>
        </div>
      </div>
    </div>
  );
}
