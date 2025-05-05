
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MemeHero from '@/components/meme-generator/MemeHero';
import MemeFeatures from '@/components/meme-generator/MemeFeatures';
import MemeCapabilities from '@/components/meme-generator/MemeCapabilities';
import HowItWorks from '@/components/meme-generator/HowItWorks';
import MemeCreator from '@/components/meme-generator/MemeCreator';
import FAQ from '@/components/meme-generator/FAQ';
import RelatedTools from '@/components/meme-generator/RelatedTools';

const MemeGenerator = () => {
  return (
    <>
      <Helmet>
        <title>AI Meme Generator | Create Engaging Viral Memes for Business Marketing</title>
        <meta name="description" content="Transform your business messaging with our AI Meme Generator. Create professional, on-brand memes that engage your audience and save hours of creative time." />
        <meta name="keywords" content="ai meme generator, business memes, marketing memes, viral content creator, executive time-saving tools, social media content" />
        <link rel="canonical" href="https://www.aipowerhouse.com/meme-generator" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "AI Meme Generator",
              "applicationCategory": "BusinessApplication",
              "offers": {
                "@type": "Offer",
                "price": "0"
              },
              "description": "AI-powered meme generator for business professionals. Create engaging viral memes in seconds with just a text prompt."
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen">
        <MemeHero />
        <MemeFeatures />
        <MemeCapabilities />
        <HowItWorks />
        <MemeCreator />
        <FAQ />
        <RelatedTools />
      </main>
      
      <Footer />
    </>
  );
};

export default MemeGenerator;
