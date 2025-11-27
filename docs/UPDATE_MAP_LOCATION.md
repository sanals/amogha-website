# How to Update Map Location and Find Map ID

## Part 1: Update the Map Location

### Step 1: Find Your Clinic's Coordinates

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your clinic's address or location
3. **Right-click** on the exact location where you want the marker
4. Click on the **coordinates** that appear (they'll be in decimal format like `12.9716, 77.5946`)
5. The coordinates will be copied to your clipboard

**Alternative method:**
- Search for your address
- Look at the URL - it will contain coordinates like `@12.9716,77.5946`
- Copy the two numbers (latitude and longitude)

### Step 2: Update the Coordinates in Code

1. Open `src/theme/constants.ts`
2. Find the `CONTACT_INFO` object
3. Update the `coordinates` object with your clinic's location:

```typescript
coordinates: {
  lat: 12.9716, // Replace with your clinic's latitude
  lng: 77.5946  // Replace with your clinic's longitude
}
```

**Example:**
If your clinic is at "123 Main Street, Bangalore", and you get coordinates `12.9352, 77.6245`, update it to:

```typescript
coordinates: {
  lat: 12.9352,
  lng: 77.6245
}
```

### Step 3: Verify the Location

1. Save the file
2. Restart your dev server (`npm run dev`)
3. Go to `/contact` page
4. Check if the map shows the correct location
5. The marker should be at your clinic's address

---

## Part 2: Find Your Google Maps Map ID

If you've already created a Map ID but forgot it, here's how to find it:

### Method 1: Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project (the one where you created the Map ID)
3. Go to **APIs & Services** → **Maps JavaScript API**
4. Click on the **Map IDs** tab
5. You'll see a list of all your Map IDs
6. Copy the **Map ID** (it looks like: `abc123def456` or `1234567890abcdef`)

### Method 2: If You Can't Find It

If you can't find your Map ID, you can create a new one:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project
3. Go to **APIs & Services** → **Maps JavaScript API**
4. Click on the **Map IDs** tab
5. Click **Create Map ID**
6. Fill in:
   - **Map ID name**: `AMOGHA Clinic Map` (or any name you prefer)
   - **Map type**: Select **JavaScript** → **Vector**
7. Click **Create**
8. Copy the **Map ID** that appears

### Method 3: Check Your Existing Apps Script or Code

If you've used the Map ID before:
- Check your `.env.local` file (if you have one locally)
- Check your GitHub Secrets (Settings → Secrets and variables → Actions)
- Check any documentation or notes you might have saved

---

## Part 3: Update Environment Variables

### For Local Development

Update your `.env.local` file:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID=your_map_id_here
```

### For GitHub Deployment

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Find or add `NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID`
4. Update it with your Map ID
5. The next deployment will use the new Map ID

---

## Quick Reference: Coordinate Format

- **Latitude (lat)**: North/South position (-90 to 90)
  - Positive = North of equator
  - Negative = South of equator
- **Longitude (lng)**: East/West position (-180 to 180)
  - Positive = East of Prime Meridian
  - Negative = West of Prime Meridian

**For India/Bangalore area:**
- Latitude: Usually around `12.9xxx` to `13.0xxx`
- Longitude: Usually around `77.5xxx` to `77.6xxx`

---

## Testing Your Changes

1. **Local Testing:**
   - Update coordinates in `constants.ts`
   - Save and restart dev server
   - Visit `/contact` page
   - Verify map shows correct location

2. **Production Testing:**
   - Push changes to GitHub
   - After deployment, visit your live site
   - Check `/contact` page
   - Verify map location is correct

---

## Troubleshooting

### Map Still Shows Wrong Location

- Clear browser cache
- Hard refresh (Ctrl+F5 or Cmd+Shift+R)
- Check if coordinates are correct (verify on Google Maps)
- Ensure you saved the file and restarted the server

### Map ID Not Working

- Verify the Map ID is correct (no extra spaces)
- Check if Map ID exists in Google Cloud Console
- Ensure Map ID is for the correct project
- Try creating a new Map ID if old one doesn't work

---

## Need Help Finding Coordinates?

If you're having trouble finding coordinates:
1. Use Google Maps search for your address
2. The coordinates appear in the URL after the `@` symbol
3. Or use a tool like [LatLong.net](https://www.latlong.net/) to search by address

