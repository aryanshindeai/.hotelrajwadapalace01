import React, { useState } from 'react';

interface CTAImageProps {
  srcDesktop: string;
  srcMobile: string;
  alt: string;
  className?: string;
}

export const CTAImage: React.FC<CTAImageProps> = ({
  srcDesktop,
  srcMobile,
  alt,
  className = '',
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`absolute inset-0 select-none pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-charcoal-deep" />
      <picture className="w-full h-full block">
        <source media="(max-width: 767px)" srcSet={srcMobile} />
        <source media="(min-width: 768px)" srcSet={srcDesktop} />
        <img
          src={srcDesktop}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover object-[center_40%] md:object-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            loaded ? 'opacity-90 scale-100' : 'opacity-0 scale-105'
          }`}
        />
      </picture>
    </div>
  );
};
