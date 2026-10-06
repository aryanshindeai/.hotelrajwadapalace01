import React from 'react';
import { AvailabilityButton } from '../navigation/AvailabilityButton';
import { Button } from '../Button';

interface HeroActionsProps {
  onCheckAvailability?: () => void;
  onExplore?: () => void;
  className?: string;
}

export const HeroActions: React.FC<HeroActionsProps> = ({
  onCheckAvailability,
  onExplore,
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 animate-hero-reveal-4 ${className}`}
    >
      {/* Primary CTA */}
      <AvailabilityButton
        size="lg"
        onClick={onCheckAvailability}
        className="w-full sm:w-auto text-center"
      />

      {/* Secondary Low-Emphasis Action */}
      <Button
        variant="secondary"
        size="lg"
        onClick={onExplore}
        className="w-full sm:w-auto text-center bg-charcoal/40 backdrop-blur-sm border-white/20 hover:border-gold hover:text-gold"
      >
        Explore The Palace
      </Button>
    </div>
  );
};
