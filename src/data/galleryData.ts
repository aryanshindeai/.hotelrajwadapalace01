/**
 * GALLERY DATA ARCHITECTURE
 * Structured format for curated visual heritage, property spaces, and destination contexts.
 *
 * EXACT PHOTO RULE:
 * 1. Every gallery item must be verified and drawn from HOTEL_IMAGE_REGISTRY.
 * 2. NO stock photos or unverified hotel rooms.
 * 3. Clearly differentiates property architecture from destination context.
 */

import { HOTEL_IMAGE_REGISTRY } from './hotelImageRegistry';

export type GalleryCategory = 'all' | 'property' | 'rooms' | 'celebrations';

export interface GalleryItem {
  id: string;
  code: string; // e.g. "01", "02", "03"
  srcDesktop: string;
  srcMobile: string;
  alt: string;
  category: Exclude<GalleryCategory, 'all'>;
  categoryLabel: string;
  title: string;
  caption?: string;
  orientation: 'featured' | 'landscape' | 'portrait' | 'square';
  featured?: boolean;
  isPlaceholderData: boolean;
  sourceType: 'property' | 'destination';
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-01',
    code: '01',
    srcDesktop: HOTEL_IMAGE_REGISTRY['gallery-property-01'].src,
    srcMobile: HOTEL_IMAGE_REGISTRY['gallery-property-01'].src,
    alt: HOTEL_IMAGE_REGISTRY['gallery-property-01'].alt,
    category: 'property',
    categoryLabel: 'PROPERTY',
    title: 'The Palatial Exterior Facade',
    caption: 'Architectural entrance facade in Chandrapur',
    orientation: 'featured',
    featured: true,
    isPlaceholderData: false,
    sourceType: 'property',
  },
  {
    id: 'gal-02',
    code: '02',
    srcDesktop: HOTEL_IMAGE_REGISTRY['room-category-01'].src,
    srcMobile: HOTEL_IMAGE_REGISTRY['room-category-01'].src,
    alt: HOTEL_IMAGE_REGISTRY['room-category-01'].alt,
    category: 'rooms',
    categoryLabel: 'ROOMS',
    title: 'Sanctuary Guest Quarters',
    caption: 'Authentic guest room accommodations',
    orientation: 'landscape',
    isPlaceholderData: false,
    sourceType: 'property',
  },
  {
    id: 'gal-03',
    code: '03',
    srcDesktop: HOTEL_IMAGE_REGISTRY['gallery-property-02'].src,
    srcMobile: HOTEL_IMAGE_REGISTRY['gallery-property-02'].src,
    alt: HOTEL_IMAGE_REGISTRY['gallery-property-02'].alt,
    category: 'property',
    categoryLabel: 'PROPERTY',
    title: 'Hospitality Reception & Foyer',
    caption: 'Refined lobby welcoming resident guests',
    orientation: 'portrait',
    isPlaceholderData: false,
    sourceType: 'property',
  },
  {
    id: 'gal-04',
    code: '04',
    srcDesktop: HOTEL_IMAGE_REGISTRY['gallery-property-04'].src,
    srcMobile: HOTEL_IMAGE_REGISTRY['gallery-property-04'].src,
    alt: HOTEL_IMAGE_REGISTRY['gallery-property-04'].alt,
    category: 'celebrations',
    categoryLabel: 'CELEBRATIONS',
    title: 'Grand Banquet Celebration Hall',
    caption: 'Expansive ceremonial seating & banquet chandeliers',
    orientation: 'landscape',
    isPlaceholderData: false,
    sourceType: 'property',
  },
  {
    id: 'gal-05',
    code: '05',
    srcDesktop: HOTEL_IMAGE_REGISTRY['gallery-property-03'].src,
    srcMobile: HOTEL_IMAGE_REGISTRY['gallery-property-03'].src,
    alt: HOTEL_IMAGE_REGISTRY['gallery-property-03'].alt,
    category: 'celebrations',
    categoryLabel: 'CELEBRATIONS',
    title: 'Grand Banquet Celebration Hall',
    caption: 'Celebratory banquet setup for weddings & events',
    orientation: 'featured',
    featured: true,
    isPlaceholderData: false,
    sourceType: 'property',
  },
  {
    id: 'gal-06',
    code: '06',
    srcDesktop: HOTEL_IMAGE_REGISTRY['dining-venue-01'].src,
    srcMobile: HOTEL_IMAGE_REGISTRY['dining-venue-01'].srcMobile || HOTEL_IMAGE_REGISTRY['dining-venue-01'].src,
    alt: HOTEL_IMAGE_REGISTRY['dining-venue-01'].alt,
    category: 'property',
    categoryLabel: 'PROPERTY',
    title: 'Palatial Dining Hall & Interiors',
    caption: 'Chandeliers and spacious banquet dining arrangements',
    orientation: 'landscape',
    isPlaceholderData: false,
    sourceType: 'property',
  },
];
