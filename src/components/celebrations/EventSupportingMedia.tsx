import React, { useState } from 'react';
import { type CelebrationCategory } from '../../data/celebrationsData';

interface EventSupportingMediaProps {
  category: CelebrationCategory;
  className?: string;
}

export const EventSupportingMedia: React.FC<EventSupportingMediaProps> = ({
  category,
  className = '',
}) => {
  const [loaded, setLoaded] = useState(false);

  if (!category.secondaryImageDesktop) {
    return null;
  }

  return (
    <figure
      className={`group relative overflow-hidden bg-charcoal-deep border border-white/5 select-none ${className}`}
    >
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
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
            srcSet={category.secondaryImageDesktop.replace(/\.(jpg|jpeg|png)$/i, '.webp')}
          />
          {category.secondaryImageMobile && (
            <source
              media="(max-width: 767px)"
              srcSet={category.secondaryImageMobile}
            />
          )}
          <source
            media="(min-width: 768px)"
            srcSet={category.secondaryImageDesktop}
          />
          <img
            key={category.id}
            src={category.secondaryImageDesktop}
            alt={category.secondaryImageAlt || 'Celebration detail presentation'}
            width={1280}
            height={853}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            className={`w-full h-full object-cover object-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } group-hover:scale-[1.03] group-hover:brightness-[1.02]`}
          />
        </picture>

        {/* Border overlay */}
        <div
          className="absolute inset-0 border border-white/5 pointer-events-none transition-colors duration-500 group-hover:border-gold/20"
          aria-hidden="true"
        />
      </div>

      {category.secondaryCaption && (
        <figcaption className="p-3 bg-charcoal-surface border-t border-white/5 flex items-center justify-between text-[11px] tracking-wider text-sand uppercase font-cinzel">
          <span>{category.secondaryCaption}</span>
          <span className="text-gold/60">02 / Detail</span>
        </figcaption>
      )}
    </figure>
  );
};
