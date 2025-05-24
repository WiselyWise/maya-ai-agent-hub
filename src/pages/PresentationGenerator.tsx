
import React from 'react';
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
import SEO from '@/components/SEO';
import RenderLogger from '@/components/debug/RenderLogger';

const PresentationGenerator = () => {
  return (
    <>
      <RenderLogger componentName="PresentationGenerator" route="/presentation-generator" />
      <SEO 
        title="AI Presentation Generator for Business Decks | Maya AI"
        description="Create professional business presentations in minutes with our AI presentation generator. Transform ideas into compelling slide decks with proper structure and design."
        keywords="ai presentation generator for business, business presentation maker, slide deck creator, ai presentation design, executive presentation tool"
        canonicalUrl="https://agent-hub.smartmaya.ai/presentation-generator"
        schema={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Maya AI Presentation Generator",
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
          },
          "url": "https://agent-hub.smartmaya.ai/presentation-generator",
          "provider": {
            "@type": "Organization",
            "name": "Maya AI",
            "url": "https://smartmaya.ai"
          },
          "potentialAction": {
            "@type": "UseAction",
            "target": "https://app.smartmaya.ai"
          }
        }}
      />
      
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
