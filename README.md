# AkhileshCab - Varanasi Cab Service

This is a static website for AkhileshCab, a cab service operating in Varanasi, India. The website is built using pure HTML, CSS, and JavaScript for easy hosting on GitHub Pages or any static site hosting service.

## Project Structure

```
akhileshcab/
├── index.html                 # Main HTML file
├── css/                       # CSS styles
│   └── styles.css             # Main stylesheet
├── js/                        # JavaScript files
│   └── script.js              # Main JavaScript file
├── images/                    # Image assets
│   ├── car-placeholder.svg    # Placeholder for car image
│   └── map-placeholder.svg    # Placeholder for map
└── CNAME                      # Custom domain configuration
```

## Features

- Responsive design for mobile, tablet, and desktop
- Easy booking form that sends emails
- Service pricing information
- About section
- Vehicle information
- Service area map
- Contact form

## How to View Locally

Simply open the `index.html` file in your web browser:

```
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

## Deployment

This site is designed to be deployed to GitHub Pages:

1. Push this repository to GitHub
2. Go to Settings > Pages
3. Set the source to the branch containing these files
4. The site will be published at your GitHub Pages URL

## Custom Domain

To use a custom domain:

1. Ensure your CNAME file contains your domain name
2. Add the following DNS records at your domain registrar:
   - A records pointing to GitHub Pages IP addresses
   - CNAME record for 'www' pointing to your GitHub Pages URL

## Credits

- All content is fictional and created for demonstration purposes
- SVG placeholders are generated to represent actual images

## License

This project is available for use under the MIT License.