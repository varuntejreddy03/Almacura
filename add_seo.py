import os
import re

seo = {
    'About.jsx': ('About ALMACURA | Integrative Medicine and Wellness Experts', 'Learn about Almacura mission and approach to integrative medicine, functional gynaecology, and healthspan optimisation.', '/about'),
    'Founder.jsx': ('Institute Overview | ALMACURA Hyderabad', 'Meet the founder of Almacura and the vision behind our integrative medicine and functional gynaecology institute.', '/about'),
    'Therapies.jsx': ('Therapies We Offer | ALMACURA', 'Explore evidence-based therapies including HBOT, EECP, PRP, HIFEM, HIFU, regenerative medicine, and wellness treatments at ALMACURA.', '/therapies'),
    'Blog.jsx': ('Health and Wellness Blog | ALMACURA', 'Read expert insights on integrative medicine, longevity, womens health, nutrition, regenerative therapies, and preventive healthcare.', '/blog'),
    'Testimonials.jsx': ('Patient Testimonials | ALMACURA Hyderabad', 'Read real patient experiences and success stories about ALMACURA integrative treatments and regenerative care.', '/testimonials'),
    'FAQ.jsx': ('Patient FAQs | ALMACURA Healthcare', 'Find answers to common questions about consultations, therapies, treatment plans, appointments, and patient care at ALMACURA.', '/faq'),
    'Longevity.jsx': ('Longevity and Healthy Aging Programs | ALMACURA', 'Discover Almacura longevity programs focused on healthy ageing, disease prevention, and extending healthspan.', '/longevity'),
    'Diagnostics.jsx': ('Advanced Health Diagnostics | ALMACURA', 'Comprehensive diagnostic evaluations for personalized treatment planning, disease prevention, and health optimization.', '/diagnostics'),
    'Nutrition.jsx': ('Clinical Nutrition and Lifestyle Care | ALMACURA', 'Personalised nutrition plans at Almacura support healing, hormone balance, and healthspan optimisation.', '/nutrition'),
    'IntegrativeMedicine.jsx': ('Integrative Medicine | Almacura Institute', 'Almacura integrative medicine combines modern and holistic care to treat root causes and restore lasting vitality.', '/integrative-medicine'),
    'HealthspanOptimization.jsx': ('Healthspan Optimization | ALMACURA', 'Optimise your healthspan with Almacura science-backed protocols for longevity, energy, and disease prevention.', '/healthspan-optimization'),
    'FunctionalGynaecology.jsx': ('Functional Gynaecology in Hyderabad | ALMACURA', 'Expert care for hormonal balance, menopause, pelvic health, and womens wellness through functional gynaecology.', '/functional-gynaecology'),
    'Home.jsx': ('Integrative Medicine and Functional Gynaecology in Hyderabad | ALMACURA', 'Discover integrative medicine and functional gynaecology at Almacura. We treat root causes, optimise healthspan, and restore vitality.', '/'),
}

pages_dir = os.path.join('src', 'pages')

for fname, (title, desc, path) in seo.items():
    fpath = os.path.join(pages_dir, fname)
    if not os.path.exists(fpath):
        print(f'NOT FOUND: {fname}')
        continue

    with open(fpath, 'rb') as f:
        raw = f.read()

    # Decode handling BOM and CRLF
    content = raw.decode('utf-8-sig').replace('\r\n', '\n').replace('\r', '\n')

    if 'useSEO' in content:
        print(f'Skip (has useSEO): {fname}')
        continue

    import_line = "import useSEO from '../hooks/useSEO';\n"
    call_line = f"  useSEO('{title}', '{desc}', '{path}');\n"

    # Add import at top
    content = import_line + content

    # Insert useSEO call after export default function line
    content = re.sub(
        r'(export default function \w+\s*\([^)]*\)\s*\{)',
        lambda m: m.group(0) + '\n' + call_line,
        content,
        count=1
    )

    with open(fpath, 'w', encoding='utf-8', newline='\n') as f:
        f.write(content)

    print(f'Updated: {fname}')

print('All done!')
