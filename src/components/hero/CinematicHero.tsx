import React from 'react';
import { HeroMedia, type HeroImageSource } from './HeroMedia';
import { HeroOverlay } from './HeroOverlay';
import { HeroContent } from './HeroContent';
import { ScrollIndicator } from './ScrollIndicator';
import { Container } from '../Container';
import { HOTEL_IMAGE_REGISTRY } from '../../data/hotelImageRegistry';

// Locked real property image entry from centralized registry
export const DEFAULT_HERO_IMAGE: HeroImageSource = {
  srcDesktop: HOTEL_IMAGE_REGISTRY['hero-exterior-01'].src,
  srcMobile: HOTEL_IMAGE_REGISTRY['hero-exterior-01'].srcMobile || HOTEL_IMAGE_REGISTRY['hero-exterior-01'].src,
  alt: HOTEL_IMAGE_REGISTRY['hero-exterior-01'].alt,
  credit: 'Hotel Rajwada Palace — Chandrapur',
};

interface CinematicHeroProps {
  imageSource?: HeroImageSource;
  onCheckAvailability?: () => void;
  onExplore?: () => void;
  scrollTargetId?: string;
  className?: string;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({
  imageSource = DEFAULT_HERO_IMAGE,
  onCheckAvailability,
  onExplore,
  scrollTargetId = 'overview',
  className = '',
}) => {
  return (
    <section
      id="hero"
      aria-label="Hotel Rajwada Palace Welcome Experience"
      className={`relative w-full h-[100svh] min-h-[640px] max-h-[1100px] flex items-end overflow-hidden bg-charcoal-deep ${className}`}
    >
      {/* 1. Background Cinematic Media Layer */}
      <HeroMedia source={imageSource} />

      {/* 2. Atmospheric & Lighting Overlay */}
      <HeroOverlay />

      {/* 3. Asymmetric Lower-Left Foreground Content */}
      <div className="relative z-20 w-full pb-14 sm:pb-16 md:pb-20 lg:pb-24 pt-32">
        <Container size="xl">
          <HeroContent
            onCheckAvailability={onCheckAvailability}
            onExplore={onExplore}
          />
        </Container>
      </div>

      {/* 4. Minimal Scroll Indicator */}
      <ScrollIndicator targetId={scrollTargetId} />
    </section>
  );
};
