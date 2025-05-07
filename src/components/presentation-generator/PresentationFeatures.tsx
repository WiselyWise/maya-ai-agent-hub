
import React from 'react';
import { Clock, Layout, Paintbrush } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PresentationFeatures = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <span className="text-sm font-medium text-purple-500 mb-4 block">EXECUTIVE-FOCUSED SOLUTION</span>
          <h2 className="text-white">
            Transform Ideas into <span className="text-gradient-mixed">Compelling Presentations</span>
          </h2>
          <ul className="space-y-8 mt-8">
            <li className="flex gap-5">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-white">Executive Time-Saving</h3>
                <p className="text-white/70 mt-3">
                  Generate complete presentation decks in minutes instead of hours. Free your team for strategic work.
                </p>
              </div>
            </li>
            
            <li className="flex gap-5">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-500">
                <Layout className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-white">Professional Structure</h3>
                <p className="text-white/70 mt-3">
                  AI-generated slides follow proven presentation frameworks to maximize impact and audience engagement.
                </p>
              </div>
            </li>
            
            <li className="flex gap-5">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-coral-500/20 flex items-center justify-center text-coral-500">
                <Paintbrush className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-white">Enterprise-Grade Design</h3>
                <p className="text-white/70 mt-3">
                  Beautiful, brand-aligned templates that maintain visual consistency across all slides.
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
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Professional presentation slide templates" 
              className="rounded-xl w-full h-auto shadow-lg transform transition-transform duration-300 hover:scale-[1.02]"
            />
            <div className="mt-6 flex justify-between items-center">
              <span className="text-xs text-white/70">Created with AI in minutes</span>
              <span className="text-xs text-teal-400 bg-teal-900/30 px-3 py-1 rounded-full">Executive Decks</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationFeatures;
