# Google Maps API Setup Guide

This guide explains how to properly configure Google Maps for your AMOGHA website.

## Environment Variables Needed

You need **two** environment variables for Google Maps to work correctly:

1. **`NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`** - Your Google Maps API key (required)
2. **`NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID`** - Your Google Maps Map ID (required for AdvancedMarkerElement)

## Where the API Key is Used

The Google Maps API key is used in these locations:

1. **`src/components/molecules/Map.tsx`** (line 93)
   ```typescript
   apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY'
   ```

2. **`src/components/organisms/ContactSection.tsx`** (line 173)
   ```typescript
   apiKey={googleMapsApiKey || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY'}
   ```

3. **Map ID** is used in `src/components/molecules/Map.tsx` (line 142)
   ```typescript
   mapId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID || 'DEMO_MAP_ID'
   ```

## Step 1: Get Your Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Maps JavaScript API**:
   - Go to **APIs & Services** → **Library**
   - Search for "Maps JavaScript API"
   - Click **Enable**
4. Create an API Key:
   - Go to **APIs & Services** → **Credentials**
   - Click **Create Credentials** → **API Key**
   - Copy your API key

## Step 2: Create a Map ID (Required for AdvancedMarkerElement)

1. In Google Cloud Console, go to **APIs & Services** → **Maps JavaScript API**
2. Click on **Map IDs** tab
3. Click **Create Map ID**
4. Fill in:
   - **Map ID name**: `AMOGHA Clinic Map` (or any name)
   - **Map type**: Select **JavaScript** → **Vector**
5. Click **Create**
6. Copy the **Map ID** (it looks like: `abc123def456`)

## Step 3: Restrict Your API Key (Security)

1. Go to **APIs & Services** → **Credentials**
2. Click on your API key
3. Under **API restrictions**:
   - Select **Restrict key**
   - Check **Maps JavaScript API**
4. Under **Application restrictions**:
   - Select **HTTP referrers (web sites)**
   - Add your domains:
     - `localhost:*` (for development)
     - `amogha.syrez.co.in/*` (for production)
     - `*.syrez.co.in/*` (if using subdomains)
5. Click **Save**

## Step 4: Set Up Environment Variables

### For Local Development

Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID=your_map_id_here
```

### For GitHub Deployment

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Add these secrets:

   **Secret 1:**
   - **Name**: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
   - **Value**: Your Google Maps API key
   - Click **Add secret**

   **Secret 2:**
   - **Name**: `NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID`
   - **Value**: Your Google Maps Map ID
   - Click **Add secret**

## Step 5: Update GitHub Actions Workflow

The workflow file (`.github/workflows/deploy.yml`) should already include these variables. Verify it has:

```yaml
env:
  NEXT_PUBLIC_SITE_URL: https://amogha.syrez.co.in
  NEXT_PUBLIC_CONTACT_SCRIPT_URL: ${{ secrets.NEXT_PUBLIC_CONTACT_SCRIPT_URL }}
  NEXT_PUBLIC_BOOKING_SCRIPT_URL: ${{ secrets.NEXT_PUBLIC_BOOKING_SCRIPT_URL }}
  NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: ${{ secrets.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
  NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID: ${{ secrets.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID }}
```

## Step 6: Test Your Setup

1. **Local Testing:**
   - Start your dev server: `npm run dev`
   - Go to `/contact` page
   - Check if the map loads correctly
   - Open browser console (F12) and check for errors

2. **Test Page:**
   - Go to `/map-test` (if available)
   - Enter your API key and test

3. **Production Testing:**
   - After deployment, visit your live site
   - Go to the contact page
   - Verify the map displays correctly

## Troubleshooting

### Map Shows "This page can't load Google Maps correctly"

**Possible causes:**
1. **API key not set**: Check if `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` is in your `.env.local` or GitHub Secrets
2. **API key invalid**: Verify the key is correct in Google Cloud Console
3. **API not enabled**: Make sure "Maps JavaScript API" is enabled
4. **Billing not set up**: Google Maps requires a billing account (free tier available)

### Map Shows but No Marker Appears

**Possible causes:**
1. **Map ID not set**: Check if `NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID` is configured
2. **Map ID invalid**: Verify the Map ID in Google Cloud Console
3. **AdvancedMarkerElement issue**: Check browser console for errors

### Console Error: "RefererNotAllowedMapError"

**Solution:**
- Your API key is restricted and doesn't allow your domain
- Go to Google Cloud Console → Credentials → Your API Key
- Add your domain to "HTTP referrers" restrictions

### Console Error: "InvalidKeyMapError"

**Solution:**
- Your API key is incorrect or has been deleted
- Generate a new API key in Google Cloud Console
- Update it in your environment variables

## Quick Checklist

- [ ] Created Google Cloud project
- [ ] Enabled Maps JavaScript API
- [ ] Created API key
- [ ] Created Map ID
- [ ] Restricted API key to your domains
- [ ] Added `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` to `.env.local` (local) and GitHub Secrets (deployment)
- [ ] Added `NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID` to `.env.local` (local) and GitHub Secrets (deployment)
- [ ] Tested map on local development
- [ ] Tested map on production site

## Cost Information

Google Maps offers a **free tier**:
- $200 free credit per month
- Covers approximately 28,000 map loads per month
- After free tier, pay-as-you-go pricing applies

For a clinic website, you'll likely stay within the free tier.

## Need Help?

If you encounter issues:
1. Check browser console (F12) for specific error messages
2. Verify all environment variables are set correctly
3. Check Google Cloud Console for API usage and errors
4. Ensure billing is set up (even for free tier)

