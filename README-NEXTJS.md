# Stella Oiro - Technical Writing Portfolio

Modern Next.js portfolio site for technical writer Stella Oiro, inspired by readme.com's clean design.

## Quick Start

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Build & Deploy

```bash
npm run build
```

Static export in `/out` directory ready for deployment to:
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any static hosting

## Project Structure

```
stellaoiro/
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── services/
│   │   └── page.tsx        # Services page
│   ├── portfolio/
│   │   └── page.tsx        # Portfolio page
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   └── blog/
│       └── page.tsx        # Blog page
├── components/
│   ├── Header.tsx          # Navigation
│   ├── Footer.tsx          # Footer
│   ├── Hero.tsx            # Homepage hero
│   ├── Services.tsx        # Services preview
│   ├── Portfolio.tsx       # Portfolio preview
│   └── CTA.tsx             # Call-to-action
├── tailwind.config.js      # Tailwind with custom design tokens
├── next.config.js          # Next.js config (static export)
└── package.json
```

## Design System

Inspired by readme.com with:
- Primary Blue: #0A7AFF
- Clean typography (Inter font)
- Soft shadows and subtle gradients
- Mobile-first responsive design
- Smooth transitions

## Features

- Static site generation (SSG)
- Mobile responsive
- Fast performance
- SEO optimized
- Clean, modern design
- Contact form ready
- Blog structure ready

## Next Steps

1. Add form backend (Netlify Forms, Formspree, or custom API)
2. Add blog posts with MDX
3. Add analytics (Plausible or Google Analytics)
4. Add newsletter integration (ConvertKit)
5. Add testimonials section
6. Add case study pages

## Deploy to Netlify

1. Push to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `out`
5. Done!
