import React from 'react';
import { type DiningExperience } from '../../data/diningData';

interface DiningExperienceSelectorProps {
  venues: DiningExperience[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  className?: string;
}

export const DiningExperienceSelector: React.FC<DiningExperienceSelectorProps> = ({
  venues,
  currentIndex,
  onSelectIndex,
  className = '',
}) => {
  return (
    <nav
      aria-label="Dining Venue Selection"
      className={`flex items-center gap-6 sm:gap-8 ${className}`}
    >
      {venues.map((venue, idx) => {
        const isActive = idx === currentIndex;
        return (
          <button
            key={venue.id}
            type="button"
            onClick={() => onSelectIndex(idx)}
            className={`group relative flex items-baseline gap-2 py-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold transition-colors duration-300 cursor-pointer ${
              isActive ? 'text-gold' : 'text-sand/70 hover:text-ivory'
            }`}
            aria-current={isActive ? 'true' : 'false'}
            aria-label={`View ${venue.title}`}
          >
            {/* Number Index */}
            <span
              className={`font-mono text-xs sm:text-sm tracking-wider transition-colors duration-300 ${
                isActive ? 'text-gold font-medium' : 'text-sand/50 group-hover:text-sand'
              }`}
            >
              {venue.code}
            </span>

            {/* Label */}
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.16em] uppercase">
              {venue.title}
            </span>

            {/* Bottom active underline */}
            <span
              className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                isActive
                  ? 'opacity-100 scale-x-100'
                  : 'opacity-0 scale-x-0 group-hover:opacity-40 group-hover:scale-x-75'
              }`}
              aria-hidden="true"
            />
          </button>
        );
      })}
    </nav>
  );
};
