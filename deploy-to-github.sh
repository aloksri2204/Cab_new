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

# Create a temporary directory
echo "Creating temporary directory..."
mkdir -p $TEMP_DIR

# Copy only the public directory content (static files)
echo "Copying static files..."
cp -r simple-site/public/* $TEMP_DIR/

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

# Push to GitHub (force to overwrite any existing content)
echo "Pushing to GitHub..."
git push -u origin master --force

# Clean up
echo "Cleaning up..."
cd ..
rm -rf $TEMP_DIR

echo "============================================"
echo "Deployment complete!"
echo "Your website should be available soon at:"
echo "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/"
echo "============================================"