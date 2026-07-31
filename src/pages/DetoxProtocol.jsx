import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Droplets, ShieldCheck, Activity, CheckCircle, ArrowRight } from 'lucide-react';
import useSEO from '../hooks/useSEO';

export default function DetoxProtocol() {
  useSEO(
    "Medical Detox Program | ALMACURA",
    "Safe, medically supervised detoxification programs designed to improve energy, metabolism, and overall health.",
    "/programs/detox"
  );

  const benefits = [
    "Elimination of accumulated toxins",
    "Improved energy and mental clarity",
    "Enhanced metabolic function",
    "Better digestive health",
    "Strengthened immune response",
    "Reduced inflammation"
  ];

  const phases = [
    { title: "Assessment", desc: "Comprehensive evaluation of toxin load and organ function" },
    { title: "Preparation", desc: "Nutritional and lifestyle modifications to support detox" },
    { title: "Active Detox", desc: "Medically supervised detoxification protocols" },
    { title: "Restoration", desc: "Rebuilding gut health and nutrient reserves" }
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
            Medical Detox Program
          </h1>
          <p className="font-dm text-lg text-brand-muted leading-relaxed">
            Safe, medically supervised detoxification designed to eliminate toxins, restore metabolic balance, and revitalize your body's natural healing capacity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-ice p-10 rounded-3xl"
          >
            <div className="w-14 h-14 bg-brand-teal/10 rounded-2xl flex items-center justify-center text-brand-teal mb-6">
              <Leaf size={28} />
            </div>
            <h2 className="font-cormorant text-3xl font-bold text-brand-navy mb-4">Why Detox Matters</h2>
            <p className="text-brand-muted leading-relaxed mb-6">
              Modern life exposes us to environmental toxins, processed foods, and chronic stress that burden our detoxification organs. Our medical detox program supports your liver, kidneys, and lymphatic system to function optimally.
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
            <h2 className="font-cormorant text-3xl font-bold text-brand-navy mb-6">Program Phases</h2>
            {phases.map((phase, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-brand-teal/10 flex gap-4">
                <div className="w-10 h-10 bg-brand-teal text-white rounded-full flex items-center justify-center font-cormorant font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-dm font-bold text-brand-navy mb-1">{phase.title}</h3>
                  <p className="text-brand-muted text-sm">{phase.desc}</p>
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
          <h2 className="font-cormorant text-4xl font-bold text-white mb-4">Start Your Detox Journey</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Our clinical team will design a personalized detox protocol based on your health status and goals.
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
