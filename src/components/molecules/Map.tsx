import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

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
  center = {
    lat: 12.9716, // Default to Bangalore coordinates
    lng: 77.5946
  },
  zoom = 15,
  showMarker = true,
  apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'
}) => {
  const mapContainerStyle = {
    width,
    height
  };

  return (
    <div className={`rounded-md overflow-hidden ${className}`}>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={zoom}
        >
          {showMarker && <Marker position={center} />}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}; 