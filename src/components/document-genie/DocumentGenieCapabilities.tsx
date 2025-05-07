
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const DocumentGenieCapabilities = () => {
  return (
    <section className="py-16 container mx-auto">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-purple-500 mb-3 block">DOCUMENT TYPES</span>
        <h2 className="text-3xl font-bold text-white mb-4">Create Any <span className="text-gradient">Document</span> You Need</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Document Genie helps you create a variety of professional documents tailored to your specific requirements.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="glass-card transition-all duration-300 hover:border-purple-500/30">
          <div className="mb-5">
            <AspectRatio ratio={16/9} className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center p-6">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Training Guide" 
                  className="max-h-full rounded-lg object-cover"
                />
              </div>
            </AspectRatio>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Training Guides</h3>
          <p className="text-white/70">
            Create comprehensive, structured training materials for onboarding, skill development, or product training. Includes step-by-step instructions, visual aids, and assessment tools.
          </p>
        </div>
        
        <div className="glass-card transition-all duration-300 hover:border-teal-500/30">
          <div className="mb-5">
            <AspectRatio ratio={16/9} className="bg-gradient-to-br from-teal-500/20 to-teal-700/20 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center p-6">
                <img 
                  src="https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Essays and Papers" 
                  className="max-h-full rounded-lg object-cover"
                />
              </div>
            </AspectRatio>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Essays & Papers</h3>
          <p className="text-white/70">
            Generate well-researched, properly structured essays and papers on any topic. Perfect for academic purposes, thought leadership, or opinion pieces.
          </p>
        </div>
        
        <div className="glass-card transition-all duration-300 hover:border-coral-500/30">
          <div className="mb-5">
            <AspectRatio ratio={16/9} className="bg-gradient-to-br from-coral-500/20 to-coral-700/20 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center p-6">
                <img 
                  src="https://images.unsplash.com/photo-1541267953253-ce7509f88b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="White Papers" 
                  className="max-h-full rounded-lg object-cover"
                />
              </div>
            </AspectRatio>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">White Papers</h3>
          <p className="text-white/70">
            Develop authoritative, in-depth white papers that establish expertise and provide valuable insights. Includes data-driven analysis, charts, and industry-specific research.
          </p>
        </div>
        
        <div className="glass-card transition-all duration-300 hover:border-purple-500/30">
          <div className="mb-5">
            <AspectRatio ratio={16/9} className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center p-6">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Case Studies" 
                  className="max-h-full rounded-lg object-cover"
                />
              </div>
            </AspectRatio>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Case Studies</h3>
          <p className="text-white/70">
            Create compelling case studies that demonstrate success stories and practical applications. Includes problem statements, solutions, implementation details, and measurable results.
          </p>
        </div>
        
        <div className="glass-card transition-all duration-300 hover:border-teal-500/30 md:col-span-2">
          <div className="mb-5">
            <AspectRatio ratio={21/9} className="bg-gradient-to-br from-teal-500/20 to-coral-700/20 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center p-6">
                <img 
                  src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Ebooks" 
                  className="max-h-full rounded-lg object-cover"
                />
              </div>
            </AspectRatio>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Ebooks</h3>
          <p className="text-white/70">
            Generate comprehensive ebooks with professional formatting, chapters, table of contents, and visual elements. Perfect for lead generation, thought leadership, or digital products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DocumentGenieCapabilities;
