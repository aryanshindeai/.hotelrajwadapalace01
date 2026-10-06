import React from 'react';
import { Section } from '../Section';
import { Container } from '../Container';
import { SectionHeading } from '../SectionHeading';
import { RoomShowcase } from './RoomShowcase';
import { ROOMS_DATA } from '../../data/roomsData';

interface RoomsSectionProps {
  onCheckAvailability?: () => void;
  className?: string;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  onCheckAvailability,
  className = '',
}) => {
  return (
    <Section
      id="rooms"
      variant="primary"
      spacing="lg"
      className={`relative ${className}`}
    >
      <Container size="xl">
        {/* Section Introduction: small editorial label + strong display heading + neutral intro sentence */}
        <div className="mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="ROOMS & SUITES"
            title="A Quiet Place to Unwind"
            subtitle="Thoughtfully proportioned sanctuaries designed for restorative rest, celebration stays, and leisurely retreats in Chandrapur."
            align="left"
          />
        </div>

        {/* Editorial Horizontal Room Showcase */}
        <RoomShowcase
          rooms={ROOMS_DATA}
          onCheckAvailability={onCheckAvailability}
        />
      </Container>
    </Section>
  );
};
