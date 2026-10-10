import React from 'react';
import { type GalleryCategory } from '../../data/galleryData';

interface GalleryFiltersProps {
  currentCategory: GalleryCategory;
  onSelectCategory: (category: GalleryCategory) => void;
  className?: string;
}

const CATEGORY_TABS: { id: GalleryCategory; label: string }[] = [
  { id: 'all', label: 'All Photos' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'other-events', label: 'Other Events' },
  { id: 'rooms', label: 'Hotel & Rooms' },
  { id: 'restaurant', label: 'Restaurant & Food' },
  { id: 'property', label: 'Property & Facilities' },
];

export const GalleryFilters: React.FC<GalleryFiltersProps> = ({
  currentCategory,
  onSelectCategory,
  className = '',
}) => {
  return (
    <nav
      aria-label="Gallery category filters"
      className={`flex flex-wrap items-center gap-6 sm:gap-8 ${className}`}
    >
      {CATEGORY_TABS.map((tab) => {
        const isActive = tab.id === currentCategory;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelectCategory(tab.id)}
            className={`group relative py-2 font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold cursor-pointer ${
              isActive ? 'text-gold font-medium' : 'text-sand/70 hover:text-ivory'
            }`}
            aria-current={isActive ? 'true' : 'false'}
          >
            <span>{tab.label}</span>
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
