import React, { useState } from 'react';
import { type RoomCategory } from '../../data/roomsData';

interface RoomMediaProps {
  room: RoomCategory;
  className?: string;
  onNext?: () => void;
  onPrev?: () => void;
}

export const RoomMedia: React.FC<RoomMediaProps> = ({
  room,
  className = '',
  onNext,
  onPrev,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden bg-charcoal-deep border border-white/5 select-none ${className}`}
    >
      {/* Aspect Ratio Container: 16:10 on desktop, 4:3 on tablet, 4:3 on mobile */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/11] lg:aspect-[16/10] overflow-hidden">
        {/* Placeholder skeleton */}
        <div
          className={`absolute inset-0 bg-charcoal-muted/30 transition-opacity duration-700 ${
            loaded ? 'opacity-0 pointer-events-none' : 'opacity-100 animate-pulse'
          }`}
          aria-hidden="true"
        />

        <picture className="w-full h-full block">
          <source
            type="image/webp"
            srcSet={room.imageDesktop.replace(/\.(jpg|jpeg|png)$/i, '.webp')}
          />
          <source media="(max-width: 767px)" srcSet={room.imageMobile} />
          <source media="(min-width: 768px)" srcSet={room.imageDesktop} />
          <img
            key={room.id}
            src={room.imageDesktop}
            alt={room.imageAlt}
            width={1280}
            height={853}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            className={`w-full h-full object-cover object-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } group-hover:scale-[1.02] group-hover:brightness-[1.02]`}
          />
        </picture>

        {/* Cinematic Vignette */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/80 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Architectural Index Tag Watermark */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 px-3 py-1 bg-charcoal-deep/80 backdrop-blur-sm border border-white/10 text-ivory text-xs font-mono tracking-widest uppercase">
          {room.code} · {room.categoryTag}
        </div>

        {/* Minimal Navigation Arrows for quick photo flipping */}
        {(onPrev || onNext) && (
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 flex items-center gap-2">
            {onPrev && (
              <button
                type="button"
                onClick={onPrev}
                className="w-9 h-9 flex items-center justify-center bg-charcoal-deep/80 backdrop-blur-sm border border-white/10 text-ivory/80 hover:text-gold hover:border-gold/40 transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                aria-label="Previous room category"
              >
                ←
              </button>
            )}
            {onNext && (
              <button
                type="button"
                onClick={onNext}
                className="w-9 h-9 flex items-center justify-center bg-charcoal-deep/80 backdrop-blur-sm border border-white/10 text-ivory/80 hover:text-gold hover:border-gold/40 transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                aria-label="Next room category"
              >
                →
              </button>
            )}
          </div>
        )}
      </div>

      {/* Minimal Image Status */}
      {room.isPlaceholderData && (
        <div className="py-1.5 px-4 bg-charcoal-surface border-t border-white/5 flex items-center justify-between text-[10px] text-sand/70 tracking-wider font-sans uppercase">
          <span>Hotel Rajwada Palace Accommodation</span>
          <span>Chandrapur, Maharashtra</span>
        </div>
      )}
    </div>
  );
};
