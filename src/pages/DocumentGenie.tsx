
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DocumentGenieHero from '@/components/document-genie/DocumentGenieHero';
import DocumentGenieFeatures from '@/components/document-genie/DocumentGenieFeatures';
import DocumentGenieDemo from '@/components/document-genie/DocumentGenieDemo';
import DocumentGenieCapabilities from '@/components/document-genie/DocumentGenieCapabilities';
import DocumentGenieHowItWorks from '@/components/document-genie/DocumentGenieHowItWorks';
import DocumentGenieCreator from '@/components/document-genie/DocumentGenieCreator';
import DocumentGenieFAQ from '@/components/document-genie/DocumentGenieFAQ';
import DocumentGenieRelatedTools from '@/components/document-genie/DocumentGenieRelatedTools';

const DocumentGenie = () => {
  return (
    <div className="relative min-h-screen bg-dark-800 text-white">
      <Navbar />
      <DocumentGenieHero />
      <DocumentGenieFeatures />
      <DocumentGenieDemo />
      <DocumentGenieCapabilities />
      <DocumentGenieHowItWorks />
      <DocumentGenieCreator />
      <DocumentGenieFAQ />
      <DocumentGenieRelatedTools />
      <Footer />
    </div>
  );
};

export default DocumentGenie;
