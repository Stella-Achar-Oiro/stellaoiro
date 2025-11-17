# Deployment Guide

Complete guide for deploying your tech blog to production.

## Quick Start

Choose your deployment platform:
- **[Netlify](#netlify-deployment)** - Easiest, recommended for beginners
- **[AWS S3 + CloudFront](#aws-deployment)** - Full control, showcases AWS skills
- **[Vercel](#vercel-deployment)** - Alternative, similar to Netlify

## Netlify Deployment

### Option A: Deploy via Netlify Dashboard (Recommended)

1. **Push to GitHub** (already done ✅)

2. **Connect to Netlify:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "New site from Git"
   - Choose "GitHub"
   - Select your `stellaoiro` repository
   - Authorize Netlify

3. **Configure Build Settings:**
   ```
   Build command: npm run build && npm run build:css
   Publish directory: _site
   ```

4. **Deploy:**
   - Click "Deploy site"
   - Wait 2-3 minutes
   - Your site is live! 🎉

5. **Custom Domain:**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Follow DNS configuration instructions

### Option B: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Build site
npm run build && npm run build:css

# Deploy (first time - creates new site)
netlify deploy --prod

# Future deployments
netlify deploy --prod
```

### Netlify Configuration

The `netlify.toml` file is already configured with:
- ✅ Build commands
- ✅ Security headers
- ✅ Cache control
- ✅ Redirects

No additional configuration needed!

### Continuous Deployment

Every push to `main` branch automatically deploys. To change this:

1. Go to Site settings → Build & deploy
2. Choose which branch to deploy from
3. Optionally set up deploy previews for PRs

---

## AWS Deployment

### Prerequisites

- AWS account
- AWS CLI installed and configured
- Custom domain (optional but recommended)

### Step 1: Build the Site

```bash
# Build site locally
npm run build

# Build CSS
./node_modules/.bin/tailwindcss -i src/css/tailwind.css -o _site/css/styles.css --minify
```

### Step 2: Create S3 Bucket

```bash
# Create bucket (replace with your domain name)
aws s3 mb s3://acharoiro.com --region us-east-1

# Enable static website hosting
aws s3 website s3://acharoiro.com/ \
  --index-document index.html \
  --error-document 404.html

# Make bucket public (for website hosting)
aws s3api put-bucket-policy --bucket acharoiro.com --policy '{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::acharoiro.com/*"
  }]
}'
```

### Step 3: Deploy Using Script

```bash
# Make deploy script executable (already done)
chmod +x deploy-aws.sh

# Deploy to S3
./deploy-aws.sh acharoiro.com

# Or deploy with CloudFront invalidation
./deploy-aws.sh acharoiro.com E1234CLOUDFRONT
```

### Step 4: Set Up CloudFront

**Why CloudFront?**
- HTTPS support
- Global CDN (faster for users worldwide)
- Custom domain support
- Better security

**Create Distribution:**

```bash
# Via AWS Console (easier):
1. Go to CloudFront console
2. Create Distribution
3. Origin Domain: acharoiro.com.s3-website-us-east-1.amazonaws.com
4. Viewer Protocol Policy: Redirect HTTP to HTTPS
5. Default Root Object: index.html
6. Create distribution

# Note the CloudFront domain (e.g., d123.cloudfront.net)
```

**Or via Terraform:**

```hcl
# terraform/cloudfront.tf
resource "aws_cloudfront_distribution" "blog" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  aliases             = ["acharoiro.com", "www.acharoiro.com"]

  origin {
    domain_name = aws_s3_bucket.blog.website_endpoint
    origin_id   = "S3-acharoiro.com"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "S3-acharoiro.com"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    min_ttl     = 0
    default_ttl = 3600
    max_ttl     = 86400
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.blog.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  custom_error_response {
    error_code         = 404
    response_code      = 404
    response_page_path = "/404.html"
  }
}
```

### Step 5: SSL Certificate (ACM)

```bash
# Request certificate (must be in us-east-1 for CloudFront)
aws acm request-certificate \
  --domain-name acharoiro.com \
  --subject-alternative-names www.acharoiro.com \
  --validation-method DNS \
  --region us-east-1

# Follow email/DNS validation instructions
# This can take 5-30 minutes
```

### Step 6: Route 53 DNS

```bash
# Create hosted zone
aws route53 create-hosted-zone \
  --name acharoiro.com \
  --caller-reference $(date +%s)

# Create A record pointing to CloudFront
# (Do this via console or CLI after CloudFront is set up)
```

**Route 53 A Record:**
```json
{
  "Changes": [{
    "Action": "CREATE",
    "ResourceRecordSet": {
      "Name": "acharoiro.com",
      "Type": "A",
      "AliasTarget": {
        "HostedZoneId": "Z2FDTNDATAQYW2",
        "DNSName": "d123.cloudfront.net",
        "EvaluateTargetHealth": false
      }
    }
  }]
}
```

### Step 7: Automated Deployment

**GitHub Actions** (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to AWS

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2

    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'

    - name: Install dependencies
      run: npm install

    - name: Build site
      run: |
        npm run build
        npm run build:css

    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v1
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1

    - name: Deploy to S3
      run: |
        aws s3 sync _site/ s3://acharoiro.com --delete

    - name: Invalidate CloudFront
      run: |
        aws cloudfront create-invalidation \
          --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} \
          --paths "/*"
```

**Add GitHub Secrets:**
1. Go to repository Settings → Secrets → Actions
2. Add:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `CLOUDFRONT_DISTRIBUTION_ID`

---

## Vercel Deployment

### Quick Deploy

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Configuration

Create `vercel.json`:

```json
{
  "buildCommand": "npm run build && npm run build:css",
  "outputDirectory": "_site",
  "devCommand": "npm run dev",
  "framework": null
}
```

---

## Post-Deployment Checklist

### Verify Deployment

- [ ] Site loads correctly at your domain
- [ ] HTTPS works (no certificate errors)
- [ ] All pages accessible (Home, Blog, About, Hire Me, Resources)
- [ ] Blog posts display correctly with syntax highlighting
- [ ] Navigation works on mobile
- [ ] Forms submit successfully
- [ ] Images load properly
- [ ] 404 page displays for invalid URLs

### SEO Setup

- [ ] Submit sitemap to Google Search Console
  - URL: `https://acharoiro.com/sitemap.xml`
- [ ] Submit to Bing Webmaster Tools
- [ ] Verify robots.txt is accessible
  - URL: `https://acharoiro.com/robots.txt`
- [ ] Check Open Graph tags with [Open Graph Debugger](https://www.opengraph.xyz/)
- [ ] Check Twitter Cards with [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### Analytics Setup

- [ ] Set up Google Analytics 4
- [ ] Verify tracking code is firing
- [ ] Set up goals/conversions:
  - Newsletter signup
  - Hire Me form submission
  - Resource download
- [ ] Alternative: Set up Plausible or Fathom

### Newsletter Integration

- [ ] Sign up for ConvertKit/Mailchimp
- [ ] Create form
- [ ] Update newsletter form endpoint in `src/_includes/components/newsletter-form.njk`
- [ ] Test subscription flow
- [ ] Create welcome email sequence

### Performance Optimization

- [ ] Run Lighthouse audit (target 90+ in all categories)
  ```bash
  npx lighthouse https://acharoiro.com --view
  ```
- [ ] Check mobile performance
- [ ] Verify images are optimized and lazy-loaded
- [ ] Test on 3G connection (Chrome DevTools)

### Security

- [ ] Enable HTTPS (via CloudFront or Netlify)
- [ ] Check security headers:
  ```bash
  curl -I https://acharoiro.com
  ```
  Should include:
  - `Strict-Transport-Security`
  - `X-Content-Type-Options`
  - `X-Frame-Options`
- [ ] Scan for vulnerabilities: [Mozilla Observatory](https://observatory.mozilla.org/)

---

## Updating the Site

### Local Development

```bash
# Start dev server
npm run dev

# Site runs at http://localhost:8080
# Auto-reloads on file changes
```

### Publishing Updates

**Netlify:**
```bash
git add .
git commit -m "Your update message"
git push origin main
# Automatic deployment happens in 2-3 minutes
```

**AWS:**
```bash
# Build
npm run build && npm run build:css

# Deploy
./deploy-aws.sh acharoiro.com E1234CLOUDFRONT

# Or use GitHub Actions (automatic on push)
```

### Adding New Blog Posts

1. Create file: `src/blog/posts/my-new-post.md`
2. Add front matter:
```yaml
---
title: "Your Post Title"
description: "SEO description"
date: 2025-11-17
categories: [AWS, Tutorial]
tags: [lambda, serverless]
featured: true
layout: layouts/post.njk
---
```
3. Write content
4. Build and deploy

---

## Cost Estimates

### Netlify
- **Free Tier**: 100GB bandwidth, 300 build minutes/month
- **Pro**: $19/month (unlimited builds, forms, analytics)
- **Recommended Start**: Free tier

### AWS
- **S3**: $0.023/GB storage + $0.09/GB transfer = ~$3-5/month
- **CloudFront**: $0.085/GB first 10TB = ~$2-3/month
- **Route 53**: $0.50/hosted zone/month
- **Total**: ~$5-10/month
- **Free Tier**: First 12 months includes some free usage

### Vercel
- **Hobby**: Free (limited bandwidth)
- **Pro**: $20/month
- **Recommended Start**: Free tier

---

## Troubleshooting

### Build Fails

```bash
# Clean and rebuild
npm run clean
rm -rf node_modules package-lock.json
npm install
npm run build && npm run build:css
```

### CSS Not Loading

```bash
# Check build output
ls -la _site/css/

# Rebuild CSS
./node_modules/.bin/tailwindcss -i src/css/tailwind.css -o _site/css/styles.css --minify
```

### CloudFront Shows Old Content

```bash
# Invalidate cache
aws cloudfront create-invalidation \
  --distribution-id E1234CLOUDFRONT \
  --paths "/*"
```

### Forms Not Submitting

For Netlify:
- Ensure `netlify` attribute is in form tag
- Check Netlify dashboard → Forms → Active forms

### 404 Errors on Refresh

**Netlify**: Already configured in `netlify.toml`

**AWS CloudFront**: Add custom error response:
- Go to CloudFront → Error Pages
- Add: 404 → /404.html → 404

---

## Monitoring & Maintenance

### Weekly
- Check analytics for traffic trends
- Respond to form submissions
- Monitor uptime (use [UptimeRobot](https://uptimerobot.com/) - free)

### Monthly
- Review and update old blog posts
- Check for broken links
- Update dependencies: `npm audit && npm update`
- Review costs (AWS/Netlify dashboard)

### Quarterly
- Run full Lighthouse audit
- Update SSL certificates (automatic with ACM/Netlify)
- Review SEO performance
- Update About page with new achievements

---

## Support

**Questions about deployment?**
- Email: stellaacharoiro@gmail.com
- Check README.md for common issues
- AWS Documentation: https://docs.aws.amazon.com
- Netlify Documentation: https://docs.netlify.com

---

**Your site is production-ready! 🚀**

Choose your deployment method and launch your blog to the world.
