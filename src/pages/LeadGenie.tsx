import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadGenieHero from '@/components/lead-genie/LeadGenieHero';
import LeadGenieFeatures from '@/components/lead-genie/LeadGenieFeatures';
import LeadGenieCapabilities from '@/components/lead-genie/LeadGenieCapabilities';
import LeadGenieHowItWorks from '@/components/lead-genie/LeadGenieHowItWorks';
import LeadGenieAccess from '@/components/lead-genie/LeadGenieAccess';
import LeadGenieDemo from '@/components/lead-genie/LeadGenieDemo';
import LeadGenieFAQ from '@/components/lead-genie/LeadGenieFAQ';
import LeadGenieRelatedTools from '@/components/lead-genie/LeadGenieRelatedTools';
import SEO from '@/components/SEO';
import RenderLogger from '@/components/debug/RenderLogger';

const LeadGenie = () => {
  return (
    <div className="relative min-h-screen">
      <RenderLogger componentName="LeadGenie" route="/lead-genie" />
      <SEO 
        title="AI Sales Lead Generation Tool for Growth | Maya AI"
        description="Streamline your sales process with our AI lead generation tool. Define ICPs, create personalized campaigns, and manage your entire sales funnel in one platform."
        keywords="ai sales lead generation tool, sales automation, lead prospecting, ICP definition, email campaign generator, sales funnel management"
        canonicalUrl="https://agent-hub.smartmaya.ai/lead-genie"
        schema={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Lead Genie AI",
          "applicationCategory": "BusinessApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "description": "AI-powered sales lead generation and management platform. Define ICPs, create personalized email campaigns, track leads, and manage your entire sales funnel in one tool.",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "ratingCount": "108",
            "bestRating": "5",
            "worstRating": "1"
          },
          "url": "https://agent-hub.smartmaya.ai/lead-genie",
          "provider": {
            "@type": "Organization",
            "name": "Maya AI",
            "url": "https://smartmaya.ai"
          }
        }}
      />
      <Navbar />
      <main className="pt-16">
        <LeadGenieHero />
        <LeadGenieFeatures />
        <LeadGenieCapabilities />
        <LeadGenieHowItWorks />
        <LeadGenieDemo />
        <LeadGenieAccess />
        <LeadGenieFAQ />
        <LeadGenieRelatedTools />
      </main>
      <Footer />
    </div>
  );
};

export default LeadGenie;
