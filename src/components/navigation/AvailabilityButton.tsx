import React from 'react';

interface AvailabilityButtonProps {
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const AvailabilityButton: React.FC<AvailabilityButtonProps> = ({
  onClick,
  className = '',
  size = 'md',
}) => {
  const sizeStyles = {
    sm: 'text-[11px] py-2 px-5 tracking-[0.16em]',
    md: 'text-xs py-3 px-6 lg:px-7 tracking-[0.18em]',
    lg: 'text-xs md:text-sm py-3.5 px-8 tracking-[0.2em]',
  }[size];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center font-sans uppercase font-medium transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] focus:outline-none focus-visible:ring-1 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal cursor-pointer select-none bg-gold text-charcoal-deep border border-gold hover:bg-gold-light hover:border-gold-light active:bg-gold-muted active:border-gold-muted shadow-sm hover:shadow-[0_4px_24px_rgba(194,166,118,0.22)] ${sizeStyles} ${className}`.trim()}
    >
      <span className="relative z-10 transition-transform duration-300 group-hover:scale-[1.02]">
        Check Availability
      </span>
      {/* Refined subtle corner micro-accent for architectural craftsmanship */}
      <span
        aria-hidden="true"
        className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-charcoal/40 transition-opacity duration-300 group-hover:opacity-100"
      />
    </button>
  );
};
