#!/bin/bash

# AWS S3 + CloudFront Deployment Script for Tech Blog
# Usage: ./deploy-aws.sh [bucket-name] [cloudfront-distribution-id]

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
BUCKET_NAME=${1:-"stellaoiro-tech-blog"}
CLOUDFRONT_ID=${2:-""}

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}   Tech Blog Deployment to AWS${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}Error: AWS CLI is not installed${NC}"
    echo "Install it from: https://aws.amazon.com/cli/"
    exit 1
fi

# Check if AWS credentials are configured
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "${RED}Error: AWS credentials not configured${NC}"
    echo "Run: aws configure"
    exit 1
fi

echo -e "${YELLOW}Building site...${NC}"

# Clean previous build
echo "  - Cleaning old build..."
rm -rf _site

# Build with 11ty
echo "  - Building with 11ty..."
npm run build

# Build CSS
echo "  - Building Tailwind CSS..."
./node_modules/.bin/tailwindcss -i src/css/tailwind.css -o _site/css/styles.css --minify

echo -e "${GREEN}✓ Build complete${NC}"
echo ""

# Check if bucket exists
echo -e "${YELLOW}Checking S3 bucket...${NC}"
if aws s3 ls "s3://$BUCKET_NAME" 2>&1 | grep -q 'NoSuchBucket'; then
    echo "  - Bucket doesn't exist. Creating..."
    aws s3 mb "s3://$BUCKET_NAME"
    echo -e "${GREEN}✓ Bucket created${NC}"
else
    echo -e "${GREEN}✓ Bucket exists${NC}"
fi
echo ""

# Sync to S3
echo -e "${YELLOW}Deploying to S3...${NC}"
aws s3 sync _site/ "s3://$BUCKET_NAME" \
    --delete \
    --cache-control "public,max-age=31536000,immutable" \
    --exclude "*.html" \
    --exclude "sitemap.xml" \
    --exclude "robots.txt"

# Upload HTML files with different cache
aws s3 sync _site/ "s3://$BUCKET_NAME" \
    --delete \
    --cache-control "public,max-age=0,must-revalidate" \
    --exclude "*" \
    --include "*.html" \
    --include "sitemap.xml" \
    --include "robots.txt" \
    --content-type "text/html"

echo -e "${GREEN}✓ Files synced to S3${NC}"
echo ""

# Invalidate CloudFront cache if distribution ID provided
if [ ! -z "$CLOUDFRONT_ID" ]; then
    echo -e "${YELLOW}Invalidating CloudFront cache...${NC}"
    INVALIDATION_ID=$(aws cloudfront create-invalidation \
        --distribution-id "$CLOUDFRONT_ID" \
        --paths "/*" \
        --query 'Invalidation.Id' \
        --output text)

    echo "  - Invalidation ID: $INVALIDATION_ID"
    echo -e "${GREEN}✓ CloudFront cache invalidated${NC}"
    echo ""
fi

# Display summary
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}   Deployment Complete! 🚀${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo "Bucket: s3://$BUCKET_NAME"

if [ ! -z "$CLOUDFRONT_ID" ]; then
    echo "CloudFront: $CLOUDFRONT_ID"
    echo ""
    echo "Your site will be live at your CloudFront URL in a few minutes."
else
    echo ""
    echo "S3 Website URL:"
    echo "http://$BUCKET_NAME.s3-website-us-east-1.amazonaws.com"
    echo ""
    echo -e "${YELLOW}Note: Configure CloudFront for HTTPS and custom domain${NC}"
fi
echo ""
echo -e "${GREEN}Next steps:${NC}"
echo "1. Configure CloudFront distribution (if not done)"
echo "2. Set up custom domain in Route 53"
echo "3. Request SSL certificate via ACM"
echo "4. Test the site thoroughly"
echo ""
echo -e "${GREEN}Happy blogging! ✨${NC}"
