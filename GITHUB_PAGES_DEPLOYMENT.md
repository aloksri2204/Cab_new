# AkhileshCab GitHub Pages Deployment Guide for aloksri2204

This guide will help you deploy the AkhileshCab website to GitHub Pages without encountering URL issues with ~and~ characters.

## RECOMMENDED APPROACH: GitHub Actions Deployment

The most reliable way to deploy this site to GitHub Pages is using GitHub Actions:

1. Download the complete code from Replit

2. Push it to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/aloksri2204/Cab_Akhilesh.git
   git push -u origin main
   ```

3. GitHub will automatically detect the workflow file in `.github/workflows/deploy.yml` and run it

4. Go to your repository settings on GitHub:
   - Click on "Settings"
   - Navigate to "Pages" in the left sidebar
   - Under "Build and deployment":
     - Select "GitHub Actions" as the Source
   - Verify the site is published at `https://aloksri2204.github.io/Cab_Akhilesh/`

## ALTERNATIVE APPROACH: Manual Deployment

If you prefer manual deployment:

1. Download the code and install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Manually copy the 404.html file to the built files:
   ```bash
   cp client/public/404.html dist/
   ```

4. Create a .nojekyll file in the dist directory:
   ```bash
   touch dist/.nojekyll
   ```

5. Deploy the contents of the dist directory to the gh-pages branch:
   ```bash
   cd dist
   git init
   git add .
   git commit -m "Deploy to GitHub Pages"
   git branch -M gh-pages
   git remote add origin https://github.com/aloksri2204/Cab_Akhilesh.git
   git push -u origin gh-pages -f
   ```

## About the URL Issue Fix

The following changes were made to fix the URL issues:

1. Updated the 404.html page to use a direct redirect without URL parameters
2. Modified the index.html script to handle same-page anchor navigation correctly
3. Configured the GitHub Actions workflow to fix asset paths if needed
4. Set up proper error handling on the 404 page

## Testing Your Deployment

1. Visit your site at `https://aloksri2204.github.io/Cab_Akhilesh/`
2. Test all navigation links to ensure they work correctly
3. If any issues persist:
   - Clear your browser cache or test in an incognito/private window
   - Check the browser console for any JavaScript errors
   - Ensure the 404.html file is present in your deployed site

This approach should completely eliminate the ~and~ characters from the URL.