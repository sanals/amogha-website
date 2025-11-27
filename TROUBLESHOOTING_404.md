# Troubleshooting 404 Error on amogha.syrez.co.in

## Current Status
- ✅ DNS check successful
- ✅ Custom domain configured: `amogha.syrez.co.in`
- ❌ Getting 404 error
- ⏳ HTTPS certificate pending (normal, takes 1-2 hours)

## Why You're Getting 404

The 404 error means **the site hasn't been deployed yet**. This happens when:
1. GitHub Actions workflow hasn't run
2. Workflow failed during build/deploy
3. No deployment has been created yet

## How to Fix

### Step 1: Check GitHub Actions Status

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. Look for "Deploy to GitHub Pages" workflow
4. Check if it has run and what the status is:
   - ✅ Green checkmark = Success (wait a few minutes for propagation)
   - ❌ Red X = Failed (check error messages)
   - ⏳ Yellow circle = Running (wait for it to complete)
   - No workflow = Needs to be triggered

### Step 2: If Workflow Hasn't Run

**Option A: Push a commit to trigger it**
```bash
# Make a small change to trigger the workflow
git add .
git commit -m "Trigger deployment"
git push origin main
```

**Option B: Manually trigger the workflow**
1. Go to **Actions** tab
2. Click "Deploy to GitHub Pages" in the left sidebar
3. Click "Run workflow" button (top right)
4. Select `main` branch
5. Click "Run workflow"

### Step 3: If Workflow Failed

Check the error logs:
1. Click on the failed workflow run
2. Expand the failed step
3. Look for error messages
4. Common issues:
   - Build errors (check Next.js build output)
   - Missing dependencies
   - Environment variable issues

### Step 4: Verify Deployment

After workflow completes successfully:
1. Go to **Settings** → **Pages**
2. You should see "Your site is live at..." message
3. Wait 5-10 minutes for GitHub to propagate
4. Try accessing `https://amogha.syrez.co.in` again

## About HTTPS Certificate

The "Enforce HTTPS" being unavailable is **normal**:
- GitHub needs to provision an SSL certificate
- This takes 1-2 hours after DNS is verified
- Once the certificate is ready, you can enable "Enforce HTTPS"
- Your site will work over HTTP in the meantime

## Quick Checklist

- [ ] Code pushed to GitHub?
- [ ] GitHub Actions workflow exists in `.github/workflows/deploy.yml`?
- [ ] Workflow has run at least once?
- [ ] Workflow completed successfully (green checkmark)?
- [ ] Waited 5-10 minutes after successful deployment?
- [ ] Checked Actions tab for any errors?

## Still Not Working?

If after checking all above, you still get 404:

1. **Verify the workflow file exists**:
   - Check `.github/workflows/deploy.yml` is in your repository
   - Make sure it's committed and pushed

2. **Check repository settings**:
   - **Settings** → **Pages** → **Source** should be `GitHub Actions`
   - Custom domain should be `amogha.syrez.co.in`

3. **Try accessing via GitHub Pages URL**:
   - `https://sanals.github.io/REPO_NAME/`
   - Replace REPO_NAME with your actual repository name
   - If this works, the issue is with custom domain routing

4. **Clear browser cache**:
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

