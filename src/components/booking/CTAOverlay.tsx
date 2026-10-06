import React from 'react';

interface CTAOverlayProps {
  className?: string;
}

export const CTAOverlay: React.FC<CTAOverlayProps> = ({
  className = '',
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none z-10 ${className}`}
      aria-hidden="true"
    >
      {/* 1. Base dark vignette tint keeping photography visible while securing high typography contrast */}
      <div className="absolute inset-0 bg-charcoal-deep/80 backdrop-brightness-75" />

      {/* 2. Asymmetric left directional gradient for text anchor */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep via-charcoal-deep/80 to-transparent" />

      {/* 3. Top and bottom editorial line blends */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-charcoal to-transparent opacity-80" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-charcoal-deep to-transparent" />

      {/* 4. Film grain texture */}
      <div className="absolute inset-0 hero-grain-overlay opacity-50" />

      {/* 5. Delicate inner perimeter border */}
      <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06]" />
    </div>
  );
};
