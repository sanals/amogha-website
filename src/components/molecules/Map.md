# Map Component Documentation

The `Map` component provides an easy way to add Google Maps to any page of the AMOGHA website.

## Usage

```tsx
import { Map } from '../components/molecules/Map';

// Basic usage
<Map />

// With custom properties
<Map 
  width="100%" 
  height={400} 
  center={{ lat: 12.9716, lng: 77.5946 }}
  zoom={15}
  showMarker={true}
  apiKey="YOUR_GOOGLE_MAPS_API_KEY"
/>
```

## API Key Setup

For security reasons, it's recommended to store your Google Maps API key in environment variables:

1. Create a `.env` file in the root directory of your project:
   ```
   VITE_GOOGLE_MAPS_API_KEY=YOUR_API_KEY_HERE
   ```

2. Update the Map component in `src/components/molecules/Map.tsx`:
   ```tsx
   apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
   ```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `className` | string | `''` | Additional CSS classes to apply to the map container |
| `width` | string or number | `'100%'` | Width of the map |
| `height` | string or number | `400` | Height of the map in pixels |
| `center` | { lat: number, lng: number } | `{ lat: 12.9716, lng: 77.5946 }` | Center coordinates of the map (default: Bangalore) |
| `zoom` | number | `15` | Zoom level (1-20) |
| `showMarker` | boolean | `true` | Whether to show a marker at the center |
| `apiKey` | string | `'YOUR_GOOGLE_MAPS_API_KEY'` | Google Maps API key |

## Getting a Google Maps API Key

1. Go to the [Google Maps Platform](https://console.cloud.google.com/google/maps-apis/)
2. Create a new project or select an existing one
3. Enable the "Maps JavaScript API"
4. Create an API key in the "Credentials" section
5. Restrict the API key to your domain for security

## Testing

Use the `/map-test` route to test your Google Maps integration and API key. 