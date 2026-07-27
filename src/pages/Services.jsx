import useSEO from '../hooks/useSEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Heart, TrendingUp, Leaf, Microscope, Utensils } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import ScrollReveal from '../components/ScrollReveal';
import Breadcrumb from '../components/Breadcrumb';

export default function Services() {
  useSEO(
    "Our Services | Integrative Medicine & Wellness | ALMACURA",
    "Explore ALMACURA's full range of integrative medicine services including healthspan optimization, functional gynaecology, longevity, diagnostics, and nutrition.",
    "/services"
  );

  const services = [
    {
      icon: Activity,
      title: 'Integrative Medicine',
      desc: 'Combining modern clinical medicine with evidence-based holistic approaches to treat root causes and restore lasting vitality.',
      path: '/services/integrative-medicine',
      alt: '/integrative-medicine'
    },
    {
      icon: TrendingUp,
      title: 'Healthspan Optimization',
      desc: 'Science-backed protocols for longevity, energy optimization, and disease prevention tailored to your biological profile.',
      path: '/services/healthspan-optimization',
      alt: '/healthspan-optimization'
    },
    {
      icon: Heart,
      title: 'Functional Gynaecology',
      desc: 'Expert non-surgical care for hormonal balance, menopause, pelvic health, and women\'s wellness at every life stage.',
      path: '/services/functional-gynaecology',
      alt: '/functional-gynaecology'
    },
    {
      icon: TrendingUp,
      title: 'Longevity Protocols',
      desc: 'Evidence-based longevity programs focused on healthy ageing, cellular repair, and extending your healthspan.',
      path: '/services/longevity',
      alt: '/longevity'
    },
    {
      icon: Microscope,
      title: 'Advanced Diagnostics',
      desc: 'Comprehensive diagnostic evaluations for personalized treatment planning, disease prevention, and health optimization.',
      path: '/services/diagnostics',
      alt: '/diagnostics'
    },
    {
      icon: Utensils,
      title: 'Clinical Nutrition',
      desc: 'Personalised nutrition plans supporting healing, hormone balance, and healthspan optimisation through targeted metabolic care.',
      path: '/services/nutrition',
      alt: '/nutrition'
    },
  ];

  return (
    <main className="bg-brand-white pt-24">
      <Breadcrumb />

      {/* Hero */}
      <section className="py-20 px-6 bg-brand-ice">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <SectionLabel>OUR SERVICES</SectionLabel>
            <h1 className="font-cormorant text-5xl md:text-6xl text-brand-navy mt-4 mb-6 italic">
              Integrative Medicine & Wellness Services
            </h1>
            <p className="text-brand-muted text-lg leading-relaxed max-w-3xl mx-auto">
              ALMACURA offers a comprehensive range of integrative medicine services designed to treat root causes, restore vitality, and optimize long-term health through personalized, evidence-based care.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-brand-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <Link to={service.path}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass-card p-8 h-full hover:border-brand-teal transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-brand-ice rounded-xl flex items-center justify-center text-brand-teal mb-6 group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
                      <service.icon size={24} strokeWidth={1.5} />
                    </div>
                    <h2 className="font-cormorant text-2xl text-brand-navy mb-3 font-bold">{service.title}</h2>
                    <p className="text-brand-muted text-sm leading-relaxed mb-4">{service.desc}</p>
                    <div className="flex items-center gap-2 text-brand-teal text-xs font-dm font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                      Learn More <ArrowRight size={14} />
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-brand-ice">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-cormorant text-4xl md:text-5xl text-brand-navy mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-brand-muted leading-relaxed mb-10 max-w-xl mx-auto">
              Book a consultation and our medical team will guide you to the right service based on your health goals.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="font-dm uppercase"
                style={{ background: '#0B6E6E', color: '#fff', borderRadius: '6px', padding: '16px 36px', fontSize: '13px', letterSpacing: '1.5px', fontWeight: 600, boxShadow: '0 6px 24px rgba(11,110,110,0.3)' }}
              >
                Book Consultation
              </motion.button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
