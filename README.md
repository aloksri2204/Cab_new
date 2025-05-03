# AkhileshCab Website

A responsive website for a local cab service in Varanasi, India.

## Project Overview

This is a simplified version of the AkhileshCab website using Node.js, Express, HTML, CSS, and JavaScript. The website provides information about cab services in Varanasi, India, including booking options, pricing, and contact details.

## Features

- Responsive design for all device sizes
- Online booking form
- Service area map
- Pricing information
- Vehicle details
- Contact form
- About section

## Local Development

1. Install dependencies:
   ```bash
   cd simple-site
   npm install
   ```

2. Start the development server:
   ```bash
   cd simple-site
   npm run dev
   ```
   
   Alternatively, you can use the provided convenience script from the root directory:
   ```bash
   ./run-simple-site.sh
   ```

3. Visit http://localhost:3000 in your browser

## File Structure

```
simple-site/
├── public/             # Static assets
│   ├── css/            # CSS stylesheets
│   ├── js/             # JavaScript files
│   ├── images/         # Image assets
│   └── index.html      # Main HTML file
└── server/
    └── server.js       # Express server
```

## Deployment

For deployment instructions, see [DEPLOY_TO_GITHUB_PAGES.md](simple-site/DEPLOY_TO_GITHUB_PAGES.md).

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js
- Express

## Starting the Application

The application can be started in several ways:

1. Using the start.js script:
   ```bash
   node start.js
   ```

2. From the simple-site directory:
   ```bash
   cd simple-site
   npm start
   ```

3. Using the run-simple-site.sh script:
   ```bash
   ./run-simple-site.sh
   ```