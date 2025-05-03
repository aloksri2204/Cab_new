#!/bin/bash
# Script to build and prepare files for GitHub Pages deployment
# This script addresses the ~and~ URL issue directly

# Build the project
echo "Building the project..."
npm run build

# Prepare for GitHub Pages
echo "Preparing files for GitHub Pages..."

# Copy special files to dist
echo "Copying special files..."
cp client/public/404.html dist/
cp client/public/index-ghpages.html dist/

# Create .nojekyll file
echo "Creating .nojekyll file..."
touch dist/.nojekyll

# Create custom router script
echo "Creating hash router script..."
cat > dist/hash-router.js << 'EOF'
// This script prevents the ~and~ issue in URLs
document.addEventListener('DOMContentLoaded', function() {
  // Intercept all link clicks
  document.body.addEventListener('click', function(e) {
    // Find closest parent anchor tag
    let target = e.target;
    while (target && target.tagName !== 'A') {
      target = target.parentElement;
      if (!target) return;
    }
    
    // Only process internal links
    if (target && target.hostname === window.location.hostname) {
      e.preventDefault();
      
      // Get the href attribute
      const href = target.getAttribute('href');
      
      // If it's an anchor/hash link like #services
      if (href.startsWith('#')) {
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // For other internal links, use direct page navigation without hash
        window.location.href = href;
      }
    }
  });
});
EOF

# Inject router script into index.html
echo "Modifying index.html..."
if [[ "$OSTYPE" == "darwin"* ]]; then
  # macOS version
  sed -i '' -e '/<\/head>/i\
  <script src="./hash-router.js"></script>' dist/index.html
else
  # Linux version
  sed -i -e '/<\/head>/i\
  <script src="./hash-router.js"></script>' dist/index.html
fi

# Fix asset paths if needed
echo "Fixing asset paths..."
if [ -d "dist/assets" ]; then
  if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS version
    find dist -type f -name "*.html" -exec sed -i '' 's|="/assets/|="./assets/|g' {} \;
    find dist -type f -name "*.js" -exec sed -i '' 's|="/assets/|="./assets/|g' {} \;
    find dist -type f -name "*.css" -exec sed -i '' 's|=/assets/|=./assets/|g' {} \;
  else
    # Linux version
    find dist -type f -name "*.html" -exec sed -i 's|="/assets/|="./assets/|g' {} \;
    find dist -type f -name "*.js" -exec sed -i 's|="/assets/|="./assets/|g' {} \;
    find dist -type f -name "*.css" -exec sed -i 's|=/assets/|=./assets/|g' {} \;
  fi
fi

echo "Build completed successfully!"
echo "To deploy to GitHub Pages manually:"
echo "1. cd dist"
echo "2. git init"
echo "3. git add ."
echo "4. git commit -m \"Deploy to GitHub Pages\""
echo "5. git branch -M gh-pages"
echo "6. git remote add origin https://github.com/aloksri2204/Cab_Akhilesh.git"
echo "7. git push -u origin gh-pages -f"
echo "8. Set up GitHub Pages to use the gh-pages branch in your repository settings"