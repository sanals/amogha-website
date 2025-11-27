# Deployment Guide: GitHub Pages + GoDaddy Domain

This guide will help you deploy your AMOGHA website to GitHub Pages and connect it to your GoDaddy domain `syrez.co.in` using a subdomain.

## Prerequisites

- GitHub account
- GoDaddy account with domain `syrez.co.in`
- This repository pushed to GitHub

## Step 1: Configure Next.js for Static Export

✅ **Already Done!** The project is configured for static export:
- `next.config.js` has `output: 'export'` enabled
- Images are set to `unoptimized: true` for static export

## Step 2: Set Up GitHub Repository

1. **Create a new repository on GitHub** (if not already created):
   - Go to https://github.com/new
   - Name it: `amogha-website` (or your preferred name)
   - Make it **Public** (required for free GitHub Pages)
   - Don't initialize with README (you already have files)

2. **Push your code to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/amogha-website.git
   git branch -M main
   git push -u origin main
   ```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select:
   - **Source**: `GitHub Actions`
4. Save the settings

## Step 4: Configure Environment Variables

1. In your GitHub repository, go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add:
   - **Name**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: `https://amogha.syrez.co.in` (or your chosen subdomain)
4. Click **Add secret**

## Step 5: Set Up GoDaddy DNS for Subdomain

Since your main domain `syrez.co.in` is already used, we'll set up a subdomain like `amogha.syrez.co.in`.

### Option A: Using CNAME (Recommended)

1. **Log in to GoDaddy**
2. Go to **My Products** → **DNS** (or **Domains** → **DNS**)
3. Find your domain `syrez.co.in`
4. Click **Manage DNS** or **DNS Records**

5. **Add a new CNAME record**:
   - **Type**: CNAME
   - **Name**: `amogha` (this creates `amogha.syrez.co.in`)
   - **Value**: `YOUR_USERNAME.github.io` (replace YOUR_USERNAME with your GitHub username)
   - **TTL**: 600 (or default)
   - Click **Save**

   Example:
   ```
   Type: CNAME
   Name: amogha
   Value: johndoe.github.io
   TTL: 600
   ```

6. **Wait for DNS propagation** (can take 5 minutes to 48 hours, usually 1-2 hours)

### Option B: Using A Record (Alternative)

If CNAME doesn't work, use A records pointing to GitHub Pages IPs:

1. **Add 4 A records** with these IPs:
   ```
   Type: A
   Name: amogha
   Value: 185.199.108.153
   TTL: 600

   Type: A
   Name: amogha
   Value: 185.199.109.153
   TTL: 600

   Type: A
   Name: amogha
   Value: 185.199.110.153
   TTL: 600

   Type: A
   Name: amogha
   Value: 185.199.111.153
   TTL: 600
   ```

## Step 6: Update GitHub Pages Custom Domain

1. After DNS is configured, go to your GitHub repository
2. **Settings** → **Pages**
3. Under **Custom domain**, enter: `amogha.syrez.co.in`
4. Check **Enforce HTTPS** (will be available after DNS propagates)
5. Save

## Step 7: Update Your Code

Update the base URL in your code to use the subdomain:

1. **Update `.env` file** (for local development):
   ```env
   NEXT_PUBLIC_SITE_URL=https://amogha.syrez.co.in
   ```

2. **The GitHub Actions workflow** already uses this URL during build

3. **Update `app/sitemap.ts` and `app/robots.ts`** - They already use `process.env.NEXT_PUBLIC_SITE_URL`

## Step 8: Deploy

1. **Commit and push your changes**:
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

2. **GitHub Actions will automatically**:
   - Build your Next.js site
   - Export it as static files
   - Deploy to GitHub Pages

3. **Check deployment status**:
   - Go to **Actions** tab in your GitHub repository
   - You'll see the deployment workflow running
   - Wait for it to complete (usually 2-5 minutes)

## Step 9: Verify Deployment

1. **Check GitHub Pages URL**: `https://YOUR_USERNAME.github.io/amogha-website`
   - Note: If your repo name is `amogha-website`, the URL will be `/amogha-website`
   - To avoid the subpath, name your repo `amogha.syrez.co.in` or use a custom domain

2. **Check custom domain**: `https://amogha.syrez.co.in`
   - May take a few hours for DNS to fully propagate

## Troubleshooting

### Issue: 404 errors on pages
**Solution**: Make sure `trailingSlash: true` is set in `next.config.js` (already done)

### Issue: Images not loading
**Solution**: Images are set to `unoptimized: true` for static export (already configured)

### Issue: DNS not resolving
**Solution**: 
- Wait 24-48 hours for full DNS propagation
- Use a DNS checker: https://dnschecker.org/
- Verify CNAME/A records are correct in GoDaddy

### Issue: GitHub Actions failing
**Solution**:
- Check the **Actions** tab for error messages
- Ensure `NEXT_PUBLIC_SITE_URL` secret is set
- Verify `package.json` scripts are correct

### Issue: Custom domain not working
**Solution**:
- Wait for DNS propagation
- Verify CNAME/A records in GoDaddy
- Check GitHub Pages settings show the custom domain
- Try clearing browser cache

## Important Notes

1. **Repository Name**: If you want your site at `https://amogha.syrez.co.in` without a subpath, name your repository exactly `amogha.syrez.co.in` (GitHub allows this)

2. **Base Path**: If your repo is named differently, you may need to add `basePath` to `next.config.js`:
   ```js
   basePath: '/amogha-website', // Only if needed
   ```

3. **Environment Variables**: The `NEXT_PUBLIC_SITE_URL` is used in:
   - Sitemap generation
   - Robots.txt
   - Structured data (SEO)
   - Canonical URLs

4. **Automatic Deployments**: Every push to `main` branch will trigger a new deployment

## Next Steps After Deployment

1. ✅ Test all pages work correctly
2. ✅ Verify images load properly
3. ✅ Check SEO (sitemap, robots.txt)
4. ✅ Test on mobile devices
5. ✅ Set up Google Analytics (if needed)
6. ✅ Submit sitemap to Google Search Console

## Support

If you encounter issues:
- Check GitHub Actions logs
- Verify DNS records in GoDaddy
- Test DNS propagation with online tools
- Review Next.js static export documentation

