import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Battery, Brain, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import useSEO from '../hooks/useSEO';

export default function EnergyRevitalization() {
  useSEO(
    "Energy Revitalization Program | ALMACURA",
    "Restore vitality, reduce fatigue, and improve physical performance through personalized energy optimization programs.",
    "/programs/energy-revitalization"
  );

  const benefits = [
    "Sustained energy throughout the day",
    "Improved mental clarity and focus",
    "Better sleep quality",
    "Enhanced physical performance",
    "Reduced chronic fatigue",
    "Optimized mitochondrial function"
  ];

  const therapies = [
    { icon: Zap, name: "IV Nutrient Therapy", desc: "Direct cellular nourishment for rapid energy boost" },
    { icon: Battery, name: "Hydrogen Therapy", desc: "Antioxidant support for cellular energy" },
    { icon: Brain, name: "Red Light Therapy", desc: "Mitochondrial activation and ATP production" },
    { icon: Heart, name: "HBOT", desc: "Enhanced oxygen delivery to tissues" }
  ];

  return (
    <main className="bg-brand-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-dm text-[11px] font-bold tracking-[0.3em] text-brand-teal uppercase mb-4 block">
            Clinical Program
          </span>
          <h1 className="font-cormorant text-5xl md:text-6xl font-bold text-brand-navy mb-6">
            Energy Revitalization Program
          </h1>
          <p className="font-dm text-lg text-brand-muted leading-relaxed">
            Restore your vitality and overcome chronic fatigue with our comprehensive energy optimization protocols designed to enhance cellular function and metabolic efficiency.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-ice p-10 rounded-3xl"
          >
            <div className="w-14 h-14 bg-brand-gold/20 rounded-2xl flex items-center justify-center text-brand-gold mb-6">
              <Zap size={28} />
            </div>
            <h2 className="font-cormorant text-3xl font-bold text-brand-navy mb-4">Reclaim Your Energy</h2>
            <p className="text-brand-muted leading-relaxed mb-6">
              Fatigue is not a normal part of aging. Our program identifies the root causes of low energy — from mitochondrial dysfunction to nutrient deficiencies — and addresses them systematically.
            </p>
            <ul className="space-y-3">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-navy font-dm">
                  <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-cormorant text-3xl font-bold text-brand-navy mb-6">Integrated Therapies</h2>
            {therapies.map((therapy, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-brand-teal/10 flex gap-4 group hover:border-brand-teal/30 transition-all">
                <div className="w-12 h-12 bg-brand-teal/10 text-brand-teal rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-teal group-hover:text-white transition-all">
                  <therapy.icon size={24} />
                </div>
                <div>
                  <h3 className="font-dm font-bold text-brand-navy mb-1">{therapy.name}</h3>
                  <p className="text-brand-muted text-sm">{therapy.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-navy rounded-3xl p-10 text-center"
        >
          <h2 className="font-cormorant text-4xl font-bold text-white mb-4">Restore Your Vitality</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Our clinical team will assess your energy levels and create a personalized revitalization plan.
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 bg-brand-teal text-white rounded-full font-dm font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-brand-navy transition-all inline-flex items-center gap-2">
              Book Consultation <ArrowRight size={18} />
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
