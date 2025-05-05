
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Presentation } from 'lucide-react';

const PresentationGenerator = () => {
  return (
    <>
      <Helmet>
        <title>AI Presentation Generator | Create Professional Presentations in Minutes</title>
        <meta name="description" content="Create stunning presentations in minutes with our AI-powered presentation generator. Perfect for small business owners and busy executives." />
        <meta name="keywords" content="ai presentation generator, presentation maker, slide deck generator, business presentations, ai slides" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "AI Presentation Generator",
              "applicationCategory": "BusinessApplication",
              "offers": {
                "@type": "Offer",
                "price": "0"
              },
              "description": "Create stunning presentations in minutes with our AI-powered presentation generator."
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-dark-800">
        <Hero 
          title="AI Presentation Generator"
          subtitle="Create professional presentations in minutes, not hours. Our AI tool automatically generates compelling slide decks based on your input."
          ctaText="Create a Presentation"
          ctaLink="#create"
        />
        
        <div className="container px-4 mx-auto py-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">How It Works</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-medium">1</div>
                  <div>
                    <h3 className="text-xl font-medium text-white">Enter your topic</h3>
                    <p className="text-white/70 mt-2">Provide the topic or content that you want to present.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-medium">2</div>
                  <div>
                    <h3 className="text-xl font-medium text-white">Select a style</h3>
                    <p className="text-white/70 mt-2">Choose from various professional presentation templates.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-coral-500 flex items-center justify-center text-white font-medium">3</div>
                  <div>
                    <h3 className="text-xl font-medium text-white">Generate & download</h3>
                    <p className="text-white/70 mt-2">Our AI will create your presentation, ready to download and use.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 p-6 glass-card rounded-2xl">
              <div className="aspect-video bg-dark-900 rounded-xl flex items-center justify-center">
                <Presentation className="h-16 w-16 text-purple-500" />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PresentationGenerator;
