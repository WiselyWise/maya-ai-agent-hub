
import React from 'react';

const PresentationHowItWorks = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-16">
        <span className="text-sm font-medium text-coral-500 mb-4 block">STREAMLINED WORKFLOW</span>
        <h2 className="text-white mb-4">Four Simple Steps to Perfect Presentations</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Our AI presentation generator is designed for busy professionals who need results fast. Just a few clicks to professional slides.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="text-center relative glass-card rounded-2xl">
          <div className="absolute top-12 left-full hidden md:block w-1/3 h-px bg-gradient-to-r from-purple-500 to-transparent z-10" />
          <div className="h-24 w-24 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl font-bold text-gradient">1</span>
          </div>
          <h3 className="text-white">Choose Your Topic</h3>
          <p className="text-white/70 mt-4">
            Enter your presentation subject, key points, and target audience for customized results.
          </p>
        </div>
        
        <div className="text-center relative glass-card rounded-2xl">
          <div className="absolute top-12 left-full hidden md:block w-1/3 h-px bg-gradient-to-r from-teal-500 to-transparent z-10" />
          <div className="h-24 w-24 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl font-bold text-gradient-teal">2</span>
          </div>
          <h3 className="text-white">Select Template</h3>
          <p className="text-white/70 mt-4">
            Choose from industry-specific designs or upload your company's branding guidelines.
          </p>
        </div>
        
        <div className="text-center relative glass-card rounded-2xl">
          <div className="absolute top-12 left-full hidden md:block w-1/3 h-px bg-gradient-to-r from-coral-500 to-transparent z-10" />
          <div className="h-24 w-24 rounded-full bg-coral-500/10 border border-coral-500/30 flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl font-bold text-gradient-coral">3</span>
          </div>
          <h3 className="text-white">Review & Edit</h3>
          <p className="text-white/70 mt-4">
            Fine-tune the AI-generated content and slide layouts to match your exact requirements.
          </p>
        </div>
        
        <div className="text-center glass-card rounded-2xl">
          <div className="h-24 w-24 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl font-bold text-gradient">4</span>
          </div>
          <h3 className="text-white">Export & Present</h3>
          <p className="text-white/70 mt-4">
            Download in PowerPoint or PDF format, or present directly from our platform with presenter notes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PresentationHowItWorks;
