import { useEffect } from 'react';

const BASE_URL = 'https://www.almacura.in';

export default function useSEO(title, description, path = '') {
  useEffect(() => {
    // Title
    if (title) document.title = title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    if (description) metaDesc.setAttribute('content', description);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${BASE_URL}${path}`);

    // OG tags
    const ogTags = {
      'og:title': title,
      'og:description': description,
      'og:url': `${BASE_URL}${path}`,
      'og:type': 'website',
      'og:image': `${BASE_URL}/logo.png`,
    };
    Object.entries(ogTags).forEach(([property, content]) => {
      if (!content) return;
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });
  }, [title, description, path]);
}
