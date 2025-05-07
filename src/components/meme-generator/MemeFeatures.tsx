
import React from 'react';
import { Clock, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MemeFeatures = () => {
  return (
    <div className="container px-4 mx-auto py-16">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <span className="text-sm font-medium text-purple-500 mb-3 block">EXECUTIVE-FOCUSED SOLUTION</span>
          <h2 className="text-3xl font-bold text-white mb-6">Turn Business Ideas into <span className="text-gradient-mixed">Engaging Content</span></h2>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white">Executive Time-Saving</h3>
                <p className="text-white/70 mt-2">Generate professional memes in 30 seconds or less. No design team required.</p>
              </div>
            </li>
            
            <li className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-500">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white">Measurable ROI</h3>
                <p className="text-white/70 mt-2">Increase engagement by up to 300% with content that resonates with your target audience.</p>
              </div>
            </li>
            
            <li className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-coral-500/20 flex items-center justify-center text-coral-500">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white">Client Connection</h3>
                <p className="text-white/70 mt-2">Connect with modern audiences on their terms with relevant, timely content.</p>
              </div>
            </li>
          </ul>
          
          <div className="mt-8">
            <Button 
              asChild
              size="lg" 
              className="neo-button"
            >
              <a href="https://app.smartmaya.ai">Try for Free</a>
            </Button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 p-6 glass-card rounded-2xl backdrop-blur-md">
          <div className="aspect-video bg-dark-800/80 rounded-xl flex items-center justify-center p-6 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-teal-500/10 to-coral-500/20"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8 z-10">
              <div className="bg-dark-800/80 backdrop-blur-md p-6 rounded-lg border border-white/10 w-full max-w-sm">
                <h4 className="font-bold text-xl mb-2">Company Meeting Update</h4>
                <div className="my-4 bg-dark-900/60 p-4 rounded-md">
                  <p className="uppercase font-bold text-sm">When the CEO says we need to pivot</p>
                  <p className="text-white/60 text-sm mt-1">But we just launched the product yesterday</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/60">Created with AI in 5 seconds</span>
                  <span className="text-xs text-teal-400">Business Humor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeFeatures;
