import React, { useState } from 'react';

interface LocationMapProps {
  embedQuery: string;
  directionsUrl: string;
  className?: string;
}

export const LocationMap: React.FC<LocationMapProps> = ({
  embedQuery,
  directionsUrl,
  className = '',
}) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Clean, zero-cost Google Maps embed without requiring an insecure client-side API key
  const embedUrl = `https://maps.google.com/maps?q=${embedQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div
      className={`relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/10] bg-charcoal-deep border border-white/10 overflow-hidden group ${className}`}
    >
      {/* Fallback & Loading Skeleton */}
      <div
        className={`absolute inset-0 bg-charcoal-surface flex flex-col items-center justify-center p-6 text-center transition-opacity duration-700 ${
          iframeLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        aria-hidden={iframeLoaded}
      >
        <span className="font-cinzel text-xs text-gold tracking-widest uppercase mb-2">
          Loading Property Map
        </span>
        <p className="text-xs text-sand font-sans max-w-xs mb-4">
          Hotel Rajwada Palace, Near Major Gate, Durgapur Road, Chandrapur
        </p>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gold hover:text-gold-light border-b border-gold/40 hover:border-gold pb-0.5 tracking-wider uppercase font-sans"
        >
          Open Directly in Google Maps →
        </a>
      </div>

      {/* Styled Embed iframe with lazy loading */}
      <iframe
        title="Hotel Rajwada Palace Location Map"
        src={embedUrl}
        width="100%"
        height="100%"
        loading="lazy"
        onLoad={() => setIframeLoaded(true)}
        className="w-full h-full border-0 filter contrast-[1.05] brightness-[0.88] grayscale-[0.25] transition-all duration-700 group-hover:filter-none"
        aria-label="Map showing Hotel Rajwada Palace in Chandrapur"
      />

      {/* Architectural corner border frame */}
      <div
        className="absolute inset-0 border border-white/5 pointer-events-none transition-colors duration-500 group-hover:border-gold/30"
        aria-hidden="true"
      />

      {/* Direct external map link overlay pill in bottom right */}
      <div className="absolute bottom-3 right-3 z-10">
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 bg-charcoal-deep/90 backdrop-blur-md border border-white/10 hover:border-gold/40 text-ivory text-[11px] font-sans tracking-wider uppercase transition-colors inline-flex items-center gap-1.5 shadow-lg"
          aria-label="Open in Google Maps app"
        >
          <span>Open Full Map</span>
          <span className="text-gold">↗</span>
        </a>
      </div>
    </div>
  );
};
