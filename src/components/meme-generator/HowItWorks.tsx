
import React from 'react';

const HowItWorks = () => {
  return (
    <div className="container px-4 mx-auto py-16">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-coral-500 mb-3 block">HOW IT WORKS</span>
        <h2 className="text-3xl font-bold text-white mb-4">Create in Three Simple Steps</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Creating viral-worthy memes has never been easier. Our AI takes care of all the hard work.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 relative glass-card rounded-2xl">
          <div className="absolute top-12 left-full hidden md:block w-1/3 h-px bg-gradient-to-r from-purple-500 to-transparent z-10" />
          <div className="h-24 w-24 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl font-bold text-gradient">1</span>
          </div>
          <h3 className="text-xl font-medium text-white mb-3">Enter your idea</h3>
          <p className="text-white/70">
            Type in what you want your meme to be about. A business joke, industry trend, or clever observation.
          </p>
        </div>
        
        <div className="text-center p-6 relative glass-card rounded-2xl">
          <div className="absolute top-12 left-full hidden md:block w-1/3 h-px bg-gradient-to-r from-teal-500 to-transparent z-10" />
          <div className="h-24 w-24 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl font-bold text-gradient-teal">2</span>
          </div>
          <h3 className="text-xl font-medium text-white mb-3">Choose a style</h3>
          <p className="text-white/70">
            Select from various meme formats and styles, from classic templates to modern designs.
          </p>
        </div>
        
        <div className="text-center p-6 glass-card rounded-2xl">
          <div className="h-24 w-24 rounded-full bg-coral-500/10 border border-coral-500/30 flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl font-bold text-gradient-coral">3</span>
          </div>
          <h3 className="text-xl font-medium text-white mb-3">Download & share</h3>
          <p className="text-white/70">
            Instantly get your custom meme to use in your marketing, social media, or internal communications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
