
import React from 'react';
import { Button } from '@/components/ui/button';
import { Presentation, Rocket, Lightbulb } from 'lucide-react';

const RelatedTools = () => {
  return (
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
  );
};

export default RelatedTools;
