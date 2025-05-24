
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
    "name": "Maya AI Contract Scanner",
    "description": "AI-powered contract analysis tool for business document review, risk assessment, and mitigation strategies",
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
      "Contract obligation identification",
      "Business risk assessment", 
      "Mitigation strategy recommendations",
      "Document comparison tools",
      "Professional report generation"
    ]
  };

  return (
    <>
      <SEO
        title="AI Contract Review Scanner for Business Risk Assessment | Maya AI"
        description="Streamline contract analysis with Maya AI Contract Scanner. Identify key obligations, assess potential risks, and get actionable mitigation strategies to protect your business interests."
        keywords="ai contract scanner, contract review software, business risk assessment, contract analysis tool, business contract scanner, ai business assistant"
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
