# AkhileshCab GitHub Pages Deployment Guide - FIXING URL ISSUES

This guide has been updated to address both the **~and~ URL issue** AND the **crypto.getRandomValues error** during build.

## AUTOMATED METHOD: GitHub Actions Deployment

1. Download the complete code from Replit

2. Push the code to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/aloksri2204/Cab_Akhilesh.git
   git push -u origin main
   ```

3. The GitHub Actions workflow in `.github/workflows/deploy.yml` will run automatically
   - We now use Node.js 18 instead of 16 to fix the crypto error

4. Check deployment status:
   - Go to your repository on GitHub
   - Click on the "Actions" tab
   - Wait for the workflow to complete

5. Configure GitHub Pages:
   - Click "Settings" in your repository
   - Navigate to "Pages" in the left sidebar
   - Under "Build and deployment", select "GitHub Actions"
   - Your site will be available at `https://aloksri2204.github.io/Cab_Akhilesh/`

## EASY METHOD: Using Deployment Scripts

If you prefer to deploy from your local machine:

1. Make the scripts executable:
   ```bash
   chmod +x build-for-github.sh
   chmod +x deploy-to-github.sh
   ```

2. Run the deployment script:
   ```bash
   ./deploy-to-github.sh
   ```

3. That's it! The script will:
   - Build your project
   - Prepare all files for GitHub Pages
   - Push to the gh-pages branch
   - Provide confirmation when complete

4. Go to your repository settings on GitHub:
   - Click "Settings" → "Pages"
   - Set Source to "Deploy from a branch"
   - Select "gh-pages" branch and "/ (root)" folder
   - Click "Save"

## MANUAL METHOD: Step-By-Step Deployment

If the scripts don't work for you:

1. Install dependencies and build locally:
   ```bash
   npm install
   npm run build
   ```

2. Prepare the distribution files:
   ```bash
   # Copy special files
   cp client/public/404.html dist/
   cp client/public/index-ghpages.html dist/
   
   # Create no-jekyll file
   touch dist/.nojekyll
   ```

3. Create a custom router script in dist/hash-router.js (see build-for-github.sh for content)

4. Deploy to GitHub Pages:
   ```bash
   cd dist
   git init
   git add .
   git commit -m "Deploy to GitHub Pages with URL fix"
   git branch -M gh-pages
   git remote add origin https://github.com/aloksri2204/Cab_Akhilesh.git
   git push -u origin gh-pages -f
   ```

## How This Fix Works

Our solution addresses two key issues:

1. **The crypto.getRandomValues error**:
   - Updated Node.js version from 16 to 18
   - This provides proper support for modern crypto APIs

2. **The ~and~ URL issue**:
   - Eliminates wouter routing that causes the problem
   - Uses meta redirects for clean navigation
   - Intercepts link clicks with a custom event handler
   - Creates a custom hash router without query parameters
   - Forces direct navigation without route preservation

## Testing & Troubleshooting

- If GitHub Actions fails:
  - Check the error logs in GitHub Actions
  - Try the manual deployment script instead
  
- If you see ~and~ characters in URLs:
  - Clear your browser cache completely
  - Test in an incognito/private window
  - Add `?nocache=1` to force a fresh page load

---

**Note:** The deployment scripts in this project (build-for-github.sh and deploy-to-github.sh) are specifically designed to handle all these issues automatically.