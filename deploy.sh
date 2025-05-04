#!/bin/bash
# Simple deployment script for AkhileshCab static site

echo "Creating dist directory for deployment..."
mkdir -p dist

# Copy all necessary files for the static site
cp index.html dist/
cp -r css dist/
cp -r js dist/
cp -r images dist/

# Copy any additional files needed for deployment
if [ -f "CNAME" ]; then
  cp CNAME dist/
fi

echo "Deployment files copied to dist directory successfully!"
echo "Your website is now ready to be served from the dist directory."