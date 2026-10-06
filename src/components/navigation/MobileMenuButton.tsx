import React from 'react';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
  ariaControls?: string;
}

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  isOpen,
  onClick,
  className = '',
  ariaControls = 'mobile-menu-overlay',
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex items-center justify-center p-3 text-ivory transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold cursor-pointer ${className}`}
      aria-label={isOpen ? 'Close luxury navigation menu' : 'Open luxury navigation menu'}
      aria-expanded={isOpen}
      aria-controls={ariaControls}
    >
      <div className="relative w-6 h-4 flex flex-col justify-between items-end">
        {/* Top bar */}
        <span
          className={`h-[1.5px] bg-ivory transition-all duration-350 ease-[cubic-bezier(0.25,1,0.5,1)] origin-right ${
            isOpen ? 'w-5 -rotate-45 translate-y-[2px] bg-gold' : 'w-6 group-hover:w-5'
          }`}
        />
        {/* Middle bar */}
        <span
          className={`h-[1.5px] bg-ivory transition-all duration-300 ease-out ${
            isOpen ? 'opacity-0 w-0' : 'w-4 group-hover:w-6'
          }`}
        />
        {/* Bottom bar */}
        <span
          className={`h-[1.5px] bg-ivory transition-all duration-350 ease-[cubic-bezier(0.25,1,0.5,1)] origin-right ${
            isOpen ? 'w-5 rotate-45 -translate-y-[2px] bg-gold' : 'w-5 group-hover:w-4'
          }`}
        />
      </div>
    </button>
  );
};
