import React, { useState } from 'react';
import { type DiningExperience } from '../../data/diningData';

interface DiningSupportingMediaProps {
  dining: DiningExperience;
  className?: string;
}

export const DiningSupportingMedia: React.FC<DiningSupportingMediaProps> = ({
  dining,
  className = '',
}) => {
  const [loaded, setLoaded] = useState(false);

  if (!dining.supportingImageDesktop) {
    return null;
  }

  return (
    <figure
      className={`group relative overflow-hidden bg-charcoal-deep border border-white/5 select-none ${className}`}
    >
      <div className="relative w-full aspect-[4/3] md:aspect-[3/2] overflow-hidden">
        {/* Placeholder skeleton */}
        <div
          className={`absolute inset-0 bg-charcoal-muted/30 transition-opacity duration-700 ${
            loaded ? 'opacity-0 pointer-events-none' : 'opacity-100 animate-pulse'
          }`}
          aria-hidden="true"
        />

        <picture className="w-full h-full block">
          {dining.supportingImageMobile && (
            <source
              media="(max-width: 767px)"
              srcSet={dining.supportingImageMobile}
            />
          )}
          <source
            media="(min-width: 768px)"
            srcSet={dining.supportingImageDesktop}
          />
          <img
            key={dining.id}
            src={dining.supportingImageDesktop}
            alt={dining.supportingImageAlt || 'Dining hospitality detail'}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            className={`w-full h-full object-cover object-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } group-hover:scale-[1.03] group-hover:brightness-[1.02]`}
          />
        </picture>

        {/* Subtle border overlay */}
        <div
          className="absolute inset-0 border border-white/5 pointer-events-none transition-colors duration-500 group-hover:border-gold/20"
          aria-hidden="true"
        />
      </div>

      {dining.supportingImageCaption && (
        <figcaption className="p-3 bg-charcoal-surface border-t border-white/5 flex items-center justify-between text-[11px] tracking-wider text-sand uppercase font-cinzel">
          <span>{dining.supportingImageCaption}</span>
          <span className="text-gold/60">02 / Detail</span>
        </figcaption>
      )}
    </figure>
  );
};
