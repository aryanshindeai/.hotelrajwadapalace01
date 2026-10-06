import React, { useState } from 'react';
import { type GalleryItem } from '../../data/galleryData';

interface GalleryItemCardProps {
  item: GalleryItem;
  index: number;
  onOpenLightbox: (index: number) => void;
  className?: string;
}

export const GalleryItemCard: React.FC<GalleryItemCardProps> = ({
  item,
  index,
  onOpenLightbox,
  className = '',
}) => {
  const [loaded, setLoaded] = useState(false);

  // Aspect ratio mapping preserving editorial photography proportions
  const aspectClass = {
    featured: 'aspect-[16/10] sm:aspect-[16/9]',
    landscape: 'aspect-[4/3] sm:aspect-[16/11]',
    portrait: 'aspect-[3/4] sm:aspect-[4/5]',
    square: 'aspect-square',
  }[item.orientation];

  return (
    <figure
      className={`group relative overflow-hidden bg-charcoal-deep border border-white/5 select-none ${className}`}
    >
      <button
        type="button"
        onClick={() => onOpenLightbox(index)}
        className="w-full h-full block text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-gold cursor-pointer"
        aria-label={`View ${item.title} in full screen`}
      >
        <div className={`relative w-full ${aspectClass} overflow-hidden`}>
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
              srcSet={item.srcDesktop.replace(/\.(jpg|jpeg|png)$/i, '.webp')}
            />
            <source media="(max-width: 767px)" srcSet={item.srcMobile} />
            <source media="(min-width: 768px)" srcSet={item.srcDesktop} />
            <img
              src={item.srcDesktop}
              alt={item.alt}
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

          {/* Micro-vignette */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"
            aria-hidden="true"
          />

          {/* Architectural watermark tag */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 px-2.5 py-0.5 bg-charcoal-deep/80 backdrop-blur-sm border border-white/10 text-ivory text-[10px] font-mono tracking-widest uppercase">
            {item.code} · {item.categoryLabel}
          </div>

          {/* Subtle expand view indicator on hover */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2.5 py-0.5 bg-charcoal-deep/85 backdrop-blur-sm border border-gold/40 text-gold text-[10px] tracking-[0.2em] uppercase font-cinzel">
            View [↗]
          </div>

          {/* Bottom Title bar */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 flex items-baseline justify-between">
            <div>
              <span className="font-serif text-lg sm:text-xl text-ivory-light font-light block leading-tight">
                {item.title}
              </span>
              {item.caption && (
                <span className="text-[11px] text-sand/80 font-sans tracking-wide block mt-0.5">
                  {item.caption}
                </span>
              )}
            </div>
            <span className="font-mono text-[10px] text-gold/80 ml-2">
              {item.sourceType === 'destination' ? 'DESTINATION' : 'PROPERTY'}
            </span>
          </div>

          {/* Border overlay */}
          <div
            className="absolute inset-0 border border-white/5 pointer-events-none transition-colors duration-500 group-hover:border-gold/30"
            aria-hidden="true"
          />
        </div>
      </button>
    </figure>
  );
};
