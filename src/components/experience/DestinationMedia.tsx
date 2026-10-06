import React, { useState } from 'react';
import { type ExperienceCategory } from '../../data/experienceData';

interface DestinationMediaProps {
  category: ExperienceCategory;
  className?: string;
}

export const DestinationMedia: React.FC<DestinationMediaProps> = ({
  category,
  className = '',
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden bg-charcoal-deep border border-white/5 select-none ${className}`}
    >
      {/* Aspect Ratio Container: 16:9 on desktop, 16:10 on tablet, 4:3 on mobile */}
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
            srcSet={category.primaryImageDesktop.replace(/\.(jpg|jpeg|png)$/i, '.webp')}
          />
          <source media="(max-width: 767px)" srcSet={category.primaryImageMobile} />
          <source media="(min-width: 768px)" srcSet={category.primaryImageDesktop} />
          <img
            key={category.id}
            src={category.primaryImageDesktop}
            alt={category.primaryImageAlt}
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

        {/* Source Type / Context Tag Watermark */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 px-3 py-1 bg-charcoal-deep/85 backdrop-blur-sm border border-white/10 text-ivory text-xs font-mono tracking-widest uppercase">
          {category.code} · {category.sourceType.toUpperCase()} CONTEXT
        </div>

        {/* Bottom Headline Overlay on Desktop */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 max-w-lg">
          <span className="font-cinzel text-xs text-gold tracking-[0.2em] uppercase block mb-1">
            {category.subtitle}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-ivory-light font-light leading-tight">
            {category.title}
          </h3>
        </div>
      </div>

      {/* Status banner */}
      <div className="py-1 px-4 bg-charcoal-surface border-t border-white/5 flex items-center justify-between text-[10px] text-sand/70 tracking-wider font-sans uppercase">
        <span>Destination context · Chandrapur & Tadoba Corridor</span>
        <span>Regional Exploration</span>
      </div>
    </div>
  );
};
