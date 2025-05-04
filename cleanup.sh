#!/bin/bash
# Script to clean up the project and keep only essential files for the static site

echo "Cleaning up the project and keeping only essential files..."

# Create a backup directory for items we're removing
mkdir -p backup

# List of essential files/directories we want to keep
KEEP_LIST=(
  "index.html"
  "css"
  "js"
  "images"
  "static-serve.sh" 
  "deploy.sh"
  "deploy-to-github.sh"
  "GITHUB_PAGES_DEPLOYMENT.md"
  "README.md"
  "CNAME"
  ".git"
  ".github"
  "cleanup.sh"
)

# Backup and remove everything except the essential files
find . -maxdepth 1 -not -path "./backup" -not -path "." | while read file; do
  base_name=$(basename "$file")
  keep=false
  
  for keep_item in "${KEEP_LIST[@]}"; do
    if [ "$base_name" == "$keep_item" ]; then
      keep=true
      break
    fi
  done
  
  if [ "$keep" = false ]; then
    echo "Moving $file to backup/"
    mv "$file" backup/ 2>/dev/null || true
  fi
done

echo "Cleanup complete! Unnecessary files have been moved to the backup directory."
echo ""
echo "To run the site locally:"
echo "1. Make sure the static-serve.sh script is executable: chmod +x static-serve.sh"
echo "2. Run the script: ./static-serve.sh"
echo "3. Open your browser to: http://localhost:8080"
echo ""
echo "For deployment to GitHub Pages:"
echo "1. Review the GITHUB_PAGES_DEPLOYMENT.md file for instructions"
echo "2. Run: ./deploy-to-github.sh"