import React from 'react';

interface BrandMarkProps {
  className?: string;
  isScrolled?: boolean;
  onClick?: () => void;
}

export const BrandMark: React.FC<BrandMarkProps> = ({
  className = '',
  onClick,
}) => {
  return (
    <a
      href="#top"
      onClick={onClick}
      className={`group inline-flex flex-col text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal transition-transform duration-300 ${className}`}
      aria-label="Hotel Rajwada Palace - Home"
    >


      {/* Primary Architectural Wordmark */}
      <span className="font-serif text-lg sm:text-xl lg:text-2xl tracking-[0.06em] text-ivory-light font-normal leading-tight mt-0.5 group-hover:text-gold-light transition-colors duration-300">
        HOTEL RAJWADA PALACE
      </span>

      {/* Location anchor tag */}
      <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-sand/80 mt-0.5 group-hover:text-sand transition-colors duration-300">
        Chandrapur · Maharashtra
      </span>
    </a>
  );
};
