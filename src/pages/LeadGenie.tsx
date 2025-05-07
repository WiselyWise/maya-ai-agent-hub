
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

const LeadGenie = () => {
  return (
    <div className="relative min-h-screen">
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
