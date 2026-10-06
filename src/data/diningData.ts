/**
 * DINING EXPERIENCE DATA ARCHITECTURE
 * Structured data schema for dining experiences and banquet culinary spaces.
 *
 * EXACT PHOTO RULE:
 * 1. All images are bound to HOTEL_IMAGE_REGISTRY.
 * 2. Every primary and secondary image is 100% UNIQUE.
 */

import { HOTEL_IMAGE_REGISTRY } from './hotelImageRegistry';

export interface DiningDetailItem {
  label: string;
  value: string;
}

export interface DiningExperience {
  id: string;
  code: string; // e.g., "01", "02"
  venueCategory: string; // e.g. "DINING VENUE"
  title: string;
  subtitle: string;
  description: string;
  featureImageDesktop: string;
  featureImageMobile: string;
  featureImageAlt: string;
  supportingImageDesktop?: string;
  supportingImageMobile?: string;
  supportingImageAlt?: string;
  supportingImageCaption?: string;
  isPlaceholderData: boolean;
  details?: DiningDetailItem[];
  menuLink?: string;
}

export const DINING_DATA: DiningExperience[] = [
  {
    id: 'dining-venue-01',
    code: '01',
    venueCategory: 'DINING VENUE',
    title: 'Dining Venue 01',
    subtitle: 'The Main Dining Hall · Ground Level',
    description:
      'Warmly illuminated interior dining celebrating authentic regional flavours and leisurely hospitality for resident guests, passing travelers, and celebration parties.',
    featureImageDesktop: HOTEL_IMAGE_REGISTRY['dining-venue-01'].src,
    featureImageMobile: HOTEL_IMAGE_REGISTRY['dining-venue-01'].src,
    featureImageAlt: HOTEL_IMAGE_REGISTRY['dining-venue-01'].alt,
    supportingImageDesktop: HOTEL_IMAGE_REGISTRY['dining-venue-01-sec'].src,
    supportingImageMobile: HOTEL_IMAGE_REGISTRY['dining-venue-01-sec'].src,
    supportingImageAlt: HOTEL_IMAGE_REGISTRY['dining-venue-01-sec'].alt,
    supportingImageCaption: 'Table setting & evening ambience',
    isPlaceholderData: false,
  },
  {
    id: 'dining-venue-02',
    code: '02',
    venueCategory: 'BANQUET DINING',
    title: 'Banquet & Ceremonial Feasts',
    subtitle: 'Celebration Dining Wing · Grand Hall',
    description:
      'Expansive dining halls purpose-built for festive banquets, wedding feasts, and formal receptions hosted at Hotel Rajwada Palace in Chandrapur.',
    featureImageDesktop: HOTEL_IMAGE_REGISTRY['dining-venue-02'].src,
    featureImageMobile: HOTEL_IMAGE_REGISTRY['dining-venue-02'].src,
    featureImageAlt: HOTEL_IMAGE_REGISTRY['dining-venue-02'].alt,
    supportingImageDesktop: HOTEL_IMAGE_REGISTRY['dining-venue-02-sec'].src,
    supportingImageMobile: HOTEL_IMAGE_REGISTRY['dining-venue-02-sec'].src,
    supportingImageAlt: HOTEL_IMAGE_REGISTRY['dining-venue-02-sec'].alt,
    supportingImageCaption: 'Banqueting arrangements & festive hospitality',
    isPlaceholderData: false,
  },
];
