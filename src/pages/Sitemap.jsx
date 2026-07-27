import useSEO from '../hooks/useSEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Activity, Heart, Users, FileText, Globe } from 'lucide-react';

const sitemapData = [
  {
    title: "About & Contact",
    icon: <Globe className="w-5 h-5" />,
    links: [
      { name: "Home", path: "/" },
      { name: "About the Institute", path: "/about" },
      { name: "Our Founder", path: "/founder" },
      { name: "Meet Our Specialists", path: "/team" },
      { name: "For Doctors & Referrals", path: "/for-doctors" },
      { name: "Contact & Appointments", path: "/contact" }
    ]
  },
  {
    title: "Clinical Programs",
    icon: <Activity className="w-5 h-5" />,
    links: [
      { name: "All Programs", path: "/programs" },
      { name: "Integrative Medicine", path: "/integrative-medicine" },
      { name: "Healthspan Optimization", path: "/healthspan-optimization" },
      { name: "Functional Gynaecology", path: "/functional-gynaecology" },
      { name: "Longevity Protocol", path: "/longevity" },
      { name: "Diagnostics", path: "/diagnostics" },
      { name: "Nutrition", path: "/nutrition" }
    ]
  },
  {
    title: "Therapies",
    icon: <Heart className="w-5 h-5" />,
    links: [
      { name: "All Therapies", path: "/therapies" },
      { name: "HBOT — Oxygen Therapy", path: "/therapies/hbot" },
      { name: "EECP — Heart Health", path: "/therapies/eecp" },
      { name: "IV Nutrient Therapy", path: "/therapies/iv-therapy" },
      { name: "Ozone Therapy", path: "/therapies/ozone" },
      { name: "Hydrogen Therapy", path: "/therapies/hydrogen" },
      { name: "Red Light Therapy", path: "/therapies/red-light" },
      { name: "Acupuncture", path: "/therapies/acupuncture" },
      { name: "PRP Therapy", path: "/therapies/prp" },
      { name: "HIFEM Pelvic Chair", path: "/therapies/hifem" },
      { name: "HIFU Women Wellness", path: "/therapies/hifu" },
      { name: "DSCB Pain Portal Block", path: "/therapies/dscb" },
      { name: "Regenerative Yoga", path: "/therapies/yoga" },
      { name: "Infrared Sauna", path: "/therapies/infrared-sauna" }
    ]
  },
  {
    title: "Resources & Legal",
    icon: <FileText className="w-5 h-5" />,
    links: [
      { name: "FAQs", path: "/faq" },
      { name: "Blog", path: "/blog" },
      { name: "Testimonials", path: "/testimonials" },
      { name: "Medical Disclaimer", path: "/disclaimer" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Treatment", path: "/terms" }
    ]
  }
];

export default function Sitemap() {
  useSEO('Sitemap | ALMACURA', 'Browse all pages of the ALMACURA website.', '/sitemap');

  return (
    <div className="pt-32 pb-24 bg-brand-beige min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="font-dm text-[11px] font-bold tracking-[0.3em] text-brand-teal uppercase mb-4 block">
            Navigation Index
          </span>
          <h1 className="font-cormorant text-5xl md:text-7xl font-bold text-brand-navy mb-6">
            Sitemap
          </h1>
          <p className="font-dm text-lg text-brand-text/70 max-w-2xl leading-relaxed">
            A comprehensive directory of all services, resources, and clinical documentation available at ALMACURA Institute.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {sitemapData.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-brand-teal/5"
            >
              <div className="flex items-center gap-3 mb-8 text-brand-teal">
                {section.icon}
                <h3 className="font-dm font-bold text-[13px] tracking-wider uppercase text-brand-navy">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="group flex items-center gap-2 text-brand-text/60 hover:text-brand-teal transition-all text-[13px] font-dm"
                    >
                      <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
