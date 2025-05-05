
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Smile, Presentation, Rocket, Lightbulb, Sparkles, Share, Download } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import FeatureCard from '@/components/FeatureCard';

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
        <Hero 
          title="Generate Hilarious Memes with AI in Seconds"
          subtitle="Transform your ideas into viral-worthy content instantly. Our AI tool helps busy professionals create engaging memes that boost social media presence and connect with audiences."
          ctaText="Create Your First Meme"
          ctaLink="#create"
          accentWord="Memes"
        />
        
        <div className="container px-4 mx-auto py-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <span className="text-sm font-medium text-purple-500 mb-3 block">TIME-SAVING AI SOLUTION</span>
              <h2 className="text-3xl font-bold text-white mb-6">Turn Ideas into <span className="text-gradient-mixed">Viral Content</span></h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                    <Smile className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white">Time-saving</h3>
                    <p className="text-white/70 mt-2">Generate professional memes in seconds, not hours. No graphic design skills required.</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-500">
                    <Share className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white">Highly shareable</h3>
                    <p className="text-white/70 mt-2">Our AI understands what makes content go viral, increasing your social media engagement.</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-coral-500/20 flex items-center justify-center text-coral-500">
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
                  className="neo-button"
                >
                  <a href="#create">Try It Now</a>
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 p-6 glass-card rounded-2xl backdrop-blur-md">
              <div className="aspect-video bg-dark-800/80 rounded-xl flex items-center justify-center p-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-teal-500/10 to-coral-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold text-center p-4 z-10">
                  <div className="bg-dark-800/80 backdrop-blur-md p-6 rounded-lg border border-white/10">
                    <Smile className="h-12 w-12 mx-auto mb-4 text-purple-500" />
                    <p>Your Viral Meme Here</p>
                    <p className="text-sm text-white/60 mt-2">Transform your ideas into engaging content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div id="features" className="container px-4 mx-auto py-16">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-teal-500 mb-3 block">EVERYTHING YOU NEED</span>
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-white">Everything You Need for </span>
              <span className="text-gradient-mixed">Epic Memes</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our AI-powered platform gives you all the tools to create viral-worthy content in seconds
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              title="Lightning Fast"
              description="Generate custom memes in seconds, not minutes. Our AI works at the speed of your creativity."
              icon={<Sparkles className="h-6 w-6" />}
              iconColor="purple"
            />
            
            <FeatureCard 
              title="Extensive Templates"
              description="Access thousands of classic and trending meme templates all in one place."
              icon={<Share className="h-6 w-6" />}
              iconColor="teal"
            />
            
            <FeatureCard 
              title="Style Customization"
              description="Adjust fonts, colors, and layouts to make your memes truly unique and personal."
              icon={<Download className="h-6 w-6" />}
              iconColor="coral"
            />
          </div>
        </div>
        
        <div className="container px-4 mx-auto py-16">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-coral-500 mb-3 block">HOW IT WORKS</span>
            <h2 className="text-3xl font-bold text-white mb-4">Create in Three Simple Steps</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Creating viral-worthy memes has never been easier. Our AI takes care of all the hard work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 relative glass-card rounded-2xl">
              <div className="absolute top-12 left-full hidden md:block w-1/3 h-px bg-gradient-to-r from-purple-500 to-transparent z-10" />
              <div className="h-24 w-24 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-gradient">1</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Enter your idea</h3>
              <p className="text-white/70">
                Type in what you want your meme to be about. A business joke, industry trend, or clever observation.
              </p>
            </div>
            
            <div className="text-center p-6 relative glass-card rounded-2xl">
              <div className="absolute top-12 left-full hidden md:block w-1/3 h-px bg-gradient-to-r from-teal-500 to-transparent z-10" />
              <div className="h-24 w-24 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-gradient-teal">2</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Choose a style</h3>
              <p className="text-white/70">
                Select from various meme formats and styles, from classic templates to modern designs.
              </p>
            </div>
            
            <div className="text-center p-6 glass-card rounded-2xl">
              <div className="h-24 w-24 rounded-full bg-coral-500/10 border border-coral-500/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-gradient-coral">3</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Download & share</h3>
              <p className="text-white/70">
                Instantly get your custom meme to use in your marketing, social media, or internal communications.
              </p>
            </div>
          </div>
        </div>
        
        <div id="create" className="container px-4 mx-auto py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-gradient">Create Your First Meme</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              This feature is coming soon! Sign up to be notified when our Meme Generator is ready.
            </p>
          </div>
          
          <div className="max-w-md mx-auto glass-card p-8 rounded-2xl backdrop-blur-md">
            <div className="flex items-center justify-center mb-6">
              <Smile className="h-10 w-10 text-purple-500" />
            </div>
            <p className="text-white text-center mb-6">
              Be the first to know when our AI meme generator launches!
            </p>
            <Button className="w-full neo-button">
              Join Waitlist
            </Button>
          </div>
        </div>
        
        <div className="container px-4 mx-auto py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked <span className="text-gradient-mixed">Questions</span></h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Everything you need to know about our meme generator
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto glass-card rounded-2xl p-6 backdrop-blur-md">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-white/10">
                <AccordionTrigger className="text-white">How does the AI meme generator work?</AccordionTrigger>
                <AccordionContent className="text-white/70">
                  Our AI analyzes your text prompt to understand the humor and context. It then searches through thousands of templates to find the perfect match, applies your text with optimal placement, and generates a ready-to-share meme in seconds.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-white/10">
                <AccordionTrigger className="text-white">Can I customize the memes after they're generated?</AccordionTrigger>
                <AccordionContent className="text-white/70">
                  Yes! Once your meme is generated, you can customize the font, colors, text position, and even swap the template if you'd like. Our editor is intuitive and designed for busy professionals.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-white/10">
                <AccordionTrigger className="text-white">How many memes can I create?</AccordionTrigger>
                <AccordionContent className="text-white/70">
                  Our free plan allows you to create 5 memes per day. Premium plans offer unlimited meme creation plus additional features for businesses.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-white/10">
                <AccordionTrigger className="text-white">Can I use these memes commercially?</AccordionTrigger>
                <AccordionContent className="text-white/70">
                  Yes, all memes created with our platform can be used for commercial purposes, including marketing, social media, and internal communications.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border-white/10">
                <AccordionTrigger className="text-white">Do you store the memes I create?</AccordionTrigger>
                <AccordionContent className="text-white/70">
                  We don't store your memes on our servers unless you explicitly choose to save them to your account. Your privacy and content ownership are important to us.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        
        <div className="container px-4 mx-auto py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Other AI Tools You Might Like</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Discover our full suite of AI tools designed to boost your productivity and marketing efforts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-2xl hover:translate-y-[-5px] transition-all duration-300 backdrop-blur-md group">
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
            
            <div className="glass-card p-6 rounded-2xl hover:translate-y-[-5px] transition-all duration-300 backdrop-blur-md group">
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
            
            <div className="glass-card p-6 rounded-2xl hover:translate-y-[-5px] transition-all duration-300 backdrop-blur-md group">
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
