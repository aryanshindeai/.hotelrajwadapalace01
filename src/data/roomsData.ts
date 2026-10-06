/**
 * ROOMS & SUITES DATA ARCHITECTURE
 * Structured format for room categories, imagery, and verified details.
 *
 * EXACT PHOTO RULE:
 * 1. All images are bound to HOTEL_IMAGE_REGISTRY.
 * 2. NO stock photos or unverified hotel rooms.
 * 3. When physical master photos are delivered from site visit / client, they update in registry.
 */

import { HOTEL_IMAGE_REGISTRY } from './hotelImageRegistry';

export interface RoomDetailItem {
  label: string;
  value: string;
}

export interface RoomCategory {
  id: string;
  code: string; // e.g. "01", "02", "03"
  categoryTag: string;
  title: string;
  subtitle: string;
  description: string;
  imageDesktop: string;
  imageMobile: string;
  imageAlt: string;
  isPlaceholderData: boolean;
  /** Only populated when authentic information is verified */
  details?: RoomDetailItem[];
}

export const ROOMS_DATA: RoomCategory[] = [
  {
    id: 'room-category-01',
    code: '01',
    categoryTag: 'ROOM CATEGORY',
    title: 'Room Category 01',
    subtitle: 'Quiet Sanctuary · Courtyard Wing',
    description:
      'Spacious guest quarters positioned for serenity and privacy. Engineered for restful retreats after celebrations or excursions along the Tadoba corridor in Chandrapur.',
    imageDesktop: HOTEL_IMAGE_REGISTRY['room-category-01'].src,
    imageMobile: HOTEL_IMAGE_REGISTRY['room-category-01'].src,
    imageAlt: HOTEL_IMAGE_REGISTRY['room-category-01'].alt,
    isPlaceholderData: true,
  },
  {
    id: 'room-category-02',
    code: '02',
    categoryTag: 'ROOM CATEGORY',
    title: 'Room Category 02',
    subtitle: 'Distinguished Living · Upper Level',
    description:
      'Refined proportions with natural ambient light and generous interior volumes, tailored for extended stays, bridal parties, and banquet attendees.',
    imageDesktop: HOTEL_IMAGE_REGISTRY['room-category-02'].src,
    imageMobile: HOTEL_IMAGE_REGISTRY['room-category-02'].src,
    imageAlt: HOTEL_IMAGE_REGISTRY['room-category-02'].alt,
    isPlaceholderData: true,
  },
  {
    id: 'room-category-03',
    code: '03',
    categoryTag: 'ROOM CATEGORY',
    title: 'Room Category 03',
    subtitle: 'Palace Suite · Ceremonial Suite',
    description:
      'The premier accommodation of Hotel Rajwada Palace, offering expansive sitting space and dignified hospitality for guests of honor and special celebrations.',
    imageDesktop: HOTEL_IMAGE_REGISTRY['room-category-03'].src,
    imageMobile: HOTEL_IMAGE_REGISTRY['room-category-03'].src,
    imageAlt: HOTEL_IMAGE_REGISTRY['room-category-03'].alt,
    isPlaceholderData: true,
  },
];
