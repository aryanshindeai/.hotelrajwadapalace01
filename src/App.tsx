import { useState } from 'react';
import {
  Navigation,
  CinematicHero,
  RoomsSection,
  DiningSection,
  CelebrationsSection,
  ExperienceSection,
  GallerySection,
  TrustSection,
  LocationSection,
  BookingCTASection,
  Footer,
  Container,
  Section,
  SectionHeading,
  Typography,
  Button,
} from './components';









export function App() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleSelectSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCheckAvailability = () => {
    setBookingModalOpen(true);
  };

  const handleExplore = () => {
    const overviewEl = document.getElementById('overview');
    if (overviewEl) {
      overviewEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-charcoal text-ivory flex flex-col antialiased selection:bg-gold/25 selection:text-gold-light">
      {/* 1. Global Navigation Shell (Sitting cleanly above the Hero) */}
      <Navigation
        activeSectionId={activeSection}
        onSelectSection={handleSelectSection}
        onCheckAvailability={handleCheckAvailability}
        onContactClick={() => handleSelectSection('contact')}
      />

      {/* 2. Step 3 Cinematic Hero Experience */}
      <CinematicHero
        onCheckAvailability={handleCheckAvailability}
        onExplore={handleExplore}
        scrollTargetId="overview"
      />

      {/* Main Content Sections: Overview & Architectural Anchor Foundations */}
      <main id="overview" className="flex-1">
        {/* Step 3 Overview & Architectural Verification */}
        <Section spacing="md" variant="surface">
          <Container size="xl">
            <SectionHeading
              eyebrow="Architectural Presence"
              title="A Distinguished Sanctuary in Chandrapur"
              subtitle="Reflecting genuine palatial grandeur and bespoke hospitality at the gateway to the Tadoba corridor."
              align="center"
              className="mb-14"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sand text-sm leading-relaxed border-t border-b border-white/5 py-10">
              <div className="space-y-3">
                <span className="font-cinzel text-xs text-gold tracking-[0.2em] uppercase block">
                  Location & Gateway
                </span>
                <Typography variant="body" className="text-ivory-warm">
                  Situated near Major Gate beside Sargam Petrol Pump on Durgapur Road, Hotel Rajwada Palace welcomes business travelers, family gatherings, and wilderness explorers visiting Chandrapur.
                </Typography>
              </div>

              <div className="space-y-3">
                <span className="font-cinzel text-xs text-gold tracking-[0.2em] uppercase block">
                  Celebrations & Banquets
                </span>
                <Typography variant="body" className="text-ivory-warm">
                  Verified as a premier hotel and banquet hall, providing spacious celebratory grounds for weddings, formal receptions, and distinguished gatherings.
                </Typography>
              </div>

              <div className="space-y-3">
                <span className="font-cinzel text-xs text-gold tracking-[0.2em] uppercase block">
                  Guest Distinction
                </span>
                <Typography variant="body" className="text-ivory-warm">
                  Recognized with a 4.2 rating across 460 verified Google reviews, reflecting thoughtful service and genuine regional hospitality.
                </Typography>
              </div>
            </div>
          </Container>
        </Section>

        {/* Step 5 Rooms & Suites Experience */}
        <RoomsSection onCheckAvailability={handleCheckAvailability} />


        {/* Step 6 Dining Experience */}
        <DiningSection onCheckAvailability={handleCheckAvailability} />


        {/* Step 7 Celebrations & Banquets Experience */}
        <CelebrationsSection
          onEnquire={handleCheckAvailability}
          onExploreSpace={() => handleSelectSection('gallery')}
        />


        {/* Step 8 The Tadoba & Chandrapur Experience */}
        <ExperienceSection
          onCheckAvailability={handleCheckAvailability}
          onExploreLocation={() => handleSelectSection('contact')}
        />


        {/* Step 9 Cinematic Gallery Experience */}
        <GallerySection />

        {/* Step 10 Reviews / Trust Experience */}
        <TrustSection onExploreLocation={() => handleSelectSection('contact')} />



        {/* Step 11 Verified Location / Contact Experience */}
        <LocationSection />

        {/* Step 12 Final Booking / Conversion Experience */}
        <BookingCTASection onCheckAvailability={handleCheckAvailability} />
      </main>


      {/* Step 13 Global Luxury Footer */}
      <Footer
        onCheckAvailability={handleCheckAvailability}
        onNavigateSection={handleSelectSection}
      />


      {/* Interactive Booking Modal */}
      {bookingModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-charcoal-deep/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          <div className="border border-gold/40 bg-charcoal-surface p-8 max-w-md w-full shadow-2xl relative">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div>
                <Typography variant="label" className="text-gold tracking-[0.2em]">
                  Hotel Rajwada Palace
                </Typography>
                <Typography variant="h3" className="text-xl text-ivory-light mt-1">
                  Check Availability
                </Typography>
              </div>
              <button
                type="button"
                onClick={() => setBookingModalOpen(false)}
                className="text-sand hover:text-ivory text-sm uppercase tracking-wider p-2 cursor-pointer"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-sand leading-relaxed mb-6">
              Our reservation and inquiry desk connects directly to verified availability for stays and banquet celebrations in Chandrapur.
            </p>
            <div className="p-4 border border-white/5 bg-charcoal mb-6 text-xs text-ivory-warm space-y-1">
              <p className="text-gold font-medium">Hotel & Banquet Hall Desk:</p>
              <p className="text-sand">Near Major Gate, beside Sargam Petrol Pump</p>
              <p className="text-sand">Durgapur Road / Tadoba Road, Chandrapur</p>
              <p className="text-gold-light pt-2 font-mono">Direct: 099210 19664</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="primary"
                size="md"
                as="a"
                href="tel:+919921019664"
                className="w-full text-center"
              >
                Call: 099210 19664
              </Button>
              <Button
                variant="secondary"
                size="md"
                className="w-full"
                onClick={() => setBookingModalOpen(false)}
              >
                Close
              </Button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default App;
