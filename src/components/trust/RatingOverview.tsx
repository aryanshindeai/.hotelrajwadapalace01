import React from 'react';
import { type TrustMetrics } from '../../data/trustData';

interface RatingOverviewProps {
  stats: TrustMetrics;
  className?: string;
}

export const RatingOverview: React.FC<RatingOverviewProps> = ({
  stats,
  className = '',
}) => {
  return (
    <div
      className={`border border-white/5 bg-charcoal-deep p-8 sm:p-10 lg:p-12 relative overflow-hidden select-none ${className}`}
      aria-label={`Overall guest rating: ${stats.rating} out of ${stats.maxRating} based on ${stats.reviewCount} ${stats.source}`}
    >
      {/* Editorial top eyebrow label */}
      <div className="flex items-center gap-3 mb-6">
        <span className="w-5 h-[1px] bg-gold/50" aria-hidden="true" />
        <span className="font-cinzel text-xs tracking-[0.24em] uppercase text-gold font-medium">
          Verified Credibility
        </span>
      </div>

      {/* Main Dominant Metric "4.2" */}
      <div className="flex items-baseline gap-4 mb-4">
        <span className="font-serif text-6xl sm:text-7xl lg:text-8xl tracking-tight text-ivory-light font-light leading-none">
          {stats.rating.toFixed(1)}
        </span>
        <div className="flex flex-col">
          <span className="font-serif text-xl sm:text-2xl text-sand/70 font-light">
            / {stats.maxRating.toFixed(0)}
          </span>
          {/* Subtle star row micro-UI */}
          <div className="flex text-gold text-xs tracking-widest mt-1" aria-hidden="true">
            ★ ★ ★ ★ ☆
          </div>
        </div>
      </div>

      {/* Source & Verified Count Tag */}
      <div className="pt-4 border-t border-white/5 space-y-1">
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <span className="text-ivory font-medium font-sans">
            {stats.source}
          </span>
          <span className="font-mono text-gold font-medium">
            {stats.reviewCount} Reviews
          </span>
        </div>
        <p className="text-[11px] text-sand/80 font-sans tracking-wide">
          Category: {stats.category} · {stats.location}
        </p>
      </div>

      {/* Background architectural corner accent */}
      <div
        className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-gold/15 pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
};
