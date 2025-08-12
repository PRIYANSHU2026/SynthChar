# Netlify Deployment Guide for SynthChar

## Deployment Steps

1. **Build the Project**
   ```bash
   ./prepare-netlify.sh
   ```
   This script will:
   - Build the project using Next.js
   - Copy the _redirects file to the out directory
   - Create a zip file of the out directory

2. **Deploy to Netlify**
   - Go to [Netlify](https://app.netlify.com/)
   - Drag and drop the `netlify-deploy.zip` file to the Netlify dashboard
   - Wait for the deployment to complete

3. **Verify Deployment**
   - Once deployed, Netlify will provide a URL (e.g., https://sparkling-bubblegum-0f1546.netlify.app)
   - Visit the URL to verify that the deployment was successful
   - You can also check the test page at `/test.html` to verify that routing is working correctly

## Troubleshooting

If you encounter a "Page not found" error:

1. **Check _redirects File**
   - Ensure that the `_redirects` file is in the root of the deployed site
   - The file should contain: `/* /index.html 200`

2. **Check netlify.toml Configuration**
   - Ensure that the `netlify.toml` file has the correct redirects configuration

3. **Check Build Output**
   - Ensure that the `out` directory contains all the necessary files
   - The `index.html` file should be in the root of the `out` directory

4. **Clear Cache and Try Again**
   - Sometimes Netlify caches old deployments
   - Try clearing your browser cache or using incognito mode

## Custom Domain Setup

For custom domain setup, refer to the [Custom Domain Setup Guide](netlify/custom-domain.md).