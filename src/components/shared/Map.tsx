'use client';

const Map = () => {
  if (typeof window === 'undefined') {
    return (
      <div className="h-full w-full">
        <div className="h-full w-full bg-gray-200 animate-pulse rounded-xl" />
      </div>
    );
  }
  
  return (
    <div className="h-full w-full">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.1234567890!2d-80.0534!3d26.7153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d5c123456789%3A0x1234567890abcdef!2s2054%20Vista%20Pkwy%20%23400%2C%20West%20Palm%20Beach%2C%20FL%2033411!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
        width="100%" 
        height="100%" 
        style={{border: 0}} 
        allowFullScreen 
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps - Fascinante Digital Location"
        className="rounded-xl"
      />
    </div>
  );
};

export default Map;
