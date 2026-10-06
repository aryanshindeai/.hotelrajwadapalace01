import React from 'react';
import { type PropertyAddress } from '../../data/locationData';
import { Typography } from '../Typography';

interface PropertyAddressProps {
  address: PropertyAddress;
  propertyName: string;
  category: string;
  className?: string;
}

export const PropertyAddressBlock: React.FC<PropertyAddressProps> = ({
  address,
  propertyName,
  category,
  className = '',
}) => {
  return (
    <address className={`not-italic space-y-4 ${className}`}>
      {/* Title */}
      <div>
        <Typography
          variant="h2"
          className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-ivory-light"
        >
          {propertyName}
        </Typography>
        <span className="font-sans text-xs tracking-wider uppercase text-sand/80 block mt-1">
          Category: {category}
        </span>
      </div>

      {/* Structured Address Hierarchy with clean line breaks */}
      <div className="pt-2 border-t border-white/5 space-y-1 text-sm sm:text-base text-ivory-muted/90 font-light leading-relaxed">
        <p className="text-ivory font-normal">{address.line1}</p>
        <p>{address.line2}</p>
        <p className="text-ivory-warm">{address.road}</p>
        <p>{address.area}</p>
        <p className="text-gold-light font-medium tracking-wide pt-1">
          {address.cityStatePin}
        </p>
      </div>
    </address>
  );
};
