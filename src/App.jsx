import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Founder = lazy(() => import('./pages/Founder'));
const Team = lazy(() => import('./pages/Team'));
const Services = lazy(() => import('./pages/Services'));
const Programs = lazy(() => import('./pages/Programs'));
const Therapies = lazy(() => import('./pages/Therapies'));
const TherapyDetail = lazy(() => import('./pages/TherapyDetail'));
const FunctionalGynaecology = lazy(() => import('./pages/FunctionalGynaecology'));
const IntegrativeMedicine = lazy(() => import('./pages/IntegrativeMedicine'));
const HealthspanOptimization = lazy(() => import('./pages/HealthspanOptimization'));
const Longevity = lazy(() => import('./pages/Longevity'));
const DetoxProtocol = lazy(() => import('./pages/DetoxProtocol'));
const EnergyRevitalization = lazy(() => import('./pages/EnergyRevitalization'));
const LongevityStrategy = lazy(() => import('./pages/LongevityStrategy'));
const Diagnostics = lazy(() => import('./pages/Diagnostics'));
const Nutrition = lazy(() => import('./pages/Nutrition'));
const ForDoctors = lazy(() => import('./pages/ForDoctors'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Blog = lazy(() => import('./pages/Blog'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));
const Contact = lazy(() => import('./pages/Contact'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageFallback() {
  return (
    <div className="min-h-[70vh] bg-brand-white pt-40 flex items-start justify-center">
      <div className="h-12 w-12 rounded-full border-2 border-brand-teal/20 border-t-brand-teal animate-spin" />
    </div>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) { window.scrollTo(0, 0); return; }
    const anchor = decodeURIComponent(hash.slice(1));
    window.requestAnimationFrame(() => {
      const element = document.getElementById(anchor);
      if (!element) { window.scrollTo(0, 0); return; }
      const targetTop = element.getBoundingClientRect().top + window.scrollY - 128;
      window.scrollTo({ top: Math.max(targetTop, 0), behavior: 'smooth' });
    });
  }, [pathname, hash]);
  return null;
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-brand-white min-h-screen selection:bg-brand-teal/20 selection:text-brand-navy">
        <Navbar />
        <Suspense fallback={<PageFallback />}>
          <Routes>
            {/* Core Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/founder" element={<Founder />} />
            <Route path="/about/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/for-doctors" element={<ForDoctors />} />
            <Route path="/programs" element={<Programs />} />

            {/* Services Hub — SEO recommended structure */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/integrative-medicine" element={<IntegrativeMedicine />} />
            <Route path="/services/healthspan-optimization" element={<HealthspanOptimization />} />
            <Route path="/services/functional-gynaecology" element={<FunctionalGynaecology />} />
            <Route path="/services/longevity" element={<Longevity />} />
            <Route path="/services/diagnostics" element={<Diagnostics />} />
            <Route path="/services/nutrition" element={<Nutrition />} />

            {/* Program Pages */}
            <Route path="/programs/detox" element={<DetoxProtocol />} />
            <Route path="/programs/energy-revitalization" element={<EnergyRevitalization />} />
            <Route path="/programs/longevity-strategy" element={<LongevityStrategy />} />

            {/* Therapies */}
            <Route path="/therapies" element={<Therapies />} />
            <Route path="/therapies/:slug" element={<TherapyDetail />} />

            {/* Resources */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/testimonials" element={<Testimonials />} />

            {/* Legal */}
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/sitemap" element={<Sitemap />} />

            {/* ── 301 Redirects from old URLs ── */}
            <Route path="/founder" element={<Navigate to="/about/founder" replace />} />
            <Route path="/team" element={<Navigate to="/about/team" replace />} />
            <Route path="/meet-our-specialists" element={<Navigate to="/about/team" replace />} />
            <Route path="/faqs" element={<Navigate to="/faq" replace />} />
            <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
            <Route path="/clinical-programs" element={<Navigate to="/programs" replace />} />
            <Route path="/integrative-medicine" element={<Navigate to="/services/integrative-medicine" replace />} />
            <Route path="/healthspan-optimization" element={<Navigate to="/services/healthspan-optimization" replace />} />
            <Route path="/functional-gynaecology" element={<Navigate to="/services/functional-gynaecology" replace />} />
            <Route path="/longevity" element={<Navigate to="/services/longevity" replace />} />
            <Route path="/diagnostics" element={<Navigate to="/services/diagnostics" replace />} />
            <Route path="/nutrition" element={<Navigate to="/services/nutrition" replace />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
