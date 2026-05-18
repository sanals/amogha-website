# Quick Start: Deploy to GitHub Pages with Subdomain

## 🚀 Quick Steps

### 1. Create Repository & Push Code
```bash
# Create new repository on GitHub first (via web interface)
# Then push your code:
git add .
git commit -m "Configure for GitHub Pages"
git remote add origin https://github.com/sanals/amogha-website.git
git push -u origin main
```

### 2. Enable GitHub Pages
- Go to your **AMOGHA repository** → **Settings** → **Pages**
- **Source**: Select `GitHub Actions`
- **Custom domain**: Enter `amogha.syrez.co.in`
- Check **Enforce HTTPS** (after DNS propagates)
- Save

### 3. Set Environment Variable
- In your **AMOGHA repository** → **Settings** → **Secrets and variables** → **Actions**
- **New repository secret**:
  - Name: `NEXT_PUBLIC_SITE_URL`
  - Value: `https://amogha.syrez.co.in`
- Click **Add secret**

### 4. DNS Configuration

✅ **Already Done!** Your DNS is already configured:
```
CNAME: amogha → sanals.github.io ✅
```

**No DNS changes needed!** The CNAME is correct. GitHub Pages will automatically route `amogha.syrez.co.in` to your AMOGHA repository once you configure the custom domain in Step 2.

### 5. Wait & Verify
- Check deployment status in **Actions** tab (should auto-deploy after push)
- Wait 1-2 hours for DNS/SSL certificate provisioning
- Visit: `https://amogha.syrez.co.in`
- Your site should be live! 🎉

## 📝 Important Notes

1. **Separate Repositories**: 
   - `syrez.co.in` → Your other repository (already set up)
   - `amogha.syrez.co.in` → AMOGHA repository (this one)
   - Both in same GitHub account (`sanals`), but different repos ✅

2. **Custom Domain**: 
   - Each repository can have its own custom domain
   - No base path needed - custom domain serves from root

3. **Automatic Deployments**: Every push to `main` auto-deploys

4. **DNS Already Done**: Your CNAME `amogha → sanals.github.io` is correct - no changes needed!

## 🔍 Troubleshooting

- **404 errors**: Check `trailingSlash: true` in `next.config.js` ✅
- **Images not loading**: `unoptimized: true` is set ✅
- **DNS not working**: Wait 24-48 hours, verify records in GoDaddy
- **Build fails**: Check Actions tab for errors

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

