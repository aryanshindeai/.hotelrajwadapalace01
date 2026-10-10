import React, { useState } from 'react';
import { Typography } from './Typography';
import { Button } from './Button';
import { HOTEL_CONTACT_DATA } from '../data/locationData';

interface EventEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEventType?: string;
}

export const EventEnquiryModal: React.FC<EventEnquiryModalProps> = ({
  isOpen,
  onClose,
  initialEventType = 'Grand Wedding & Mandap Ceremony',
}) => {
  const [hostName, setHostName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [eventType, setEventType] = useState(initialEventType);
  const [preferredDate, setPreferredDate] = useState('');
  const [guestCount, setGuestCount] = useState('200 – 500 Guests');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*Weddings & Events Enquiry — Hotel Rajwada Palace*
• *Host Name:* ${hostName || 'Host'}
• *Phone Number:* ${phoneNumber || 'Not provided'}
• *Event Type:* ${eventType}
• *Preferred Date:* ${preferredDate || 'To be finalized'}
• *Approximate Guest Count:* ${guestCount}
${notes ? `• *Event Details / Mandap / Catering Notes:* ${notes}` : ''}

Please share venue availability, hall dimensions, and celebration package details.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919921019664?text=${encoded}`, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-charcoal-deep/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
    >
      <div className="border border-gold/40 bg-charcoal-surface max-w-lg w-full p-6 sm:p-8 shadow-2xl relative my-8">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div>
            <span className="font-cinzel text-xs tracking-[0.25em] text-gold uppercase block">
              Banquet & Event Management
            </span>
            <Typography variant="h3" className="text-xl sm:text-2xl text-ivory-light mt-1 font-serif">
              Weddings & Events Enquiry
            </Typography>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-sand/80 hover:text-ivory text-xl p-2 cursor-pointer transition-colors"
            aria-label="Close dialog"
          >
            ✕
          </button>
        </div>

        {/* Notice */}
        <div className="p-3 bg-charcoal/80 border border-gold/20 mb-6 text-xs text-sand leading-relaxed">
          <p className="text-ivory-warm">
            <span className="text-gold font-medium">Bespoke Celebrations:</span> Reserve our grand banquet hall, decorated ceremonial stage, or open-air rooftop terrace for weddings, receptions, and milestones in Chandrapur.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-sand mb-1">
                Host / Organizer Name *
              </label>
              <input
                type="text"
                required
                value={hostName}
                onChange={(e) => setHostName(e.target.value)}
                placeholder="e.g. Rajesh Patil"
                className="w-full bg-charcoal px-3 py-2.5 border border-white/15 text-ivory focus:border-gold focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-sand mb-1">
                Contact Phone *
              </label>
              <input
                type="tel"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="e.g. +91 99210 19664"
                className="w-full bg-charcoal px-3 py-2.5 border border-white/15 text-ivory focus:border-gold focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-sand mb-1">
                Type of Celebration *
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full bg-charcoal px-3 py-2.5 border border-white/15 text-ivory focus:border-gold focus:outline-none"
              >
                <option value="Grand Wedding & Mandap Ceremony">Grand Wedding & Mandap Ceremony</option>
                <option value="Wedding Reception & Stage Gathering">Wedding Reception & Stage Gathering</option>
                <option value="Engagement / Ring Ceremony">Engagement / Ring Ceremony</option>
                <option value="Rooftop Celebration / Family Gathering">Rooftop Celebration / Family Gathering</option>
                <option value="Naming Ceremony / Milestone">Naming Ceremony / Milestone</option>
                <option value="Corporate / Cultural Assembly">Corporate / Cultural Assembly</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-sand mb-1">
                Approximate Guest Count
              </label>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="w-full bg-charcoal px-3 py-2.5 border border-white/15 text-ivory focus:border-gold focus:outline-none"
              >
                <option value="50 – 100 Guests">50 – 100 Guests (Intimate / Family)</option>
                <option value="100 – 250 Guests">100 – 250 Guests (Banquet Hall)</option>
                <option value="250 – 500 Guests">250 – 500 Guests (Grand Celebration)</option>
                <option value="500 – 1000+ Guests">500 – 1000+ Guests (Full Palace Grounds)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider text-sand mb-1">
              Preferred Date or Range
            </label>
            <input
              type="date"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="w-full bg-charcoal px-3 py-2.5 border border-white/15 text-ivory focus:border-gold focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider text-sand mb-1">
              Event Details & Requirements
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Catering preferences, mandap decoration, multi-day celebrations..."
              className="w-full bg-charcoal px-3 py-2 border border-white/15 text-ivory focus:border-gold focus:outline-none"
            />
          </div>

          <div className="pt-3 flex flex-col sm:flex-row gap-3">
            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full sm:flex-1 text-center justify-center"
            >
              Enquire Event via WhatsApp
            </Button>
            <Button
              variant="secondary"
              size="md"
              as="a"
              href={`tel:${HOTEL_CONTACT_DATA.phoneRaw}`}
              className="w-full sm:w-auto text-center justify-center whitespace-nowrap"
            >
              Call Banquet Desk
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
