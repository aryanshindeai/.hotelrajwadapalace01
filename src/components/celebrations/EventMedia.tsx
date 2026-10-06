import React, { useState } from 'react';
import { type CelebrationCategory } from '../../data/celebrationsData';

interface EventMediaProps {
  category: CelebrationCategory;
  className?: string;
}

export const EventMedia: React.FC<EventMediaProps> = ({
  category,
  className = '',
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden bg-charcoal-deep border border-white/5 select-none ${className}`}
    >
      {/* 4:3 on mobile, 16:11 on tablet, 16:12 on desktop */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden">
        {/* Skeleton placeholder */}
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
          className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/80 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Watermark Tag */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 px-3 py-1 bg-charcoal-deep/85 backdrop-blur-sm border border-white/10 text-ivory text-xs font-mono tracking-widest uppercase">
          {category.code} · {category.label}
        </div>

        {/* Lower subtitle watermark */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10">
          <span className="font-cinzel text-xs text-gold tracking-[0.2em] uppercase block">
            {category.subtitle}
          </span>
        </div>
      </div>

      {/* Placeholder indicator banner */}
      {category.isPlaceholderData && (
        <div className="py-1 px-4 bg-charcoal-surface border-t border-white/5 flex items-center justify-between text-[10px] text-sand/70 tracking-wider font-sans uppercase">
          <span>Official banquet photography slot</span>
          <span>Verified property asset pending</span>
        </div>
      )}
    </div>
  );
};
