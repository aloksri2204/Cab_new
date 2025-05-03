#!/bin/bash
# One-command script to build and deploy AkhileshCab website to GitHub Pages

if [ -z "$1" ]; then
  echo "Error: Please provide your GitHub repository URL."
  echo "Usage: ./static-site-deploy.sh https://github.com/USERNAME/REPO_NAME.git"
  exit 1
fi

# First build the site
./build-for-github.sh

# Then deploy it
./deploy-to-github.sh "$1"

echo "============================================"
echo "Your website is now deployed to GitHub Pages!"
echo "It should be available shortly at:"
echo "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/"
echo "============================================"