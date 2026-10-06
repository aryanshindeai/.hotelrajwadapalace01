import React, { useState } from 'react';

export interface ImageRevealProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square' | 'wide' | 'cinema' | 'auto';
  caption?: string;
  className?: string;
  containerClassName?: string;
  hoverZoom?: boolean;
  priority?: boolean;
}

const aspectRatios = {
  landscape: 'aspect-[4/3]',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
  wide: 'aspect-[16/9]',
  cinema: 'aspect-[21/9]',
  auto: '',
};

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  aspectRatio = 'landscape',
  caption,
  className = '',
  containerClassName = '',
  hoverZoom = true,
  priority = false,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <figure className={`group relative overflow-hidden bg-charcoal-surface ${containerClassName}`}>
      <div
        className={`relative w-full overflow-hidden ${aspectRatios[aspectRatio]}`}
      >
        {/* Subtle placeholder tone to prevent layout shift */}
        <div
          className={`absolute inset-0 bg-charcoal-muted/30 transition-opacity duration-1000 ${
            isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100 animate-pulse'
          }`}
          aria-hidden="true"
        />

        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } ${
            hoverZoom ? 'group-hover:scale-105 group-hover:brightness-[1.02]' : ''
          } ${className}`}
          {...props}
        />

        {/* Editorial border overlay */}
        <div
          className="absolute inset-0 border border-white/5 pointer-events-none transition-colors duration-500 group-hover:border-gold/20"
          aria-hidden="true"
        />
      </div>

      {caption && (
        <figcaption className="mt-3 text-xs tracking-wider uppercase font-sans text-sand/80">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
