
import React from 'react';
import FeatureCard from '@/components/FeatureCard';
import { Sparkles, Share, Download } from 'lucide-react';

const MemeCapabilities = () => {
  return (
    <div id="features" className="container px-4 mx-auto py-16">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-teal-500 mb-3 block">EVERYTHING YOU NEED</span>
        <h2 className="text-3xl font-bold text-white mb-4">
          <span className="text-white">Everything You Need for </span>
          <span className="text-gradient-mixed">Epic Memes</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Our AI-powered platform gives you all the tools to create viral-worthy content in seconds
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard 
          title="Lightning Fast"
          description="Generate custom memes in seconds, not minutes. Our AI works at the speed of your creativity."
          icon={<Sparkles className="h-6 w-6" />}
          iconColor="purple"
        />
        
        <FeatureCard 
          title="Extensive Templates"
          description="Access thousands of classic and trending meme templates all in one place."
          icon={<Share className="h-6 w-6" />}
          iconColor="teal"
        />
        
        <FeatureCard 
          title="Style Customization"
          description="Adjust fonts, colors, and layouts to make your memes truly unique and personal."
          icon={<Download className="h-6 w-6" />}
          iconColor="coral"
        />
      </div>
    </div>
  );
};

export default MemeCapabilities;
