# Setting Up Environment Variables in GitHub

Since `.env` files are not pushed to Git (for security), you need to configure environment variables in GitHub for your deployments.

## Method 1: GitHub Repository Secrets (Recommended)

This is the method used by your GitHub Actions workflow.

### Step 1: Add Secrets to Your GitHub Repository

1. Go to your GitHub repository on GitHub.com
2. Click **Settings** (top menu bar)
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Add each environment variable one by one:

#### Add Contact Form Script URL:
- **Name**: `NEXT_PUBLIC_CONTACT_SCRIPT_URL`
- **Secret**: Paste your Google Apps Script URL (e.g., `https://script.google.com/macros/s/.../exec`)
- Click **Add secret**

#### Add Booking Form Script URL:
- **Name**: `NEXT_PUBLIC_BOOKING_SCRIPT_URL`
- **Secret**: Paste your Google Apps Script URL
- Click **Add secret**

#### Add Google Maps API Key (if needed):
- **Name**: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- **Secret**: Paste your Google Maps API key
- Click **Add secret**

#### Add Site URL (if not already set):
- **Name**: `NEXT_PUBLIC_SITE_URL`
- **Secret**: `https://amogha.syrez.co.in`
- Click **Add secret**

### Step 2: Verify Your Workflow

Your `.github/workflows/deploy.yml` file should already be configured to use these secrets. The workflow will automatically use them during the build process.

### Step 3: Test the Deployment

1. Push any change to your `main` branch
2. GitHub Actions will automatically build and deploy
3. Check the Actions tab to see if the build succeeded
4. Test your forms on the live site

---

## Method 2: Environment Variables in GitHub Pages Settings

**Note**: This method is less secure and not recommended, but can be used as a fallback.

1. Go to your repository → **Settings**
2. Scroll down to **Pages** section
3. Look for environment variables section (if available)
4. Add your variables there

**However**, GitHub Pages doesn't directly support environment variables for static sites. The GitHub Actions method (Method 1) is the correct approach.

---

## Local Development Setup

For local development, create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_SITE_URL=https://amogha.syrez.co.in
NEXT_PUBLIC_CONTACT_SCRIPT_URL=https://script.google.com/macros/s/YOUR_CONTACT_SCRIPT_ID/exec
NEXT_PUBLIC_BOOKING_SCRIPT_URL=https://script.google.com/macros/s/YOUR_BOOKING_SCRIPT_ID/exec
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

**Important**: 
- `.env.local` is already in `.gitignore`, so it won't be committed
- Never commit `.env` files to Git
- Use different script URLs for testing vs production if needed

---

## Troubleshooting

### Problem: Environment variables not working after deployment

**Solution:**
1. Verify secrets are added correctly in GitHub:
   - Go to Settings → Secrets and variables → Actions
   - Check that all secrets are listed
2. Check the workflow file:
   - Ensure `.github/workflows/deploy.yml` references the secrets correctly
3. Check build logs:
   - Go to Actions tab → Latest workflow run
   - Check if there are any errors about missing environment variables

### Problem: Forms not submitting on live site

**Solution:**
1. Check browser console (F12) for errors
2. Verify the script URLs are correct in GitHub Secrets
3. Test the Google Apps Script URLs directly in a browser
4. Check Google Apps Script execution logs

### Problem: "Form is not configured" error

**Solution:**
- This means the environment variable is not set
- Add the secret to GitHub repository settings
- Redeploy the site

---

## Security Best Practices

1. ✅ **Do**: Use GitHub Secrets for sensitive data
2. ✅ **Do**: Keep `.env.local` in `.gitignore`
3. ✅ **Do**: Use different URLs/keys for dev and production
4. ❌ **Don't**: Commit `.env` files to Git
5. ❌ **Don't**: Share secrets in public channels
6. ❌ **Don't**: Hardcode secrets in your code

---

## Quick Checklist

- [ ] Added `NEXT_PUBLIC_CONTACT_SCRIPT_URL` to GitHub Secrets
- [ ] Added `NEXT_PUBLIC_BOOKING_SCRIPT_URL` to GitHub Secrets
- [ ] Added `NEXT_PUBLIC_SITE_URL` to GitHub Secrets (if needed)
- [ ] Added `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` to GitHub Secrets (if needed)
- [ ] Created `.env.local` for local development
- [ ] Tested deployment and verified forms work

---

## Need Help?

If you're still having issues:
1. Check the GitHub Actions logs for errors
2. Verify all secrets are spelled correctly (case-sensitive)
3. Ensure the workflow file is in `.github/workflows/` directory
4. Make sure you're pushing to the `main` branch (or the branch specified in the workflow)

