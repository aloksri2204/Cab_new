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
- Google Maps JavaScript API

## Setting Up Google Maps API

To make the interactive map work on your website without hardcoding your API key:

1. **Get a Google Maps API Key**:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Navigate to "APIs & Services" > "Library"
   - Search for and enable "Maps JavaScript API"
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy your new API key

2. **Add the API Key to the Configuration File**:
   - Edit the file `js/config.js`
   - Add your API key to the configuration:
   ```javascript
   const CONFIG = {
     // Replace this with your actual Google Maps API key
     GOOGLE_MAPS_API_KEY: "YOUR_ACTUAL_API_KEY",
     WEBSITE_VERSION: "1.0.0"
   };
   ```
   - Save the file (this file is gitignored and won't be committed to the repository)

3. **Secure Your API Key** (Important for Production):
   - Go back to the Google Cloud Console
   - In the Credentials section, find your API key and click "Edit"
   - Under "Application restrictions," select "HTTP referrers"
   - Add your domain(s) where the website will be hosted (e.g., `*.yourdomain.com/*`)
   - Click "Save"

4. **For New Installations**:
   - The repository includes `js/config.example.js` as a template
   - Copy it to create your own configuration:
   ```bash
   cp js/config.example.js js/config.js
   ```
   - Then edit `js/config.js` with your API key

With this approach, your API key is kept separate from the main codebase and won't be committed to version control. The website will automatically load Google Maps with your key from the configuration file.