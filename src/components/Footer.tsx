import React from 'react';
import { Container } from './Container';
import { AvailabilityButton } from './navigation/AvailabilityButton';
import { HOTEL_CONTACT_DATA } from '../data/locationData';

interface FooterProps {
  onCheckAvailability?: () => void;
  onNavigateSection?: (id: string) => void;
  className?: string;
}

const FOOTER_NAV_LINKS = [
  { id: 'rooms', label: 'Rooms & Suites', href: '#rooms' },
  { id: 'dining', label: 'Dining & Feasts', href: '#dining' },
  { id: 'celebrations', label: 'Celebrations & Banquets', href: '#celebrations' },
  { id: 'experience', label: 'The Experience', href: '#experience' },
  { id: 'gallery', label: 'The Gallery', href: '#gallery' },
  { id: 'reviews', label: 'Guest Reviews', href: '#reviews' },
  { id: 'contact', label: 'Find Us / Contact', href: '#contact' },
];

export const Footer: React.FC<FooterProps> = ({
  onCheckAvailability,
  onNavigateSection,
  className = '',
}) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (onNavigateSection) {
      e.preventDefault();
      onNavigateSection(id);
    }
  };

  return (
    <footer
      role="contentinfo"
      aria-label="Hotel Rajwada Palace Global Footer"
      className={`w-full bg-charcoal-deep border-t border-white/5 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 text-ivory ${className}`}
    >
      <Container size="xl">
        {/* 1. TOP BRAND STATEMENT & ARCHITECTURAL WORDMARK */}
        <div className="pb-12 sm:pb-16 border-b border-white/10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span className="font-cinzel tracking-[0.28em] text-[10px] sm:text-xs text-gold uppercase block mb-2 font-medium">
              Chandrapur · Maharashtra
            </span>
            <span className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory-light font-light tracking-tight block leading-[1.05]">
              Hotel Rajwada Palace
            </span>
          </div>
          <div className="max-w-md text-sand text-xs sm:text-sm font-light leading-relaxed">
            A sanctuary of regal architectural composure, authentic regional hospitality, and grand celebratory spaces in Chandrapur, Maharashtra.
          </div>
        </div>

        {/* 2. MIDDLE MULTI-LEVEL EDITORIAL COLUMNS */}
        <div className="py-12 sm:py-16 border-b border-white/10 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Property & Location (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <span className="font-cinzel text-xs tracking-[0.2em] uppercase text-gold block mb-3 font-medium">
                The Property
              </span>
              <address className="not-italic text-sm text-ivory-muted/90 font-light leading-relaxed space-y-1">
                <p className="text-ivory font-normal">Near Major Gate</p>
                <p>Beside Sargam Petrol Pump</p>
                <p className="text-ivory-warm">Durgapur / Tadoba Road</p>
                <p>Tukum, Urjanagar</p>
                <p className="text-gold-light pt-1">Maharashtra 442401, India</p>
              </address>
            </div>

            <div className="pt-2">
              <span className="text-[10px] font-mono tracking-widest uppercase text-sand/70 block mb-1">
                Direct Hotel Desk
              </span>
              <a
                href={`tel:${HOTEL_CONTACT_DATA.phoneRaw}`}
                className="font-serif text-xl sm:text-2xl text-ivory-light hover:text-gold transition-colors inline-block"
                aria-label={`Call the hotel at ${HOTEL_CONTACT_DATA.phoneDisplay}`}
              >
                {HOTEL_CONTACT_DATA.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Center Column: Editorial Navigation Links (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-cinzel text-xs tracking-[0.2em] uppercase text-gold block mb-3 font-medium">
              Explore The Palace
            </span>
            <nav aria-label="Footer Navigation Links" className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {FOOTER_NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className="group flex items-center justify-between text-xs uppercase tracking-[0.16em] text-ivory/80 hover:text-gold transition-colors duration-300 py-1"
                >
                  <span>{link.label}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gold text-[10px]" aria-hidden="true">
                    →
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Right Column: Inquiries & Conversion CTA (3 cols) */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between">
            <div>
              <span className="font-cinzel text-xs tracking-[0.2em] uppercase text-gold block mb-3 font-medium">
                Inquiries & Reservations
              </span>
              <p className="text-xs text-sand font-light leading-relaxed mb-6">
                Connect directly with our desk for room availability, banquet reservations, and wedding hall bookings.
              </p>
              <AvailabilityButton
                size="md"
                className="w-full text-center"
                onClick={onCheckAvailability}
              />
            </div>

            <div className="p-3 bg-charcoal/50 border border-white/5 text-[11px] text-sand/80 font-sans mt-4">
              <span className="text-gold font-medium block">Category: Hotel / Banquet Hall</span>
              Google Rating: 4.2 ★ (460 Verified Reviews)
            </div>
          </div>
        </div>

        {/* 3. BOTTOM LEGAL, COPYRIGHT, AND ACCREDITATION */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand/60">
          <p>© {currentYear} Hotel Rajwada Palace, Chandrapur. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[10px] tracking-widest uppercase">
            <span>Tukum · Urjanagar</span>
            <span className="w-1 h-1 rounded-full bg-gold/40" aria-hidden="true" />
            <span>Chandrapur 442401</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
