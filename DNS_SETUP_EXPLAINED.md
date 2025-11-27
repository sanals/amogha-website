# DNS Setup Explanation for Your Configuration

## Your Current DNS Setup ✅

Looking at your DNS export, here's what you have:

```
Base Domain (syrez.co.in):
- A Records → GitHub Pages IPs (185.199.108.153, etc.)
- Points to: sanals.github.io (your main site)

Subdomain (amogha.syrez.co.in):
- CNAME: amogha → sanals.github.io ✅ (Already configured!)
```

## How This Works

### Main Site (`syrez.co.in`)
- Uses **A records** pointing directly to GitHub Pages IP addresses
- Serves content from your main repository at `sanals.github.io`
- This is your existing site

### AMOGHA Subdomain (`amogha.syrez.co.in`)
- Uses **CNAME** pointing to `sanals.github.io`
- Will serve content from a **different repository** (the AMOGHA website)
- GitHub Pages will route based on the custom domain you configure

## What You Need to Do

### Step 1: Create Separate Repository
Since your main domain already uses `sanals.github.io`, create a **new repository** for AMOGHA:

```bash
# Create new repository on GitHub (via web interface)
Repository name: amogha-website (or any name you prefer)
```

### Step 2: Push AMOGHA Code to New Repository
```bash
# In your local AMOGHA project
git remote add origin https://github.com/sanals/amogha-website.git
git push -u origin main
```

### Step 3: Configure GitHub Pages in New Repository
1. Go to the **new repository** (amogha-website)
2. **Settings** → **Pages**
3. **Source**: Select `GitHub Actions`
4. **Custom domain**: Enter `amogha.syrez.co.in`
5. Save

### Step 4: DNS is Already Done! ✅
Your CNAME record is already correct:
```
amogha → sanals.github.io
```

GitHub Pages will automatically:
- Detect the custom domain `amogha.syrez.co.in`
- Route it to the correct repository based on the custom domain setting
- Serve the AMOGHA website content

## Why This Works

1. **DNS Resolution**: When someone visits `amogha.syrez.co.in`:
   - DNS resolves `amogha` CNAME → `sanals.github.io`
   - Browser requests `sanals.github.io` with Host header `amogha.syrez.co.in`

2. **GitHub Pages Routing**: 
   - GitHub receives the request with `Host: amogha.syrez.co.in`
   - Checks which repository has this custom domain configured
   - Serves content from that repository

3. **Result**:
   - `syrez.co.in` → Main site repository
   - `amogha.syrez.co.in` → AMOGHA repository
   - Both work independently! ✅

## Important Notes

1. **Repository Names Don't Matter**: The CNAME points to `sanals.github.io`, but GitHub Pages uses the **custom domain** setting in each repository to route correctly.

2. **No DNS Changes Needed**: Your DNS is already perfect! The CNAME `amogha → sanals.github.io` is correct.

3. **Separate Repositories**: Each site needs its own repository:
   - Main site: One repository
   - AMOGHA site: Another repository

4. **Custom Domain Per Repository**: Each repository can have its own custom domain:
   - Main repo: `syrez.co.in`
   - AMOGHA repo: `amogha.syrez.co.in`

## Troubleshooting

### If `amogha.syrez.co.in` shows the main site:
- Check that you set the custom domain in the **AMOGHA repository** (not the main one)
- Wait for DNS propagation (can take up to 48 hours)
- Clear browser cache

### If you get 404 errors:
- Verify the repository has GitHub Pages enabled
- Check that the deployment workflow completed successfully
- Ensure `output: 'export'` is in `next.config.js`

### If DNS doesn't resolve:
- Your CNAME is already correct, so this shouldn't happen
- Use a DNS checker: https://dnschecker.org/
- Verify the CNAME record in GoDaddy matches: `amogha → sanals.github.io`

## Summary

✅ **Your DNS is already configured correctly!**
✅ **No DNS changes needed**
✅ **Just create a new repository and configure the custom domain**

The existing CNAME `amogha → sanals.github.io` will work perfectly once you:
1. Create the AMOGHA repository
2. Push your code
3. Set custom domain to `amogha.syrez.co.in` in that repository's settings

