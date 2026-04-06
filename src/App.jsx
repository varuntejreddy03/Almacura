import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import IntegrativeMedicine from './pages/IntegrativeMedicine';
import HealthspanOptimization from './pages/HealthspanOptimization';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import Therapies from './pages/Therapies';
import TherapyDetail from './pages/TherapyDetail';
import Programs from './pages/Programs';
import ForDoctors from './pages/ForDoctors';
import About from './pages/About';

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
      <div className="bg-brand-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/integrative-medicine" element={<IntegrativeMedicine />} />
          <Route path="/healthspan-optimization" element={<HealthspanOptimization />} />
          <Route path="/therapies" element={<Therapies />} />
          <Route path="/therapies/:slug" element={<TherapyDetail />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/for-doctors" element={<ForDoctors />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
