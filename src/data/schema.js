// Inject into index.html <head> or via React Helmet

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "ALMACURA",
  "alternateName": "ALMACURA Institute of Integrative Medicine",
  "url": "https://www.almacura.in",
  "logo": "https://www.almacura.in/logo.png",
  "image": "https://www.almacura.in/logo.png",
  "description": "ALMACURA is a modern integrative medicine institute in Hyderabad offering HBOT, EECP, PRP, HIFEM, HIFU, Ozone Therapy, and Functional Gynaecology.",
  "telephone": "+91-9966030085",
  "email": "info@almacura.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Nightingale Hospital, X Roads, Nagarjuna Sagar Ring Rd, near Santoshnagar",
    "addressLocality": "Saidabad",
    "addressRegion": "Telangana",
    "postalCode": "500059",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "17.3511785",
    "longitude": "78.5095196"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/almacura.health",
    "https://www.facebook.com/almacura.health",
    "https://www.youtube.com/@ALMACURAHEALTH",
    "https://x.com/AlmacuraHealth",
    "https://linktr.ee/almacura.health"
  ],
  "medicalSpecialty": [
    "Integrative Medicine",
    "Functional Gynaecology",
    "Healthspan Optimization",
    "Regenerative Medicine",
    "Pain Management"
  ]
};

export const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. K. Vijaya Shekar Reddy",
  "jobTitle": "Founder & Mentor",
  "worksFor": {
    "@type": "MedicalOrganization",
    "name": "ALMACURA"
  },
  "medicalSpecialty": "General Surgery, Integrative Medicine",
  "description": "Senior General Surgeon with 30+ years of experience. Founder of ALMACURA Institute of Integrative Medicine, Hyderabad.",
  "url": "https://www.almacura.in/about"
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ALMACURA",
  "image": "https://www.almacura.in/logo.png",
  "url": "https://www.almacura.in",
  "telephone": "+91-9966030085",
  "priceRange": "₹₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Nightingale Hospital, X Roads, Nagarjuna Sagar Ring Rd, near Santoshnagar",
    "addressLocality": "Saidabad, Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500059",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "17.3511785",
    "longitude": "78.5095196"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/almacura.health",
    "https://www.facebook.com/almacura.health",
    "https://www.youtube.com/@ALMACURAHEALTH"
  ]
};

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const therapySchema = (therapy, slug) => ({
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": therapy.title,
  "description": therapy.description,
  "procedureType": "Therapeutic",
  "url": `https://www.almacura.in/therapies/${slug}`,
  "provider": {
    "@type": "MedicalOrganization",
    "name": "ALMACURA",
    "url": "https://www.almacura.in"
  }
});
