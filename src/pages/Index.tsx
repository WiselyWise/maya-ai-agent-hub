
import React from 'react';
import { Helmet } from 'react-helmet';
import { Presentation, Rocket, Lightbulb, Smile } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AgentCard from '@/components/AgentCard';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import Testimonials from '@/components/Testimonials';

const agents = [
  {
    title: 'Presentation Generator',
    description: 'Create professional presentations in minutes, not hours. Our AI tool automatically generates compelling slide decks based on your input.',
    icon: <Presentation className="h-6 w-6 text-white" />,
    slug: 'presentation-generator',
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Viral Post Generator',
    description: 'Create engaging social media content that gets shared. Our AI analyzes top-performing posts to craft content that resonates with your audience.',
    icon: <Rocket className="h-6 w-6 text-white" />,
    slug: 'viral-post-generator',
    gradient: 'from-teal-500 to-teal-600',
  },
  {
    title: 'Prompt Genius',
    description: 'Transform simple inputs into sophisticated AI prompts. Get better results from any AI system by leveraging proven prompt engineering frameworks.',
    icon: <Lightbulb className="h-6 w-6 text-white" />,
    slug: 'prompt-genius',
    gradient: 'from-coral-500 to-coral-600',
  },
  {
    title: 'Meme Generator',
    description: 'Create shareable, engaging memes in seconds with AI. Perfect for busy executives who want to connect with their audience through humor.',
    icon: <Smile className="h-6 w-6 text-white" />,
    slug: 'meme-generator',
    gradient: 'from-purple-500 to-coral-600',
  },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AI Powerhouse | AI Tools for Small Businesses and Busy Executives</title>
        <meta name="description" content="Discover our suite of AI-powered productivity tools designed for small business owners and busy executives. Automate routine tasks and focus on strategic decisions." />
        <meta name="keywords" content="ai tools, ai productivity, small business automation, ai for executives, business ai solutions, productivity tools" />
        <link rel="canonical" href="https://www.aipowerhouse.com/" />
        <meta property="og:title" content="AI Powerhouse | AI Tools for Small Businesses and Busy Executives" />
        <meta property="og:description" content="Discover our suite of AI-powered productivity tools designed for small business owners and busy executives." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aipowerhouse.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Powerhouse | AI Tools for Small Businesses" />
        <meta name="twitter:description" content="Discover our suite of AI-powered productivity tools designed for small business owners and busy executives." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AI Powerhouse",
              "url": "https://www.aipowerhouse.com/",
              "description": "AI-powered productivity tools designed for small business owners and busy executives.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.aipowerhouse.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen">
        <Hero 
          title="Supercharge Your Productivity with AI"
          subtitle="Our suite of AI-powered tools helps small business owners and busy executives automate routine tasks, enhance creativity, and make data-driven decisions."
          accentWord="Productivity"
        />
        
        <section id="tools" className="py-20 container px-4 mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-purple-500 mb-3 block">OUR TOOLSET</span>
            <h2 className="text-3xl font-bold text-white mb-4">Our AI <span className="text-gradient-mixed">Tools</span></h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Explore our collection of specialized AI tools designed to solve specific business challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <AgentCard 
                key={agent.slug}
                title={agent.title}
                description={agent.description}
                icon={agent.icon}
                slug={agent.slug}
                gradient={agent.gradient}
              />
            ))}
          </div>
        </section>
        
        <FeatureSection />
        
        <section className="py-16 container px-4 mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-teal-500 mb-3 block">SIMPLE WORKFLOW</span>
            <h2 className="text-3xl font-bold text-white mb-4">How Our <span className="text-gradient-teal">Tools Work</span></h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our AI tools follow a simple, intuitive workflow designed for busy professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 relative glass-card rounded-2xl backdrop-blur-md">
              <div className="absolute top-12 left-full hidden md:block w-1/3 h-px bg-gradient-to-r from-purple-500 to-transparent z-10" />
              <div className="h-24 w-24 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-gradient">1</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Select Your Tool</h3>
              <p className="text-white/70">
                Choose the AI tool that addresses your specific business need from our collection.
              </p>
            </div>
            
            <div className="text-center p-6 relative glass-card rounded-2xl backdrop-blur-md">
              <div className="absolute top-12 left-full hidden md:block w-1/3 h-px bg-gradient-to-r from-teal-500 to-transparent z-10" />
              <div className="h-24 w-24 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-gradient-teal">2</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Provide Input</h3>
              <p className="text-white/70">
                Enter your requirements or content needs into our intuitive interface.
              </p>
            </div>
            
            <div className="text-center p-6 glass-card rounded-2xl backdrop-blur-md">
              <div className="h-24 w-24 rounded-full bg-coral-500/10 border border-coral-500/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-gradient-coral">3</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Get Results</h3>
              <p className="text-white/70">
                Receive AI-generated content, insights, or strategies ready for immediate use.
              </p>
            </div>
          </div>
        </section>
        
        <Testimonials />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
