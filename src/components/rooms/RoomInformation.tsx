import React from 'react';
import { type RoomCategory } from '../../data/roomsData';
import { Typography } from '../Typography';
import { Button } from '../Button';

interface RoomInformationProps {
  room: RoomCategory;
  onCheckAvailability?: () => void;
  className?: string;
}

export const RoomInformation: React.FC<RoomInformationProps> = ({
  room,
  onCheckAvailability,
  className = '',
}) => {
  return (
    <div
      key={room.id}
      className={`flex flex-col justify-between h-full space-y-6 sm:space-y-8 animate-fadeIn ${className}`}
    >
      <div className="space-y-4">
        {/* Editorial Subtitle & Code */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-gold/80 tracking-widest">{room.code}</span>
          <span className="w-6 h-[1px] bg-gold/40" aria-hidden="true" />
          <span className="font-cinzel text-xs tracking-[0.2em] text-sand uppercase">
            {room.subtitle}
          </span>
        </div>

        {/* Room Title */}
        <Typography
          variant="h2"
          className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-ivory-light"
        >
          {room.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body"
          className="text-ivory-muted/80 text-sm sm:text-base leading-relaxed pt-2 max-w-xl font-light"
        >
          {room.description}
        </Typography>

        {/* Verified Details Matrix (Rendered only if verified items exist) */}
        {room.details && room.details.length > 0 && (
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
            {room.details.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-[10px] tracking-widest uppercase font-cinzel text-gold block">
                  {item.label}
                </span>
                <span className="text-xs text-ivory font-sans">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Verified Accommodation Credentials */}
        <div className="p-3 bg-charcoal-deep border border-white/5 text-[11px] text-sand/80 font-sans leading-relaxed">
          <span className="text-gold font-medium block mb-0.5">ACCOMMODATION &amp; SANCTUARY</span>
          Comfortable guest rooms positioned along Durgapur Road, Chandrapur. Check-in assistance, custom arrangements, and group accommodations available.
        </div>
      </div>

      {/* Primary Action Button */}
      <div className="pt-2 sm:pt-4">
        <Button
          variant="primary"
          size="md"
          onClick={onCheckAvailability}
          className="w-full sm:w-auto"
        >
          Check Availability
        </Button>
      </div>
    </div>
  );
};
