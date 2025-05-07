
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ViralHero from '@/components/viral-post-generator/ViralHero';
import ViralFeatures from '@/components/viral-post-generator/ViralFeatures';
import ViralCapabilities from '@/components/viral-post-generator/ViralCapabilities';
import ViralHowItWorks from '@/components/viral-post-generator/ViralHowItWorks';
import ViralCreator from '@/components/viral-post-generator/ViralCreator';
import ViralFAQ from '@/components/viral-post-generator/ViralFAQ';
import ViralRelatedTools from '@/components/viral-post-generator/ViralRelatedTools';
import ViralDemo from '@/components/viral-post-generator/ViralDemo';
import Testimonials from '@/components/Testimonials';

const ViralPostGenerator = () => {
  return (
    <>
      <Helmet>
        <title>AI Viral Post Generator for Business Growth & Social Media Engagement | AI Powerhouse</title>
        <meta name="description" content="Create high-performing social media content in seconds with our AI Viral Post Generator. Drive traffic, increase engagement, and convert followers with optimized posts for LinkedIn, Twitter, Facebook, and Instagram." />
        <meta name="keywords" content="viral content generator, social media ai, business post generator, engagement content, linkedin post creator" />
        <link rel="canonical" href="https://www.aipowerhouse.com/viral-post-generator" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "AI Viral Post Generator",
              "applicationCategory": "BusinessApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "AI-powered viral content generator designed for business growth and social media engagement. Create optimized posts for LinkedIn, Twitter, Facebook, and Instagram in seconds.",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "ratingCount": "142",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen">
        <ViralHero />
        <ViralFeatures />
        <ViralDemo />
        <ViralCapabilities />
        <ViralHowItWorks />
        <ViralCreator />
        <Testimonials />
        <ViralFAQ />
        <ViralRelatedTools />
      </main>
      
      <Footer />
    </>
  );
};

export default ViralPostGenerator;
