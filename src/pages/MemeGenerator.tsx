
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
import MemeDemo from '@/components/meme-generator/MemeDemo';
import Testimonials from '@/components/Testimonials';

const MemeGenerator = () => {
  return (
    <>
      <Helmet>
        <title>AI Meme Generator for Small Business Marketing & Executive Time Saving | AI Powerhouse</title>
        <meta name="description" content="Create professional, brand-aligned memes in 30 seconds with our AI Meme Generator built specifically for small business owners and busy executives. Save hours of creative time while boosting engagement." />
        <meta name="keywords" content="business meme generator, executive meme creator, small business social media tool, time-saving marketing ai, professional meme maker, business humor generator" />
        <link rel="canonical" href="https://www.aipowerhouse.com/meme-generator" />
        <script type="application/ld+json">
          {`
            {
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
              }
            }
          `}
        </script>
      </Helmet>
      
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
