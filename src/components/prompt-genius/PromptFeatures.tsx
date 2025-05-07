
import React from 'react';
import { BrainCircuit, ArrowUpRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PromptFeatures = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <span className="text-sm font-medium text-purple-500 mb-4 block">EXECUTIVE-FOCUSED SOLUTION</span>
          <h2 className="text-white">
            Transform Simple Ideas into <span className="text-gradient-mixed">Powerful AI Instructions</span>
          </h2>
          <ul className="space-y-8 mt-8">
            <li className="flex gap-5">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                <BrainCircuit className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-white">Expert-Level Results</h3>
                <p className="text-white/70 mt-3">
                  Get professional quality outputs from any AI system using our optimized prompt structures.
                </p>
              </div>
            </li>
            
            <li className="flex gap-5">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-500">
                <ArrowUpRight className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-white">Efficiency Amplified</h3>
                <p className="text-white/70 mt-3">
                  Reduce iterations and get accurate results on the first try. Save hours of back-and-forth.
                </p>
              </div>
            </li>
            
            <li className="flex gap-5">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-coral-500/20 flex items-center justify-center text-coral-500">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-white">Business Context Aware</h3>
                <p className="text-white/70 mt-3">
                  Domain-specific prompt frameworks for marketing, finance, HR, strategy, and more.
                </p>
              </div>
            </li>
          </ul>
          
          <div className="mt-10">
            <Button 
              asChild
              size="lg" 
              className="neo-button"
            >
              <a href="https://app.smartmaya.ai">Try for Free</a>
            </Button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <div className="glass-card rounded-2xl backdrop-blur-md relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="AI prompting interface with enhanced results" 
              className="rounded-xl w-full h-auto shadow-lg transform transition-transform duration-300 hover:scale-[1.02]"
            />
            <div className="mt-6 flex justify-between items-center">
              <span className="text-xs text-white/70">Transform simple inputs to expert prompts</span>
              <span className="text-xs text-teal-400 bg-teal-900/30 px-3 py-1 rounded-full">AI Optimization</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptFeatures;
