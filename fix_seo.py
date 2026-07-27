import os, re

# Exact titles and descriptions from CSV
seo = {
    'Home.jsx':                   ("Integrative Medicine & Functional Gynaecology in Hyderabad | ALMACURA",
                                   "Discover integrative medicine & functional gynaecology at Almacura. We treat root causes, optimise healthspan, and restore vitality — not just symptoms.",
                                   "/"),
    'About.jsx':                  ("About ALMACURA | Integrative Medicine & Wellness Experts",
                                   "Learn about Almacura's mission and approach to integrative medicine, functional gynaecology, and healthspan optimisation.",
                                   "/about"),
    'Founder.jsx':                ("Institute Overview | ALMACURA Hyderabad",
                                   "Meet the founder of Almacura and the vision behind our integrative medicine and functional gynaecology institute.",
                                   "/about"),
    'Team.jsx':                   ("Our Team | Almacura Medical Experts",
                                   "Meet Almacura's specialists in integrative medicine, functional gynaecology, and healthspan optimisation.",
                                   "/team"),
    'FAQ.jsx':                    ("Patient FAQs | ALMACURA Healthcare",
                                   "Find answers to common questions about consultations, therapies, treatment plans, appointments, and patient care at ALMACURA.",
                                   "/faq"),
    'Blog.jsx':                   ("Health & Wellness Blog | ALMACURA",
                                   "Read expert insights on integrative medicine, longevity, women's health, nutrition, regenerative therapies, and preventive healthcare.",
                                   "/blog"),
    'Testimonials.jsx':           ("Patient Testimonials | ALMACURA Hyderabad",
                                   "Read real patient experiences and success stories about ALMACURA's integrative treatments, health optimization, and regenerative care.",
                                   "/testimonials"),
    'Therapies.jsx':              ("Therapies We Offer | ALMACURA",
                                   "Explore evidence-based therapies including HBOT, EECP, PRP, HIFEM, HIFU, regenerative medicine, and wellness treatments at ALMACURA.",
                                   "/therapies"),
    'IntegrativeMedicine.jsx':    ("Integrative Medicine | Almacura Institute",
                                   "Almacura's integrative medicine combines modern and holistic care to treat root causes and restore lasting vitality.",
                                   "/integrative-medicine"),
    'HealthspanOptimization.jsx': ("Healthspan Optimization | ALMACURA",
                                   "Optimise your healthspan with Almacura's science-backed protocols for longevity, energy, and disease prevention.",
                                   "/healthspan-optimization"),
    'FunctionalGynaecology.jsx':  ("Functional Gynaecology in Hyderabad | ALMACURA",
                                   "Expert care for hormonal balance, menopause, pelvic health, and women's wellness through functional gynaecology.",
                                   "/functional-gynaecology"),
    'Longevity.jsx':              ("Longevity & Healthy Aging Programs | ALMACURA",
                                   "Discover Almacura's longevity programs focused on healthy ageing, disease prevention, and extending healthspan.",
                                   "/longevity"),
    'Diagnostics.jsx':            ("Advanced Health Diagnostics | ALMACURA",
                                   "Comprehensive diagnostic evaluations for personalized treatment planning, disease prevention, and health optimization.",
                                   "/diagnostics"),
    'Nutrition.jsx':              ("Clinical Nutrition & Lifestyle Care | ALMACURA",
                                   "Personalised nutrition plans at Almacura support healing, hormone balance, and healthspan optimisation.",
                                   "/nutrition"),
    'Contact.jsx':                ("Contact ALMACURA Hyderabad | Book a Consultation",
                                   "Contact ALMACURA to schedule a consultation for integrative medicine, women's health, regenerative therapies, and wellness programs.",
                                   "/contact"),
    'Programs.jsx':               ("Clinical Programs | ALMACURA",
                                   "Explore ALMACURA clinical programs including detox, energy revitalization, and longevity strategies.",
                                   "/programs"),
    'ForDoctors.jsx':             ("For Doctors | ALMACURA Referral Program",
                                   "Refer patients to ALMACURA for integrative medicine, regenerative therapies, and functional gynaecology.",
                                   "/for-doctors"),
    'Privacy.jsx':                ("Privacy Policy | ALMACURA",
                                   "Read the privacy policy of ALMACURA Institute, Hyderabad.",
                                   "/privacy"),
    'Disclaimer.jsx':             ("Disclaimer | ALMACURA",
                                   "Read the medical disclaimer for ALMACURA integrative medicine and wellness therapies.",
                                   "/disclaimer"),
    'Terms.jsx':                  ("Terms & Conditions | ALMACURA",
                                   "Read the terms and conditions for using ALMACURA services and website.",
                                   "/terms"),
    'Sitemap.jsx':                ("Sitemap | ALMACURA",
                                   "Browse all pages of the ALMACURA website.",
                                   "/sitemap"),
}

pages_dir = os.path.join('src', 'pages')

for fname, (title, desc, path) in seo.items():
    fpath = os.path.join(pages_dir, fname)
    if not os.path.exists(fpath):
        print(f'NOT FOUND: {fname}')
        continue

    with open(fpath, 'rb') as f:
        raw = f.read()
    content = raw.decode('utf-8-sig').replace('\r\n', '\n').replace('\r', '\n')

    # Build new useSEO call using double quotes to avoid apostrophe issues
    new_call = f'  useSEO("{title}", "{desc}", "{path}");'

    if 'useSEO(' in content:
        # Replace existing useSEO call
        content = re.sub(r"  useSEO\([^)]+\);", new_call, content, count=1)
        print(f'Updated: {fname}')
    else:
        # Add import and call
        import_line = "import useSEO from '../hooks/useSEO';\n"
        content = import_line + content
        content = re.sub(
            r'(export default function \w+\s*\([^)]*\)\s*\{)',
            lambda m: m.group(0) + '\n' + new_call,
            content, count=1
        )
        print(f'Added: {fname}')

    with open(fpath, 'w', encoding='utf-8', newline='\n') as f:
        f.write(content)

print('\nAll done!')
