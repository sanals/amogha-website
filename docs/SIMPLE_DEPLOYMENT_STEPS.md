# Simple Deployment Steps for AMOGHA Website

## ✅ What's Already Done
- DNS configured: `amogha` CNAME → `sanals.github.io` ✅
- Next.js configured for static export ✅
- GitHub Actions workflow created ✅

## What You Need to Do

### Step 1: Create Repository on GitHub
1. Go to https://github.com/new
2. Repository name: `amogha-website` (or any name)
3. Make it **Public**
4. Don't initialize with README
5. Click **Create repository**

### Step 2: Push Your Code
```bash
# In your local project directory
git add .
git commit -m "Initial commit - ready for deployment"
git remote add origin https://github.com/sanals/amogha-website.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository → **Settings** → **Pages**
2. **Source**: Select `GitHub Actions`
3. **Custom domain**: Enter `amogha.syrez.co.in`
4. Check **Enforce HTTPS** (will enable after DNS/SSL is ready)
5. Click **Save**

### Step 4: Set Environment Variable
1. Repository → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. **Name**: `NEXT_PUBLIC_SITE_URL`
4. **Value**: `https://amogha.syrez.co.in`
5. Click **Add secret**

### Step 5: Wait for Deployment
1. Go to **Actions** tab in your repository
2. You'll see the deployment workflow running
3. Wait for it to complete (usually 2-5 minutes)
4. Check the deployment status - should show ✅ green checkmark

### Step 6: Verify
1. Wait 1-2 hours for SSL certificate provisioning
2. Visit: `https://amogha.syrez.co.in`
3. Your site should be live! 🎉

## Important Notes

- **Separate Repositories**: 
  - `syrez.co.in` → Your other repository
  - `amogha.syrez.co.in` → This AMOGHA repository
  - Both in same GitHub account, different repos ✅

- **DNS**: Already configured - no changes needed!

- **Automatic Deployments**: Every push to `main` branch will auto-deploy

- **Custom Domain**: Each repository has its own custom domain setting

## Troubleshooting

**If site doesn't load:**
- Check Actions tab for deployment errors
- Verify custom domain is set correctly
- Wait for SSL certificate (can take 1-2 hours)

**If you see 404 errors:**
- Ensure `output: 'export'` is in `next.config.js` ✅ (already done)
- Check that deployment workflow completed successfully

**If DNS doesn't work:**
- Your CNAME is already correct, so this shouldn't happen
- Verify in GoDaddy: `amogha` CNAME → `sanals.github.io`

## That's It!

Your DNS is already set up, so once you:
1. Create the repository
2. Push the code
3. Configure the custom domain

Everything should work automatically! 🚀

