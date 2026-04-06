import { useState } from 'react';
import { ArrowRight, MapPin, MessageCircle, CheckCircle2, ShieldCheck, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    consultationType: '',
    therapy: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const therapyOptions = [
    'HBOT - Hyperbaric Oxygen Therapy',
    'Ozone Therapy',
    'IV Nutrient Therapy',
    'Hydrogen Therapy',
    'Red Light Therapy',
    'Acupuncture',
    'Longevity Program',
    'Energy Optimization',
    'Other / Not Sure'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email address is required';
    if (!formData.consultationType) newErrors.consultationType = 'Please select a consultation type';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '', phone: '', email: '', consultationType: '', therapy: '', message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-brand-white pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-24 px-6 bg-brand-ice/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,110,110,0.05),transparent_50%)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <SectionLabel>BOOK YOUR VISIT</SectionLabel>
            <h1 className="font-dm text-[clamp(44px,8vw,80px)] leading-[0.95] text-brand-navy font-bold tracking-tight mb-8">
              Begin Your <br /> Pathway to Vitality
            </h1>
            <p className="text-brand-muted text-xl leading-relaxed italic max-w-2xl mx-auto font-cormorant">
              "Select your preferred consultation type to start your evidence-based health journey."
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Booking Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="bg-white p-10 sm:p-12 rounded-[50px] shadow-2xl shadow-brand-navy/5 border border-brand-ice relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-ice rounded-bl-full" />
                  
                  {submitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }} 
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-20 text-center"
                    >
                      <div className="w-20 h-20 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal mx-auto mb-8">
                        <CheckCircle2 size={40} />
                      </div>
                      <h3 className="font-cormorant text-4xl text-brand-navy mb-4 italic">Booking Received</h3>
                      <p className="text-brand-muted text-lg font-dm tracking-wide mb-8 uppercase">Our medical team will contact you shortly.</p>
                      <button 
                        onClick={() => setSubmitted(false)}
                        className="font-dm font-bold text-[11px] uppercase tracking-widest text-brand-teal hover:text-brand-navy transition-colors"
                      >
                        Send Another Request
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="font-dm font-bold text-[10px] uppercase tracking-[.3em] text-brand-teal flex items-center gap-2">
                            Full Name <span className="opacity-30">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className={`w-full bg-brand-ice/50 border ${errors.name ? 'border-red-400' : 'border-transparent'} focus:border-brand-teal/30 p-5 rounded-2xl outline-none font-dm text-[13px] uppercase tracking-widest transition-all`}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="font-dm font-bold text-[10px] uppercase tracking-[.3em] text-brand-teal flex items-center gap-2">
                            Phone Number <span className="opacity-30">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 91234 56789"
                            className={`w-full bg-brand-ice/50 border ${errors.phone ? 'border-red-400' : 'border-transparent'} focus:border-brand-teal/30 p-5 rounded-2xl outline-none font-dm text-[13px] uppercase tracking-widest transition-all`}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="font-dm font-bold text-[10px] uppercase tracking-[.3em] text-brand-teal flex items-center gap-2">
                          Email Address <span className="opacity-30">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={`w-full bg-brand-ice/50 border ${errors.email ? 'border-red-400' : 'border-transparent'} focus:border-brand-teal/30 p-5 rounded-2xl outline-none font-dm text-[13px] uppercase tracking-widest transition-all`}
                        />
                      </div>

                      <div className="space-y-4">
                        <label className="font-dm font-bold text-[10px] uppercase tracking-[.3em] text-brand-teal flex items-center gap-2 mb-4">
                          Type of Visit <span className="opacity-30">*</span>
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {[
                            { id: 'paid', title: 'Paid Consultation', desc: 'Expert medical assessment', icon: Stethoscope },
                            { id: 'free', title: 'Free Suitability Check', desc: 'New patient guidance', icon: ShieldCheck }
                          ].map(type => (
                            <button
                              key={type.id}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, consultationType: type.id }))}
                              className={`p-6 rounded-3xl border-2 text-left transition-all flex items-start gap-4 ${formData.consultationType === type.id ? 'border-brand-teal bg-brand-ice/50' : 'border-brand-ice bg-white hover:border-brand-teal/30'}`}
                            >
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${formData.consultationType === type.id ? 'bg-brand-teal text-white' : 'bg-brand-ice text-brand-teal'}`}>
                                <type.icon size={20} />
                              </div>
                              <div>
                                <div className="font-dm font-bold text-[11px] uppercase tracking-widest text-brand-navy mb-1">{type.title}</div>
                                <div className="text-[10px] uppercase tracking-widest text-brand-muted">{type.desc}</div>
                              </div>
                            </button>
                          ))}
                        </div>
                        {errors.consultationType && <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest mt-2">{errors.consultationType}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className="font-dm font-bold text-[10px] uppercase tracking-[.3em] text-brand-teal">
                          Therapy of Interest
                        </label>
                        <select
                          name="therapy"
                          value={formData.therapy}
                          onChange={handleChange}
                          className="w-full bg-brand-ice/50 border border-transparent focus:border-brand-teal/30 p-5 rounded-2xl outline-none font-dm text-[11px] font-bold uppercase tracking-widest appearance-none transition-all cursor-pointer"
                        >
                          <option value="">Select Protocol</option>
                          {therapyOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="font-dm font-bold text-[10px] uppercase tracking-[.3em] text-brand-teal">
                          Additional Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Your message..."
                          rows="4"
                          className="w-full bg-brand-ice/50 border border-transparent focus:border-brand-teal/30 p-5 rounded-2xl outline-none font-dm text-[13px] uppercase tracking-widest transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-5 bg-brand-navy text-white rounded-3xl font-dm font-bold text-[11px] uppercase tracking-[.4em] hover:bg-brand-teal transition-all shadow-2xl shadow-brand-navy/20 flex items-center justify-center gap-4 group"
                      >
                        Request Appointment <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Info Cards */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal delay={0.2}>
                <div className="bg-brand-navy p-10 rounded-[50px] text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full group-hover:scale-125 transition-transform duration-700" />
                  <div className="relative z-10">
                    <MessageCircle className="text-brand-teal mb-6" size={40} />
                    <h3 className="font-cormorant text-3xl font-bold italic mb-4">WhatsApp Support</h3>
                    <p className="text-white/40 text-sm uppercase tracking-widest mb-8 leading-loose">Get instant guidance and protocol information via direct message.</p>
                    <a 
                      href="https://wa.me/919989033686"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 text-brand-teal font-dm font-bold text-[11px] uppercase tracking-[.3em] group-hover:gap-6 transition-all"
                    >
                      Connect on WhatsApp <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-brand-ice/50 p-10 rounded-[50px] border border-white group">
                  <div className="flex items-center gap-6 mb-8 text-brand-teal">
                    <MapPin size={32} />
                    <div className="font-dm font-bold text-[11px] uppercase tracking-widest border-l-2 border-brand-teal/20 pl-6 text-brand-navy">Secunderabad, <br /> Hyderabad</div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-brand-teal/10 pb-4">
                      <div className="font-dm font-bold text-[9px] uppercase tracking-widest text-brand-muted">Monday – Saturday</div>
                      <div className="font-dm font-bold text-[10px] uppercase tracking-widest text-brand-navy">9 AM – 6 PM</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="font-dm font-bold text-[9px] uppercase tracking-widest text-brand-muted">Direct Email</div>
                      <div className="font-dm font-bold text-[10px] uppercase tracking-widest text-brand-teal underline">doctorkvsreddy@yahoo.com</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="p-10 text-center">
                  <SectionLabel>REFERRED BY A DOCTOR?</SectionLabel>
                  <p className="text-brand-muted text-sm italic font-cormorant mt-4 mb-8 leading-loose">"Please mention your referring physician in the message section for co-managed care updates."</p>
                  <Link to="/for-doctors">
                    <button className="text-brand-teal font-dm font-bold text-[9px] uppercase tracking-[.3em] flex items-center justify-center gap-2 mx-auto hover:text-brand-navy transition-colors">
                      Physician Portal <ArrowRight size={12} />
                    </button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
