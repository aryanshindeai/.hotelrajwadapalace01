/**
 * TRUST & REVIEWS DATA ARCHITECTURE
 * Structured format for verified Google listing metrics and authentic reviews.
 *
 * RULE: We do NOT invent individual customer quotes, reviewer photographs, or fake satisfaction metrics.
 * Since specific verified review quotes are pending client supply, the reviews array remains empty.
 * The UI is designed gracefully around the verified aggregate rating.
 */

export interface VerifiedReviewItem {
  id: string;
  author: string;
  rating: number; // 1-5
  text: string;
  date?: string;
  source: 'Google Reviews' | 'Direct Guest';
}

export interface TrustMetrics {
  propertyName: string;
  category: string;
  rating: number; // e.g. 4.2
  maxRating: number; // 5.0
  reviewCount: number; // e.g. 460
  source: string; // "Google Reviews"
  location: string;
  verifiedStatus: string;
}

export const VERIFIED_TRUST_STATS: TrustMetrics = {
  propertyName: 'Hotel Rajwada Palace',
  category: 'Hotel / Banquet Hall',
  rating: 4.2,
  maxRating: 5.0,
  reviewCount: 460,
  source: 'Google Reviews',
  location: 'Chandrapur, Maharashtra',
  verifiedStatus: 'Verified Google Business Listing',
};

// Intentionally empty pending authentic, verified client quote extracts.
// When actual verified quotes are provided, they populate directly into this array.
export const VERIFIED_REVIEWS_LIST: VerifiedReviewItem[] = [];
