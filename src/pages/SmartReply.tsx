
import React from 'react';
import { Helmet } from 'react-helmet';
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

const SmartReply = () => {
  return (
    <>
      <Helmet>
        <title>AI Smart Reply Generator for Business Communications & Customer Service | AI Powerhouse</title>
        <meta name="description" content="Generate AI-enhanced replies to customer messages in seconds. Our tool ensures consistent, on-brand responses across email, WhatsApp, and social media that improve satisfaction and drive better business outcomes." />
        <meta name="keywords" content="ai customer service, customer response generator, business communication ai, smart reply, ai email response, customer service automation" />
        <link rel="canonical" href="https://www.aipowerhouse.com/smart-reply" />
        <script type="application/ld+json">
          {`
            {
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
              }
            }
          `}
        </script>
      </Helmet>
      
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
