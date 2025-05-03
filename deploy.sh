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

echo "Files prepared for GitHub Pages in the 'gh-pages' directory"
echo ""
echo "To deploy to GitHub Pages:"
echo "1. Create a new repository on GitHub"
echo "2. Push the 'gh-pages' directory contents to the 'gh-pages' branch of your repo:"
echo ""
echo "   cd gh-pages"
echo "   git init"
echo "   git add ."
echo "   git commit -m 'Deploy to GitHub Pages'"
echo "   git branch -M gh-pages"
echo "   git remote add origin https://github.com/yourusername/akhileshcab-website.git"
echo "   git push -u origin gh-pages"
echo ""
echo "3. Configure GitHub Pages in your repository settings to use the gh-pages branch"