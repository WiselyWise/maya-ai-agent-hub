
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DocumentGenieHero from '@/components/document-genie/DocumentGenieHero';
import DocumentGenieFeatures from '@/components/document-genie/DocumentGenieFeatures';
import DocumentGenieCapabilities from '@/components/document-genie/DocumentGenieCapabilities';
import DocumentGenieHowItWorks from '@/components/document-genie/DocumentGenieHowItWorks';
import DocumentGenieAccess from '@/components/document-genie/DocumentGenieAccess';
import DocumentGenieDemo from '@/components/document-genie/DocumentGenieDemo';
import DocumentGenieFAQ from '@/components/document-genie/DocumentGenieFAQ';
import DocumentGenieRelatedTools from '@/components/document-genie/DocumentGenieRelatedTools';

const DocumentGenie = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-16">
        <DocumentGenieHero />
        <DocumentGenieFeatures />
        <DocumentGenieCapabilities />
        <DocumentGenieHowItWorks />
        <DocumentGenieDemo />
        <DocumentGenieAccess />
        <DocumentGenieFAQ />
        <DocumentGenieRelatedTools />
      </main>
      <Footer />
    </div>
  );
};

export default DocumentGenie;
