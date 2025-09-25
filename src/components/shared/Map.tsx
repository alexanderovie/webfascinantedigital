'use client';
import 'leaflet/dist/leaflet.css';
import { TileLayer } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer';

const position: [number, number] = [39.8283, -98.5795];

const Map = () => {
  if (typeof window === 'undefined') {
    return (
      <div className="h-full w-full">
        <div className="h-full w-full bg-gray-200 animate-pulse" />
      </div>
    );
  }
  return (
    <div className="h-full w-full">
      <MapContainer className="h-full w-full" center={position} zoom={6}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
};

export default Map;
