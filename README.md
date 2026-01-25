# Stella Oiro - Technical Writing Portfolio

Professional technical writing portfolio and blog. Built with Next.js 14, TypeScript, Tailwind CSS, and deployed via FTP to HostPinnacle.

🌐 **Live Site**: [stellaoiro.com](https://stellaoiro.com)

## About

This is a professional portfolio showcasing:
- Technical Writing Services (API docs, Developer guides, User documentation)
- Portfolio of Real Projects with Measurable Results
- Professional Documentation Samples
- Blog (Coming Soon)
- Contact & Inquiry Forms

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: TypeScript (strict mode)
- **CSS Framework**: [Tailwind CSS v3](https://tailwindcss.com/)
- **MDX Support**: [@next/mdx](https://nextjs.org/docs/app/building-your-application/configuring/mdx)
- **Deployment**: GitHub Actions → FTP to HostPinnacle
- **Build Output**: Static export (`output: 'export'`)

## Features

✅ **Responsive Design** - Mobile-first, works on all devices
✅ **Portfolio Showcase** - Real projects with metrics and testimonials
✅ **Documentation Samples** - Professional API documentation samples
✅ **Services Page** - Clear service offerings and pricing
✅ **About Page** - Professional background and credentials
✅ **Contact Form** - Direct inquiry submission
✅ **SEO Optimized** - Meta tags and semantic HTML
✅ **Fast Performance** - Static site generation for speed
✅ **TypeScript** - Type-safe development

## Project Structure

```
stellaoiro/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (Header, Footer)
│   ├── page.tsx                 # Homepage
│   ├── about/                   # About page
│   ├── services/                # Services page
│   ├── portfolio/               # Portfolio page
│   │   └── samples/             # Documentation samples
│   │       └── api-documentation/  # EventHub API sample
│   ├── blog/                    # Blog (in progress)
│   ├── contact/                 # Contact page
│   └── sitemap.ts              # Sitemap generation
├── components/                  # React components (25+ components)
│   ├── Header.tsx              # Main navigation
│   ├── Footer.tsx              # Footer component
│   ├── Hero.tsx                # Homepage hero
│   │       └── newsletter-form.njk # Newsletter signup form
│   ├── _data/
│   │   └── site.json              # Site metadata and configuration
│   ├── assets/
│   │   ├── images/                # Images (headshot, badges, etc.)
│   │   └── js/
│   │       └── main.js            # JavaScript (mobile menu, forms)
│   ├── css/
│   │   └── tailwind.css           # Tailwind CSS input file
│   ├── blog/
│   │   ├── blog.njk               # Blog listing page
│   │   └── posts/                 # Blog post markdown files
│   │       ├── clinical-officer-to-aws-community-builder.md
│   │       ├── hipaa-compliant-s3-buckets.md
│   │       ├── aws-services-for-healthcare-startups.md
│   │       └── kcna-study-plan.md
│   ├── pages/
│   │   ├── about.md               # About page
│   │   ├── hire.md                # Hire Me / Consulting page
│   │   ├── resources.md           # Resources page
│   │   ├── privacy.md             # Privacy Policy
│   │   └── terms.md               # Terms of Service
│   └── index.njk                  # Homepage
├── .eleventy.js                   # 11ty configuration
├── tailwind.config.js             # Tailwind configuration
├── package.json                   # NPM dependencies and scripts
├── .gitignore                     # Git ignore file
└── README.md                      # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Stella-Achar-Oiro/stellaoiro.git
cd stellaoiro
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Available Scripts

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build site for production (outputs to ./out/)
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Adding Portfolio Samples

Portfolio samples are located in `app/portfolio/samples/`. Current samples include:

1. **EventHub API Documentation** - Complete RESTful API documentation with visual diagrams

To add a new sample:

1. Create directory: `app/portfolio/samples/[sample-name]/`
2. Add `page.tsx` with the sample presentation
3. Optionally add `.mdx` file with raw documentation content
4. Update `app/portfolio/page.tsx` to add to the `samples` array

Example sample structure:
```typescript
{
  title: 'Sample Title',
  description: 'Brief description',
  tags: ['Tag1', 'Tag2'],
  features: ['Feature 1', 'Feature 2'],
  link: '/portfolio/samples/sample-name',
  type: 'Documentation Type',
}
```

## Deployment

### Option 1: Netlify (Recommended for Quick Setup)

1. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings**
   - Build command: `npm run build && npm run build:css`
   - Publish directory: `_site`

3. **Environment Variables** (if needed)
   - Add any API keys or environment variables in Netlify dashboard

4. **Deploy!**
   - Every push to `main` branch will auto-deploy

**Custom Domain:**
- In Netlify dashboard: Domain settings → Add custom domain
- Point your DNS to Netlify's nameservers or add CNAME record

### Option 2: AWS S3 + CloudFront (Showcases AWS Skills)

1. **Create S3 Bucket**
```bash
aws s3 mb s3://stellaoiro-tech-blog --region us-east-1
```

2. **Enable Static Website Hosting**
```bash
aws s3 website s3://stellaoiro-tech-blog/ \
  --index-document index.html \
  --error-document 404.html
```

3. **Build Site**
```bash
npm run build
npm run build:css
```

4. **Deploy to S3**
```bash
aws s3 sync _site/ s3://stellaoiro-tech-blog --delete
```

5. **Create CloudFront Distribution**
   - Origin: Your S3 bucket
   - Viewer Protocol Policy: Redirect HTTP to HTTPS
   - Default Root Object: index.html
   - SSL Certificate: Use ACM certificate

6. **Set up Route 53**
   - Create hosted zone for your domain
   - Add A record pointing to CloudFront distribution

**Automation Script** (`deploy.sh`):
```bash
#!/bin/bash

# Build site
npm run build
npm run build:css

# Sync to S3
aws s3 sync _site/ s3://stellaoiro-tech-blog --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"

echo "Deployment complete!"
```

Make executable:
```bash
chmod +x deploy.sh
./deploy.sh
```

## Customization

### Update Site Information

Edit `src/_data/site.json`:

```json
{
  "name": "Your Name",
  "title": "Your Site Title",
  "description": "Your site description",
  "url": "https://yoursite.com",
  "author": {
    "name": "Your Name",
    "email": "your@email.com",
    "social": {
      "linkedin": "https://linkedin.com/in/yourname",
      "github": "https://github.com/yourname",
      "twitter": "https://twitter.com/yourname"
    }
  }
}
```

### Change Color Scheme

Edit `tailwind.config.js`:

```javascript
colors: {
  'brand-blue': '#2563EB',    // Change to your brand color
  'brand-orange': '#FF6B35',  // Change accent color
  'brand-green': '#10B981',   // Change CTA color
}
```

### Update Navigation

Edit `src/_data/site.json` → `navigation` array

### Add New Pages

1. Create markdown file in `src/pages/`
2. Add front matter with `layout: layouts/page.njk`
3. Add to navigation in `site.json`

## Newsletter Integration

### ConvertKit Setup

1. Sign up for [ConvertKit](https://convertkit.com)
2. Create a form
3. Get form ID and API key
4. Update `src/_includes/components/newsletter-form.njk` with form endpoint
5. Update JavaScript in `src/assets/js/main.js` to POST to ConvertKit API

### Mailchimp Setup

1. Sign up for [Mailchimp](https://mailchimp.com)
2. Create audience
3. Generate form embed code
4. Update newsletter form component with Mailchimp action URL

## Forms Integration

### Netlify Forms (Easiest)

Already configured! Just add `netlify` attribute to form:

```html
<form netlify>
  <!-- form fields -->
</form>
```

### Custom Backend

Create API endpoint and update form action in:
- `src/pages/hire.md` (Hire Me form)
- `src/_includes/components/newsletter-form.njk`

## Analytics Setup

### Google Analytics 4

1. Create GA4 property
2. Get Measurement ID
3. Add to `src/_includes/layouts/base.njk`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible (Privacy-Friendly)

1. Sign up for [Plausible](https://plausible.io)
2. Add script to base layout:

```html
<script defer data-domain="stellaoiro.com" src="https://plausible.io/js/script.js"></script>
```

## SEO Optimization

### Generate Sitemap

Add to `.eleventy.js`:

```javascript
eleventyConfig.addPassthroughCopy("src/robots.txt");
```

Create `src/sitemap.njk`:

```njk
---
permalink: /sitemap.xml
eleventyExcludeFromCollections: true
---
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{% for page in collections.all %}
  <url>
    <loc>{{ site.url }}{{ page.url }}</loc>
    <lastmod>{{ page.date | date: "%Y-%m-%d" }}</lastmod>
  </url>
{% endfor %}
</urlset>
```

### Submit to Search Engines

- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters/)

## Performance Optimization

### Image Optimization

Use optimized images:
- WebP format for modern browsers
- Lazy loading: `loading="lazy"`
- Responsive images with `srcset`

### Lighthouse Scores Target

- Performance: >90
- Accessibility: >95
- Best Practices: >95
- SEO: >95

Run audit:
```bash
npx lighthouse http://localhost:8080 --view
```

## Troubleshooting

### Build fails

```bash
# Clean and rebuild
npm run clean
npm install
npm run build
```

### CSS not updating

```bash
# Rebuild CSS
npm run build:css
```

### Port 8080 already in use

```bash
# Kill process on port 8080
lsof -ti:8080 | xargs kill -9

# Or change port in package.json
"start": "eleventy --serve --port=3000"
```

## Contributing

This is a personal blog, but if you find issues or have suggestions:

1. Open an issue
2. Submit a pull request
3. Email: stellaacharoiro@gmail.com

## License

- **Code**: MIT License - feel free to use the code
- **Content** (blog posts, articles): © 2025 Achar Oiro - All rights reserved
- **Images**: Rights retained by respective owners

## Contact

**Achar Oiro**
- Website: [stellaoiro.com](https://stellaoiro.com)
- Email: stellaacharoiro@gmail.com
- LinkedIn: [linkedin.com/in/stella-oiro](https://linkedin.com/in/stella-oiro)
- GitHub: [github.com/Stella-Achar-Oiro](https://github.com/Stella-Achar-Oiro)

## Acknowledgments

- Built with [11ty](https://www.11ty.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Inspired by [Adam Enfroy's design](https://adamenfroy.com/)
- Code highlighting by [Prism.js](https://prismjs.com/)
- Hosted on [AWS](https://aws.amazon.com/) / [Netlify](https://netlify.com/)

---

**Built with ❤️ by Achar Oiro | AWS Community Builder | Cloud Engineer**
