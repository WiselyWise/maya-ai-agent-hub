
import React from 'react';

const LinkedInHowItWorks = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-16">
        <span className="text-sm font-medium text-coral-500 mb-4 block">STREAMLINED WORKFLOW</span>
        <h2 className="text-white mb-4">Create Viral LinkedIn Content in Three Easy Steps</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Our AI LinkedIn post generator is designed for busy professionals who need high-performing content without the guesswork.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="text-center relative glass-card rounded-2xl">
          <div className="absolute top-12 left-full hidden md:block w-1/3 h-px bg-gradient-to-r from-purple-500 to-transparent z-10" />
          <div className="h-24 w-24 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl font-bold text-gradient">1</span>
          </div>
          <h3 className="text-white">Input Your Topic</h3>
          <p className="text-white/70 mt-4">
            Simply enter your main idea or topic and customize your audience, industry, and content preferences.
          </p>
        </div>
        
        <div className="text-center relative glass-card rounded-2xl">
          <div className="absolute top-12 left-full hidden md:block w-1/3 h-px bg-gradient-to-r from-teal-500 to-transparent z-10" />
          <div className="h-24 w-24 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl font-bold text-gradient-teal">2</span>
          </div>
          <h3 className="text-white">Select Hook Style</h3>
          <p className="text-white/70 mt-4">
            Choose between curiosity, contrarian, or vulnerable hook styles to capture attention in LinkedIn feeds.
          </p>
        </div>
        
        <div className="text-center glass-card rounded-2xl">
          <div className="h-24 w-24 rounded-full bg-coral-500/10 border border-coral-500/30 flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl font-bold text-gradient-coral">3</span>
          </div>
          <h3 className="text-white">Generate & Share</h3>
          <p className="text-white/70 mt-4">
            Review your AI-generated LinkedIn post, make any adjustments, then copy directly to LinkedIn or schedule for later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LinkedInHowItWorks;
