
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContractScannerHero from '@/components/contract-scanner/ContractScannerHero';
import ContractScannerFeatures from '@/components/contract-scanner/ContractScannerFeatures';
import ContractScannerCapabilities from '@/components/contract-scanner/ContractScannerCapabilities';
import ContractScannerHowItWorks from '@/components/contract-scanner/ContractScannerHowItWorks';
import ContractScannerDemo from '@/components/contract-scanner/ContractScannerDemo';
import ContractScannerFAQ from '@/components/contract-scanner/ContractScannerFAQ';
import ContractScannerRelatedTools from '@/components/contract-scanner/ContractScannerRelatedTools';
import ContractScannerAccess from '@/components/contract-scanner/ContractScannerAccess';
import SEO from '@/components/SEO';

const ContractScanner = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Maya AI Contract Risk Scanner",
    "description": "Quick contract risk identification tool for busy business owners and executives. Provides preliminary risk assessment and flags key areas requiring professional review - not legal advice.",
    "url": "https://agent-hub.smartmaya.ai/contract-scanner",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "provider": {
      "@type": "Organization",
      "name": "Maya AI",
      "url": "https://smartmaya.ai"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "134"
    },
    "features": [
      "Quick contract risk identification",
      "Preliminary risk assessment", 
      "Key clause highlighting",
      "Risk area explanations",
      "Executive summary reports",
      "Professional consultation preparation"
    ],
    "disclaimer": "This tool provides preliminary risk identification only and is not legal advice. Users must consult with qualified professional advisors."
  };

  return (
    <>
      <SEO
        title="Maya AI Contract Risk Scanner - Quick Business Contract Risk Assessment"
        description="Maya AI Contract Risk Scanner helps busy executives quickly identify potential contract risks and key areas to discuss with professional advisors. Get preliminary risk assessment in minutes - not legal advice."
        keywords="contract risk scanner, business contract risk assessment, contract risk identification, preliminary contract review, executive contract analysis, business document risk scanner, contract risk detection"
        canonicalUrl="https://agent-hub.smartmaya.ai/contract-scanner"
        schema={schema}
      />
      <div className="min-h-screen bg-dark-800">
        <Navbar />
        <main className="pt-16">
          <ContractScannerHero />
          <ContractScannerFeatures />
          <ContractScannerCapabilities />
          <ContractScannerHowItWorks />
          <ContractScannerDemo />
          <ContractScannerFAQ />
          <ContractScannerRelatedTools />
          <ContractScannerAccess />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContractScanner;
