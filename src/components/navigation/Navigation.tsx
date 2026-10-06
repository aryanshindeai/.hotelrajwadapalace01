import React, { useState, useEffect, useRef } from 'react';
import { Container } from '../Container';
import { BrandMark } from './BrandMark';
import { DesktopNav } from './DesktopNav';
import { AvailabilityButton } from './AvailabilityButton';
import { MobileMenuButton } from './MobileMenuButton';
import { MobileMenuOverlay } from './MobileMenuOverlay';
import { type NavItem } from './NavLink';

// Primary restrained navigation links for Hotel Rajwada Palace
export const MAIN_NAV_ITEMS: NavItem[] = [
  { id: 'rooms', label: 'Rooms', href: '#rooms' },
  { id: 'dining', label: 'Dining', href: '#dining' },
  { id: 'celebrations', label: 'Celebrations', href: '#celebrations' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
];

interface NavigationProps {
  activeSectionId?: string;
  onSelectSection?: (id: string) => void;
  onCheckAvailability?: () => void;
  onContactClick?: () => void;
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSectionId,
  onSelectSection,
  onCheckAvailability,
  onContactClick,
  className = '',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(activeSectionId || '');
  const [isVisible, setIsVisible] = useState(true);

  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  // Sync active section prop if provided externally
  useEffect(() => {
    if (activeSectionId !== undefined) {
      setActiveItem(activeSectionId);
    }
  }, [activeSectionId]);

  // Intelligent scroll handler using requestAnimationFrame for optimal mobile/desktop performance
  useEffect(() => {
    const handleScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // 1. Transparent-to-Solid transition threshold (50px)
          setIsScrolled(currentScrollY > 50);

          // 2. Intelligent direction detection:
          // Stay fully visible at the top (<100px).
          // When scrolling downwards quickly, subtly reduce visual presence.
          // When scrolling upwards, immediately restore full presence.
          if (currentScrollY <= 80) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollYRef.current + 10) {
            // Scrolling down: keep header docked or subtle without aggressive hiding
            setIsVisible(true);
          } else if (currentScrollY < lastScrollYRef.current - 5) {
            // Scrolling up: ensure header is prominently active
            setIsVisible(true);
          }

          lastScrollYRef.current = currentScrollY;
          tickingRef.current = false;
        });

        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemSelect = (id: string) => {
    setActiveItem(id);
    onSelectSection?.(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isScrolled
            ? 'bg-charcoal-deep/96 backdrop-blur-md py-3.5 border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-6 md:py-8 lg:py-10 border-b border-transparent'
        } ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-95'} ${className}`}
      >
        <Container size="xl">
          <div className="flex items-center justify-between">
            {/* 1. Left: Architectural Wordmark */}
            <div className="flex-shrink-0">
              <BrandMark
                isScrolled={isScrolled}
                onClick={() => handleItemSelect('')}
              />
            </div>

            {/* 2. Center: Editorial Navigation Links */}
            <div className="hidden lg:flex items-center">
              <DesktopNav
                items={MAIN_NAV_ITEMS}
                activeId={activeItem}
                onSelect={handleItemSelect}
              />
            </div>

            {/* 3. Right: Secondary Contact Link + Primary Conversion CTA */}
            <div className="hidden sm:flex items-center space-x-6">
              {/* Refined Contact text link */}
              <a
                href="#contact"
                onClick={(e) => {
                  if (onContactClick) {
                    e.preventDefault();
                    onContactClick();
                  } else {
                    handleItemSelect('contact');
                  }
                }}
                className={`hidden md:inline-block font-sans text-xs uppercase tracking-[0.18em] transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold ${
                  activeItem === 'contact'
                    ? 'text-gold'
                    : 'text-ivory/80 hover:text-gold-light'
                }`}
              >
                Contact
              </a>

              {/* Primary Conversion CTA */}
              <AvailabilityButton
                size={isScrolled ? 'sm' : 'md'}
                onClick={onCheckAvailability}
              />
            </div>

            {/* 4. Mobile Menu Trigger */}
            <div className="flex items-center sm:hidden">
              <MobileMenuButton
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </div>
        </Container>
      </header>

      {/* 5. Accessible Mobile Navigation Overlay */}
      <MobileMenuOverlay
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={[
          ...MAIN_NAV_ITEMS,
          { id: 'contact', label: 'Contact', href: '#contact' },
        ]}
        activeId={activeItem}
        onSelect={handleItemSelect}
        onCheckAvailability={onCheckAvailability}
      />
    </>
  );
};
