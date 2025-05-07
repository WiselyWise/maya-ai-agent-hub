
import React from 'react';

const DocumentGenieHowItWorks = () => {
  return (
    <section className="py-16 container mx-auto">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-teal-500 mb-3 block">PROCESS</span>
        <h2 className="text-3xl font-bold text-white mb-4">How <span className="text-gradient">Document Genie</span> Works</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Our streamlined process makes it easy to create professional documents in just a few simple steps.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Vertical line connecting steps */}
          <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-purple-500 via-teal-500 to-coral-500 hidden md:block"></div>
          
          {/* Steps */}
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center text-2xl font-bold">1</div>
              </div>
              <div className="glass-card flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">Choose Document Type</h3>
                <p className="text-white/70">
                  Select the type of document you need from our options: training guide, essay, white paper, case study, or ebook.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-full bg-teal-500/20 text-teal-500 flex items-center justify-center text-2xl font-bold">2</div>
              </div>
              <div className="glass-card flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">Enter Your Topic</h3>
                <p className="text-white/70">
                  Provide details about your desired topic, including any specific requirements or focus areas you want to include.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-full bg-coral-500/20 text-coral-500 flex items-center justify-center text-2xl font-bold">3</div>
              </div>
              <div className="glass-card flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">AI Research</h3>
                <p className="text-white/70">
                  Our AI searches the internet for relevant, up-to-date information about your topic to ensure accuracy and depth.
                </p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center text-2xl font-bold">4</div>
              </div>
              <div className="glass-card flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">Content Generation</h3>
                <p className="text-white/70">
                  Document Genie creates original content with appropriate structure, formatting, and visual elements based on the document type.
                </p>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-full bg-teal-500/20 text-teal-500 flex items-center justify-center text-2xl font-bold">5</div>
              </div>
              <div className="glass-card flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">Review & Export</h3>
                <p className="text-white/70">
                  Review the generated document, make any desired edits, and export it as a PDF or Word document for immediate use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentGenieHowItWorks;
