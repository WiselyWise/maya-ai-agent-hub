
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Rocket } from 'lucide-react';

const ViralPostGenerator = () => {
  return (
    <>
      <Helmet>
        <title>Viral Post Generator | Create Engaging Content that Gets Shared</title>
        <meta name="description" content="Generate viral-worthy content for your social media channels. Our AI tool helps you create engaging posts that drive traffic and increase conversions." />
        <meta name="keywords" content="viral post generator, social media content, engagement posts, social media marketing, content creator ai" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Viral Post Generator",
              "applicationCategory": "BusinessApplication",
              "offers": {
                "@type": "Offer",
                "price": "0"
              },
              "description": "Generate viral-worthy content for your social media channels with our AI tool."
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-dark-800">
        <Hero 
          title="Viral Post Generator"
          subtitle="Create engaging social media content that gets shared. Our AI analyzes top-performing posts and helps you craft content that resonates with your audience."
          ctaText="Create Viral Content"
          ctaLink="#create"
        />
        
        <div className="container px-4 mx-auto py-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 p-6 glass-card rounded-2xl order-2 md:order-1">
              <div className="aspect-video bg-dark-900 rounded-xl flex items-center justify-center">
                <Rocket className="h-16 w-16 text-coral-500" />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <h2 className="text-3xl font-bold text-white mb-6">Create Content That Converts</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white">Platform-specific content</h3>
                    <p className="text-white/70 mt-2">Generate content optimized for LinkedIn, Twitter, Instagram, or Facebook.</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white">Engagement analytics</h3>
                    <p className="text-white/70 mt-2">Get predictions on how your content will perform before posting.</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-coral-500 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white">Hashtag optimization</h3>
                    <p className="text-white/70 mt-2">Automatically generate relevant hashtags to increase your content reach.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ViralPostGenerator;
