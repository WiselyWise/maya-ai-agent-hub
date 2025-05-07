
import React from 'react';

const PromptHowItWorks = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-16">
        <span className="text-sm font-medium text-coral-500 mb-4 block">STREAMLINED WORKFLOW</span>
        <h2 className="text-white mb-4">Unlock AI Potential in Four Steps</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Our prompt engineering system is designed to help business professionals maximize results from any AI tool they already use.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="text-center relative glass-card rounded-2xl">
          <div className="absolute top-12 left-full hidden md:block w-1/3 h-px bg-gradient-to-r from-purple-500 to-transparent z-10" />
          <div className="h-24 w-24 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl font-bold text-gradient">1</span>
          </div>
          <h3 className="text-white">Enter Your Request</h3>
          <p className="text-white/70 mt-4">
            Type a simple request as you normally would with any AI system.
          </p>
        </div>
        
        <div className="text-center relative glass-card rounded-2xl">
          <div className="absolute top-12 left-full hidden md:block w-1/3 h-px bg-gradient-to-r from-teal-500 to-transparent z-10" />
          <div className="h-24 w-24 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl font-bold text-gradient-teal">2</span>
          </div>
          <h3 className="text-white">Select Domain</h3>
          <p className="text-white/70 mt-4">
            Choose your business area (marketing, finance, operations, etc.) for contextual enhancement.
          </p>
        </div>
        
        <div className="text-center relative glass-card rounded-2xl">
          <div className="absolute top-12 left-full hidden md:block w-1/3 h-px bg-gradient-to-r from-coral-500 to-transparent z-10" />
          <div className="h-24 w-24 rounded-full bg-coral-500/10 border border-coral-500/30 flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl font-bold text-gradient-coral">3</span>
          </div>
          <h3 className="text-white">Get Enhanced Prompt</h3>
          <p className="text-white/70 mt-4">
            Your simple request is transformed into a sophisticated, optimization-ready prompt.
          </p>
        </div>
        
        <div className="text-center glass-card rounded-2xl">
          <div className="h-24 w-24 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl font-bold text-gradient">4</span>
          </div>
          <h3 className="text-white">Use With Any AI</h3>
          <p className="text-white/70 mt-4">
            Copy the enhanced prompt into ChatGPT, Claude, Gemini, or any AI system you already use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromptHowItWorks;
