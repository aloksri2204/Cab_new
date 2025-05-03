#!/bin/bash
# Simple script to deploy to GitHub Pages without GitHub Actions
# This directly deploys the dist folder to the gh-pages branch

# Set to exit on error
set -e

# First run the build script
echo "Running build script..."
bash build-for-github.sh

# Navigate to the dist folder
echo "Navigating to dist folder..."
cd dist

# Initialize git
echo "Initializing git repository..."
git init

# Add all files
echo "Adding files to git..."
git add .

# Commit the files
echo "Committing files..."
git commit -m "Deploy to GitHub Pages"

# Create gh-pages branch
echo "Creating gh-pages branch..."
git branch -M gh-pages

# Add remote origin (change the URL to your repository)
echo "Adding remote origin..."
git remote add origin https://github.com/aloksri2204/Cab_Akhilesh.git

# Force push to gh-pages branch
echo "Pushing to gh-pages branch (force)..."
git push -u origin gh-pages -f

echo "✅ Deployment complete!"
echo "Visit your site at: https://aloksri2204.github.io/Cab_Akhilesh/"
echo "Note: It may take a few minutes for the changes to appear."