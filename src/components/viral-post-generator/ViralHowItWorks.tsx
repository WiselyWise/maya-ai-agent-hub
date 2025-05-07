
import React from 'react';

const ViralHowItWorks = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-16">
        <span className="text-sm font-medium text-coral-500 mb-4 block">STREAMLINED WORKFLOW</span>
        <h2 className="text-white mb-4">Create Viral Content in Three Easy Steps</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Our AI content generator is designed for busy professionals who need high-performing social media content without the guesswork.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="text-center relative glass-card rounded-2xl">
          <div className="absolute top-12 left-full hidden md:block w-1/3 h-px bg-gradient-to-r from-purple-500 to-transparent z-10" />
          <div className="h-24 w-24 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl font-bold text-gradient">1</span>
          </div>
          <h3 className="text-white">Set Your Goals</h3>
          <p className="text-white/70 mt-4">
            Select your industry, target audience, and content objectives (brand awareness, lead generation, etc.).
          </p>
        </div>
        
        <div className="text-center relative glass-card rounded-2xl">
          <div className="absolute top-12 left-full hidden md:block w-1/3 h-px bg-gradient-to-r from-teal-500 to-transparent z-10" />
          <div className="h-24 w-24 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl font-bold text-gradient-teal">2</span>
          </div>
          <h3 className="text-white">Choose Platform</h3>
          <p className="text-white/70 mt-4">
            Select which social media platform you're targeting, and our AI will optimize format, length, and style.
          </p>
        </div>
        
        <div className="text-center glass-card rounded-2xl">
          <div className="h-24 w-24 rounded-full bg-coral-500/10 border border-coral-500/30 flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl font-bold text-gradient-coral">3</span>
          </div>
          <h3 className="text-white">Generate & Schedule</h3>
          <p className="text-white/70 mt-4">
            Review and edit AI-generated content, then publish immediately or schedule for optimal posting times.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViralHowItWorks;
