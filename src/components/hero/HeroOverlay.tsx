import React from 'react';

interface HeroOverlayProps {
  className?: string;
}

export const HeroOverlay: React.FC<HeroOverlayProps> = ({
  className = '',
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none z-10 ${className}`}
      aria-hidden="true"
    >
      {/* 1. Subtle top gradient preserving navigation readability over bright sky/architecture */}
      <div className="absolute inset-x-0 top-0 h-44 sm:h-52 bg-gradient-to-b from-charcoal-deep/80 via-charcoal-deep/40 to-transparent" />

      {/* 2. Editorial asymmetric lower-left gradient anchoring text without darkening entire viewport */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-charcoal-deep/95 via-charcoal-deep/60 to-transparent" />

      {/* 3. Horizontal edge gradient for wide screens supporting left-aligned typography */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-charcoal-deep/75 via-charcoal-deep/30 to-transparent" />

      {/* 4. Architectural border / film vignette subtle edge tone */}
      <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.04]" />

      {/* 5. Restrained analog grain overlay */}
      <div className="absolute inset-0 hero-grain-overlay opacity-60" />
    </div>
  );
};
