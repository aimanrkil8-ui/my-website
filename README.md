# Aiman Al-Tahir — Personal Portfolio

Modern, responsive portfolio with glassmorphism, gradients, and smooth animations.

## Run locally

Open `index.html` in a browser, or:

```bash
npx serve .
```

## Your photos (3 images)

Save inside **`assets/`** folder:

| File | Where it appears |
|------|------------------|
| `mmm.jpg` (or `.png`) | Hero — main profile (right side) |
| `nnnn.jpg` | About — large photo |
| `bbbb.jpg` | About — small floating photo |

See also `assets/ضع-الصور-هنا.txt` (Arabic guide).

## Customize

1. **Photos**: Add `mmm`, `nnnn`, `bbbb` as `.jpg` or `.png` in `assets/`.
2. **Google Search Console**: Replace `REPLACE_WITH_YOUR_VERIFICATION_CODE` in the meta tag in `index.html`.
3. **Contact form**: Already connected to Formspree `https://formspree.io/f/mdadvzpk`.

## Structure

```
aiman-portfolio/
├── index.html
├── css/style.css
├── js/main.js
├── assets/profile.svg
└── README.md
```

## Bilingual (EN / عربي)

Click the language button in the navbar. Preference is saved in `localStorage`. Arabic enables RTL layout automatically.

## Features

- Fullscreen hero with typing animation
- Particle network background & cursor glow
- Project category filters
- Animated stat counters
- 3D tilt cards & parallax hero
- About section with cards & timeline
- Animated skill bars on scroll
- Project cards with hover effects
- Social links + Formspree contact form
- Sticky navbar, mobile menu, back-to-top
- Loading screen, scroll reveal, SEO meta tags

©️ 2026 Aiman Al-Tahir
