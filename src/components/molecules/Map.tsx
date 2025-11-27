'use client';

import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
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

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
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
      >
        {showMarker && (
          <Marker position={center} />
        )}
      </GoogleMap>
    </div>
  );
};
