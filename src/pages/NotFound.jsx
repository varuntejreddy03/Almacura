import { Home } from 'lucide-react';
import CTAButton from '../components/CTAButton';

export default function NotFound() {
  return (
    <div className="bg-brand-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="font-cormorant text-[12rem] md:text-[16rem] text-brand-teal leading-none italic mb-8">
          404
        </div>
        <h1 className="font-cormorant text-4xl md:text-5xl text-brand-navy mb-6">
          This path leads nowhere.
        </h1>
        <p className="text-brand-muted text-lg leading-relaxed mb-12">
          Let us guide you back to vitality.
        </p>
        <CTAButton variant="primary" to="/">
          <Home size={20} className="mr-2" />
          Return to Home
        </CTAButton>
      </div>
    </div>
  );
}
