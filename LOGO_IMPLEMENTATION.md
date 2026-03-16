# ALMACURA Logo Implementation Guide

## 📁 Logo Files Required

Place in `/public/` folder:
- `Almacura_Logo_Transparent.png` - Main logo (PNG with transparent background)
- `favicon.ico` - Favicon (cropped icon mark, 512×512 converted to .ico)

## 🎨 Brand Colors (Updated from PDF)

```js
colors: {
  brand: {
    black:    '#0A0C0F',   // Dark background
    deep:     '#0F1318',   // Section background
    card:     '#141920',   // Card background
    border:   '#1E2730',   // Subtle borders
    teal:     '#2E8B8B',   // Primary brand (from logo)
    tealDark: '#1A5F5F',   // Hover state
    tealLight:'#5BBFBF',   // Highlights
    gold:     '#E8952A',   // Gold/Orange accent (updated)
    goldLight:'#F5B563',   // Hover gold
    green:    '#4A7C59',   // Secondary (from logo leaves)
    white:    '#F0F4F7',   // Primary text
    muted:    '#8A9BAE',   // Secondary text
    dim:      '#4A5568',   // Tertiary text
  }
}
```

## 🚫 CRITICAL RULES

### ❌ NEVER DO THIS:
- Add white background behind logo
- Add card/container behind logo
- Add border around logo
- Place logo in a white box

### ✅ ALWAYS DO THIS:
- Logo sits directly on dark background (#0A0C0F)
- Transparent PNG displays perfectly
- No additional containers or wrappers

## 📐 Logo Specifications

### Navbar Logo
```jsx
<img 
  src="/Almacura_Logo_Transparent.png" 
  alt="ALMACURA" 
  className="h-12"  // 48px height
  // No background, no border, no container
/>
```

**Placement:**
- Left-aligned in navbar
- Height: 48px (h-12 in Tailwind)
- No background color
- No border
- No padding container

### Footer Logo
```jsx
<img 
  src="/Almacura_Logo_Transparent.png" 
  alt="ALMACURA" 
  className="h-16 opacity-90"  // 64px height, 90% opacity
/>
```

**Placement:**
- Footer left column
- Height: 64px (h-16 in Tailwind)
- Opacity: 90% (opacity-90)
- No background color
- No border

### Favicon
**Creation Steps:**
1. Open `Almacura_Logo_Transparent.png` in image editor
2. Crop to just the icon mark (human figure + leaves symbol)
3. Export as 512×512 PNG
4. Convert to `favicon.ico` using online tool or ImageMagick:
   ```bash
   convert favicon-512.png -define icon:auto-resize=256,128,64,48,32,16 favicon.ico
   ```
5. Place `favicon.ico` in `/public/` folder

**HTML Reference:**
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
```

## 🔧 Implementation Code

### Update Navbar.jsx

Replace the SVG logo placeholder with:

```jsx
<Link to="/" className="flex items-center gap-3">
  <img 
    src="/Almacura_Logo_Transparent.png" 
    alt="ALMACURA" 
    className="h-12"
  />
</Link>
```

### Update Footer.jsx

Replace the SVG logo placeholder with:

```jsx
<div className="flex items-center gap-3 mb-4">
  <img 
    src="/Almacura_Logo_Transparent.png" 
    alt="ALMACURA" 
    className="h-16 opacity-90"
  />
</div>
```

### Update index.html

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
```

## 🎨 Update Tailwind Config

Update the gold color in `tailwind.config.js`:

```js
gold:     '#E8952A',   // Updated from #C9A84C
goldLight:'#F5B563',   // Updated hover state
```

## ✅ Verification Checklist

- [ ] `Almacura_Logo_Transparent.png` placed in `/public/`
- [ ] `favicon.ico` created and placed in `/public/`
- [ ] Navbar logo: 48px height, no background
- [ ] Footer logo: 64px height, 90% opacity
- [ ] No white boxes or containers around logo
- [ ] Logo displays cleanly on dark background
- [ ] Favicon shows in browser tab
- [ ] Gold color updated to #E8952A in Tailwind config
- [ ] All gold references updated throughout site

## 📱 Responsive Behavior

### Mobile (< 768px)
```jsx
<img 
  src="/Almacura_Logo_Transparent.png" 
  alt="ALMACURA" 
  className="h-10 md:h-12"  // 40px on mobile, 48px on desktop
/>
```

### Tablet & Desktop
- Maintain 48px height in navbar
- Maintain 64px height in footer

## 🎯 Testing

1. **Visual Test**: Logo should have NO white background
2. **Transparency Test**: Dark background should show through transparent areas
3. **Scaling Test**: Logo should remain crisp at all sizes
4. **Favicon Test**: Icon should appear in browser tab

## 📝 Notes

- The PNG has a transparent background - this is intentional
- The logo contains teal (#2E8B8B), green (#4A7C59), and gold (#E8952A) colors
- Never add CSS background colors to logo containers
- The logo is designed to sit directly on dark backgrounds

---

**If you see a white box around the logo, you've done something wrong. Remove all background colors and containers.**
