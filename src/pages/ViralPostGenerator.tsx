
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LinkedInHero from '@/components/viral-post-generator/LinkedInHero';
import LinkedInFeatures from '@/components/viral-post-generator/LinkedInFeatures';
import LinkedInCapabilities from '@/components/viral-post-generator/LinkedInCapabilities';
import LinkedInHowItWorks from '@/components/viral-post-generator/LinkedInHowItWorks';
import LinkedInCreator from '@/components/viral-post-generator/LinkedInCreator';
import LinkedInFAQ from '@/components/viral-post-generator/LinkedInFAQ';
import ViralRelatedTools from '@/components/viral-post-generator/ViralRelatedTools';
import LinkedInDemo from '@/components/viral-post-generator/LinkedInDemo';
import Testimonials from '@/components/Testimonials';

const ViralPostGenerator = () => {
  return (
    <>
      <Helmet>
        <title>AI LinkedIn Post Generator for Business Growth & Professional Networking | AI Powerhouse</title>
        <meta name="description" content="Create high-performing LinkedIn content in seconds with our specialized LinkedIn Post Generator. Drive engagement, increase professional visibility, and convert connections with AI-optimized posts tailored for LinkedIn's algorithm." />
        <meta name="keywords" content="linkedin post generator, viral linkedin content, business post generator, engagement content, linkedin algorithm, professional networking" />
        <link rel="canonical" href="https://www.aipowerhouse.com/viral-post-generator" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "AI LinkedIn Post Generator",
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
              }
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen">
        <LinkedInHero />
        <LinkedInFeatures />
        <LinkedInDemo />
        <LinkedInCapabilities />
        <LinkedInHowItWorks />
        <LinkedInCreator />
        <Testimonials />
        <LinkedInFAQ />
        <ViralRelatedTools />
      </main>
      
      <Footer />
    </>
  );
};

export default ViralPostGenerator;
