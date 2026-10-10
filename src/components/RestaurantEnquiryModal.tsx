import React, { useState } from 'react';
import { Typography } from './Typography';
import { Button } from './Button';
import { HOTEL_CONTACT_DATA } from '../data/locationData';

interface RestaurantEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const RestaurantEnquiryModal: React.FC<RestaurantEnquiryModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Table Reservation',
}) => {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [serviceType, setServiceType] = useState(initialService);
  const [guestCount, setGuestCount] = useState('2-4 Guests');
  const [diningDate, setDiningDate] = useState('');
  const [mealTime, setMealTime] = useState('Dinner (7:00 PM – 10:30 PM)');
  const [preferences, setPreferences] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*Restaurant & Dining Enquiry — Hotel Rajwada Palace*
• *Customer Name:* ${customerName || 'Customer'}
• *Phone:* ${phoneNumber || 'Not provided'}
• *Service Requested:* ${serviceType}
• *Party Size:* ${guestCount}
• *Preferred Date:* ${diningDate || 'Today / Upcoming'}
• *Meal Time:* ${mealTime}
${preferences ? `• *Special Dietary / Seating Request:* ${preferences}` : ''}

Please confirm table seating / banquet dining options.`;

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
              Rajwada Dining Desk
            </span>
            <Typography variant="h3" className="text-xl sm:text-2xl text-ivory-light mt-1 font-serif">
              Restaurant & Dining Enquiry
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
            <span className="text-gold font-medium">Distinct Culinary Journey:</span> Reserve table seating in our main dining hall, book group banquet catering, or order celebratory feast arrangements.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-sand mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Anand Deshmukh"
                className="w-full bg-charcoal px-3 py-2.5 border border-white/15 text-ivory focus:border-gold focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-sand mb-1">
                Phone Number *
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
                Dining Experience
              </label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full bg-charcoal px-3 py-2.5 border border-white/15 text-ivory focus:border-gold focus:outline-none"
              >
                <option value="Main Dining Hall Table">Main Dining Hall Table</option>
                <option value="Rooftop Terrace Dining">Rooftop Terrace Dining</option>
                <option value="Family Banquet Feast">Family Banquet Feast</option>
                <option value="Group Catering / Parcel Service">Group Catering / Parcel Order</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-sand mb-1">
                Number of Guests
              </label>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="w-full bg-charcoal px-3 py-2.5 border border-white/15 text-ivory focus:border-gold focus:outline-none"
              >
                <option value="1-2 Guests">1-2 Guests</option>
                <option value="2-4 Guests">2-4 Guests</option>
                <option value="5-10 Family Group">5-10 Family Group</option>
                <option value="10-25 Celebration Party">10-25 Celebration Party</option>
                <option value="25+ Banquet Gathering">25+ Banquet Gathering</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-sand mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                value={diningDate}
                onChange={(e) => setDiningDate(e.target.value)}
                className="w-full bg-charcoal px-3 py-2.5 border border-white/15 text-ivory focus:border-gold focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-sand mb-1">
                Meal Preference
              </label>
              <select
                value={mealTime}
                onChange={(e) => setMealTime(e.target.value)}
                className="w-full bg-charcoal px-3 py-2.5 border border-white/15 text-ivory focus:border-gold focus:outline-none"
              >
                <option value="Lunch (12:30 PM – 3:30 PM)">Lunch (12:30 PM – 3:30 PM)</option>
                <option value="Evening High Tea (4:30 PM – 6:30 PM)">Evening High Tea (4:30 PM – 6:30 PM)</option>
                <option value="Dinner (7:00 PM – 10:30 PM)">Dinner (7:00 PM – 10:30 PM)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider text-sand mb-1">
              Dietary Preferences or Special Requests
            </label>
            <textarea
              rows={2}
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
              placeholder="Pure Veg requirements, spice preference, birthday cake request..."
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
              Enquire Dining via WhatsApp
            </Button>
            <Button
              variant="secondary"
              size="md"
              as="a"
              href={`tel:${HOTEL_CONTACT_DATA.phoneRaw}`}
              className="w-full sm:w-auto text-center justify-center whitespace-nowrap"
            >
              Call Restaurant Desk
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
