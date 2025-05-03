#!/bin/bash
# Static site fallback deployment script for GitHub Pages
# This bypasses the entire build process and deploys just the static HTML version

# Exit on error
set -e

echo "🚀 Starting static site deployment"

# Create temporary directory
echo "Creating temporary directory..."
mkdir -p static-deploy
cd static-deploy

# Copy static HTML file and rename it
echo "Copying static site files..."
cp ../client/public/static-site.html index.html
cp ../client/public/404.html 404.html
touch .nojekyll

# Copy any images or other assets if they exist
if [ -d "../client/public/images" ]; then
  echo "Copying images..."
  mkdir -p images
  cp -r ../client/public/images/* images/
fi

# Initialize git repository
echo "Initializing git repository..."
git init
git add .
git config --global user.name "GitHub Actions"
git config --global user.email "actions@github.com"
git commit -m "Deploy static site to GitHub Pages"

# Create and push to gh-pages branch
echo "Pushing to gh-pages branch..."
git branch -M gh-pages
git remote add origin https://github.com/aloksri2204/Cab_Akhilesh.git
git push -f origin gh-pages

echo "✅ Static site deployment complete!"
echo "Visit your site at: https://aloksri2204.github.io/Cab_Akhilesh/"
echo ""
echo "IMPORTANT: Configure GitHub Pages in repository settings:"
echo "1. Go to Settings → Pages"
echo "2. Set Source to 'Deploy from a branch'"
echo "3. Select 'gh-pages' branch and '/ (root)' folder"
echo "4. Click 'Save'"