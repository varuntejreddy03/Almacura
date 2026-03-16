import { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';
import CTAButton from '../components/CTAButton';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    therapy: '',
    message: '',
    preferredDate: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const therapyOptions = [
    'General Consultation',
    'HBOT - Hyperbaric Oxygen Therapy',
    'EECP - Enhanced External Counter Pulsation',
    'PRP - Platelet-Rich Plasma Therapy',
    'Ozone Therapy',
    'Photobiomodulation',
    'Molecular Hydrogen Therapy',
    'Pain Portal Blocks',
    'Longevity Protocol',
    'Nutritional Assessment'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.therapy) {
      newErrors.therapy = 'Please select a therapy of interest';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        therapy: '',
        message: '',
        preferredDate: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-brand-black pt-24">
      {/* Hero */}
      <section className="py-24 px-6 bg-brand-deep">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <SectionLabel>GET IN TOUCH</SectionLabel>
            <h1 className="font-cormorant text-6xl md:text-8xl text-brand-white mb-8">
              Begin Your Journey
            </h1>
            <p className="text-brand-muted text-lg leading-relaxed max-w-2xl mx-auto">
              Schedule a consultation to discuss your health optimization goals and explore personalized therapeutic protocols.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="glass-card p-8 md:p-12">
                  <h2 className="font-cormorant text-4xl text-brand-white mb-8">
                    Book Your Consultation
                  </h2>
                  
                  {submitted ? (
                    <div className="bg-brand-teal/10 border border-brand-teal/30 rounded-sm p-8 text-center">
                      <div className="text-brand-teal text-5xl mb-4">✓</div>
                      <h3 className="font-dm font-semibold text-brand-white text-xl mb-2">
                        Thank You!
                      </h3>
                      <p className="text-brand-muted">
                        Your consultation request has been received. We will contact you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block font-mono text-brand-teal text-xs uppercase tracking-wider mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full bg-brand-card border ${errors.name ? 'border-red-500' : 'border-brand-border'} focus:border-brand-teal px-4 py-3 text-brand-white placeholder-brand-dim outline-none transition-colors`}
                          placeholder="Enter your full name"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>

                      {/* Phone & Email */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block font-mono text-brand-teal text-xs uppercase tracking-wider mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full bg-brand-card border ${errors.phone ? 'border-red-500' : 'border-brand-border'} focus:border-brand-teal px-4 py-3 text-brand-white placeholder-brand-dim outline-none transition-colors`}
                            placeholder="+91 9989033686"
                          />
                          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>

                        <div>
                          <label htmlFor="email" className="block font-mono text-brand-teal text-xs uppercase tracking-wider mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full bg-brand-card border ${errors.email ? 'border-red-500' : 'border-brand-border'} focus:border-brand-teal px-4 py-3 text-brand-white placeholder-brand-dim outline-none transition-colors`}
                            placeholder="your@email.com"
                          />
                          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                      </div>

                      {/* Therapy Selection */}
                      <div>
                        <label htmlFor="therapy" className="block font-mono text-brand-teal text-xs uppercase tracking-wider mb-2">
                          Therapy of Interest *
                        </label>
                        <select
                          id="therapy"
                          name="therapy"
                          value={formData.therapy}
                          onChange={handleChange}
                          className={`w-full bg-brand-card border ${errors.therapy ? 'border-red-500' : 'border-brand-border'} focus:border-brand-teal px-4 py-3 text-brand-white outline-none transition-colors`}
                        >
                          <option value="">Select a therapy</option>
                          {therapyOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                        {errors.therapy && <p className="text-red-500 text-sm mt-1">{errors.therapy}</p>}
                      </div>

                      {/* Preferred Date */}
                      <div>
                        <label htmlFor="preferredDate" className="block font-mono text-brand-teal text-xs uppercase tracking-wider mb-2">
                          Preferred Date (Optional)
                        </label>
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full bg-brand-card border border-brand-border focus:border-brand-teal px-4 py-3 text-brand-white outline-none transition-colors"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block font-mono text-brand-teal text-xs uppercase tracking-wider mb-2">
                          Message (Optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          className="w-full bg-brand-card border border-brand-border focus:border-brand-teal px-4 py-3 text-brand-white placeholder-brand-dim outline-none transition-colors resize-none"
                          placeholder="Tell us about your health concerns or questions..."
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full bg-brand-teal text-brand-white px-8 py-4 font-dm font-semibold uppercase tracking-widest text-sm hover:bg-brand-tealLight transition-all duration-300 flex items-center justify-center gap-3"
                      >
                        <Send size={18} />
                        Book Consultation
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Info Panel */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <ScrollReveal delay={0.2}>
                  <div className="glass-card p-8">
                    <Phone className="text-brand-teal mb-4" size={32} />
                    <h3 className="font-dm font-semibold text-brand-white text-xl mb-3 uppercase tracking-wide">
                      Phone & WhatsApp
                    </h3>
                    <p className="text-brand-muted mb-2">
                      Call or message us directly
                    </p>
                    <a href="tel:+919989033686" className="text-brand-teal hover:text-brand-tealLight text-lg font-medium">
                      +91 9989033686
                    </a>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <div className="glass-card p-8">
                    <Mail className="text-brand-teal mb-4" size={32} />
                    <h3 className="font-dm font-semibold text-brand-white text-xl mb-3 uppercase tracking-wide">
                      Email
                    </h3>
                    <p className="text-brand-muted mb-2">
                      Send us your queries
                    </p>
                    <a href="mailto:doctorkvsreddy@yahoo.com" className="text-brand-teal hover:text-brand-tealLight font-medium break-all">
                      doctorkvsreddy@yahoo.com
                    </a>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <div className="glass-card p-8">
                    <Clock className="text-brand-teal mb-4" size={32} />
                    <h3 className="font-dm font-semibold text-brand-white text-xl mb-3 uppercase tracking-wide">
                      Hours
                    </h3>
                    <div className="space-y-2 text-brand-muted">
                      <div className="flex justify-between">
                        <span>Monday – Saturday</span>
                        <span className="text-brand-white">9:00 AM – 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="text-brand-dim">Closed</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.5}>
                  <div className="glass-card p-8">
                    <MapPin className="text-brand-teal mb-4" size={32} />
                    <h3 className="font-dm font-semibold text-brand-white text-xl mb-3 uppercase tracking-wide">
                      Location
                    </h3>
                    <p className="text-brand-muted">
                      Hyderabad, India
                    </p>
                    <p className="text-brand-dim text-sm mt-2">
                      Exact address provided upon consultation booking
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-6 bg-brand-deep">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="glass-card p-4 overflow-hidden">
              <div className="aspect-video bg-brand-card flex items-center justify-center border border-brand-border">
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 text-brand-teal" size={48} />
                  <p className="text-brand-muted">
                    Map integration available upon request
                  </p>
                  <p className="text-brand-dim text-sm mt-2">
                    Exact location shared with confirmed appointments
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
