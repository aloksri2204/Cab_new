#!/bin/bash
# Script to deploy AkhileshCab site to GitHub Pages

echo "============================================"
echo "Deploying AkhileshCab website to GitHub Pages"
echo "============================================"

# Check if repository URL provided
if [ -z "$1" ]; then
  echo "Please provide your GitHub repository URL."
  echo "Usage: ./deploy-to-github.sh https://github.com/USERNAME/REPO_NAME.git"
  exit 1
fi

REPO_URL=$1
TEMP_DIR="gh-pages-deploy"

# First run the deploy script to prepare files
echo "Preparing files for deployment..."
./deploy.sh

# Create a temporary directory
echo "Creating temporary directory..."
mkdir -p $TEMP_DIR

# Copy static files from the dist directory
echo "Copying static files..."
cp -r dist/* $TEMP_DIR/

# Navigate to the temp directory
cd $TEMP_DIR

# Initialize git
echo "Initializing Git repository..."
git init

# Add all files
git add .

# Commit
echo "Committing changes..."
git commit -m "Deploy AkhileshCab website to GitHub Pages"

# Add remote repository
echo "Setting up remote repository..."
git remote add origin $REPO_URL

# Push to GitHub (use main branch - more common now)
echo "Pushing to GitHub..."
git branch -M main
git push -u origin main --force

# Clean up
echo "Cleaning up..."
cd ..
rm -rf $TEMP_DIR

echo "============================================"
echo "Deployment complete!"
echo "Your website should be available soon at:"
echo "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/"
echo "============================================"
echo ""
echo "IMPORTANT: Configure GitHub Pages in repository settings:"
echo "1. Go to your repository on GitHub"
echo "2. Click on 'Settings'"
echo "3. Navigate to 'Pages' in the sidebar"
echo "4. Under 'Build and deployment', set Source to 'Deploy from a branch'"
echo "5. Select 'main' branch and '/ (root)' folder"
echo "6. Click 'Save'"
echo "============================================"