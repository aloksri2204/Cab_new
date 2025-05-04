# AkhileshCab - Varanasi Cab Service

A static website for a localized cab service in Varanasi, India, offering transportation solutions with a mobile-first digital experience for local commuters and tourists.

## Project Structure

This is a simple static website with the following structure:

```
.
├── index.html          # Main HTML page
├── css/                # CSS styles
│   └── styles.css      # Main stylesheet
├── js/                 # JavaScript files
│   └── script.js       # Main JavaScript functionality
├── images/             # Image assets
│   ├── car-placeholder.svg
│   └── map-placeholder.svg
├── static-serve.sh     # Script to run local development server
├── deploy.sh           # Script to prepare files for deployment
└── deploy-to-github.sh # Script to deploy to GitHub Pages
```

## Running Locally

To run the website locally, you can use the included Python HTTP server script:

```bash
# Make the script executable if needed
chmod +x static-serve.sh

# Run the local server
./static-serve.sh
```

This will start a server at http://localhost:8080 where you can view the website.

## Deployment

This website is designed to be deployed to GitHub Pages as a static site. To deploy:

1. Review the instructions in `GITHUB_PAGES_DEPLOYMENT.md`
2. Run the deployment script:

```bash
./deploy-to-github.sh
```

## Features

- Responsive design for mobile and desktop
- Booking form for cab services
- Pricing information in Indian Rupee (₹)
- Location-specific details relevant to Varanasi
- Interactive elements for user engagement

## Technology

- HTML5
- CSS3
- JavaScript
- SVG for graphics