
import React from 'react';

const LeadGenieHowItWorks = () => {
  return (
    <section className="py-16 container mx-auto">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-teal-500 mb-3 block">PROCESS</span>
        <h2 className="text-3xl font-bold text-white mb-4">How <span className="text-gradient">Lead Genie</span> Works</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Our streamlined workflow helps you go from defining your ideal customers to closing deals, all in one platform.
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
                <h3 className="text-xl font-bold text-white mb-2">Define Your ICPs</h3>
                <p className="text-white/70">
                  Start by creating detailed Ideal Customer Profiles that define exactly who your perfect customers are. Our AI assistant helps you identify the most relevant attributes and pain points to target.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-full bg-teal-500/20 text-teal-500 flex items-center justify-center text-2xl font-bold">2</div>
              </div>
              <div className="glass-card flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">Create Email Campaigns</h3>
                <p className="text-white/70">
                  Use our AI to generate targeted email sequences for each ICP. Craft up to 3 personalized emails per sequence designed to nurture leads through your sales funnel and drive conversions.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-full bg-coral-500/20 text-coral-500 flex items-center justify-center text-2xl font-bold">3</div>
              </div>
              <div className="glass-card flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">Upload or Enter Leads</h3>
                <p className="text-white/70">
                  Import your existing leads via CSV upload or manually enter them into the system. Our platform helps you organize and categorize leads based on your defined ICPs.
                </p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center text-2xl font-bold">4</div>
              </div>
              <div className="glass-card flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">Manage Your Pipeline</h3>
                <p className="text-white/70">
                  Use our built-in CRM to track leads as they progress through your sales funnel. Monitor key metrics, track conversations, and manage opportunities from initial contact to closed deals.
                </p>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-full bg-teal-500/20 text-teal-500 flex items-center justify-center text-2xl font-bold">5</div>
              </div>
              <div className="glass-card flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">Analyze & Optimize</h3>
                <p className="text-white/70">
                  Review performance metrics and version history to continuously refine your ICPs and email campaigns. Our AI provides insights to help you improve conversion rates over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadGenieHowItWorks;
