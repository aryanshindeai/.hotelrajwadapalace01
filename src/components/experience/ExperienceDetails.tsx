import React from 'react';
import { type ExperienceCategory } from '../../data/experienceData';
import { Typography } from '../Typography';
import { Button } from '../Button';

interface ExperienceDetailsProps {
  category: ExperienceCategory;
  onExploreLocation?: () => void;
  onCheckAvailability?: () => void;
  className?: string;
}

export const ExperienceDetails: React.FC<ExperienceDetailsProps> = ({
  category,
  onExploreLocation,
  onCheckAvailability,
  className = '',
}) => {
  return (
    <div
      key={category.id}
      className={`flex flex-col justify-between h-full space-y-6 animate-fadeIn ${className}`}
    >
      <div className="space-y-4">
        {/* Subtle Category & Code Tag */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-gold/80 tracking-widest">{category.code}</span>
          <span className="w-6 h-[1px] bg-gold/40" aria-hidden="true" />
          <span className="font-cinzel text-xs tracking-[0.2em] text-sand uppercase">
            {category.label}
          </span>
        </div>

        {/* Display Title */}
        <Typography
          variant="h2"
          className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-ivory-light"
        >
          {category.title}
        </Typography>

        {/* Subtitle / Venue context */}
        <span className="font-sans text-xs tracking-wider uppercase text-gold block">
          {category.subtitle}
        </span>

        {/* Narrative Description */}
        <Typography
          variant="body"
          className="text-ivory-muted/80 text-sm sm:text-base leading-relaxed pt-1 font-light"
        >
          {category.description}
        </Typography>

        {/* Factual Context Statement */}
        <div className="p-3 bg-charcoal-deep border border-white/5 text-[11px] text-sand/80 font-sans leading-relaxed">
          <span className="text-gold font-medium block mb-0.5">LOCATION GATEWAY</span>
          Hotel Rajwada Palace is located near Major Gate beside Sargam Petrol Pump on Durgapur Road / Tadoba Road, Chandrapur (PIN 442401).
        </div>
      </div>

      {/* Action Buttons & Map Teaser */}
      <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        <Button
          variant="primary"
          size="md"
          onClick={onCheckAvailability}
          className="w-full sm:w-auto"
        >
          Check Availability
        </Button>

        {onExploreLocation && (
          <Button
            variant="text"
            onClick={onExploreLocation}
            className="w-full sm:w-auto text-left sm:text-center"
          >
            Explore The Location →
          </Button>
        )}
      </div>
    </div>
  );
};
