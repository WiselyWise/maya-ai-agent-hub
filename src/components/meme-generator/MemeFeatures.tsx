
import React from 'react';
import { Smile, Share, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MemeFeatures = () => {
  return (
    <div className="container px-4 mx-auto py-16">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <span className="text-sm font-medium text-purple-500 mb-3 block">TIME-SAVING AI SOLUTION</span>
          <h2 className="text-3xl font-bold text-white mb-6">Turn Ideas into <span className="text-gradient-mixed">Viral Content</span></h2>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                <Smile className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white">Time-saving</h3>
                <p className="text-white/70 mt-2">Generate professional memes in seconds, not hours. No graphic design skills required.</p>
              </div>
            </li>
            
            <li className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-500">
                <Share className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white">Highly shareable</h3>
                <p className="text-white/70 mt-2">Our AI understands what makes content go viral, increasing your social media engagement.</p>
              </div>
            </li>
            
            <li className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-coral-500/20 flex items-center justify-center text-coral-500">
                <Download className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white">Instant download</h3>
                <p className="text-white/70 mt-2">Download your memes in seconds for immediate use on any platform.</p>
              </div>
            </li>
          </ul>
          
          <div className="mt-8">
            <Button 
              asChild
              size="lg" 
              className="neo-button"
            >
              <a href="#create">Try It Now</a>
            </Button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 p-6 glass-card rounded-2xl backdrop-blur-md">
          <div className="aspect-video bg-dark-800/80 rounded-xl flex items-center justify-center p-6 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-teal-500/10 to-coral-500/20"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold text-center p-4 z-10">
              <div className="bg-dark-800/80 backdrop-blur-md p-6 rounded-lg border border-white/10">
                <Smile className="h-12 w-12 mx-auto mb-4 text-purple-500" />
                <p>Your Viral Meme Here</p>
                <p className="text-sm text-white/60 mt-2">Transform your ideas into engaging content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeFeatures;
