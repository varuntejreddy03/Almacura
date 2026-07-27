import useSEO from '../hooks/useSEO';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

export default function Disclaimer() {
  useSEO("Disclaimer | ALMACURA", "Read the medical disclaimer for ALMACURA integrative medicine and wellness therapies.", "/disclaimer");

  return (
    <div className="pt-32 pb-24 bg-brand-beige min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-dm text-[11px] font-bold tracking-[0.3em] text-brand-teal uppercase mb-4 block">
            Clinical Transparency
          </span>
          <h1 className="font-cormorant text-5xl md:text-7xl font-bold text-brand-navy mb-12">
            Medical Disclaimer
          </h1>

          <div className="bg-brand-navy p-8 md:p-12 rounded-[40px] text-white mb-12 flex flex-col md:flex-row gap-8 items-center border border-white/10">
            <AlertCircle size={48} className="text-brand-teal flex-shrink-0" />
            <div>
              <p className="font-dm text-lg leading-relaxed opacity-90">
                The information provided on this website is for educational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment.
              </p>
            </div>
          </div>

          <div className="prose prose-teal max-w-none font-dm text-brand-text/80 space-y-12">
            <section>
              <h2 className="text-2xl font-cormorant font-bold text-brand-navy mb-4">1. No Doctor-Patient Relationship</h2>
              <p>Visiting this website or contacting us via email or WhatsApp does not establish a doctor-patient relationship. A professional relationship is only established after a formal clinical consultation and the commencement of a treatment plan.</p>
            </section>

            <section>
              <h2 className="text-2xl font-cormorant font-bold text-brand-navy mb-4">2. Complementary & Integrative Medicine</h2>
              <p>ALMACURA specializes in integrative and functional medicine. Many of our therapeutic modalities (such as HBOT, EECP, and IV Nutrition) are designed to complement conventional medical treatments. They are not intended to replace standard clinical care for acute medical conditions.</p>
            </section>

            <section>
              <h2 className="text-2xl font-cormorant font-bold text-brand-navy mb-4">3. Individual Results</h2>
              <p>Clinical outcomes vary from patient to patient based on unique physiological factors, lifestyle, and adherence to protocols. We do not guarantee specific medical results, and patient testimonials represent individual experiences rather than clinical certainties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-cormorant font-bold text-brand-navy mb-4">4. Emergency Situations</h2>
              <p>ALMACURA is an outpatient clinical institute. In the event of a medical emergency, please contact your local emergency services or visit the nearest hospital emergency department immediately.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
