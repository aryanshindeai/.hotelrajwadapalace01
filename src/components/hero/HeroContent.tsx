import React from 'react';
import { Typography } from '../Typography';
import { HeroActions } from './HeroActions';

interface HeroContentProps {
  onCheckAvailability?: () => void;
  onExplore?: () => void;
  className?: string;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  onCheckAvailability,
  onExplore,
  className = '',
}) => {
  return (
    <div
      className={`relative z-20 max-w-3xl lg:max-w-4xl text-left select-text ${className}`}
    >
      {/* 1. Contextual Location Eyebrow Tag */}
      <div className="flex items-center gap-3 mb-4 sm:mb-6 animate-hero-reveal-1">
        <span className="w-8 sm:w-12 h-[1px] bg-gold/60" aria-hidden="true" />
        <span className="font-cinzel tracking-[0.28em] text-[10px] sm:text-xs text-gold uppercase font-medium">
          Chandrapur · Maharashtra
        </span>
      </div>

      {/* 2. Main Title: Large editorial serif displaying Hotel Rajwada Palace */}
      <h1 className="mb-4 sm:mb-6 animate-hero-reveal-2">
        <span className="block font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] tracking-tight font-light leading-[1.04] text-ivory-light">
          Hotel Rajwada Palace
        </span>
      </h1>

      {/* 3. Restrained Geographic Context Line (No fake slogans or buzzwords) */}
      <div className="mb-8 sm:mb-10 max-w-xl animate-hero-reveal-3">
        <Typography
          variant="body-lg"
          className="text-ivory-warm/85 font-light text-base sm:text-lg lg:text-xl leading-relaxed"
        >
          A sanctuary of authentic hospitality and grand celebrations situated on Durgapur Road, Chandrapur.
        </Typography>
        <span className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-sand/80 block mt-2">
          Near Major Gate · Beside Sargam Petrol Pump · Maharashtra 442401
        </span>
      </div>

      {/* 4. Asymmetric Action Buttons */}
      <HeroActions
        onCheckAvailability={onCheckAvailability}
        onExplore={onExplore}
      />
    </div>
  );
};
