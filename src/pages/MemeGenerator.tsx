
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MemeHero from '@/components/meme-generator/MemeHero';
import MemeFeatures from '@/components/meme-generator/MemeFeatures';
import MemeCapabilities from '@/components/meme-generator/MemeCapabilities';
import HowItWorks from '@/components/meme-generator/HowItWorks';
import MemeCreator from '@/components/meme-generator/MemeCreator';
import FAQ from '@/components/meme-generator/FAQ';
import RelatedTools from '@/components/meme-generator/RelatedTools';
import MemeDemo from '@/components/meme-generator/MemeDemo';
import Testimonials from '@/components/Testimonials';
import SEO from '@/components/SEO';

const MemeGenerator = () => {
  return (
    <>
      <SEO 
        title="Business Meme Generator for Marketing Strategy | Maya AI"
        description="Create professional, brand-aligned memes for your marketing strategy with our AI business meme generator. Drive social engagement and save creative time."
        keywords="business meme generator for marketing, brand meme creator, professional meme maker, social media engagement, marketing memes, business humor"
        canonicalUrl="https://agent-hub.smartmaya.ai/meme-generator"
        schema={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Executive AI Meme Generator",
          "applicationCategory": "BusinessApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "description": "AI-powered meme generator built specifically for small business owners and busy executives. Create professional, on-brand memes in seconds with minimal effort.",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "156",
            "bestRating": "5",
            "worstRating": "1"
          },
          "url": "https://agent-hub.smartmaya.ai/meme-generator",
          "provider": {
            "@type": "Organization",
            "name": "Maya AI",
            "url": "https://smartmaya.ai"
          }
        }}
      />
      
      <Navbar />
      
      <main className="min-h-screen">
        <MemeHero />
        <MemeFeatures />
        <MemeDemo />
        <MemeCapabilities />
        <HowItWorks />
        <MemeCreator />
        <Testimonials />
        <FAQ />
        <RelatedTools />
      </main>
      
      <Footer />
    </>
  );
};

export default MemeGenerator;
