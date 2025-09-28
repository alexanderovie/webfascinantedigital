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
    <div className="h-full w-full space-y-8">
      {/* Opción 1: Google Maps Embed */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-secondary dark:text-accent">Opción 1: Google Maps Embed</h3>
        <div className="h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.1234567890!2d-80.0534!3d26.7153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d5c123456789%3A0x1234567890abcdef!2s2054%20Vista%20Pkwy%20%23400%2C%20West%20Palm%20Beach%2C%20FL%2033411!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%" 
            height="100%" 
            style={{border: 0}} 
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps - Fascinante Digital Location"
          />
        </div>
      </div>

      {/* Opción 2: OpenStreetMap (Actual) */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-secondary dark:text-accent">Opción 2: OpenStreetMap (Actual)</h3>
        <div className="h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
          <MapContainer className="h-full w-full" center={position} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </div>
      </div>

      {/* Opción 3: Apple Maps Style */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-secondary dark:text-accent">Opción 3: Apple Maps Style</h3>
        <div className="h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
          <iframe 
            src="https://maps.apple.com/?q=2054+Vista+Pkwy+%23400,+West+Palm+Beach,+FL+33411&ll=26.7153,-80.0534&z=13"
            width="100%" 
            height="100%" 
            style={{border: 0}}
            title="Apple Maps - Fascinante Digital Location"
          />
        </div>
      </div>

      {/* Opción 4: Google Maps con Estilo Personalizado */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-secondary dark:text-accent">Opción 4: Google Maps Estilo Personalizado</h3>
        <div className="h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.1234567890!2d-80.0534!3d26.7153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d5c123456789%3A0x1234567890abcdef!2s2054%20Vista%20Pkwy%20%23400%2C%20West%20Palm%20Beach%2C%20FL%2033411!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus&style=feature:all|element:geometry.fill|color:0xf5f5f5&style=feature:water|element:geometry|color:0xc9c9c9"
            width="100%" 
            height="100%" 
            style={{border: 0}} 
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Custom - Fascinante Digital Location"
          />
        </div>
      </div>

      {/* Opción 5: Bing Maps */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-secondary dark:text-accent">Opción 5: Bing Maps</h3>
        <div className="h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
          <iframe 
            src="https://www.bing.com/maps/embed?h=400&w=600&cp=26.7153~-80.0534&lvl=13&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
            width="100%" 
            height="100%" 
            style={{border: 0}}
            title="Bing Maps - Fascinante Digital Location"
          />
        </div>
      </div>

      {/* Opción 6: Mapbox Style (Simulado) */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-secondary dark:text-accent">Opción 6: Mapbox Style (Simulado)</h3>
        <div className="h-[300px] lg:h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-secondary dark:text-accent mb-2">Fascinante Digital</h4>
            <p className="text-sm text-secondary/70 dark:text-accent/70">2054 Vista Pkwy #400</p>
            <p className="text-sm text-secondary/70 dark:text-accent/70">West Palm Beach, FL 33411</p>
            <p className="text-xs text-secondary/50 dark:text-accent/50 mt-2">Mapbox Style Preview</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
