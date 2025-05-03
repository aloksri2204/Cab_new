#!/bin/bash
# Simple deployment script for AkhileshCab

echo "Creating minimal dist directory with index.html"
mkdir -p dist
cp -r simple-site/public/* dist/

echo "Deployment files copied to dist directory successfully!"
echo "Your website is now ready to be served from the dist directory."