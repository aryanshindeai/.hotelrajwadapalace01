import React, { useEffect, useRef } from 'react';
import { type NavItem } from './NavLink';
import { AvailabilityButton } from './AvailabilityButton';

interface MobileMenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
  onCheckAvailability?: () => void;
  id?: string;
}

export const MobileMenuOverlay: React.FC<MobileMenuOverlayProps> = ({
  isOpen,
  onClose,
  items,
  activeId,
  onSelect,
  onCheckAvailability,
  id = 'mobile-menu-overlay',
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  // Keyboard accessibility: ESC key close & trap focus
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      id={id}
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 bg-charcoal-deep/98 backdrop-blur-xl flex flex-col justify-between px-6 sm:px-12 py-8 overflow-y-auto"
    >
      {/* Top Bar inside Overlay: Wordmark & Close button */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div>
          <span className="font-serif text-lg tracking-wide text-ivory">
            HOTEL RAJWADA PALACE
          </span>
        </div>

        <button
          ref={firstFocusableRef}
          type="button"
          onClick={onClose}
          className="p-2 text-ivory/80 hover:text-gold focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
          aria-label="Close menu"
        >
          <span className="font-cinzel text-xs tracking-[0.2em] uppercase">Close [×]</span>
        </button>
      </div>

      {/* Main Editorial Nav Links */}
      <nav aria-label="Mobile Menu Links" className="py-10 my-auto flex flex-col space-y-6 sm:space-y-8">
        {items.map((item, idx) => {
          const isActive = activeId === item.id;
          return (
            <div
              key={item.id}
              className="group overflow-hidden"
              style={{
                animationDelay: `${idx * 60}ms`,
              }}
            >
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onSelect?.(item.id);
                  onClose();
                }}
                className="flex items-baseline justify-between py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-sand/60">0{idx + 1}</span>
                  <span
                    className={`font-serif text-3xl sm:text-4xl lg:text-5xl tracking-normal transition-colors duration-300 ${
                      isActive
                        ? 'text-gold italic font-medium'
                        : 'text-ivory group-hover:text-gold-light'
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
                <span className="font-cinzel text-xs tracking-widest text-sand/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  →
                </span>
              </a>
            </div>
          );
        })}
      </nav>

      {/* Bottom Conversion Action & Property Details */}
      <div className="pt-6 border-t border-white/10 space-y-6">
        <AvailabilityButton
          size="lg"
          className="w-full"
          onClick={() => {
            onClose();
            onCheckAvailability?.();
          }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-sand pt-2">
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-gold block mb-1">
              Location
            </span>
            <p className="leading-relaxed">
              Tukum, Urjanagar, Chandrapur, Maharashtra 442401
            </p>
          </div>
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-gold block mb-1">
              Google Verified
            </span>
            <p className="leading-relaxed">
              4.2 Rating · 460 Verified Reviews
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
