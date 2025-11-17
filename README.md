# Achar Oiro Tech Blog

Professional tech blog for AWS Community Builder Achar Oiro. Built with 11ty, Tailwind CSS, and deployed on AWS/Netlify.

🌐 **Live Site**: [acharoiro.com](https://acharoiro.com)

## About

This is a professional tech blog focused on:
- AWS & Cloud Engineering
- Healthcare Technology & HIPAA Compliance
- Kubernetes & Container Orchestration
- Career Transition Stories (Healthcare → Tech)

## Tech Stack

- **Static Site Generator**: [11ty (Eleventy)](https://www.11ty.dev/)
- **CSS Framework**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Syntax Highlighting**: Prism.js (via 11ty plugin)
- **JavaScript**: Vanilla JS (no framework)
- **Hosting**: AWS S3 + CloudFront OR Netlify
- **Email**: ConvertKit/Mailchimp integration ready
- **Forms**: Netlify Forms (or custom backend)

## Features

✅ **Responsive Design** - Mobile-first, works on all devices
✅ **Fast Performance** - Optimized for 3G networks (East Africa focus)
✅ **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
✅ **Code Syntax Highlighting** - Beautiful code blocks for tutorials
✅ **Newsletter Integration** - Email capture forms throughout
✅ **Blog with Categories** - AWS, Healthcare, Kubernetes, Career
✅ **Prominent "Hire Me" CTA** - Consulting page with contact form
✅ **About Page** - Full story and credentials
✅ **Resources Page** - Free downloads and recommendations
✅ **Legal Pages** - Privacy Policy and Terms of Service

## Project Structure

```
stellaoiro/
├── src/
│   ├── _includes/
│   │   ├── layouts/
│   │   │   ├── base.njk           # Base HTML template
│   │   │   ├── page.njk           # Static page layout
│   │   │   └── post.njk           # Blog post layout
│   │   └── components/
│   │       ├── nav.njk            # Navigation component
│   │       ├── footer.njk         # Footer component
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

The site will be available at `http://localhost:8080`

### Available Scripts

```bash
# Start development server with live reload and CSS watch
npm run dev

# Build site for production
npm run build

# Build Tailwind CSS (production)
npm run build:css

# Clean build directory
npm run clean
```

## Creating New Blog Posts

1. Create a new markdown file in `src/blog/posts/`:

```bash
touch src/blog/posts/my-new-post.md
```

2. Add front matter:

```yaml
---
title: "Your Post Title"
description: "Brief description for SEO and social media"
date: 2025-11-17
author: Achar Oiro
categories:
  - AWS
  - Healthcare
tags:
  - s3
  - hipaa
  - security
featured: true
image: https://example.com/image.jpg
imageAlt: "Description of image"
readTime: 10
layout: layouts/post.njk
---

Your content here...
```

3. Write your content using Markdown
4. Code blocks with syntax highlighting:

````markdown
```python
import boto3

s3 = boto3.client('s3')
```
````

5. Build and preview:
```bash
npm run build
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
aws s3 mb s3://acharoiro-tech-blog --region us-east-1
```

2. **Enable Static Website Hosting**
```bash
aws s3 website s3://acharoiro-tech-blog/ \
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
aws s3 sync _site/ s3://acharoiro-tech-blog --delete
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
aws s3 sync _site/ s3://acharoiro-tech-blog --delete

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
<script defer data-domain="acharoiro.com" src="https://plausible.io/js/script.js"></script>
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
- Website: [acharoiro.com](https://acharoiro.com)
- Email: stellaacharoiro@gmail.com
- LinkedIn: [linkedin.com/in/achar-oiro](https://linkedin.com/in/achar-oiro)
- GitHub: [github.com/Stella-Achar-Oiro](https://github.com/Stella-Achar-Oiro)

## Acknowledgments

- Built with [11ty](https://www.11ty.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Inspired by [Adam Enfroy's design](https://adamenfroy.com/)
- Code highlighting by [Prism.js](https://prismjs.com/)
- Hosted on [AWS](https://aws.amazon.com/) / [Netlify](https://netlify.com/)

---

**Built with ❤️ by Achar Oiro | AWS Community Builder | Cloud Engineer**
