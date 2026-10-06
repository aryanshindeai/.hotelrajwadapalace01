/**
 * DESTINATION & EXPERIENCE DATA ARCHITECTURE
 * Structured format for regional storytelling, landscapes, and cultural discovery around Chandrapur & Tadoba.
 *
 * STRICT SEPARATION & ZERO-DUPLICATE RULE:
 * 1. sourceType: "destination" separates regional context from hotel property assets.
 * 2. Every single primary and secondary destination visual is 100% UNIQUE.
 */

import { HOTEL_IMAGE_REGISTRY } from './hotelImageRegistry';

export interface ExperienceCategory {
  id: string;
  code: string; // e.g. "01", "02", "03"
  label: string; // e.g. "WILDLIFE", "CULTURE", "LOCAL"
  title: string;
  subtitle: string;
  description: string;
  primaryImageDesktop: string;
  primaryImageMobile: string;
  primaryImageAlt: string;
  secondaryImageDesktop?: string;
  secondaryImageMobile?: string;
  secondaryImageAlt?: string;
  secondaryCaption?: string;
  sourceType: 'destination' | 'hotel';
  isPlaceholderData: boolean;
}

export const EXPERIENCES_DATA: ExperienceCategory[] = [
  {
    id: 'exp-wildlife',
    code: '01',
    label: 'WILDLIFE',
    title: 'The Tadoba Wilderness',
    subtitle: 'Tadoba-Andhari Tiger Reserve Corridor',
    description:
      'Ancient dry deciduous forests, teak canopies, and legendary natural landscapes of the Vidarbha heartland. Hotel Rajwada Palace sits positioned on Tadoba Road / Durgapur Road, serving as a tranquil gateway for wilderness travellers visiting Chandrapur.',
    primaryImageDesktop: HOTEL_IMAGE_REGISTRY['dest-tadoba-01'].src,
    primaryImageMobile: HOTEL_IMAGE_REGISTRY['dest-tadoba-01'].src,
    primaryImageAlt: HOTEL_IMAGE_REGISTRY['dest-tadoba-01'].alt,
    secondaryImageDesktop: HOTEL_IMAGE_REGISTRY['dest-tadoba-02'].src,
    secondaryImageMobile: HOTEL_IMAGE_REGISTRY['dest-tadoba-02'].src,
    secondaryImageAlt: HOTEL_IMAGE_REGISTRY['dest-tadoba-02'].alt,
    secondaryCaption: 'Teak forests & sanctuary woodland canopies',
    sourceType: 'destination',
    isPlaceholderData: false,
  },
  {
    id: 'exp-culture',
    code: '02',
    label: 'CULTURE',
    title: 'Historic Chandrapur',
    subtitle: 'Gond Dynasties & Architectural Heritage',
    description:
      'A historic stronghold along the Erai and Wardha river basins, renowned for its ancient fort ramparts, Gond kings heritage, and rich stone craft traditions spanning centuries of Deccan and central Indian history.',
    primaryImageDesktop: HOTEL_IMAGE_REGISTRY['dest-heritage-01'].src,
    primaryImageMobile: HOTEL_IMAGE_REGISTRY['dest-heritage-01'].src,
    primaryImageAlt: HOTEL_IMAGE_REGISTRY['dest-heritage-01'].alt,
    secondaryImageDesktop: HOTEL_IMAGE_REGISTRY['dest-heritage-02'].src,
    secondaryImageMobile: HOTEL_IMAGE_REGISTRY['dest-heritage-02'].src,
    secondaryImageAlt: HOTEL_IMAGE_REGISTRY['dest-heritage-02'].alt,
    secondaryCaption: 'Historic ramparts & stone architectural heritage',
    sourceType: 'destination',
    isPlaceholderData: false,
  },
];
