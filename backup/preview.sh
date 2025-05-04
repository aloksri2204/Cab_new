#!/bin/bash
# Simple script to preview the static HTML site

echo "Starting HTTP server to preview the HTML site..."
echo "View the site at http://localhost:8000"
echo "Press Ctrl+C to stop the server"

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
# Check if Python 2 is available
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer 8000
# Fallback to static preview
else
    echo "Python not found. Opening index.html directly instead..."
    if [[ "$OSTYPE" == "darwin"* ]]; then
        open index.html
    elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
        start index.html
    else
        xdg-open index.html
    fi
fi