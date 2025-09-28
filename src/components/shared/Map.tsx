'use client';
import 'leaflet/dist/leaflet.css';
import { TileLayer } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer';

const position: [number, number] = [26.7153, -80.0534];

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
      <MapContainer className="h-full w-full" center={position} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
};

export default Map;
