import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PromptHero from '@/components/prompt-genius/PromptHero';
import PromptFeatures from '@/components/prompt-genius/PromptFeatures';
import PromptCapabilities from '@/components/prompt-genius/PromptCapabilities';
import PromptHowItWorks from '@/components/prompt-genius/PromptHowItWorks';
import PromptCreator from '@/components/prompt-genius/PromptCreator';
import PromptFAQ from '@/components/prompt-genius/PromptFAQ';
import PromptRelatedTools from '@/components/prompt-genius/PromptRelatedTools';
import PromptDemo from '@/components/prompt-genius/PromptDemo';
import Testimonials from '@/components/Testimonials';
import SEO from '@/components/SEO';
import RenderLogger from '@/components/debug/RenderLogger';

const PromptGenius = () => {
  return (
    <>
      <RenderLogger componentName="PromptGenius" route="/prompt-genius" />
      <SEO 
        title="AI Prompt Engineering for Business Results | Maya AI"
        description="Master AI prompt engineering for better business outcomes. Our Prompt Genius helps professionals create sophisticated prompts for any AI system without technical expertise."
        keywords="ai prompt engineering for business, business prompt templates, chatgpt prompts, ai optimization, prompt framework"
        canonicalUrl="https://agent-hub.smartmaya.ai/prompt-genius"
        schema={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "AI Prompt Genius",
          "applicationCategory": "BusinessApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "description": "Transform simple requests into sophisticated AI prompts. Get dramatically better results from any AI system without technical knowledge - designed for busy executives and business professionals.",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "98",
            "bestRating": "5",
            "worstRating": "1"
          },
          "url": "https://agent-hub.smartmaya.ai/prompt-genius",
          "provider": {
            "@type": "Organization",
            "name": "Maya AI",
            "url": "https://smartmaya.ai"
          }
        }}
      />
      
      <Navbar />
      
      <main className="min-h-screen">
        <PromptHero />
        <PromptFeatures />
        <PromptDemo />
        <PromptCapabilities />
        <PromptHowItWorks />
        <PromptCreator />
        <Testimonials />
        <PromptFAQ />
        <PromptRelatedTools />
      </main>
      
      <Footer />
    </>
  );
};

export default PromptGenius;
