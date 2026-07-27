import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const routeLabels = {
  '': 'Home',
  'about': 'About',
  'founder': 'Founder',
  'team': 'Our Team',
  'therapies': 'Therapies',
  'hbot': 'HBOT Therapy',
  'eecp': 'EECP Therapy',
  'prp': 'PRP Therapy',
  'hifem': 'HIFEM Pelvic Chair',
  'hifu': 'HIFU Women Wellness',
  'dscb': 'DSCB Pain Portal Block',
  'yoga': 'Regenerative Yoga',
  'ozone': 'Ozone Therapy',
  'hydrogen': 'Hydrogen Therapy',
  'red-light': 'Red Light Therapy',
  'acupuncture': 'Acupuncture',
  'iv-therapy': 'IV Therapy',
  'infrared-sauna': 'Infrared Sauna',
  'services': 'Services',
  'integrative-medicine': 'Integrative Medicine',
  'healthspan-optimization': 'Healthspan Optimization',
  'functional-gynaecology': 'Functional Gynaecology',
  'longevity': 'Longevity',
  'diagnostics': 'Diagnostics',
  'nutrition': 'Nutrition',
  'programs': 'Programs',
  'blog': 'Blog',
  'faq': 'FAQs',
  'testimonials': 'Testimonials',
  'contact': 'Contact',
  'for-doctors': 'For Doctors',
  'privacy-policy': 'Privacy Policy',
  'privacy': 'Privacy Policy',
  'terms': 'Terms',
  'disclaimer': 'Disclaimer',
};

export default function Breadcrumb({ custom }) {
  const location = useLocation();
  const segments = location.pathname.split('/').filter(Boolean);

  const crumbs = [
    { label: 'Home', path: '/' },
    ...segments.map((seg, i) => ({
      label: routeLabels[seg] || seg.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      path: '/' + segments.slice(0, i + 1).join('/')
    }))
  ];

  const finalCrumbs = custom || crumbs;

  if (finalCrumbs.length <= 1) return null;

  // Breadcrumb JSON-LD schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": finalCrumbs.map((crumb, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": crumb.label,
      "item": `https://www.almacura.in${crumb.path}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="px-6 sm:px-8 py-3 bg-brand-ice/50 border-b border-brand-border/50">
        <ol className="max-w-7xl mx-auto flex items-center flex-wrap gap-1 text-xs font-dm">
          {finalCrumbs.map((crumb, i) => (
            <li key={crumb.path} className="flex items-center gap-1">
              {i === 0 && <Home size={12} className="text-brand-teal" />}
              {i < finalCrumbs.length - 1 ? (
                <>
                  <Link
                    to={crumb.path}
                    className="text-brand-teal hover:text-brand-blue transition-colors"
                  >
                    {crumb.label}
                  </Link>
                  <ChevronRight size={12} className="text-brand-muted" />
                </>
              ) : (
                <span className="text-brand-muted font-medium" aria-current="page">
                  {crumb.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
