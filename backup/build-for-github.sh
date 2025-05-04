#!/bin/bash
# Script to build AkhileshCab website for GitHub Pages

echo "============================================"
echo "Building AkhileshCab website for GitHub Pages"
echo "============================================"

# Create a build directory for all the static files
BUILD_DIR="build"

# Remove previous build if exists
if [ -d "$BUILD_DIR" ]; then
  echo "Removing previous build..."
  rm -rf "$BUILD_DIR"
fi

# Create build directory
echo "Creating build directory..."
mkdir -p "$BUILD_DIR"

# Copy all static files from simple-site/public
echo "Copying static files..."
cp -r simple-site/public/* "$BUILD_DIR"/

echo "============================================"
echo "Build completed! Files are in the '$BUILD_DIR' directory."
echo "To deploy to GitHub Pages, you can:"
echo "1. Run './deploy-to-github.sh https://github.com/USERNAME/REPO.git'"
echo "2. Or follow the manual steps in GITHUB_PAGES_DEPLOYMENT.md"
echo "============================================"