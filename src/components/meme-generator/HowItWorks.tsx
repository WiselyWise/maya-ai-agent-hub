
import React from 'react';

const HowItWorks = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-16">
        <span className="text-sm font-medium text-coral-500 mb-4 block">STREAMLINED WORKFLOW</span>
        <h2 className="text-white mb-4">Busy Executive's 30-Second Process</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Our AI meme generator is designed for busy professionals who need results fast. No learning curve, no wasted time.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="text-center relative glass-card rounded-2xl">
          <div className="absolute top-12 left-full hidden md:block w-1/3 h-px bg-gradient-to-r from-purple-500 to-transparent z-10" />
          <div className="h-24 w-24 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl font-bold text-gradient">1</span>
          </div>
          <h3 className="text-white">Input Business Context</h3>
          <p className="text-white/70 mt-4">
            Describe your business situation, industry trend, or company joke - no need to be creative, our AI handles that.
          </p>
        </div>
        
        <div className="text-center relative glass-card rounded-2xl">
          <div className="absolute top-12 left-full hidden md:block w-1/3 h-px bg-gradient-to-r from-teal-500 to-transparent z-10" />
          <div className="h-24 w-24 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl font-bold text-gradient-teal">2</span>
          </div>
          <h3 className="text-white">Select Target Platform</h3>
          <p className="text-white/70 mt-4">
            Choose whether it's for LinkedIn, team communication, client emails, or any other business channel.
          </p>
        </div>
        
        <div className="text-center glass-card rounded-2xl">
          <div className="h-24 w-24 rounded-full bg-coral-500/10 border border-coral-500/30 flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl font-bold text-gradient-coral">3</span>
          </div>
          <h3 className="text-white">Share & Track Results</h3>
          <p className="text-white/70 mt-4">
            Download or share your professionally generated meme directly from our platform and track engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
