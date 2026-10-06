import React from 'react';
import { Section } from '../Section';
import { Container } from '../Container';
import { SectionHeading } from '../SectionHeading';
import { RatingOverview } from './RatingOverview';
import { TrustDetailsPanel } from './TrustDetailsPanel';
import {
  VERIFIED_TRUST_STATS,
  VERIFIED_REVIEWS_LIST,
} from '../../data/trustData';

interface TrustSectionProps {
  onExploreLocation?: () => void;
  className?: string;
}

export const TrustSection: React.FC<TrustSectionProps> = ({
  onExploreLocation,
  className = '',
}) => {
  // Use first verified review if one exists; otherwise gracefully falls back to aggregate trust statistics
  const featuredReview =
    VERIFIED_REVIEWS_LIST.length > 0 ? VERIFIED_REVIEWS_LIST[0] : undefined;

  return (
    <Section
      id="reviews"
      variant="surface"
      spacing="lg"
      className={`relative ${className}`}
    >
      <Container size="xl">
        {/* Section Introduction */}
        <div className="mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="GUESTS"
            title="Trusted by Our Guests"
            subtitle="Verified recognition from travelers and celebration hosts who have experienced Hotel Rajwada Palace in Chandrapur."
            align="left"
          />
        </div>

        {/* Editorial 12-Column Trust Grid: 5 cols Rating Metric + 7 cols Narrative & Pillar Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Authoritative Rating Block (5 cols) */}
          <div className="lg:col-span-5">
            <RatingOverview stats={VERIFIED_TRUST_STATS} />
          </div>

          {/* Right Column: Supporting Reputation Details & Verification Pillars (7 cols) */}
          <div className="lg:col-span-7">
            <TrustDetailsPanel
              stats={VERIFIED_TRUST_STATS}
              featuredReview={featuredReview}
              onExploreLocation={onExploreLocation}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
