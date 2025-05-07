
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PresentationHero from '@/components/presentation-generator/PresentationHero';
import PresentationFeatures from '@/components/presentation-generator/PresentationFeatures';
import PresentationCapabilities from '@/components/presentation-generator/PresentationCapabilities';
import PresentationHowItWorks from '@/components/presentation-generator/PresentationHowItWorks';
import PresentationCreator from '@/components/presentation-generator/PresentationCreator';
import PresentationFAQ from '@/components/presentation-generator/PresentationFAQ';
import PresentationRelatedTools from '@/components/presentation-generator/PresentationRelatedTools';
import PresentationDemo from '@/components/presentation-generator/PresentationDemo';
import Testimonials from '@/components/Testimonials';

const PresentationGenerator = () => {
  return (
    <>
      <Helmet>
        <title>AI Presentation Generator for Executives & Business Professionals | AI Powerhouse</title>
        <meta name="description" content="Create professional, boardroom-ready presentations in minutes with our AI Presentation Generator. Save hours of work while delivering high-quality slide decks for meetings, pitches, and reports." />
        <meta name="keywords" content="ai presentation maker, executive slides, business presentation generator, slide deck creator, professional presentation ai" />
        <link rel="canonical" href="https://www.aipowerhouse.com/presentation-generator" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "AI Presentation Generator",
              "applicationCategory": "BusinessApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "AI-powered presentation generator designed for executives and business professionals. Create boardroom-ready slide decks in minutes with professional design and compelling content.",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "124",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen">
        <PresentationHero />
        <PresentationFeatures />
        <PresentationDemo />
        <PresentationCapabilities />
        <PresentationHowItWorks />
        <PresentationCreator />
        <Testimonials />
        <PresentationFAQ />
        <PresentationRelatedTools />
      </main>
      
      <Footer />
    </>
  );
};

export default PresentationGenerator;
