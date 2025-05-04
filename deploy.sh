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
cp -r images dist/

# Create js directory and copy files selectively
mkdir -p dist/js
cp js/script.js dist/js/
cp js/config.example.js dist/js/

# For development/testing only: If config.js exists, copy it too
# but in production, users should create their own from the example
if [ -f "js/config.js" ]; then
  echo "Note: Including config.js file in dist (contains API keys)"
  cp js/config.js dist/js/
else
  echo "Warning: No config.js file found. Creating an empty one in dist..."
  cp js/config.example.js dist/js/config.js
  # Clear the API key in the copied file
  sed -i 's/YOUR_GOOGLE_MAPS_API_KEY_HERE/""/g' dist/js/config.js
fi

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
echo "IMPORTANT: Before deploying to a live server, make sure to edit"
echo "js/config.js with your actual Google Maps API key."