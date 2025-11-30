# HostPinnacle Deployment Setup

## Prerequisites
1. HostPinnacle hosting account
2. GitHub repository
3. FTP credentials from HostPinnacle

## Setup Steps

### 1. Get HostPinnacle FTP Credentials
Login to your HostPinnacle cPanel and get:
- FTP Server (e.g., ftp.yourdomain.com)
- FTP Username
- FTP Password

### 2. Add GitHub Secrets
Go to your GitHub repository → Settings → Secrets and variables → Actions

Add these secrets:
- `FTP_SERVER`: Your FTP server address
- `FTP_USERNAME`: Your FTP username
- `FTP_PASSWORD`: Your FTP password

### 3. Push to GitHub
```bash
git add .
git commit -m "Setup HostPinnacle deployment"
git push origin main
```

### 4. Automatic Deployment
Every push to `main` branch will:
1. Build the Next.js site
2. Deploy to HostPinnacle via FTP
3. Site will be live at your domain

## Manual Deployment (if needed)
```bash
npm run build
# Upload contents of /out folder to public_html via FTP
```

## Verify Deployment
1. Check GitHub Actions tab for deployment status
2. Visit https://stellaoiro.co.ke to see the live site
3. Verify SSL certificate is active (https://)

## Domain Configuration
Your domain: **stellaoiro.co.ke**

Ensure in HostPinnacle cPanel:
1. Domain points to your hosting account
2. SSL certificate is installed (Let's Encrypt)
3. Files are in `public_html` directory

## Troubleshooting

### Build fails
- Check GitHub Actions logs
- Verify Node.js version (18+)

### FTP connection fails
- Verify FTP credentials in GitHub Secrets
- Check HostPinnacle firewall settings
- Ensure FTP is enabled in cPanel

### Site not loading
- Verify files are in `public_html` directory
- Check .htaccess file is uploaded
- Clear browser cache

## Support
Contact HostPinnacle support if you need help with:
- FTP access
- Domain configuration
- SSL certificate setup
