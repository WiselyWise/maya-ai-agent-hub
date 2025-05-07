
import React from 'react';
import { Clock, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MemeFeatures = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <span className="text-sm font-medium text-purple-500 mb-4 block">EXECUTIVE-FOCUSED SOLUTION</span>
          <h2 className="text-white">
            Turn Business Ideas into <span className="text-gradient-mixed">Engaging Content</span>
          </h2>
          <ul className="space-y-8 mt-8">
            <li className="flex gap-5">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-white">Executive Time-Saving</h3>
                <p className="text-white/70 mt-3">
                  Generate professional memes in 30 seconds or less. No design team required.
                </p>
              </div>
            </li>
            
            <li className="flex gap-5">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-500">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-white">Measurable ROI</h3>
                <p className="text-white/70 mt-3">
                  Increase engagement by up to 300% with content that resonates with your target audience.
                </p>
              </div>
            </li>
            
            <li className="flex gap-5">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-coral-500/20 flex items-center justify-center text-coral-500">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-white">Client Connection</h3>
                <p className="text-white/70 mt-3">
                  Connect with modern audiences on their terms with relevant, timely content.
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
              src="/lovable-uploads/4786e5fb-0776-42e8-8fbe-86effac5abea.png" 
              alt="When your boss says let's pivot right after launch" 
              className="rounded-xl w-full h-auto shadow-lg transform transition-transform duration-300 hover:scale-[1.02]"
            />
            <div className="mt-6 flex justify-between items-center">
              <span className="text-xs text-white/70">Created with AI in seconds</span>
              <span className="text-xs text-teal-400 bg-teal-900/30 px-3 py-1 rounded-full">Business Humor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeFeatures;
