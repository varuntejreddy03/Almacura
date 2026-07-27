import useSEO from '../hooks/useSEO';
import { motion } from 'framer-motion';

export default function Privacy() {
  useSEO('Privacy Policy | ALMACURA', 'Read the privacy policy of ALMACURA Institute, Hyderabad.', '/privacy');

  return (
    <div className="pt-32 pb-24 bg-brand-beige min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-dm text-[11px] font-bold tracking-[0.3em] text-brand-teal uppercase mb-4 block">
            Legal Documentation
          </span>
          <h1 className="font-cormorant text-5xl md:text-7xl font-bold text-brand-navy mb-12">
            Privacy Policy
          </h1>

          <div className="prose prose-teal max-w-none font-dm text-brand-text/80 space-y-8">
            <section>
              <h2 className="text-2xl font-cormorant font-bold text-brand-navy mb-4">1. Information Collection</h2>
              <p>We collect information that you provide directly to us when you book a consultation, sign up for our newsletter, or contact us via WhatsApp or email. This may include your name, contact details, and medical history shared during clinical inquiries.</p>
            </section>

            <section>
              <h2 className="text-2xl font-cormorant font-bold text-brand-navy mb-4">2. Use of Information</h2>
              <p>The information we collect is used solely to provide personalized clinical services, manage appointments, and ensure the highest standard of patient care. We do not sell or share your personal data with third parties for marketing purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-cormorant font-bold text-brand-navy mb-4">3. Data Security</h2>
              <p>We implement professional-grade security measures to protect your personal and medical information. Access to patient records is strictly limited to authorized medical personnel involved in your treatment.</p>
            </section>

            <section>
              <h2 className="text-2xl font-cormorant font-bold text-brand-navy mb-4">4. Patient Rights</h2>
              <p>You have the right to request access to your records, ask for corrections, or request the deletion of your personal contact information at any time, subject to local medical record retention regulations.</p>
            </section>

            <div className="bg-white/50 p-8 rounded-3xl border border-brand-teal/10 mt-12">
              <p className="text-xs italic opacity-60">Last updated: May 2026. For any questions regarding our privacy practices, please contact our administrative team at Hyderabad.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
