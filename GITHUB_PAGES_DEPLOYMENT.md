# AkhileshCab GitHub Pages Deployment Guide

This guide will help you deploy the AkhileshCab website to GitHub Pages and fix any URL issues that may occur.

## Standard Deployment Process

1. Download the code from Replit
2. Create a GitHub repository (e.g., "Cab_Akhilesh")
3. Initialize a local Git repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/Cab_Akhilesh.git
   git push -u origin main
   ```
4. Build the project:
   ```bash
   npm install
   npm run build
   ```
5. Deploy to GitHub Pages:
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```
6. Follow the instructions in the deploy.sh output

## Fixing URL Issues with ~and~ Characters

If you're seeing URLs with many "~and~" characters, try one of these solutions:

### Solution 1: Update GitHub Pages Settings

1. Go to your repository settings on GitHub
2. Navigate to Pages
3. Ensure the branch is set to `gh-pages`
4. Under "Build and deployment" → "Build" section, select "GitHub Actions" instead of "Deploy from a branch"
5. Create a GitHub Actions workflow file (instructions below)

### Solution 2: Use the Alternative 404.html

1. Replace the existing 404.html with the alternative version:
   ```bash
   cp client/public/404-alternative.html client/public/404.html
   ```
2. Rebuild and redeploy

### Solution 3: Create a GitHub Actions Workflow

Create a file called `.github/workflows/deploy.yml` with:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        
      - name: Copy 404 and .nojekyll
        run: |
          cp client/public/404.html dist/
          touch dist/.nojekyll

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
          branch: gh-pages
```

## Direct URLs for Navigation

If you still encounter issues with routing, you can use direct links in your navigation by updating them to:

```
https://yourusername.github.io/Cab_Akhilesh
```

Instead of using relative URLs.

## Test in Incognito Mode

Always test your deployed site in an incognito/private browsing window to ensure there are no caching issues affecting your view of the site.