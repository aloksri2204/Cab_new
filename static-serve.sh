#!/bin/bash
# This script runs a Python HTTP server to serve the static HTML site
# for AkhileshCab's website

# Kill any existing Python server
pkill python || true

# Print a helpful message
echo "Starting static HTML server for AkhileshCab website..."
echo "The site is now accessible at the WebView URL"
echo "Press Ctrl+C to stop the server"

# Run the Python HTTP server
python -m http.server 8080