
import React from 'react';
import { TrendingUp, Target, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LinkedInFeatures = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <span className="text-sm font-medium text-purple-500 mb-4 block">EXECUTIVE-FOCUSED SOLUTION</span>
          <h2 className="text-white">
            Turn Business Ideas into <span className="text-gradient-mixed">Viral LinkedIn Content</span>
          </h2>
          <ul className="space-y-8 mt-8">
            <li className="flex gap-5">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-white">Algorithm Optimized</h3>
                <p className="text-white/70 mt-3">
                  Our AI analyzes LinkedIn's proven best practices to create posts with maximum visibility and engagement.
                </p>
              </div>
            </li>
            
            <li className="flex gap-5">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-500">
                <Target className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-white">Professional Networking</h3>
                <p className="text-white/70 mt-3">
                  Create content specifically designed for professional audiences that positions you as a thought leader.
                </p>
              </div>
            </li>
            
            <li className="flex gap-5">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-coral-500/20 flex items-center justify-center text-coral-500">
                <BarChart className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-white">Business Growth</h3>
                <p className="text-white/70 mt-3">
                  Convert connections into customers with strategically crafted content that drives meaningful business results.
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
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="LinkedIn post creation and analytics" 
              className="rounded-xl w-full h-auto shadow-lg transform transition-transform duration-300 hover:scale-[1.02]"
            />
            <div className="mt-6 flex justify-between items-center">
              <span className="text-xs text-white/70">Generated with AI in seconds</span>
              <span className="text-xs text-teal-400 bg-teal-900/30 px-3 py-1 rounded-full">LinkedIn Growth</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInFeatures;
