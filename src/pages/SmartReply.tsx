
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmartReplyHero from '@/components/smart-reply/SmartReplyHero';
import SmartReplyFeatures from '@/components/smart-reply/SmartReplyFeatures';
import SmartReplyCapabilities from '@/components/smart-reply/SmartReplyCapabilities';
import SmartReplyHowItWorks from '@/components/smart-reply/SmartReplyHowItWorks';
import SmartReplyCreator from '@/components/smart-reply/SmartReplyCreator';
import SmartReplyFAQ from '@/components/smart-reply/SmartReplyFAQ';
import SmartReplyRelatedTools from '@/components/smart-reply/SmartReplyRelatedTools';
import SmartReplyDemo from '@/components/smart-reply/SmartReplyDemo';
import Testimonials from '@/components/Testimonials';
import SEO from '@/components/SEO';

const SmartReply = () => {
  return (
    <>
      <SEO 
        title="AI Customer Response Generator for Businesses | Maya AI"
        description="Generate consistent, on-brand customer replies instantly with our AI response generator. Improve satisfaction and save time across all communication channels."
        keywords="ai customer response generator, business communication ai, customer service automation, email response generator, message reply ai"
        canonicalUrl="https://agent-hub.smartmaya.ai/smart-reply"
        schema={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Smart Reply AI",
          "applicationCategory": "BusinessApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "description": "AI-powered customer response generator that creates consistent, on-brand replies across all communication channels. Improves customer satisfaction while saving time for businesses.",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "112",
            "bestRating": "5",
            "worstRating": "1"
          },
          "url": "https://agent-hub.smartmaya.ai/smart-reply",
          "provider": {
            "@type": "Organization",
            "name": "Maya AI",
            "url": "https://smartmaya.ai"
          }
        }}
      />
      
      <Navbar />
      
      <main className="min-h-screen">
        <SmartReplyHero />
        <SmartReplyFeatures />
        <SmartReplyDemo />
        <SmartReplyCapabilities />
        <SmartReplyHowItWorks />
        <SmartReplyCreator />
        <Testimonials />
        <SmartReplyFAQ />
        <SmartReplyRelatedTools />
      </main>
      
      <Footer />
    </>
  );
};

export default SmartReply;
