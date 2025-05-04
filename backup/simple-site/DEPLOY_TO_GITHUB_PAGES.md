# Deploying AkhileshCab Website to GitHub Pages

This guide explains how to deploy the AkhileshCab website to GitHub Pages, which is a free hosting service provided by GitHub.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Basic knowledge of Git commands

## Step 1: Create a GitHub Repository

1. Log in to your GitHub account
2. Click on the "+" icon in the upper right corner and select "New repository"
3. Name your repository (e.g., "akhileshcab-website")
4. Make it public
5. Click "Create repository"

## Step 2: Prepare Your Local Files

Since GitHub Pages only serves static content, we need to make sure our website works without server-side code:

1. Only include the contents of the `public` folder for deployment
2. The forms in the website have been modified to handle submissions without a server

## Step 3: Initialize Git and Push to GitHub

Open a terminal, navigate to the `simple-site/public` directory, and run the following commands:

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit for GitHub Pages"

# Connect to your GitHub repository (replace USERNAME and REPO_NAME with your GitHub username and repository name)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Push to GitHub
git push -u origin main
```

## Step 4: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. In the "Source" dropdown, select "main branch" (or "master branch" if that's what you used)
5. Click "Save"

## Step 5: Access Your Website

After a few minutes, your website will be available at:
`https://USERNAME.github.io/REPO_NAME/`

## Important Notes About Static Deployment

Since GitHub Pages only supports static websites, there are some limitations:

1. **Form Submissions**: The booking and contact forms have been modified to use a third-party service (like Formspree) or to open the user's email client.
2. **No Server-Side Logic**: Any functionality that required the Express server has been modified or removed.
3. **File Paths**: All paths in the HTML/CSS/JS files use relative paths.

## Troubleshooting

If your website doesn't appear:
1. Make sure the repository is public
2. Check that the GitHub Pages source branch is correctly set
3. Wait a few minutes, as it can take time for changes to propagate

For any issues with forms or functionality, you may need to use a third-party service like Formspree, Netlify Forms, or Firebase.