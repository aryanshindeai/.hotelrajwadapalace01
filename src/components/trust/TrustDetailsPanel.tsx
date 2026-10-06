import React from 'react';
import { type VerifiedReviewItem, type TrustMetrics } from '../../data/trustData';
import { Typography } from '../Typography';
import { Button } from '../Button';

interface TrustDetailsPanelProps {
  stats: TrustMetrics;
  featuredReview?: VerifiedReviewItem;
  className?: string;
  onExploreLocation?: () => void;
}

export const TrustDetailsPanel: React.FC<TrustDetailsPanelProps> = ({
  stats,
  featuredReview,
  className = '',
  onExploreLocation,
}) => {
  return (
    <div
      className={`flex flex-col justify-between h-full space-y-6 sm:space-y-8 ${className}`}
    >
      <div className="space-y-6">
        {/* Subtle Category Tag */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-gold tracking-widest">01</span>
          <span className="w-6 h-[1px] bg-gold/40" aria-hidden="true" />
          <span className="font-cinzel text-xs tracking-[0.2em] text-sand uppercase">
            Reputation & Standards
          </span>
        </div>

        {/* Narrative Title */}
        <Typography
          variant="h2"
          className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-ivory-light"
        >
          An Established Sanctuary for Stays & Celebrations
        </Typography>

        {/* Supporting Narrative based strictly on verified facts */}
        <Typography
          variant="body"
          className="text-ivory-muted/80 text-sm sm:text-base leading-relaxed font-light"
        >
          Over 460 guests and event hosts have shared their feedback on Google, establishing Hotel Rajwada Palace as a trusted hotel and banquet venue in Chandrapur. Situated on Durgapur Road beside Sargam Petrol Pump, the property continues to welcome visitors to the city and the Tadoba wilderness.
        </Typography>

        {/* Optional Verified Review quote (renders only if authentic text is provided) */}
        {featuredReview ? (
          <div className="p-5 border-l-2 border-gold bg-charcoal-deep/60 my-4 space-y-2">
            <p className="font-serif italic text-base sm:text-lg text-ivory-light">
              "{featuredReview.text}"
            </p>
            <div className="flex items-center justify-between text-xs text-sand pt-1">
              <span>— {featuredReview.author}</span>
              <span className="font-mono text-[10px] text-gold/80">{featuredReview.source}</span>
            </div>
          </div>
        ) : (
          /* Graceful Trust Pillar Matrix when individual quotes are withheld for safety */
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
            <div className="space-y-1">
              <span className="text-[10px] tracking-widest uppercase font-cinzel text-gold block">
                Google Rating
              </span>
              <span className="text-xs text-ivory font-sans">
                {stats.rating} / 5.0 (460 Ratings)
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] tracking-widest uppercase font-cinzel text-gold block">
                Property Purpose
              </span>
              <span className="text-xs text-ivory font-sans">
                {stats.category}
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] tracking-widest uppercase font-cinzel text-gold block">
                Regional Location
              </span>
              <span className="text-xs text-ivory font-sans">
                Tukum, Urjanagar, Chandrapur
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] tracking-widest uppercase font-cinzel text-gold block">
                Verification Source
              </span>
              <span className="text-xs text-ivory font-sans">
                {stats.verifiedStatus}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Trust Inquiry Link */}
      <div className="pt-2 sm:pt-4">
        {onExploreLocation && (
          <Button
            variant="text"
            onClick={onExploreLocation}
            className="text-left sm:text-center"
          >
            Find Property Location & Directions →
          </Button>
        )}
      </div>
    </div>
  );
};
