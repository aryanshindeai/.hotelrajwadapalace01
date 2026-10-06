import React, { useState } from 'react';
import { Section } from '../Section';
import { Container } from '../Container';
import { SectionHeading } from '../SectionHeading';
import { DestinationMedia } from './DestinationMedia';
import { ExperienceSupportingMedia } from './ExperienceSupportingMedia';
import { ExperienceDetails } from './ExperienceDetails';
import { ExperienceSelector } from './ExperienceSelector';
import { EXPERIENCES_DATA } from '../../data/experienceData';

interface ExperienceSectionProps {
  onCheckAvailability?: () => void;
  onExploreLocation?: () => void;
  className?: string;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  onCheckAvailability,
  onExploreLocation,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentCategory = EXPERIENCES_DATA[currentIndex] || EXPERIENCES_DATA[0];

  return (
    <Section
      id="experience"
      variant="surface"
      spacing="lg"
      className={`relative ${className}`}
    >
      <Container size="xl">
        {/* Section Introduction */}
        <div className="mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="THE EXPERIENCE"
            title="Chandrapur, From Here"
            subtitle="Set in Chandrapur, the hotel offers a starting point for discovering the character of the region and experiences beyond the property."
            align="left"
          />
        </div>

        {/* Experience Selector Navigation */}
        <div className="border-b border-white/5 pb-4 mb-8 sm:mb-12">
          <ExperienceSelector
            categories={EXPERIENCES_DATA}
            currentIndex={currentIndex}
            onSelectIndex={setCurrentIndex}
          />
        </div>

        {/* 1. Large Dominant Destination Feature Image (Full width 12 cols) */}
        <div className="mb-8 lg:mb-12">
          <DestinationMedia category={currentCategory} />
        </div>

        {/* 2. Asymmetric Lower Composition: Supporting Detail (7 cols) + Narrative Information (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Supporting Landscape / Woodland Detail */}
          <div className="lg:col-span-7">
            <ExperienceSupportingMedia category={currentCategory} />
          </div>

          {/* Narrative Details, Gateway Notes, and Location Teaser Link */}
          <div className="lg:col-span-5">
            <ExperienceDetails
              category={currentCategory}
              onCheckAvailability={onCheckAvailability}
              onExploreLocation={onExploreLocation}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
