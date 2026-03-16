import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Diagnostics from './pages/Diagnostics';
import Longevity from './pages/Longevity';
import Therapies from './pages/Therapies';
import TherapyDetail from './pages/TherapyDetail';
import Nutrition from './pages/Nutrition';
import Founder from './pages/Founder';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-brand-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/longevity" element={<Longevity />} />
          <Route path="/therapies" element={<Therapies />} />
          <Route path="/therapies/:slug" element={<TherapyDetail />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
