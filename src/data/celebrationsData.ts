/**
 * CELEBRATIONS & BANQUETS DATA ARCHITECTURE
 * Structured format for event categories, banquet spaces, and verified celebration specifications.
 *
 * EXACT PHOTO RULE:
 * 1. All images are bound to HOTEL_IMAGE_REGISTRY.
 * 2. Every single primary and secondary image is 100% UNIQUE.
 */

import { HOTEL_IMAGE_REGISTRY } from './hotelImageRegistry';

export interface EventDetailItem {
  label: string;
  value: string;
}

export interface CelebrationCategory {
  id: string;
  code: string; // e.g. "01", "02", "03", "04"
  label: string; // e.g. "WEDDINGS"
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
  isPlaceholderData: boolean;
  /** Only populated when authentic information is verified */
  details?: EventDetailItem[];
}

export const CELEBRATIONS_DATA: CelebrationCategory[] = [
  {
    id: 'celebrations-weddings',
    code: '01',
    label: 'WEDDINGS',
    title: 'Grand Weddings & Ceremonies',
    subtitle: 'Celebratory Floral Adornment & Ceremonial Stage',
    description:
      'Imposing ceremonial settings tailored for sacred vows, grand baraat entrances, and heartfelt wedding rituals with family and guests in Chandrapur.',
    primaryImageDesktop: HOTEL_IMAGE_REGISTRY['celebrations-weddings'].src,
    primaryImageMobile: HOTEL_IMAGE_REGISTRY['celebrations-weddings'].src,
    primaryImageAlt: HOTEL_IMAGE_REGISTRY['celebrations-weddings'].alt,
    secondaryImageDesktop: HOTEL_IMAGE_REGISTRY['celebrations-weddings-sec'].src,
    secondaryImageMobile: HOTEL_IMAGE_REGISTRY['celebrations-weddings-sec'].src,
    secondaryImageAlt: HOTEL_IMAGE_REGISTRY['celebrations-weddings-sec'].alt,
    secondaryCaption: 'Palatial Courtyard & Main Banquet Hall',
    isPlaceholderData: false,
  },
  {
    id: 'celebrations-receptions',
    code: '02',
    label: 'RECEPTIONS',
    title: 'Festive Receptions & Feasts',
    subtitle: 'Expansive Evening Lawn & Reception Grounds',
    description:
      'Generous hospitality areas configured to host memorable evening receptions, live catering arrangements, and formal felicitation stages.',
    primaryImageDesktop: HOTEL_IMAGE_REGISTRY['celebrations-receptions'].src,
    primaryImageMobile: HOTEL_IMAGE_REGISTRY['celebrations-receptions'].src,
    primaryImageAlt: HOTEL_IMAGE_REGISTRY['celebrations-receptions'].alt,
    secondaryImageDesktop: HOTEL_IMAGE_REGISTRY['celebrations-receptions-sec'].src,
    secondaryImageMobile: HOTEL_IMAGE_REGISTRY['celebrations-receptions-sec'].src,
    secondaryImageAlt: HOTEL_IMAGE_REGISTRY['celebrations-receptions-sec'].alt,
    secondaryCaption: 'Banqueting arrangements & festive hospitality',
    isPlaceholderData: false,
  },
  {
    id: 'celebrations-family',
    code: '03',
    label: 'CELEBRATIONS',
    title: 'Family Gatherings & Milestones',
    subtitle: 'Private Dining Wing & Banquet Suites',
    description:
      'Intimate and grand celebratory halls suited for anniversary commemorations, sangeet evenings, birthday celebrations, and family unions.',
    primaryImageDesktop: HOTEL_IMAGE_REGISTRY['celebrations-family'].src,
    primaryImageMobile: HOTEL_IMAGE_REGISTRY['celebrations-family'].src,
    primaryImageAlt: HOTEL_IMAGE_REGISTRY['celebrations-family'].alt,
    secondaryImageDesktop: HOTEL_IMAGE_REGISTRY['celebrations-family-sec'].src,
    secondaryImageMobile: HOTEL_IMAGE_REGISTRY['celebrations-family-sec'].src,
    secondaryImageAlt: HOTEL_IMAGE_REGISTRY['celebrations-family-sec'].alt,
    secondaryCaption: 'Intimate evening warmth & shared happiness',
    isPlaceholderData: false,
  },
  {
    id: 'celebrations-events',
    code: '04',
    label: 'EVENTS',
    title: 'Corporate & Formal Gatherings',
    subtitle: 'Conference & Banquet Enclosure',
    description:
      'Professional banquet infrastructure for annual corporate assemblies, business colloquiums, awards presentations, and civic convocations.',
    primaryImageDesktop: HOTEL_IMAGE_REGISTRY['celebrations-events'].src,
    primaryImageMobile: HOTEL_IMAGE_REGISTRY['celebrations-events'].src,
    primaryImageAlt: HOTEL_IMAGE_REGISTRY['celebrations-events'].alt,
    secondaryImageDesktop: HOTEL_IMAGE_REGISTRY['celebrations-events-sec'].src,
    secondaryImageMobile: HOTEL_IMAGE_REGISTRY['celebrations-events-sec'].src,
    secondaryImageAlt: HOTEL_IMAGE_REGISTRY['celebrations-events-sec'].alt,
    secondaryCaption: 'Structured seating & presentation arrangements',
    isPlaceholderData: false,
  },
];
