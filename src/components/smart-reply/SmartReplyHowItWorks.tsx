
import React from 'react';

const SmartReplyHowItWorks = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-16">
        <span className="text-sm font-medium text-coral-500 mb-4 block">STREAMLINED WORKFLOW</span>
        <h2 className="text-white mb-4">Simple Three-Step Process</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Our Smart Reply AI tool is designed for busy professionals who need to respond quickly without sacrificing quality.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="text-center relative glass-card rounded-2xl">
          <div className="absolute top-12 left-full hidden md:block w-1/3 h-px bg-gradient-to-r from-purple-500 to-transparent z-10" />
          <div className="h-24 w-24 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl font-bold text-gradient">1</span>
          </div>
          <h3 className="text-white">Paste Customer Message</h3>
          <p className="text-white/70 mt-4">
            Copy and paste the customer message from any platform - email, WhatsApp, social media, or support tickets.
          </p>
        </div>
        
        <div className="text-center relative glass-card rounded-2xl">
          <div className="absolute top-12 left-full hidden md:block w-1/3 h-px bg-gradient-to-r from-teal-500 to-transparent z-10" />
          <div className="h-24 w-24 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl font-bold text-gradient-teal">2</span>
          </div>
          <h3 className="text-white">Customize Parameters</h3>
          <p className="text-white/70 mt-4">
            Select your business goals, preferred tone, and any specific points you'd like to address in the response.
          </p>
        </div>
        
        <div className="text-center glass-card rounded-2xl">
          <div className="h-24 w-24 rounded-full bg-coral-500/10 border border-coral-500/30 flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl font-bold text-gradient-coral">3</span>
          </div>
          <h3 className="text-white">Review and Send</h3>
          <p className="text-white/70 mt-4">
            Edit the AI-generated response if needed, then copy and paste it into your messaging platform to send.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmartReplyHowItWorks;
