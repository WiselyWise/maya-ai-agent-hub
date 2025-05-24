
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
    "description": "Quick contract risk scanning tool for busy business owners and executives. Provides preliminary risk identification before professional consultation.",
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
      "Key clause highlighting", 
      "Risk area explanations",
      "Executive summary reports",
      "Preliminary scanning for professional consultation"
    ],
    "disclaimer": "This tool provides preliminary risk identification only and is not legal advice. Users must consult with qualified legal and professional advisors."
  };

  return (
    <>
      <SEO
        title="AI Contract Risk Scanner for Quick Business Review | Maya AI"
        description="Quick contract risk scanning for busy executives. Get preliminary risk identification and key areas to review with your professional advisors. Not legal advice - consultation tool only."
        keywords="contract risk scanner, business contract review, executive contract tool, preliminary risk assessment, business document scanner"
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
