/**
 * LOCATION & CONTACT DATA ARCHITECTURE
 * Immutable, verified contact and address information for Hotel Rajwada Palace.
 *
 * EXACT VERIFIED INFORMATION:
 * Name: Hotel Rajwada Palace
 * Address:
 *   Near Major Gate, beside Sargam Petrol Pump,
 *   Durgapur / Tadoba Road,
 *   Tukum, Urjanagar,
 *   Maharashtra 442401
 * Phone: 099210 19664
 */

export interface PropertyAddress {
  line1: string;
  line2: string;
  road: string;
  area: string;
  cityStatePin: string;
  fullFormatted: string;
}

export interface HotelContactData {
  propertyName: string;
  category: string;
  phoneDisplay: string;
  phoneRaw: string; // for tel: links
  whatsappRaw: string;
  whatsappUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  address: PropertyAddress;
  googleMapsDirectionsUrl: string;
  googleMapsEmbedQuery: string;
  /** Optional fields prepared for future verified data */
  email?: string;
}

export const HOTEL_CONTACT_DATA: HotelContactData = {
  propertyName: 'Hotel Rajwada Palace',
  category: 'Hotel / Banquet Hall',
  phoneDisplay: '099210 19664',
  phoneRaw: '+919921019664',
  whatsappRaw: '+919921019664',
  whatsappUrl: 'https://wa.me/919921019664',
  instagramUrl: 'https://www.instagram.com/hotelrajwadaweddpalace?mdxt=N2gzbXBpeXd5eWlx',
  instagramHandle: '@hotelrajwadaweddpalace',
  address: {
    line1: 'Near Major Gate',
    line2: 'Beside Sargam Petrol Pump',
    road: 'Durgapur / Tadoba Road',
    area: 'Tukum, Urjanagar',
    cityStatePin: 'Chandrapur, Maharashtra 442401',
    fullFormatted:
      'Hotel Rajwada Palace, Near Major Gate, beside Sargam Petrol Pump, Durgapur Road, Tukum, Chandrapur, Maharashtra 442401',
  },
  // Real external Google Maps query pointing directly to Hotel Rajwada Palace Chandrapur
  googleMapsDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Hotel+Rajwada+Palace+Tukum+Chandrapur+Maharashtra+442401',
  googleMapsEmbedQuery:
    'Hotel+Rajwada+Palace+Near+Major+Gate+Tukum+Chandrapur+Maharashtra+442401',
};
