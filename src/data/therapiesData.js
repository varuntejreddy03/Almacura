export const therapiesData = {
  hbot: {
    title: "Hyperbaric Oxygen Therapy (HBOT)",
    subtitle: "Enhanced tissue oxygenation under pressure",
    description: "Breathing pure oxygen in a pressurized chamber to enhance tissue oxygenation.",
    sessionDuration: "60–90 minutes",
    typicalCourse: "20–40 sessions",
    nonInvasive: true,
    benefits: [
      "Faster healing",
      "Improved brain function",
      "Reduced inflammation",
      "Enhanced tissue regeneration",
      "Improved circulation",
      "Cellular repair stimulation"
    ],
    usedFor: [
      "Non-healing wounds",
      "Stroke recovery",
      "Chronic fatigue",
      "Neurological conditions",
      "Post-surgery recovery"
    ],
    notSuitableFor: [
      "Certain lung conditions",
      "Untreated pneumothorax",
      "Severe claustrophobia (without sedation)",
      "High fever"
    ],
    procedure: [
      "Patient enters pressurized chamber",
      "Breathes 100% oxygen at controlled pressure",
      "Pressure increases tissue oxygenation",
      "Session monitored by medical staff",
      "Gradual depressurization at end"
    ],
    relatedTherapies: ['ozone', 'red-light', 'hydrogen']
  },
  ozone: {
    title: "Ozone Therapy",
    subtitle: "Medical ozone for oxygen metabolism enhancement",
    description: "Use of medical-grade ozone to stimulate the immune system and improve oxygen delivery.",
    sessionDuration: "30–45 minutes",
    typicalCourse: "10–20 sessions",
    nonInvasive: false,
    benefits: [
      "Enhanced oxygen metabolism",
      "Immune system modulation",
      "Antimicrobial effects",
      "Cellular detoxification",
      "Inflammatory response regulation"
    ],
    usedFor: [
      "Chronic infections",
      "Autoimmune conditions",
      "Chronic fatigue",
      "Circulatory disorders",
      "Wound healing"
    ],
    notSuitableFor: [
      "G6PD deficiency",
      "Hyperthyroidism",
      "Thrombocytopenia",
      "Recent myocardial infarction"
    ],
    procedure: [
      "Medical-grade ozone preparation",
      "Administration via selected protocol (Autohemotherapy or Insufflation)",
      "Controlled dosage delivery",
      "Patient monitoring during session"
    ],
    relatedTherapies: ['hbot', 'hydrogen', 'iv-therapy']
  },
  'iv-therapy': {
    title: "IV Nutrient Therapy",
    subtitle: "Direct cellular nourishment",
    description: "Intravenous administration of vitamins, minerals, and antioxidants for maximum absorption.",
    sessionDuration: "45–60 minutes",
    typicalCourse: "Weekly or bi-weekly",
    nonInvasive: false,
    benefits: [
      "100% nutrient absorption",
      "Boosted energy levels",
      "Enhanced immune support",
      "Detoxification",
      "Cellular hydration"
    ],
    usedFor: [
      "Nutrient deficiencies",
      "Chronic fatigue",
      "Immune boost",
      "Dehydration",
      "Performance recovery"
    ],
    notSuitableFor: [
      "Severe kidney disease",
      "Certain heart conditions",
      "Allergy to specific nutrients"
    ],
    procedure: [
      "Consultation to determine nutrient mix",
      "Sterile IV insertion by medical professional",
      "Controlled drip of nutrient solution",
      "Relaxation in comfortable lounge"
    ],
    relatedTherapies: ['ozone', 'hydrogen', 'nutrition']
  },
  hydrogen: {
    title: "Hydrogen Therapy",
    subtitle: "Selective antioxidant for oxidative stress reduction",
    description: "Inhalation of molecular hydrogen gas to neutralize harmful free radicals.",
    sessionDuration: "30–60 minutes",
    typicalCourse: "20–40 sessions",
    nonInvasive: true,
    benefits: [
      "Selective antioxidant action",
      "Reduced oxidative stress",
      "Neuroprotective effects",
      "Anti-inflammatory properties",
      "Metabolic optimization"
    ],
    usedFor: [
      "Brain health",
      "Metabolic disorders",
      "Inflammatory conditions",
      "Longevity support",
      "Athletic recovery"
    ],
    notSuitableFor: [],
    procedure: [
      "Medical-grade hydrogen gas inhalation",
      "Relaxed breathing through nasal cannula",
      "Controlled concentration delivery",
      "Can be combined with other therapies"
    ],
    relatedTherapies: ['ozone', 'red-light', 'hbot']
  },
  'red-light': {
    title: "Red Light Therapy",
    subtitle: "Mitochondrial energy optimization",
    description: "Exposing the body to low-level red and near-infrared light to stimulate cellular energy.",
    sessionDuration: "20–30 minutes",
    typicalCourse: "10–20 sessions",
    nonInvasive: true,
    benefits: [
      "Mitochondrial energy production",
      "Reduced oxidative stress",
      "Skin health & anti-aging",
      "Tissue repair acceleration",
      "Pain reduction"
    ],
    usedFor: [
      "Skin rejuvenation",
      "Muscle recovery",
      "Joint pain",
      "Sleep optimization",
      "Energy enhancement"
    ],
    notSuitableFor: [
      "Certain eye conditions (without protection)",
      "Light-sensitive medications"
    ],
    procedure: [
      "Targeted light exposure with specific panels",
      "Mitochondrial activation through red light",
      "Comfortable, non-thermal treatment"
    ],
    relatedTherapies: ['hbot', 'hydrogen', 'acupuncture']
  },
  acupuncture: {
    title: "Acupuncture",
    subtitle: "Balancing energy and biological systems",
    description: "Traditional practice of inserting thin needles at specific points to balance the body's flow of energy (Qi).",
    sessionDuration: "45–60 minutes",
    typicalCourse: "6–10 sessions",
    nonInvasive: false,
    benefits: [
      "Pain relief",
      "Stress reduction",
      "Hormonal balance",
      "Improved circulation",
      "Enhanced recovery"
    ],
    usedFor: [
      "Chronic pain",
      "Fertility support",
      "Hormonal imbalances",
      "Stress & anxiety",
      "Migraines"
    ],
    notSuitableFor: [
      "Bleeding disorders",
      "Presence of a pacemaker (for electro-acupuncture)",
      "Extreme needle phobia"
    ],
    procedure: [
      "Mapping of meridian points",
      "Insertion of sterile, ultra-fine needles",
      "Controlled stimulation and relaxation",
      "Needle removal after retention period"
    ],
    relatedTherapies: ['red-light', 'nutrition', 'ozone']
  }
};

export const therapyList = [
  {
    slug: 'hbot',
    icon: 'Waves',
    title: 'Hyperbaric Oxygen Therapy (HBOT)',
    shortDescription: 'Enhance tissue oxygenation and cellular repair in a pressurized chamber.'
  },
  {
    slug: 'ozone',
    icon: 'Wind',
    title: 'Ozone Therapy',
    shortDescription: 'Boost immune function and enhance oxygen metabolism with medical-grade ozone.'
  },
  {
    slug: 'iv-therapy',
    icon: 'Syringe',
    title: 'IV Nutrient Therapy',
    shortDescription: 'Direct cellular nourishment with specialized vitamin and mineral infusions.'
  },
  {
    slug: 'hydrogen',
    icon: 'Atom',
    title: 'Hydrogen Therapy',
    shortDescription: 'Neutralize oxidative stress and protect brain health with molecular hydrogen.'
  },
  {
    slug: 'red-light',
    icon: 'Lightbulb',
    title: 'Red Light Therapy',
    shortDescription: 'Stimulate mitochondrial energy and promote cellular repair with infrared light.'
  },
  {
    slug: 'acupuncture',
    icon: 'ShieldAlert',
    title: 'Acupuncture',
    shortDescription: 'Restore biological balance and manage pain through evidence-informed meridian therapy.'
  }
];
