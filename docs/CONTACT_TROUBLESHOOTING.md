# Contact Section Troubleshooting Guide

This guide helps resolve common issues with the Contact section of the AMOGHA website, specifically related to the contact form and Google Maps integration.

## Google Maps Issues

### Map Not Displaying Correctly

If your Google Maps component shows "This page can't load Google Maps correctly" or a grey box:

1. **Check your API key**:
   - Ensure you have a valid Google Maps JavaScript API key
   - Verify the API key is enabled for the Maps JavaScript API
   - Check that billing is set up for your Google Cloud account

2. **Verify the API key implementation**:
   - Add a `.env` file to your project root with:
     ```
     VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
     ```
   - Or pass the key directly to the component:
     ```tsx
     <ContactSection googleMapsApiKey="your_actual_api_key_here" />
     ```

3. **Check domain restrictions**:
   - If you've restricted your API key to specific domains, ensure `localhost` is included for development
   - For production, add your actual domain to the allowed origins

4. **Test your API key**:
   - Visit `/map-test` in your application to test the API key
   - If the map displays there but not on the contact page, there might be an issue with the implementation

### Browser Console Errors

Check your browser's developer console for specific error messages:

- **"Google Maps JavaScript API error: MissingKeyMapError"**: Your API key is missing or invalid
- **"Google Maps JavaScript API error: RefererNotAllowedMapError"**: Your API key isn't allowed on this domain
- **"Google Maps JavaScript API error: InvalidKeyMapError"**: The API key is invalid

## Contact Form Issues

### Form Submission Not Working

If the contact form isn't working correctly:

1. **Check form validation**:
   - Open browser dev tools and check for console errors
   - Verify that all required fields have values

2. **Check form submission handler**:
   - In development, verify the form logs "Form submitted: [data]" to console
   - In production, ensure your backend endpoint for handling form submissions is correctly set up

3. **Style or UI Issues**:
   - If dark mode isn't rendering correctly, check that the ThemeContext is properly set up
   - For responsive layout issues, test on different device sizes

### Customizing the Form

To customize the contact form:

1. **Change form fields**:
   - Edit the `FormData` interface in `src/components/molecules/ContactForm.tsx`
   - Add or remove fields in the initial state and form JSX

2. **Modify validation**:
   - Update the `validateForm` function in `ContactForm.tsx`
   - Add custom validation rules for new fields

3. **Change the submission behavior**:
   - To send form data to a backend, use the `onSubmit` prop:
     ```tsx
     <ContactForm onSubmit={async (data) => {
       const response = await fetch('/api/contact', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(data)
       });
       return response.ok;
     }} />
     ```

## Adding Real Images

If you're having issues with images:

1. Follow the guide in `docs/IMAGE_GUIDE.md` to add real images
2. Make sure images are in the correct folders under `public/images/`
3. Use services like [TinyPNG](https://tinypng.com/) to optimize large images

## Environment Configuration

For proper API key management:

1. **Development**:
   - Create `.env.development` with:
     ```
     VITE_GOOGLE_MAPS_API_KEY=your_development_api_key
     ```

2. **Production**:
   - Create `.env.production` with:
     ```
     VITE_GOOGLE_MAPS_API_KEY=your_production_api_key
     ```

3. **Never commit API keys**:
   - Ensure `.env*` files are in your `.gitignore`
   - Use environment variables in your deployment platform (Vercel, Netlify, etc.)

## Further Assistance

If you continue experiencing issues:

1. Check the component documentation:
   - `src/components/molecules/Map.md`
   - `src/components/molecules/ContactForm.md`

2. Visit the Google Maps Platform documentation:
   - [Get Started with Google Maps Platform](https://developers.google.com/maps/get-started)
   - [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview) 