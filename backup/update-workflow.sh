#!/bin/bash
# Update the workflow to run the static HTML site preview

echo "Updating workflow to preview static HTML site..."

# Create or update the .replit file to serve static HTML
cat > .replit << EOL
run = "python3 -m http.server 8000"
hidden = [".config", "package-lock.json"]
EOL

# Create or update the replit.nix file if it exists
if [ -f "replit.nix" ]; then
  cat > replit.nix << EOL
{ pkgs }: {
  deps = [
    pkgs.python3
  ];
}
EOL
fi

echo "Workflow updated! You can now click the 'Run' button to preview the website."
echo "The site will be available at your Replit web address."