# Quick Start: Deploy to GitHub Pages with Subdomain

## 🚀 Quick Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Configure for GitHub Pages"
git remote add origin https://github.com/YOUR_USERNAME/amogha-website.git
git push -u origin main
```

### 2. Enable GitHub Pages
- Go to repository → **Settings** → **Pages**
- **Source**: Select `GitHub Actions`
- **Custom domain**: Enter `amogha.syrez.co.in` (save this for later)

### 3. Set Environment Variable
- Repository → **Settings** → **Secrets and variables** → **Actions**
- **New repository secret**:
  - Name: `NEXT_PUBLIC_SITE_URL`
  - Value: `https://amogha.syrez.co.in`

### 4. Configure GoDaddy DNS

**Option 1: CNAME (Recommended)**
```
Type: CNAME
Name: amogha
Value: YOUR_USERNAME.github.io
TTL: 600
```

**Option 2: A Records (If CNAME doesn't work)**
Add 4 A records with these IPs:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

### 5. Wait & Verify
- Wait 1-2 hours for DNS propagation
- Visit: `https://amogha.syrez.co.in`
- Check deployment in **Actions** tab

## 📝 Important Notes

1. **Repository Name Matters**: 
   - If repo is `amogha-website`, URL will be `https://YOUR_USERNAME.github.io/amogha-website/`
   - To avoid subpath, name repo `amogha.syrez.co.in` (GitHub allows dots)

2. **Base Path**: If you need a subpath, add to `next.config.js`:
   ```js
   basePath: '/amogha-website',
   ```

3. **Automatic Deployments**: Every push to `main` auto-deploys

## 🔍 Troubleshooting

- **404 errors**: Check `trailingSlash: true` in `next.config.js` ✅
- **Images not loading**: `unoptimized: true` is set ✅
- **DNS not working**: Wait 24-48 hours, verify records in GoDaddy
- **Build fails**: Check Actions tab for errors

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

