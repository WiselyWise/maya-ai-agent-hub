
import React from 'react';
import { Presentation, Lightbulb, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const SmartReplyRelatedTools = () => {
  const relatedTools = [
    {
      title: "Presentation Generator",
      description: "Create compelling presentations in minutes with our AI-powered presentation generator.",
      icon: <Presentation className="h-6 w-6 text-white" />,
      path: "/presentation-generator",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      title: "Prompt Genius",
      description: "Get better results from any AI system with sophisticated prompts crafted by our Prompt Genius.",
      icon: <Lightbulb className="h-6 w-6 text-white" />,
      path: "/prompt-genius",
      gradient: "from-coral-500 to-coral-600",
    },
    {
      title: "Viral Post Generator",
      description: "Create engaging social media content that drives traffic and increases brand awareness.",
      icon: <Rocket className="h-6 w-6 text-white" />,
      path: "/viral-post-generator",
      gradient: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <section className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-teal-500 mb-3 block">EXPLORE MORE</span>
        <h2 className="text-3xl font-bold text-white mb-4">Related <span className="text-gradient-teal">AI Tools</span></h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Discover our other AI-powered tools designed to enhance your business productivity and communication.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedTools.map((tool, index) => (
          <Link 
            key={index} 
            to={tool.path}
            className="glass-card rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
          >
            <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${tool.gradient} flex items-center justify-center mb-6`}>
              {tool.icon}
            </div>
            <h3 className="font-bold text-xl text-white mb-3">{tool.title}</h3>
            <p className="text-white/70">{tool.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SmartReplyRelatedTools;
