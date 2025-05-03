# Deploying AkhileshCab Simple Site to GitHub Pages

This is a simplified version of the AkhileshCab website using plain HTML, CSS, and JavaScript with a Node.js backend for local development. To deploy this site to GitHub Pages, follow these instructions:

## Local Development

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Visit http://localhost:3000 in your browser

## Deploying to GitHub Pages

Since GitHub Pages only supports static sites (not Node.js servers), we'll need to deploy just the frontend part:

1. Create a GitHub repository (e.g., "Cab_Akhilesh_Simple")

2. Initialize git in the project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/Cab_Akhilesh_Simple.git
   git push -u origin main
   ```

3. Create a special branch for GitHub Pages:
   ```bash
   # Create and switch to a new orphan branch (no history)
   git checkout --orphan gh-pages
   
   # Remove everything except the public folder
   find . -maxdepth 1 ! -name 'public' ! -name '.git' ! -name '.' -exec rm -rf {} \;
   
   # Move everything from public to root
   mv public/* .
   rm -rf public
   
   # Create a .nojekyll file to disable Jekyll processing
   touch .nojekyll
   
   # Stage, commit, and push the changes
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push -u origin gh-pages --force
   ```

4. Configure GitHub Pages:
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "GitHub Pages" section
   - Set Source to "Deploy from a branch"
   - Select "gh-pages" branch and "/ (root)" folder
   - Click "Save"

5. Your site will be available at https://your-username.github.io/Cab_Akhilesh_Simple/

## Important Notes

1. **For Form Submissions**: Since GitHub Pages doesn't support server-side functionality, the form submissions won't work on the deployed site. In a real-world scenario, you would need to:
   - Use a form submission service like Formspree
   - Create an API on a separate server to handle form submissions
   - Use serverless functions (like AWS Lambda or Netlify Functions)

2. **Updating the Site**: To update the site after making changes:
   - Make changes to the files in the main branch
   - Run the deployment process again to update the gh-pages branch

3. **Custom Domain**: To use a custom domain:
   - Add your domain in the GitHub Pages settings
   - Create a CNAME file in the root of the gh-pages branch with your domain name

4. **Testing**: Always test your site after deployment to ensure everything works as expected.

## Alternative Deployment Options

For a full-featured site with backend functionality, consider:

1. **Netlify**: Supports serverless functions
2. **Vercel**: Good for static sites with serverless APIs
3. **Heroku**: Supports Node.js applications
4. **Render**: Free tier available for Node.js apps