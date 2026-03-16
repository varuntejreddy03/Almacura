export const therapiesData = {
  hbot: {
    title: "Hyperbaric Oxygen Therapy",
    subtitle: "Enhanced tissue oxygenation under pressure",
    sessionDuration: "60–90 minutes",
    typicalCourse: "20–40 sessions",
    nonInvasive: true,
    supervision: "Medical staff monitored",
    workup: [
      "Full blood count",
      "Cardiac evaluation",
      "Lung function check",
      "Blood pressure assessment"
    ],
    procedure: [
      "Patient enters pressurized chamber",
      "Breathes 100% oxygen at controlled pressure",
      "Pressure increases tissue oxygenation",
      "Session monitored by medical staff",
      "Gradual depressurization at end"
    ],
    benefits: [
      "Enhanced wound healing",
      "Tissue regeneration",
      "Reduced inflammation",
      "Improved circulation",
      "Cellular repair stimulation",
      "Oxygen delivery optimization"
    ],
    followUp: "Biomarker reassessment after every 10 sessions. Clinical response evaluation includes wound healing progress, inflammatory marker reduction, and functional improvement tracking.",
    relatedTherapies: ['ozone', 'photobiomodulation', 'hydrogen']
  },
  eecp: {
    title: "Enhanced External Counter Pulsation",
    subtitle: "Non-invasive coronary circulation enhancement",
    sessionDuration: "1 hour",
    typicalCourse: "35 sessions",
    nonInvasive: true,
    supervision: "Cardiac specialist monitored",
    workup: [
      "Complete cardiac evaluation",
      "ECG and stress test",
      "Blood pressure monitoring",
      "Vascular assessment"
    ],
    procedure: [
      "Pressure cuffs applied to lower limbs",
      "Sequential inflation synchronized with heartbeat",
      "Diastolic augmentation increases coronary flow",
      "Continuous ECG monitoring",
      "Gradual pressure adjustment"
    ],
    benefits: [
      "Improved coronary circulation",
      "Reduced angina symptoms",
      "Enhanced cardiac output",
      "Collateral vessel formation",
      "Exercise tolerance improvement",
      "Non-surgical cardiac support"
    ],
    followUp: "Cardiac function reassessment every 12 sessions. Symptom tracking, exercise capacity evaluation, and quality of life metrics monitored throughout course.",
    relatedTherapies: ['hbot', 'ozone', 'nutrition']
  },
  prp: {
    title: "Platelet-Rich Plasma Therapy",
    subtitle: "Autologous growth factor concentration",
    sessionDuration: "45–60 minutes",
    typicalCourse: "3–6 sessions",
    nonInvasive: false,
    supervision: "Physician administered",
    workup: [
      "Complete blood count",
      "Platelet function assessment",
      "Infection screening",
      "Target area evaluation"
    ],
    procedure: [
      "Blood drawn from patient",
      "Centrifugation to concentrate platelets",
      "PRP preparation and activation",
      "Targeted injection to treatment area",
      "Post-procedure monitoring"
    ],
    benefits: [
      "Tissue regeneration",
      "Joint pain reduction",
      "Accelerated healing",
      "Collagen stimulation",
      "Reduced inflammation",
      "Natural growth factor delivery"
    ],
    followUp: "Clinical response evaluation at 4-6 weeks post-treatment. Functional assessment and symptom tracking guide additional session requirements.",
    relatedTherapies: ['ozone', 'photobiomodulation', 'pain-management']
  },
  ozone: {
    title: "Ozone Therapy",
    subtitle: "Medical ozone for oxygen metabolism enhancement",
    sessionDuration: "30–45 minutes",
    typicalCourse: "10–20 sessions",
    nonInvasive: true,
    supervision: "Medical staff monitored",
    workup: [
      "G6PD enzyme screening",
      "Complete blood count",
      "Liver function tests",
      "Oxidative stress markers"
    ],
    procedure: [
      "Medical-grade ozone preparation",
      "Administration via selected protocol",
      "Controlled dosage delivery",
      "Patient monitoring during session",
      "Post-treatment observation"
    ],
    benefits: [
      "Enhanced oxygen metabolism",
      "Immune system modulation",
      "Antimicrobial effects",
      "Circulation improvement",
      "Cellular detoxification",
      "Inflammatory response regulation"
    ],
    followUp: "Biomarker assessment every 5-10 sessions. Oxidative stress markers, inflammatory markers, and clinical response guide protocol adjustments.",
    relatedTherapies: ['hbot', 'hydrogen', 'photobiomodulation']
  },
  photobiomodulation: {
    title: "Photobiomodulation Therapy",
    subtitle: "Light-based mitochondrial energy optimization",
    sessionDuration: "20–30 minutes",
    typicalCourse: "15–30 sessions",
    nonInvasive: true,
    supervision: "Technician supervised",
    workup: [
      "Skin assessment",
      "Photosensitivity screening",
      "Target area evaluation",
      "Baseline functional assessment"
    ],
    procedure: [
      "Specific wavelength light application",
      "Targeted tissue exposure",
      "Mitochondrial chromophore activation",
      "Controlled duration and intensity",
      "Non-thermal therapeutic effect"
    ],
    benefits: [
      "Mitochondrial energy production",
      "Cellular ATP synthesis",
      "Reduced oxidative stress",
      "Tissue repair acceleration",
      "Pain reduction",
      "Anti-inflammatory effects"
    ],
    followUp: "Functional assessment every 10 sessions. Energy levels, pain scores, and tissue healing progress tracked throughout treatment course.",
    relatedTherapies: ['hbot', 'hydrogen', 'ozone']
  },
  hydrogen: {
    title: "Molecular Hydrogen Therapy",
    subtitle: "Selective antioxidant for oxidative stress reduction",
    sessionDuration: "30–60 minutes",
    typicalCourse: "20–40 sessions",
    nonInvasive: true,
    supervision: "Medical staff monitored",
    workup: [
      "Oxidative stress marker assessment",
      "Inflammatory marker panel",
      "Metabolic evaluation",
      "Baseline symptom assessment"
    ],
    procedure: [
      "Medical-grade hydrogen gas preparation",
      "Inhalation or infusion protocol",
      "Controlled concentration delivery",
      "Session monitoring",
      "Post-treatment observation"
    ],
    benefits: [
      "Selective antioxidant action",
      "Oxidative stress reduction",
      "Neuroprotective effects",
      "Anti-inflammatory properties",
      "Metabolic optimization",
      "Cellular protection"
    ],
    followUp: "Oxidative stress biomarker reassessment every 10-15 sessions. Inflammatory markers, metabolic parameters, and clinical symptoms guide treatment duration.",
    relatedTherapies: ['ozone', 'photobiomodulation', 'hbot']
  },
  'pain-management': {
    title: "Pain Portal Blocks",
    subtitle: "Targeted neural pain pathway intervention",
    sessionDuration: "30–45 minutes",
    typicalCourse: "1–3 sessions",
    nonInvasive: false,
    supervision: "Physician administered",
    workup: [
      "Pain assessment and mapping",
      "Neurological examination",
      "Imaging if indicated",
      "Medication review"
    ],
    procedure: [
      "Target nerve identification",
      "Local anesthetic preparation",
      "Precise injection technique",
      "Real-time patient feedback",
      "Post-procedure monitoring"
    ],
    benefits: [
      "Rapid pain relief",
      "Targeted neural blockade",
      "Reduced medication dependence",
      "Improved functional capacity",
      "Diagnostic and therapeutic value",
      "Minimal systemic effects"
    ],
    followUp: "Pain assessment at 1 week and 4 weeks post-procedure. Functional improvement and duration of relief guide additional intervention needs.",
    relatedTherapies: ['prp', 'ozone', 'photobiomodulation']
  }
};

export const therapyList = [
  {
    slug: 'hbot',
    icon: 'Droplet',
    shortDescription: 'Enhanced tissue oxygenation under controlled pressure for healing and regeneration'
  },
  {
    slug: 'eecp',
    icon: 'Heart',
    shortDescription: 'Non-invasive cardiac circulation enhancement for coronary health'
  },
  {
    slug: 'prp',
    icon: 'Syringe',
    shortDescription: 'Autologous growth factor therapy for tissue regeneration'
  },
  {
    slug: 'ozone',
    icon: 'Wind',
    shortDescription: 'Medical ozone therapy for oxygen metabolism and immune modulation'
  },
  {
    slug: 'photobiomodulation',
    icon: 'Lightbulb',
    shortDescription: 'Light-based therapy for mitochondrial energy optimization'
  },
  {
    slug: 'hydrogen',
    icon: 'Atom',
    shortDescription: 'Molecular hydrogen for selective antioxidant protection'
  },
  {
    slug: 'pain-management',
    icon: 'Shield',
    shortDescription: 'Targeted neural blocks for precise pain pathway intervention'
  }
];
