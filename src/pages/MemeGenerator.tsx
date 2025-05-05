
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Smile, Share, Download } from 'lucide-react';

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
      
      <main className="min-h-screen bg-dark-800">
        <Hero 
          title="AI Meme Generator"
          subtitle="Create shareable, engaging memes in seconds with AI. Perfect for busy executives and small business owners who want to connect with their audience."
          ctaText="Generate a Meme"
          ctaLink="#create"
        />
        
        <div className="container px-4 mx-auto py-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">Turn Ideas into Viral Content</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                    <Smile className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white">Time-saving</h3>
                    <p className="text-white/70 mt-2">Generate professional memes in seconds, not hours. No graphic design skills required.</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center text-white">
                    <Share className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white">Highly shareable</h3>
                    <p className="text-white/70 mt-2">Our AI understands what makes content go viral, increasing your social media engagement.</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-coral-500 flex items-center justify-center text-white">
                    <Download className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white">Instant download</h3>
                    <p className="text-white/70 mt-2">Download your memes in seconds for immediate use on any platform.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg hover:shadow-glow transition-all duration-300 rounded-xl"
                >
                  <a href="#create">Try It Now</a>
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 p-6 glass-card rounded-2xl">
              <div className="aspect-video bg-dark-900 rounded-xl flex items-center justify-center p-6">
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-teal-500/10 to-coral-500/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold text-center p-4">
                    <div className="bg-dark-800/80 backdrop-blur-sm p-4 rounded-lg">
                      <Smile className="h-12 w-12 mx-auto mb-4 text-purple-500" />
                      <p>Your Viral Meme Here</p>
                      <p className="text-sm text-white/60 mt-2">Transform your ideas into engaging content</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container px-4 mx-auto py-16 border-t border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Creating viral-worthy memes has never been easier. Our AI takes care of all the hard work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 relative">
              <div className="absolute top-12 left-full hidden md:block w-1/3 h-px bg-gradient-to-r from-purple-500 to-transparent z-10" />
              <div className="h-24 w-24 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-purple-500">1</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Enter your idea</h3>
              <p className="text-white/70">
                Type in what you want your meme to be about. A business joke, industry trend, or clever observation.
              </p>
            </div>
            
            <div className="text-center p-6 relative">
              <div className="absolute top-12 left-full hidden md:block w-1/3 h-px bg-gradient-to-r from-teal-500 to-transparent z-10" />
              <div className="h-24 w-24 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-teal-500">2</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Choose a style</h3>
              <p className="text-white/70">
                Select from various meme formats and styles, from classic templates to modern designs.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="h-24 w-24 rounded-full bg-coral-500/10 border border-coral-500/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-coral-500">3</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Download & share</h3>
              <p className="text-white/70">
                Instantly get your custom meme to use in your marketing, social media, or internal communications.
              </p>
            </div>
          </div>
        </div>
        
        <div id="create" className="container px-4 mx-auto py-16 border-t border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Create Your First Meme</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              This feature is coming soon! Sign up to be notified when our Meme Generator is ready.
            </p>
          </div>
          
          <div className="max-w-md mx-auto glass-card p-8 rounded-2xl">
            <div className="flex items-center justify-center mb-6">
              <Smile className="h-10 w-10 text-purple-500" />
            </div>
            <p className="text-white text-center mb-6">
              Be the first to know when our AI meme generator launches!
            </p>
            <Button 
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg hover:shadow-glow transition-all duration-300"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
        
        <div className="container px-4 mx-auto py-16 border-t border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Other AI Tools You Might Like</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Discover our full suite of AI tools designed to boost your productivity and marketing efforts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-2xl hover:translate-y-[-5px] transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 shadow-glow">
                  <Presentation className="h-6 w-6 text-white" />
                </div>
                <Button 
                  asChild
                  variant="ghost" 
                  className="text-white hover:text-purple-400 p-0 hover:bg-transparent"
                >
                  <a href="/presentation-generator" className="flex items-center gap-1 text-sm">
                    Learn More
                  </a>
                </Button>
              </div>
              <h3 className="text-xl font-medium text-white tracking-tight mb-2">Presentation Generator</h3>
              <p className="text-white/70">Create professional presentations in minutes with our AI-powered slide deck creator.</p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl hover:translate-y-[-5px] transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 shadow-glow-teal">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <Button 
                  asChild
                  variant="ghost" 
                  className="text-white hover:text-teal-400 p-0 hover:bg-transparent"
                >
                  <a href="/viral-post-generator" className="flex items-center gap-1 text-sm">
                    Learn More
                  </a>
                </Button>
              </div>
              <h3 className="text-xl font-medium text-white tracking-tight mb-2">Viral Post Generator</h3>
              <p className="text-white/70">Create engaging social media content that gets shared and drives engagement.</p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl hover:translate-y-[-5px] transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-coral-500 to-coral-600 shadow-glow-coral">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <Button 
                  asChild
                  variant="ghost" 
                  className="text-white hover:text-coral-400 p-0 hover:bg-transparent"
                >
                  <a href="/prompt-genius" className="flex items-center gap-1 text-sm">
                    Learn More
                  </a>
                </Button>
              </div>
              <h3 className="text-xl font-medium text-white tracking-tight mb-2">Prompt Genius</h3>
              <p className="text-white/70">Transform simple inputs into sophisticated AI prompts for better results.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default MemeGenerator;
