import React, { useState } from 'react';
import { type DiningExperience } from '../../data/diningData';

interface DiningFeatureMediaProps {
  dining: DiningExperience;
  className?: string;
}

export const DiningFeatureMedia: React.FC<DiningFeatureMediaProps> = ({
  dining,
  className = '',
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden bg-charcoal-deep border border-white/5 select-none ${className}`}
    >
      {/* 16:9 / 21:10 cinematic dominant ratio */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] overflow-hidden">
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
            srcSet={dining.featureImageDesktop.replace(/\.(jpg|jpeg|png)$/i, '.webp')}
          />
          <source media="(max-width: 767px)" srcSet={dining.featureImageMobile} />
          <source media="(min-width: 768px)" srcSet={dining.featureImageDesktop} />
          <img
            key={dining.id}
            src={dining.featureImageDesktop}
            alt={dining.featureImageAlt}
            width={1600}
            height={900}
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
          className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/85 via-charcoal-deep/20 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Architectural Index Tag Watermark */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 px-3 py-1 bg-charcoal-deep/80 backdrop-blur-sm border border-white/10 text-ivory text-xs font-mono tracking-widest uppercase">
          {dining.code} · {dining.venueCategory}
        </div>

        {/* Bottom Headline Overlay on Desktop */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 max-w-lg">
          <span className="font-cinzel text-xs text-gold tracking-[0.2em] uppercase block mb-1">
            {dining.subtitle}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-ivory-light font-light leading-tight">
            {dining.title}
          </h3>
        </div>
      </div>

      {/* Placeholder indicator banner */}
      {dining.isPlaceholderData && (
        <div className="py-1 px-4 bg-charcoal-surface border-t border-white/5 flex items-center justify-between text-[10px] text-sand/70 tracking-wider font-sans uppercase">
          <span>Official dining photography slot</span>
          <span>Verified property asset pending</span>
        </div>
      )}
    </div>
  );
};
