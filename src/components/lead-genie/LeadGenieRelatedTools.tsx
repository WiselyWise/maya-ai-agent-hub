
import React from 'react';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const relatedTools = [
  {
    title: "Prompt Genius",
    description: "Create sophisticated AI prompts that drive better results from any AI system.",
    path: "/prompt-genius",
    gradient: "from-coral-400 to-coral-600"
  },
  {
    title: "Smart Reply",
    description: "Generate professional email responses in seconds to manage your communications efficiently.",
    path: "/smart-reply",
    gradient: "from-teal-400 to-teal-600"
  },
  {
    title: "Presentation Generator",
    description: "Create professional presentations with AI assistance to win more clients.",
    path: "/presentation-generator",
    gradient: "from-purple-400 to-purple-600"
  }
];

const LeadGenieRelatedTools = () => {
  return (
    <section className="py-16 container mx-auto">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-coral-500 mb-3 block">EXPLORE MORE</span>
        <h2 className="text-3xl font-bold text-white mb-4">Related <span className="text-gradient">AI Tools</span></h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Discover other AI-powered tools that complement Lead Genie and enhance your business operations.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {relatedTools.map((tool, index) => (
          <Card key={index} className="glass-card overflow-hidden hover:translate-y-[-5px] transition-all duration-300">
            <div className="h-2 bg-gradient-to-r w-full" style={{backgroundImage: `linear-gradient(to right, var(--${tool.gradient}))`}}></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">{tool.title}</h3>
              <p className="text-white/70 mb-4">{tool.description}</p>
              <Link to={tool.path} className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LeadGenieRelatedTools;
