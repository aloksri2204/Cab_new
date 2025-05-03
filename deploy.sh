#!/usr/bin/env bash
set -e

# Build the project
npm run build

# Create a directory for the GitHub Pages branch
mkdir -p gh-pages

# Copy the dist contents to the gh-pages directory
cp -R dist/* gh-pages/

# Copy the 404.html file to the root of gh-pages
cp client/public/404.html gh-pages/

# Copy the .nojekyll file to the root of gh-pages
cp client/public/.nojekyll gh-pages/

# Create a CNAME file if needed (uncomment and edit if you have a custom domain)
# echo "your-custom-domain.com" > gh-pages/CNAME

echo "Files prepared for GitHub Pages in the 'gh-pages' directory"
echo ""
echo "To deploy to GitHub Pages:"
echo "1. Create a new repository on GitHub (if you haven't already)"
echo "2. Push the 'gh-pages' directory contents to the 'gh-pages' branch of your repo:"
echo ""
echo "   cd gh-pages"
echo "   git init"
echo "   git add ."
echo "   git commit -m 'Deploy to GitHub Pages'"
echo "   git branch -M gh-pages"
echo "   git remote add origin https://github.com/yourusername/Cab_Akhilesh.git"
echo "   git push -u origin gh-pages -f"
echo ""
echo "3. Configure GitHub Pages in your repository settings to use the gh-pages branch"
echo ""
echo "IMPORTANT: After deployment, if you see '~and~' characters in the URL or other routing issues:"
echo "1. Check that the simplified routing scripts in index.html and 404.html are working correctly"
echo "2. You may need to manually navigate to the homepage URL and then use the navigation links"