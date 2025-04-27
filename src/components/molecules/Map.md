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

# Molecules Components Refactoring Guide

This document outlines refactoring opportunities and reusable patterns identified in the molecules components.

## Shared Style Constants

The following style constants have been created to promote consistency and reduce duplication:

### Card Styles (`src/theme/cardStyles.ts`)

```typescript
export const cardBase = 'bg-white dark:bg-neutral-dark rounded-lg shadow-md overflow-hidden transition-shadow duration-300';
export const cardHoverStyle = 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300';
export const cardImage = 'w-full h-full object-cover';
export const cardOverlayGradient = 'absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent';
```

### Badge Styles (`src/theme/badgeStyles.ts`)

```typescript
export const badgeBase = 'inline-block px-2 py-1 text-xs font-semibold rounded-full';
export const badgePrimary = 'bg-primary text-white';
export const badgeSecondary = 'bg-secondary text-white';
```

### Animation Variants (`src/theme/animationVariants.ts`)

These animation variants provide consistent animations across components.

## New Components

### Badge Component (`src/components/atoms/Badge.tsx`)

A reusable Badge component has been created for use in cards and lists:

```jsx
<Badge variant="primary-light" size="sm">
  {specialty}
</Badge>
```

## Refactoring Examples

### Updated Components

The following components have been refactored to use the shared styles:

1. **GalleryItem**
   - Now uses `cardBase`, `cardOverlayGradient`, and animation variants.

2. **DoctorCard**
   - Now uses `cardBase`, `cardOverlayBottom`, and the new `Badge` component.

3. **TreatmentCard**
   - Now uses `cardBase`, `cardContentFlex`, and the new `Badge` component.

4. **ValueItem**
   - Now uses `cardBase` and the centralized icon mapping.

## Additional Refactoring Opportunities

The following components could benefit from similar refactoring:

1. **PressCard**
   - Use `cardBase` and `Badge` for type indicators.

2. **TestimonialCard**
   - Extract common styles to constants.

3. **TeamMember**
   - Use `cardBase` and animation variants.

4. **BenefitItem**
   - Use shared icon mapping.

## Best Practices Going Forward

1. Use shared style constants and animation variants for consistency.
2. Standardize on `LazyImage` for all card images.
3. Use the `Badge` component for all pills and tags.
4. Use centralized icon mapping from `theme/iconMap.ts`.
5. Consider creating more reusable atoms like `CardContainer` or `ImageWithOverlay`. 