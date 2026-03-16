# ALMACURA — All Paths to Vitality

Premium integrative medical institute website built with Vite + React 18 + Tailwind CSS v3 + Framer Motion.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
almacura/
├── public/
│   └── logo.png                    # ALMACURA logo
├── src/
│   ├── assets/                     # Images and static assets
│   ├── components/
│   │   ├── Navbar.jsx             # Navigation with scroll behavior
│   │   ├── Footer.jsx             # Footer with contact info
│   │   ├── CTAButton.jsx          # Reusable CTA button
│   │   ├── SectionLabel.jsx       # Section label component
│   │   ├── TherapyCard.jsx        # Therapy card component
│   │   ├── ScrollReveal.jsx       # Animation wrapper
│   │   └── WhatsAppButton.jsx     # Floating WhatsApp button
│   ├── data/
│   │   └── therapiesData.js       # All therapy content
│   ├── pages/
│   │   ├── Home.jsx               # Homepage with 9 sections
│   │   ├── Diagnostics.jsx        # Diagnostics page
│   │   ├── Longevity.jsx          # Longevity protocol page
│   │   ├── Therapies.jsx          # Therapies overview
│   │   ├── TherapyDetail.jsx      # Dynamic therapy detail page
│   │   ├── Nutrition.jsx          # Nutrition page
│   │   ├── Founder.jsx            # Founder profile
│   │   ├── FAQ.jsx                # FAQ with accordion
│   │   └── Contact.jsx            # Contact form
│   ├── styles/
│   │   └── globals.css            # Global styles, Lenis, custom utilities
│   ├── App.jsx                    # Main app with routing
│   └── main.jsx                   # Entry point
├── index.html
├── package.json
├── tailwind.config.js             # Custom brand colors & design system
├── postcss.config.js
└── vite.config.js
```

## 🎨 Design System

### Colors

- **Brand Black**: `#0A0C0F` - Deep background
- **Brand Deep**: `#0F1318` - Section background
- **Brand Card**: `#141920` - Card background
- **Brand Teal**: `#2E8B8B` - Primary brand color
- **Brand Gold**: `#C9A84C` - Premium accent
- **Brand Green**: `#4A7C59` - Secondary (nutrition)
- **Brand White**: `#F0F4F7` - Primary text
- **Brand Muted**: `#8A9BAE` - Secondary text

### Typography

- **Display**: Cormorant Garamond (headings, luxury)
- **Body**: DM Sans (clean, readable)
- **Accent**: Space Mono (data, stats, labels)

## 🧭 Routes

- `/` - Home
- `/diagnostics` - Diagnostics
- `/longevity` - Longevity Protocol
- `/therapies` - Therapies Overview
- `/therapies/:slug` - Individual Therapy Pages
  - `/therapies/hbot`
  - `/therapies/eecp`
  - `/therapies/prp`
  - `/therapies/ozone`
  - `/therapies/photobiomodulation`
  - `/therapies/hydrogen`
  - `/therapies/pain-management`
- `/nutrition` - Nutrition
- `/founder` - Founder Profile
- `/faq` - FAQs
- `/contact` - Contact Form

## 🔧 Technologies

- **Vite** - Build tool
- **React 18** - UI framework
- **React Router v6** - Routing
- **Tailwind CSS v3** - Styling
- **Framer Motion** - Animations
- **Lenis** - Smooth scroll
- **Lucide React** - Icons
- **React CountUp** - Number animations
- **React Intersection Observer** - Scroll animations

## 📞 Contact Information

- **Phone & WhatsApp**: +91 9989033686
- **Email**: doctorkvsreddy@yahoo.com
- **Hours**: Monday–Saturday, 9:00 AM – 6:00 PM
- **Location**: Hyderabad, India

## 🎯 Key Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll with Lenis
- ✅ Framer Motion animations throughout
- ✅ Dark premium theme
- ✅ Dynamic therapy pages
- ✅ WhatsApp floating button
- ✅ Contact form with validation
- ✅ FAQ accordion
- ✅ Consistent design system

## 📝 Content Management

All therapy content is managed in `src/data/therapiesData.js`. To add or modify therapies, edit this file.

## 🚫 Design Rules

- No white or light backgrounds
- No spa/wellness imagery
- Medical authority aesthetic
- Evidence-based language
- Dark luxury theme throughout

---

**ALMACURA** — Institute of Integrative Medicine & Health Span Optimization
