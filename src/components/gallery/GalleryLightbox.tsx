import React, { useEffect, useRef } from 'react';
import { type GalleryItem } from '../../data/galleryData';

interface GalleryLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  isOpen,
  onClose,
  items,
  currentIndex,
  onSelectIndex,
}) => {
  const currentItem = items[currentIndex] || items[0];
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Keyboard navigation: ESC closes, Arrow keys navigate
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        onSelectIndex((currentIndex + 1) % items.length);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onSelectIndex((currentIndex - 1 + items.length) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length, onClose, onSelectIndex]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      // Auto-focus the close button for accessibility
      closeButtonRef.current?.focus();
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  // Touch Swipe Handlers for mobile gestures
  const touchStartXRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    // Minimum swipe threshold (50px)
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left -> Next
        onSelectIndex((currentIndex + 1) % items.length);
      } else {
        // Swipe right -> Prev
        onSelectIndex((currentIndex - 1 + items.length) % items.length);
      }
    }
    touchStartXRef.current = null;
  };

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox viewer"
      className="fixed inset-0 z-50 bg-charcoal-deep/98 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 lg:p-8 animate-fadeIn select-none"
    >
      {/* 1. Top Header Bar: Counter, Title, and Close Button */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 z-20">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-gold tracking-widest">
            {String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </span>
          <span className="w-4 h-[1px] bg-gold/40" aria-hidden="true" />
          <span className="font-cinzel text-xs tracking-[0.2em] uppercase text-ivory">
            {currentItem.categoryLabel}
          </span>
        </div>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="p-2 text-ivory/80 hover:text-gold transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-gold cursor-pointer"
          aria-label="Close image viewer"
        >
          <span className="font-cinzel text-xs tracking-[0.2em] uppercase">Close [✕]</span>
        </button>
      </div>

      {/* 2. Main Immersive Image Presentation with Touch Swipe */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative flex-1 flex items-center justify-center my-4 overflow-hidden touch-pan-y"
      >
        {/* Previous Button */}
        <button
          type="button"
          onClick={() => onSelectIndex((currentIndex - 1 + items.length) % items.length)}
          className="absolute left-2 sm:left-4 z-20 w-11 h-11 flex items-center justify-center bg-charcoal-deep/80 backdrop-blur-md border border-white/10 text-ivory/80 hover:text-gold hover:border-gold/40 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-gold cursor-pointer"
          aria-label="Previous photograph"
        >
          ←
        </button>

        {/* Display Image with Modern Picture element */}
        <div className="max-h-[75vh] max-w-[90vw] overflow-hidden border border-white/10 bg-charcoal-surface">
          <picture>
            <source
              type="image/webp"
              srcSet={currentItem.srcDesktop.replace(/\.(jpg|jpeg|png)$/i, '.webp')}
            />
            <img
              key={currentItem.id}
              src={currentItem.srcDesktop}
              alt={currentItem.alt}
              decoding="async"
              className="max-h-[75vh] max-w-[90vw] object-contain transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
          </picture>
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={() => onSelectIndex((currentIndex + 1) % items.length)}
          className="absolute right-2 sm:right-4 z-20 w-11 h-11 flex items-center justify-center bg-charcoal-deep/80 backdrop-blur-md border border-white/10 text-ivory/80 hover:text-gold hover:border-gold/40 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-gold cursor-pointer"
          aria-label="Next photograph"
        >
          →
        </button>
      </div>

      {/* 3. Bottom Information & Metadata Bar */}
      <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row items-baseline justify-between gap-2 z-20">
        <div>
          <h3 className="font-serif text-lg sm:text-xl text-ivory-light font-light leading-tight">
            {currentItem.title}
          </h3>
          {currentItem.caption && (
            <p className="text-xs text-sand/80 font-sans mt-0.5">
              {currentItem.caption}
            </p>
          )}
        </div>
        <div className="text-[10px] font-mono tracking-widest uppercase text-sand/60">
          Hotel Rajwada Palace · Chandrapur
        </div>
      </div>
    </div>
  );
};
