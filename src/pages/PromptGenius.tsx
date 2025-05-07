
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PromptHero from '@/components/prompt-genius/PromptHero';
import PromptFeatures from '@/components/prompt-genius/PromptFeatures';
import PromptCapabilities from '@/components/prompt-genius/PromptCapabilities';
import PromptHowItWorks from '@/components/prompt-genius/PromptHowItWorks';
import PromptCreator from '@/components/prompt-genius/PromptCreator';
import PromptFAQ from '@/components/prompt-genius/PromptFAQ';
import PromptRelatedTools from '@/components/prompt-genius/PromptRelatedTools';
import Testimonials from '@/components/Testimonials';

const PromptGenius = () => {
  return (
    <>
      <Helmet>
        <title>AI Prompt Genius for Enhanced Business Results | AI Powerhouse</title>
        <meta name="description" content="Transform simple requests into sophisticated AI prompts with our Prompt Genius. Get better results from any AI system without technical knowledge - designed for busy executives and professionals." />
        <meta name="keywords" content="ai prompt engineering, business prompt templates, chatgpt prompts, ai optimization, prompt framework" />
        <link rel="canonical" href="https://www.aipowerhouse.com/prompt-genius" />
        <script type="application/ld+json">
          {`
            {
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
              }
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen">
        <PromptHero />
        <PromptFeatures />
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
