
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadGenieHero from '@/components/lead-genie/LeadGenieHero';
import LeadGenieFeatures from '@/components/lead-genie/LeadGenieFeatures';
import LeadGenieCapabilities from '@/components/lead-genie/LeadGenieCapabilities';
import LeadGenieHowItWorks from '@/components/lead-genie/LeadGenieHowItWorks';
import LeadGenieCreator from '@/components/lead-genie/LeadGenieCreator';
import LeadGenieFAQ from '@/components/lead-genie/LeadGenieFAQ';
import LeadGenieRelatedTools from '@/components/lead-genie/LeadGenieRelatedTools';
import LeadGenieDemo from '@/components/lead-genie/LeadGenieDemo';
import Testimonials from '@/components/Testimonials';

const LeadGenie = () => {
  return (
    <>
      <Helmet>
        <title>Lead Genie - AI-Powered CRM and Lead Management | AI Powerhouse</title>
        <meta name="description" content="Streamline your sales process with Lead Genie, an all-in-one AI CRM and lead management solution. Define ICPs, create email campaigns, track leads, and manage your entire sales funnel - all in one powerful platform." />
        <meta name="keywords" content="lead management, ai crm, email campaigns, icp development, sales funnel, lead generation, sales automation" />
        <link rel="canonical" href="https://www.aipowerhouse.com/lead-genie" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Lead Genie AI",
              "applicationCategory": "BusinessApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "All-in-one AI CRM and lead management solution. Define ICPs, create email campaigns, track leads, and manage your entire sales funnel.",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "87",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen">
        <LeadGenieHero />
        <LeadGenieFeatures />
        <LeadGenieDemo />
        <LeadGenieCapabilities />
        <LeadGenieHowItWorks />
        <LeadGenieCreator />
        <Testimonials />
        <LeadGenieFAQ />
        <LeadGenieRelatedTools />
      </main>
      
      <Footer />
    </>
  );
};

export default LeadGenie;
