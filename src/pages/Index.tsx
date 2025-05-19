
import React from 'react';
import { Sparkles, Presentation, MessageSquare, Lightbulb, Image, Mail, Users, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AgentCard from '@/components/AgentCard';
import FeatureSection from '@/components/FeatureSection';
import DemoSection from '@/components/DemoSection';
import Testimonials from '@/components/Testimonials';
import PricingTable from '@/components/PricingTable';
import SEO from '@/components/SEO';

const Index = () => {
  const agentTools = [
    {
      title: "Presentation Generator",
      description: "Create professional slide decks in minutes with AI that handles design, content, and formatting.",
      icon: <Presentation className="h-6 w-6 text-white" />,
      slug: "presentation-generator",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Viral Post Generator",
      description: "Generate engagement-driven social media content optimized for each platform's algorithm.",
      icon: <Sparkles className="h-6 w-6 text-white" />,
      slug: "viral-post-generator",
      gradient: "from-teal-500 to-teal-600"
    },
    {
      title: "Prompt Genius",
      description: "Create sophisticated AI prompts that drive better results from any AI system.",
      icon: <Lightbulb className="h-6 w-6 text-white" />,
      slug: "prompt-genius",
      gradient: "from-coral-500 to-coral-600"
    },
    {
      title: "Meme Generator",
      description: "Create custom, brand-safe memes that resonate with your audience and drive engagement.",
      icon: <Image className="h-6 w-6 text-white" />,
      slug: "meme-generator",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Smart Reply",
      description: "Generate professional email responses in seconds to manage your communications efficiently.",
      icon: <Mail className="h-6 w-6 text-white" />,
      slug: "smart-reply",
      gradient: "from-teal-500 to-teal-600"
    },
    {
      title: "Lead Genie",
      description: "Define ICPs, create email campaigns, and manage your sales funnel with AI assistance.",
      icon: <Users className="h-6 w-6 text-white" />,
      slug: "lead-genie",
      gradient: "from-coral-500 to-coral-600"
    },
    {
      title: "Document Genie",
      description: "Generate professional documents with AI research, writing, and formatting capabilities.",
      icon: <FileText className="h-6 w-6 text-white" />,
      slug: "document-genie",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="relative min-h-screen">
      <SEO 
        title="AI Business Tools for Productivity | Maya AI Agent Hub"
        description="Boost business productivity with Maya AI's suite of AI-powered tools for executives and small business owners. Automate tasks and enhance decision making."
        keywords="ai business tools, productivity tools, business automation, ai for executives, small business ai, ai productivity suite"
        canonicalUrl="https://agent-hub.smartmaya.ai/"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Maya AI Agent Hub",
          "applicationCategory": "BusinessApplication",
          "offers": {
            "@type": "AggregateOffer",
            "offers": [
              {
                "@type": "Offer",
                "name": "Free Trial",
                "price": "0",
                "priceCurrency": "USD"
              }
            ]
          },
          "description": "Suite of AI-powered tools for small businesses and busy executives to automate routine tasks, enhance creativity, and make data-driven decisions.",
          "url": "https://agent-hub.smartmaya.ai/",
          "provider": {
            "@type": "Organization",
            "name": "Maya AI",
            "url": "https://smartmaya.ai",
            "logo": "https://agent-hub.smartmaya.ai/logo.png"
          },
          "hasPart": [
            {
              "@type": "SoftwareApplication",
              "name": "AI Presentation Generator",
              "applicationCategory": "BusinessApplication",
              "url": "https://agent-hub.smartmaya.ai/presentation-generator"
            },
            {
              "@type": "SoftwareApplication",
              "name": "LinkedIn Post Generator",
              "applicationCategory": "BusinessApplication",
              "url": "https://agent-hub.smartmaya.ai/viral-post-generator"
            },
            {
              "@type": "SoftwareApplication",
              "name": "Prompt Genius",
              "applicationCategory": "BusinessApplication",
              "url": "https://agent-hub.smartmaya.ai/prompt-genius"
            },
            {
              "@type": "SoftwareApplication",
              "name": "AI Meme Generator",
              "applicationCategory": "BusinessApplication",
              "url": "https://agent-hub.smartmaya.ai/meme-generator"
            },
            {
              "@type": "SoftwareApplication",
              "name": "Smart Reply AI",
              "applicationCategory": "BusinessApplication",
              "url": "https://agent-hub.smartmaya.ai/smart-reply"
            },
            {
              "@type": "SoftwareApplication",
              "name": "Lead Genie",
              "applicationCategory": "BusinessApplication",
              "url": "https://agent-hub.smartmaya.ai/lead-genie"
            },
            {
              "@type": "SoftwareApplication",
              "name": "Document Genie",
              "applicationCategory": "BusinessApplication",
              "url": "https://agent-hub.smartmaya.ai/document-genie"
            }
          ]
        }}
      />
      
      <Navbar />
      <main className="pt-16">
        <Hero 
          title="AI Business Tools to Supercharge Your Productivity"
          subtitle="Our suite of AI-powered tools helps small business owners and busy executives automate routine tasks, enhance creativity, and make data-driven decisions."
          accentWord="Productivity"
        />
        
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-purple-500 mb-3 block">OUR AI TOOLS</span>
              <h2 className="text-3xl font-bold text-white mb-4">Specialized <span className="text-gradient">AI Tools</span> for Business</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Each tool is designed to solve specific business challenges, saving you time and improving your results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-stretch">
              {agentTools.map((tool) => (
                <AgentCard 
                  key={tool.title}
                  title={tool.title}
                  description={tool.description}
                  icon={tool.icon}
                  slug={tool.slug}
                  gradient={tool.gradient}
                />
              ))}
            </div>
          </div>
        </section>
        
        <FeatureSection />
        
        <DemoSection 
          title="Maya AI Agent Hub in Action"
          description="See how our AI-powered tools can transform your productivity and help you achieve better results in less time."
          imageSrc="/lovable-uploads/4786e5fb-0776-42e8-8fbe-86effac5abea.png"
          imageAlt="Maya AI Agent Hub demo"
          videoUrl="https://www.youtube.com/watch?v=example-video-id"
        />
        
        <PricingTable />
        
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
