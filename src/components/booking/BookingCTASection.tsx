import React from 'react';
import { Section } from '../Section';
import { Container } from '../Container';
import { CTAImage } from './CTAImage';
import { CTAOverlay } from './CTAOverlay';
import { CTAContent } from './CTAContent';
import { HOTEL_CONTACT_DATA } from '../../data/locationData';
import { HOTEL_IMAGE_REGISTRY } from '../../data/hotelImageRegistry';

interface BookingCTASectionProps {
  onCheckAvailability?: () => void;
  className?: string;
}

export const BookingCTASection: React.FC<BookingCTASectionProps> = ({
  onCheckAvailability,
  className = '',
}) => {
  const ctaImage = HOTEL_IMAGE_REGISTRY['booking-cta-01'];

  return (
    <Section
      id="booking-cta"
      variant="deep"
      spacing="xl"
      className={`relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden border-t border-b border-white/5 ${className}`}
    >
      {/* 1. Background Visual connecting to registered Hotel Rajwada Palace asset */}
      <CTAImage
        srcDesktop={ctaImage.src}
        srcMobile={ctaImage.src}
        alt={ctaImage.alt}
      />

      {/* 2. Cinematic Atmospheric Overlay */}
      <CTAOverlay />

      {/* 3. Foreground Asymmetric Content */}
      <Container size="xl" className="relative z-20 w-full py-12 sm:py-16">
        <CTAContent
          onCheckAvailability={onCheckAvailability}
          phoneDisplay={HOTEL_CONTACT_DATA.phoneDisplay}
          phoneRaw={HOTEL_CONTACT_DATA.phoneRaw}
        />
      </Container>
    </Section>
  );
};
