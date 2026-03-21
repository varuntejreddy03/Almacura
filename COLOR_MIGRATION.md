# ALMACURA Color Migration Guide

## Color Replacements

### Background Colors
- `bg-brand-black` → `bg-brand-white`
- `bg-brand-deep` → `bg-brand-ice` (#F0F7FF)
- `bg-brand-card` → `bg-brand-light` (#F7FBFF) or `bg-brand-white`

### Text Colors
- `text-brand-white` → `text-brand-navy` (#0D2137)
- `text-brand-muted` → `text-brand-muted` (#5A7184) - keep same variable, different hex
- Body text → `text-brand-text` (#3D5166)

### Accent Colors
- `bg-brand-teal` → keep `bg-brand-teal` (#0B6E6E) - vibrant version
- `text-brand-teal` → keep `text-brand-teal` (#0B6E6E)
- `hover:bg-brand-tealLight` → `hover:bg-brand-blue` (#1A8FBF)
- `border-brand-gold` → `border-brand-gold` (#C8903A)

### Border Colors
- `border-brand-border` → `border-brand-border` (#E2EEF5)
- Dark borders → `border-brand-teal/15`

### Special Sections
- Stats Bar: Keep dark `bg-gradient-to-r from-brand-teal to-brand-navy`
- CTA Banner: `bg-gradient-to-r from-brand-teal to-brand-blue` with white text
- Footer: `bg-brand-navy` with white text
- Hero: `bg-gradient-to-br from-brand-ice via-[#E8F4F8] to-[#EBF7F7]`

### Card Styles
```
glass-card → bg-brand-white border border-brand-border
hover → border-brand-teal shadow-lg
```

### Button Styles
- Primary: `bg-brand-teal text-white hover:bg-brand-blue`
- Secondary: `border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white`
- Gold accent: `hover:bg-brand-gold`
