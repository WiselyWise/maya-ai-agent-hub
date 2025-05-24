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
import SEO from '@/components/SEO';
import RenderLogger from '@/components/debug/RenderLogger';

const DocumentGenie = () => {
  return (
    <div className="relative min-h-screen">
      <RenderLogger componentName="DocumentGenie" route="/document-genie" />
      <SEO 
        title="AI Document Generator for Business Content | Maya AI"
        description="Create high-quality business documents in minutes with our AI document generator. Generate research-backed content for reports, white papers, and more."
        keywords="ai document generator for business, business content creation, automated document writing, report generator, white paper creator, business document ai"
        canonicalUrl="https://agent-hub.smartmaya.ai/document-genie"
        schema={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Document Genie AI",
          "applicationCategory": "BusinessApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "description": "AI-powered document generator that researches the internet and creates high-quality business documents with original content, images, and data visualizations.",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "92",
            "bestRating": "5",
            "worstRating": "1"
          },
          "url": "https://agent-hub.smartmaya.ai/document-genie",
          "provider": {
            "@type": "Organization",
            "name": "Maya AI",
            "url": "https://smartmaya.ai"
          }
        }}
      />
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
