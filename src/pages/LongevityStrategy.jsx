import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Shield, Activity, Heart, Brain, CheckCircle, ArrowRight } from 'lucide-react';
import useSEO from '../hooks/useSEO';

export default function LongevityStrategy() {
  useSEO(
    "Personalized Longevity Strategy | ALMACURA",
    "Achieve healthier aging with evidence-based longevity strategies tailored to your health goals and lifestyle.",
    "/programs/longevity-strategy"
  );

  const pillars = [
    { icon: Heart, title: "Cardiovascular Health", desc: "Optimize heart function and circulation" },
    { icon: Brain, title: "Cognitive Vitality", desc: "Protect and enhance brain health" },
    { icon: Activity, title: "Metabolic Efficiency", desc: "Balance hormones and metabolism" },
    { icon: Shield, title: "Immune Resilience", desc: "Strengthen natural defenses" }
  ];

  const benefits = [
    "Extended healthspan, not just lifespan",
    "Reduced biological age markers",
    "Prevention of age-related diseases",
    "Maintained physical and mental function",
    "Improved quality of life",
    "Personalized biomarker tracking"
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
            Personalized Longevity Strategy
          </h1>
          <p className="font-dm text-lg text-brand-muted leading-relaxed">
            Evidence-based protocols designed to extend your healthspan, optimize biological age, and help you live better for longer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {pillars.map((pillar, i) => (
            <div key={i} className="bg-brand-ice p-6 rounded-2xl text-center group hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-teal mx-auto mb-4 group-hover:bg-brand-teal group-hover:text-white transition-all">
                <pillar.icon size={28} />
              </div>
              <h3 className="font-dm font-bold text-brand-navy mb-2">{pillar.title}</h3>
              <p className="text-brand-muted text-sm">{pillar.desc}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl border border-brand-teal/10"
          >
            <div className="w-14 h-14 bg-brand-teal/10 rounded-2xl flex items-center justify-center text-brand-teal mb-6">
              <Clock size={28} />
            </div>
            <h2 className="font-cormorant text-3xl font-bold text-brand-navy mb-4">Age Better, Live Longer</h2>
            <p className="text-brand-muted leading-relaxed mb-6">
              Longevity is not about adding years to life, but life to years. Our personalized strategy combines advanced diagnostics, targeted therapies, and lifestyle optimization to slow biological aging.
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
            className="bg-brand-navy p-10 rounded-3xl text-white"
          >
            <h2 className="font-cormorant text-3xl font-bold mb-6">Your Longevity Journey</h2>
            <div className="space-y-6">
              {[
                { step: "1", title: "Comprehensive Assessment", desc: "Advanced biomarker testing and health evaluation" },
                { step: "2", title: "Strategy Design", desc: "Personalized longevity protocol based on your data" },
                { step: "3", title: "Therapeutic Interventions", desc: "Targeted therapies to optimize biological systems" },
                { step: "4", title: "Ongoing Optimization", desc: "Regular monitoring and protocol adjustments" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-gold text-brand-navy rounded-full flex items-center justify-center font-cormorant font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-dm font-bold mb-1">{item.title}</h3>
                    <p className="text-white/70 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-ice rounded-3xl p-10 text-center"
        >
          <h2 className="font-cormorant text-4xl font-bold text-brand-navy mb-4">Start Your Longevity Journey</h2>
          <p className="text-brand-muted mb-8 max-w-xl mx-auto">
            Take the first step towards a longer, healthier life with a personalized longevity consultation.
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 bg-brand-navy text-white rounded-full font-dm font-bold text-sm uppercase tracking-wider hover:bg-brand-teal transition-all inline-flex items-center gap-2">
              Book Consultation <ArrowRight size={18} />
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
