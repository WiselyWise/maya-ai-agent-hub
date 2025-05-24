import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LinkedInHero from '@/components/viral-post-generator/LinkedInHero';
import LinkedInFeatures from '@/components/viral-post-generator/LinkedInFeatures';
import LinkedInCapabilities from '@/components/viral-post-generator/LinkedInCapabilities';
import LinkedInHowItWorks from '@/components/viral-post-generator/LinkedInHowItWorks';
import LinkedInAccess from '@/components/viral-post-generator/LinkedInAccess';
import LinkedInFAQ from '@/components/viral-post-generator/LinkedInFAQ';
import ViralRelatedTools from '@/components/viral-post-generator/ViralRelatedTools';
import LinkedInDemo from '@/components/viral-post-generator/LinkedInDemo';
import Testimonials from '@/components/Testimonials';
import SEO from '@/components/SEO';
import RenderLogger from '@/components/debug/RenderLogger';

const ViralPostGenerator = () => {
  return (
    <>
      <RenderLogger componentName="ViralPostGenerator" route="/viral-post-generator" />
      <SEO 
        title="LinkedIn Post Generator for Maximum Engagement | Maya AI"
        description="Generate high-performing LinkedIn content that drives engagement with our AI post generator. Create algorithm-optimized posts in minutes to boost visibility."
        keywords="linkedin post generator, viral linkedin content, business post generator, engagement content, linkedin algorithm, professional networking"
        canonicalUrl="https://agent-hub.smartmaya.ai/viral-post-generator"
        schema={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Maya AI LinkedIn Post Generator",
          "applicationCategory": "BusinessApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "description": "AI-powered LinkedIn content generator designed for business growth and professional networking. Create optimized posts for LinkedIn's algorithm in seconds to boost your professional visibility.",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "ratingCount": "142",
            "bestRating": "5",
            "worstRating": "1"
          },
          "url": "https://agent-hub.smartmaya.ai/viral-post-generator",
          "provider": {
            "@type": "Organization",
            "name": "Maya AI",
            "url": "https://smartmaya.ai"
          }
        }}
      />
      
      <Navbar />
      
      <main className="min-h-screen">
        <LinkedInHero />
        <LinkedInFeatures />
        <LinkedInDemo />
        <LinkedInCapabilities />
        <LinkedInHowItWorks />
        <LinkedInAccess />
        <Testimonials />
        <LinkedInFAQ />
        <ViralRelatedTools />
      </main>
      
      <Footer />
    </>
  );
};

export default ViralPostGenerator;
