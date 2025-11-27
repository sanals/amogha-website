'use client';

import React, { useEffect, useRef } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { CONTACT_INFO } from '../../theme/constants';

interface MapProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  showMarker?: boolean;
  apiKey?: string;
}

// Custom AdvancedMarkerElement component
const AdvancedMarker: React.FC<{ 
  position: { lat: number; lng: number };
  map: google.maps.Map | null;
}> = ({ position, map }) => {
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(null);

  useEffect(() => {
    if (!map || !window.google?.maps?.marker?.AdvancedMarkerElement) {
      return;
    }

    // Warn if Map ID is not set (required for AdvancedMarkerElement)
    if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID) {
      console.warn('Google Maps Map ID is not set. Markers may not display correctly. Set NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID environment variable.');
    }

    let marker: google.maps.marker.AdvancedMarkerElement | null = null;

    try {
      // Create AdvancedMarkerElement
      marker = new window.google.maps.marker.AdvancedMarkerElement({
        map,
        position,
      });

      markerRef.current = marker;
    } catch (error) {
      console.warn('Error creating marker:', error);
      markerRef.current = null;
    }

    return () => {
      if (markerRef.current) {
        try {
          // Safely remove the marker from the map
          // AdvancedMarkerElement cleanup - set map to null to remove from map
          const currentMarker = markerRef.current;
          // Check if marker is still valid before accessing properties
          if (currentMarker && typeof currentMarker === 'object' && 'map' in currentMarker) {
            currentMarker.map = null;
          }
        } catch (error) {
          // Ignore errors during cleanup (marker might already be destroyed)
          // This can happen if the component unmounts while the marker is being initialized
        } finally {
          markerRef.current = null;
        }
      }
    };
  }, [map, position]);

  return null;
};

// Map component with AdvancedMarkerElement support
const MapContent: React.FC<Omit<MapProps, 'apiKey'> & { map: google.maps.Map | null }> = ({
  center = CONTACT_INFO.coordinates,
  zoom = 15,
  showMarker = true,
  map
}) => {
  return (
    <>
      {showMarker && <AdvancedMarker position={center} map={map} />}
    </>
  );
};

export const Map: React.FC<MapProps> = ({
  className = '',
  width = '100%',
  height = 400,
  center = CONTACT_INFO.coordinates, // Default to clinic location from constants
  zoom = 15,
  showMarker = true,
  apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY'
}) => {
  const mapContainerStyle = {
    width,
    height
  };

  // Load the marker library along with the maps API
  const libraries: ("places" | "drawing" | "geometry" | "visualization" | "marker")[] = ['marker'];

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
    libraries,
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  if (!isLoaded) {
    return (
      <div 
        className={`rounded-md overflow-hidden bg-neutral-light dark:bg-neutral-dark flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <p className="text-neutral-medium">Loading map...</p>
      </div>
    );
  }

  return (
    <div className={`rounded-md overflow-hidden ${className}`}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          // mapId is required for AdvancedMarkerElement to work properly
          // If not provided, the map will still display but markers may not work
          // Create a Map ID in Google Cloud Console: https://console.cloud.google.com/google/maps-apis
          // Then set NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID in your environment variables
          ...(process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID && {
            mapId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID
          })
        }}
      >
        <MapContent center={center} zoom={zoom} showMarker={showMarker} map={map} />
      </GoogleMap>
    </div>
  );
}; 