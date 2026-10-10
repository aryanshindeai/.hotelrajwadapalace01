/**
 * GALLERY DATA ARCHITECTURE
 * Structured format for curated visual heritage across 5 verified client categories:
 * 1. Weddings
 * 2. Other Events
 * 3. Hotel & Rooms
 * 4. Restaurant & Food
 * 5. Property & Facilities
 *
 * EXACT PHOTO RULE:
 * 1. Every gallery item is drawn from verified high-resolution photographs in HOTEL_IMAGE_REGISTRY.
 * 2. NO stock photos or unverified hotel rooms.
 */

import { HOTEL_IMAGE_REGISTRY } from './hotelImageRegistry';

export type GalleryCategory =
  | 'all'
  | 'weddings'
  | 'other-events'
  | 'rooms'
  | 'restaurant'
  | 'property';

export interface GalleryItem {
  id: string;
  code: string;
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
  // --- 1. WEDDINGS ---
  {
    id: 'gal-wed-01',
    code: '01',
    srcDesktop: HOTEL_IMAGE_REGISTRY['celebrations-weddings'].src,
    srcMobile: HOTEL_IMAGE_REGISTRY['celebrations-weddings'].src,
    alt: HOTEL_IMAGE_REGISTRY['celebrations-weddings'].alt,
    category: 'weddings',
    categoryLabel: 'WEDDINGS',
    title: 'Grand Ceremonial Wedding Stage',
    caption: 'Floral arch adornment & royal couple throne seating',
    orientation: 'featured',
    featured: true,
    isPlaceholderData: false,
    sourceType: 'property',
  },
  {
    id: 'gal-wed-02',
    code: '02',
    srcDesktop: HOTEL_IMAGE_REGISTRY['celebrations-receptions-sec'].src,
    srcMobile: HOTEL_IMAGE_REGISTRY['celebrations-receptions-sec'].src,
    alt: HOTEL_IMAGE_REGISTRY['celebrations-receptions-sec'].alt,
    category: 'weddings',
    categoryLabel: 'WEDDINGS',
    title: 'Traditional Wedding Mandap Canopy',
    caption: 'Ornate draped mandap canopy with sacred ceremony seating',
    orientation: 'landscape',
    isPlaceholderData: false,
    sourceType: 'property',
  },
  {
    id: 'gal-wed-03',
    code: '03',
    srcDesktop: HOTEL_IMAGE_REGISTRY['celebrations-receptions'].src,
    srcMobile: HOTEL_IMAGE_REGISTRY['celebrations-receptions'].src,
    alt: HOTEL_IMAGE_REGISTRY['celebrations-receptions'].alt,
    category: 'weddings',
    categoryLabel: 'WEDDINGS',
    title: 'Palatial Wedding Reception Stage',
    caption: 'Illuminated backdrop and majestic royal sofa seating',
    orientation: 'landscape',
    isPlaceholderData: false,
    sourceType: 'property',
  },
  {
    id: 'gal-wed-04',
    code: '04',
    srcDesktop: HOTEL_IMAGE_REGISTRY['celebrations-weddings-sec'].src,
    srcMobile: HOTEL_IMAGE_REGISTRY['celebrations-weddings-sec'].src,
    alt: HOTEL_IMAGE_REGISTRY['celebrations-weddings-sec'].alt,
    category: 'weddings',
    categoryLabel: 'WEDDINGS',
    title: 'Main Banquet Hall Central Aisle',
    caption: 'Spacious ceremonial seating layout under glowing chandeliers',
    orientation: 'landscape',
    isPlaceholderData: false,
    sourceType: 'property',
  },

  // --- 2. OTHER EVENTS ---
  {
    id: 'gal-evt-01',
    code: '05',
    srcDesktop: HOTEL_IMAGE_REGISTRY['celebrations-events'].src,
    srcMobile: HOTEL_IMAGE_REGISTRY['celebrations-events'].src,
    alt: HOTEL_IMAGE_REGISTRY['celebrations-events'].alt,
    category: 'other-events',
    categoryLabel: 'OTHER EVENTS',
    title: 'Naming Ceremony & Milestone Banquet',
    caption: 'Celebratory stage setup for family milestones and formal assemblies',
    orientation: 'featured',
    featured: true,
    isPlaceholderData: false,
    sourceType: 'property',
  },
  {
    id: 'gal-evt-02',
    code: '06',
    srcDesktop: HOTEL_IMAGE_REGISTRY['celebrations-events-sec'].src,
    srcMobile: HOTEL_IMAGE_REGISTRY['celebrations-events-sec'].src,
    alt: HOTEL_IMAGE_REGISTRY['celebrations-events-sec'].alt,
    category: 'other-events',
    categoryLabel: 'OTHER EVENTS',
    title: 'Celebration Chaise Lounge Staging',
    caption: 'Floral halo arch with regal velvet sofa arrangement',
    orientation: 'landscape',
    isPlaceholderData: false,
    sourceType: 'property',
  },
  {
    id: 'gal-evt-03',
    code: '07',
    srcDesktop: '/images/rajwada-palace/verified/rajwada-gala-protection-master.jpg',
    srcMobile: '/images/rajwada-palace/verified/rajwada-gala-protection-master.jpg',
    alt: 'Hotel Rajwada Palace covered gala celebration hall setup in Chandrapur',
    category: 'other-events',
    categoryLabel: 'OTHER EVENTS',
    title: 'Covered Gala & Celebration Grounds',
    caption: 'Weather-protected all-season banquet venue layout',
    orientation: 'landscape',
    isPlaceholderData: false,
    sourceType: 'property',
  },

  // --- 3. HOTEL & ROOMS ---
  {
    id: 'gal-rm-01',
    code: '08',
    srcDesktop: HOTEL_IMAGE_REGISTRY['room-category-01'].src,
    srcMobile: HOTEL_IMAGE_REGISTRY['room-category-01'].src,
    alt: HOTEL_IMAGE_REGISTRY['room-category-01'].alt,
    category: 'rooms',
    categoryLabel: 'HOTEL & ROOMS',
    title: 'Sanctuary Deluxe Quarters',
    caption: 'Authentic guest room comfort with timber details and double bed',
    orientation: 'featured',
    featured: true,
    isPlaceholderData: false,
    sourceType: 'property',
  },
  {
    id: 'gal-rm-02',
    code: '09',
    srcDesktop: HOTEL_IMAGE_REGISTRY['room-category-02'].src,
    srcMobile: HOTEL_IMAGE_REGISTRY['room-category-02'].src,
    alt: HOTEL_IMAGE_REGISTRY['room-category-02'].alt,
    category: 'rooms',
    categoryLabel: 'HOTEL & ROOMS',
    title: 'Family & Group Quarters',
    caption: 'Spacious accommodation designed for families and wedding parties',
    orientation: 'landscape',
    isPlaceholderData: false,
    sourceType: 'property',
  },
  {
    id: 'gal-rm-03',
    code: '10',
    srcDesktop: HOTEL_IMAGE_REGISTRY['room-category-03'].src,
    srcMobile: HOTEL_IMAGE_REGISTRY['room-category-03'].src,
    alt: HOTEL_IMAGE_REGISTRY['room-category-03'].alt,
    category: 'rooms',
    categoryLabel: 'HOTEL & ROOMS',
    title: 'Palace Suite Ceremonial Living',
    caption: 'Executive luxury suite bedroom with upholstered headboard & sofa lounge',
    orientation: 'landscape',
    isPlaceholderData: false,
    sourceType: 'property',
  },

  // --- 4. RESTAURANT & FOOD ---
  {
    id: 'gal-rest-01',
    code: '11',
    srcDesktop: HOTEL_IMAGE_REGISTRY['dining-venue-01'].src,
    srcMobile: HOTEL_IMAGE_REGISTRY['dining-venue-01'].src,
    alt: HOTEL_IMAGE_REGISTRY['dining-venue-01'].alt,
    category: 'restaurant',
    categoryLabel: 'RESTAURANT & FOOD',
    title: 'Main Dining Hall & Emerald Seating',
    caption: 'Chandeliers, spacious tables, and regional cuisine hospitality',
    orientation: 'featured',
    featured: true,
    isPlaceholderData: false,
    sourceType: 'property',
  },
  {
    id: 'gal-rest-02',
    code: '12',
    srcDesktop: HOTEL_IMAGE_REGISTRY['dining-venue-01-sec'].src,
    srcMobile: HOTEL_IMAGE_REGISTRY['dining-venue-01-sec'].src,
    alt: HOTEL_IMAGE_REGISTRY['dining-venue-01-sec'].alt,
    category: 'restaurant',
    categoryLabel: 'RESTAURANT & FOOD',
    title: 'Evening Dining Table Ambience',
    caption: 'Warm ambient lighting and authentic hospitality table arrangement',
    orientation: 'landscape',
    isPlaceholderData: false,
    sourceType: 'property',
  },
  {
    id: 'gal-rest-03',
    code: '13',
    srcDesktop: HOTEL_IMAGE_REGISTRY['dining-venue-02'].src,
    srcMobile: HOTEL_IMAGE_REGISTRY['dining-venue-02'].src,
    alt: HOTEL_IMAGE_REGISTRY['dining-venue-02'].alt,
    category: 'restaurant',
    categoryLabel: 'RESTAURANT & FOOD',
    title: 'Celebration Banquet Feast Wing',
    caption: 'Banquet dining enclosure for celebratory meals and parties',
    orientation: 'landscape',
    isPlaceholderData: false,
    sourceType: 'property',
  },

  // --- 5. PROPERTY & FACILITIES ---
  {
    id: 'gal-prop-01',
    code: '14',
    srcDesktop: HOTEL_IMAGE_REGISTRY['hero-exterior-01'].src,
    srcMobile: HOTEL_IMAGE_REGISTRY['hero-exterior-01'].srcMobile || HOTEL_IMAGE_REGISTRY['hero-exterior-01'].src,
    alt: HOTEL_IMAGE_REGISTRY['hero-exterior-01'].alt,
    category: 'property',
    categoryLabel: 'PROPERTY & FACILITIES',
    title: 'The Grand Palace Tower & Front Exterior',
    caption: 'Architectural front facade and grand entrance gate in Chandrapur',
    orientation: 'featured',
    featured: true,
    isPlaceholderData: false,
    sourceType: 'property',
  },
  {
    id: 'gal-prop-02',
    code: '15',
    srcDesktop: HOTEL_IMAGE_REGISTRY['gallery-property-01'].src,
    srcMobile: HOTEL_IMAGE_REGISTRY['gallery-property-01'].src,
    alt: HOTEL_IMAGE_REGISTRY['gallery-property-01'].alt,
    category: 'property',
    categoryLabel: 'PROPERTY & FACILITIES',
    title: 'Illuminated Evening Facade',
    caption: 'Dusk illumination accentuating the palatial architecture',
    orientation: 'landscape',
    isPlaceholderData: false,
    sourceType: 'property',
  },
  {
    id: 'gal-prop-03',
    code: '16',
    srcDesktop: HOTEL_IMAGE_REGISTRY['gallery-property-02'].src,
    srcMobile: HOTEL_IMAGE_REGISTRY['gallery-property-02'].src,
    alt: HOTEL_IMAGE_REGISTRY['gallery-property-02'].alt,
    category: 'property',
    categoryLabel: 'PROPERTY & FACILITIES',
    title: 'Reception & Front Desk Foyer',
    caption: 'Polished lobby and welcoming lounge for resident guests',
    orientation: 'portrait',
    isPlaceholderData: false,
    sourceType: 'property',
  },
  {
    id: 'gal-prop-04',
    code: '17',
    srcDesktop: HOTEL_IMAGE_REGISTRY['celebrations-family'].src,
    srcMobile: HOTEL_IMAGE_REGISTRY['celebrations-family'].src,
    alt: HOTEL_IMAGE_REGISTRY['celebrations-family'].alt,
    category: 'property',
    categoryLabel: 'PROPERTY & FACILITIES',
    title: 'Open-Air Rooftop Celebration Terrace',
    caption: 'Panoramic open rooftop terrace for evening gatherings and celebrations',
    orientation: 'landscape',
    isPlaceholderData: false,
    sourceType: 'property',
  },
  {
    id: 'gal-prop-05',
    code: '18',
    srcDesktop: HOTEL_IMAGE_REGISTRY['celebrations-family-sec'].src,
    srcMobile: HOTEL_IMAGE_REGISTRY['celebrations-family-sec'].src,
    alt: HOTEL_IMAGE_REGISTRY['celebrations-family-sec'].alt,
    category: 'property',
    categoryLabel: 'PROPERTY & FACILITIES',
    title: 'Sunset Rooftop Lounge & Seating',
    caption: 'Sunset ambience overlooking Chandrapur cityscape',
    orientation: 'landscape',
    isPlaceholderData: false,
    sourceType: 'property',
  },
];
