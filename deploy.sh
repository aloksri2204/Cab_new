#!/bin/bash
# Simple deployment script for AkhileshCab static site

echo "Creating dist directory for deployment..."
# Remove existing dist directory if it exists
if [ -d "dist" ]; then
  echo "Removing existing dist directory..."
  rm -rf dist
fi

# Create a fresh dist directory
mkdir -p dist

# Copy all necessary files for the static site
echo "Copying website files..."
cp index.html dist/
cp -r css dist/
cp -r js dist/
cp -r images dist/

# Copy any additional files needed for deployment
if [ -f "CNAME" ]; then
  echo "Copying CNAME file for custom domain..."
  cp CNAME dist/
fi

# Copy documentation files
if [ -f "README.md" ]; then
  cp README.md dist/
fi

echo "Deployment files copied to dist directory successfully!"
echo "Your website is now ready to be served from the dist directory."
echo ""
echo "IMPORTANT: Before deploying to a live server, remember to replace"
echo "GOOGLE_MAPS_API_KEY in index.html with your actual Google Maps API key."