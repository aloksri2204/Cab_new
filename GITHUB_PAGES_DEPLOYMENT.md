# GitHub Pages Deployment Guide for AkhileshCab Website

This guide provides detailed steps to deploy the AkhileshCab website to GitHub Pages.

## What is GitHub Pages?

GitHub Pages is a free static site hosting service that takes HTML, CSS, and JavaScript files directly from a repository on GitHub, and publishes a website. It's perfect for landing pages, personal sites, and small business sites like AkhileshCab.

## Prerequisites

1. A GitHub account (create one at https://github.com/join if needed)
2. Git installed on your computer (download from https://git-scm.com/downloads)
3. Basic knowledge of Git commands or a Git client (optional)

## Deployment Steps

### Option 1: Using the Deployment Script (Recommended)

1. Make sure you have Git installed and you're logged in to GitHub on your computer
2. Open a terminal/command prompt
3. Navigate to the root directory of this project
4. Run the deployment script with your GitHub repository URL:

```bash
./deploy-to-github.sh https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
```

The script will:
- Create a temporary directory
- Copy all the necessary static files from the `simple-site/public` folder
- Initialize a Git repository
- Push everything to GitHub
- Clean up temporary files

### Option 2: Manual Deployment

If you prefer to deploy manually, follow these steps:

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name your repository (e.g., "akhileshcab-website")
   - Make it public
   - Click "Create repository"

2. Prepare the static files:
   - Copy the contents of `simple-site/public` to a temporary folder
   - Make sure all file paths use relative paths (we've already updated these)

3. Initialize Git and push to GitHub:
   ```bash
   cd path/to/temporary/folder
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```

4. Configure GitHub Pages:
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to the "GitHub Pages" section
   - In the "Source" dropdown, select "main branch"
   - Click "Save"

## Verifying Deployment

After following either method, your website should be published at:
`https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

It may take a few minutes for the site to be available. If you see a 404 error, wait a few minutes and try again.

## Understanding the Static Site Changes

To make this site work on GitHub Pages (which only supports static files), the following changes were made:

1. **Relative File Paths**: All file paths now use relative paths instead of absolute paths (removed leading "/").

2. **Form Submissions**: The booking and contact forms have been modified to:
   - Store form data temporarily in the browser's localStorage
   - Open the user's email client with pre-filled information as a fallback

3. **Placeholder Images**: SVG-based placeholder images have been created to ensure the site looks good even without actual images.

## Troubleshooting

- **404 Errors**: Make sure your repository is public and GitHub Pages is enabled correctly.
- **Missing Styles/Scripts**: Check that all file paths are correct (they should be relative).
- **Form Issues**: Since GitHub Pages doesn't support server-side processing, forms will open the user's email client instead.

## Maintaining Your Site

To update your site after deployment:

1. Make changes to your files locally
2. Re-run the deployment script or manual deployment steps
3. Wait a few minutes for the changes to propagate

## Alternative Hosting Options

If you need more advanced features (like server-side form processing), consider:

1. **Netlify**: Offers form handling capabilities with a free tier
2. **Vercel**: Great for static sites with a generous free tier
3. **Heroku**: Can run the full Express.js version of the site