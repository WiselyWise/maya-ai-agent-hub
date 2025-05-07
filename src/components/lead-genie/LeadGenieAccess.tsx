
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const LeadGenieAccess = () => {
  return (
    <section className="py-16 container mx-auto">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-coral-500 mb-3 block">GET ACCESS</span>
        <h2 className="text-3xl font-bold text-white mb-4">Start Using <span className="text-gradient-coral">Lead Genie</span> Today</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Lead Genie is included in your Maya AI subscription along with all our other powerful AI tools.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Card className="glass-card overflow-hidden border-coral-500/20 hover:border-coral-500/50 transition-all duration-300">
          <div className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Executive Early Access</h3>
              <p className="text-white/70">
                Be among the first business leaders to leverage expert-level AI for lead generation and management
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-coral-500/20 flex items-center justify-center text-coral-500">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-white/80">Create and manage ICPs</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-coral-500/20 flex items-center justify-center text-coral-500">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-white/80">AI email copy generation</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-coral-500/20 flex items-center justify-center text-coral-500">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-white/80">Lead management</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-coral-500/20 flex items-center justify-center text-coral-500">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-white/80">Full CRM functionality</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Button className="w-full md:w-auto px-6 py-5 bg-gradient-to-r from-coral-500 to-coral-700 hover:shadow-glow" asChild>
                <a href="https://app.smartmaya.ai">
                  Try for Free <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" className="w-full md:w-auto px-6 py-5 text-white hover:text-coral-400 hover:bg-transparent" asChild>
                <Link to="/#pricing">
                  View Pricing <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LeadGenieAccess;
