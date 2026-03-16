# 🚀 ALMACURA Website - Final Setup Instructions

## ✅ Project Status: COMPLETE

All pages, components, and functionality have been implemented. Follow these steps to get the website running.

---

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Code editor (VS Code recommended)

---

## 🔧 Installation Steps

### 1. Install Dependencies

```bash
cd Almacura
npm install
```

This will install all required packages:
- React 18
- React Router v6
- Tailwind CSS v3
- Framer Motion
- Lenis (smooth scroll)
- Lucide React (icons)
- React CountUp
- React Intersection Observer

### 2. Add Logo Files

**CRITICAL:** Place these files in the `/public/` folder:

```
public/
├── Almacura_Logo_Transparent.png  ← Main logo (transparent PNG)
└── favicon.ico                     ← Favicon (cropped icon mark)
```

**Logo Requirements:**
- Use `Almacura_Logo_Transparent.png` with transparent background
- Logo displays directly on dark background - NO white box
- See `LOGO_IMPLEMENTATION.md` for detailed instructions

### 3. Start Development Server

```bash
npm run dev
```

The site will open at: **http://localhost:5173**

---

## 🎨 What's Included

### ✅ All 9 Pages Implemented

1. **Home** (`/`) - 9 sections with hero, intro, pathway, pillars, therapies, stats, founder preview, FAQ, CTA
2. **Diagnostics** (`/diagnostics`) - Assessment categories, therapy workup table, philosophy
3. **Longevity** (`/longevity`) - Biological age explainer, 5-step protocol, patient profiles
4. **Therapies** (`/therapies`) - Overview grid of all 7 therapies
5. **Therapy Detail** (`/therapies/:slug`) - Dynamic pages for each therapy
6. **Nutrition** (`/nutrition`) - Assessment, therapeutic support, protocols
7. **Founder** (`/founder`) - Profile, timeline, vision, expertise
8. **FAQ** (`/faq`) - 15 questions with accordion, sticky CTA
9. **Contact** (`/contact`) - Form with validation, contact info, map placeholder

### ✅ All 7 Therapy Pages (Dynamic)

- `/therapies/hbot` - Hyperbaric Oxygen Therapy
- `/therapies/eecp` - Enhanced External Counter Pulsation
- `/therapies/prp` - Platelet-Rich Plasma
- `/therapies/ozone` - Ozone Therapy
- `/therapies/photobiomodulation` - Light Therapy
- `/therapies/hydrogen` - Molecular Hydrogen
- `/therapies/pain-management` - Pain Portal Blocks

### ✅ Components

- `Navbar` - Fixed navigation with scroll behavior, mobile menu
- `Footer` - 4-column layout with contact info
- `CTAButton` - Primary/secondary variants
- `SectionLabel` - Reusable section headers
- `TherapyCard` - Therapy grid cards
- `ScrollReveal` - Animation wrapper
- `WhatsAppButton` - Floating contact button

### ✅ Features

- Smooth scroll with Lenis
- Framer Motion animations throughout
- Fully responsive (mobile, tablet, desktop)
- Dark premium theme
- Form validation
- Accordion components
- CountUp animations
- Intersection observer scroll triggers

---

## 🎨 Design System

### Brand Colors (Updated)

```
Teal:  #2E8B8B  (Primary brand)
Green: #4A7C59  (Secondary/nutrition)
Gold:  #E8952A  (Premium accent - UPDATED)
Dark:  #0A0C0F  (Background)
White: #F0F4F7  (Text)
```

### Typography

- **Headings**: Cormorant Garamond (italic for emphasis)
- **Body**: DM Sans (clean, readable)
- **Labels**: Space Mono (monospace for data)

---

## 📝 Content Management

All therapy content is in: `src/data/therapiesData.js`

To add/edit therapies:
1. Open `therapiesData.js`
2. Add new therapy object with all required fields
3. Add slug to `therapyList` array
4. Route automatically works at `/therapies/your-slug`

---

## 🔍 Testing Checklist

### Visual Testing

- [ ] Logo displays with NO white background
- [ ] All pages load without errors
- [ ] Smooth scroll works on all pages
- [ ] Animations trigger on scroll
- [ ] Mobile menu opens/closes properly
- [ ] Forms validate correctly
- [ ] WhatsApp button appears and links correctly

### Responsive Testing

- [ ] Mobile (< 768px) - All content readable, nav collapses
- [ ] Tablet (768px - 1024px) - Grid layouts adjust properly
- [ ] Desktop (> 1024px) - Full layout displays correctly

### Navigation Testing

- [ ] All nav links work
- [ ] Therapy detail pages load for all 7 therapies
- [ ] Footer links navigate correctly
- [ ] 404 handling (therapy not found)

### Performance Testing

- [ ] Page loads quickly
- [ ] Animations are smooth (60fps)
- [ ] No console errors
- [ ] Images load properly

---

## 🚀 Build for Production

### Create Production Build

```bash
npm run build
```

This creates optimized files in `/dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Deploy

Upload contents of `/dist/` folder to your hosting provider:
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any static hosting service

**Important:** Configure your host for SPA routing (all routes should serve `index.html`)

---

## 📞 Contact Information (Update if needed)

Current contact details in the code:
- Phone: +91 9989033686
- Email: doctorkvsreddy@yahoo.com
- Hours: Monday–Saturday, 9:00 AM – 6:00 PM
- Location: Hyderabad, India

To update, search and replace in:
- `src/components/Footer.jsx`
- `src/pages/Home.jsx`
- `src/pages/Contact.jsx`
- `src/components/WhatsAppButton.jsx`

---

## 🐛 Troubleshooting

### Logo shows white background
- Ensure you're using `Almacura_Logo_Transparent.png` (not JPG)
- Remove any background CSS from logo containers
- See `LOGO_IMPLEMENTATION.md`

### Smooth scroll not working
- Check Lenis is installed: `npm list @studio-freight/lenis`
- Verify `App.jsx` initializes Lenis correctly

### Animations not triggering
- Check Framer Motion is installed
- Verify `react-intersection-observer` is installed
- Check browser console for errors

### Build fails
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check Node.js version (18+ required)

---

## 📚 Documentation

- `README.md` - Project overview
- `LOGO_IMPLEMENTATION.md` - Logo usage guide
- `tailwind.config.js` - Design system colors
- `src/data/therapiesData.js` - Content structure

---

## ✨ Next Steps (Optional Enhancements)

1. **Backend Integration**
   - Connect contact form to email service (EmailJS, SendGrid)
   - Add form submission confirmation emails

2. **Analytics**
   - Add Google Analytics
   - Track button clicks and form submissions

3. **SEO**
   - Add meta descriptions to all pages
   - Create sitemap.xml
   - Add structured data (JSON-LD)

4. **Performance**
   - Optimize images (WebP format)
   - Add lazy loading for images
   - Implement code splitting

5. **Accessibility**
   - Add ARIA labels
   - Test with screen readers
   - Ensure keyboard navigation

---

## 🎯 Success Criteria

Your website is ready when:

✅ All pages load without errors  
✅ Logo displays correctly (no white box)  
✅ Smooth scroll works  
✅ All animations trigger  
✅ Mobile menu functions  
✅ Contact form validates  
✅ All therapy pages accessible  
✅ WhatsApp button links correctly  
✅ Responsive on all devices  
✅ Production build succeeds  

---

## 💡 Support

If you encounter issues:

1. Check browser console for errors
2. Verify all dependencies installed (`npm list`)
3. Ensure logo files are in `/public/` folder
4. Review `LOGO_IMPLEMENTATION.md` for logo issues
5. Check Node.js version: `node --version` (should be 18+)

---

**ALMACURA Website - Built with Vite + React 18 + Tailwind CSS v3 + Framer Motion**

*All Paths to Vitality*
