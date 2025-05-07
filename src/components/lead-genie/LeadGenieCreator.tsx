
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Users } from 'lucide-react';

const LeadGenieCreator = () => {
  return (
    <section className="py-16 container mx-auto">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-purple-500 mb-3 block">PRICING OPTIONS</span>
        <h2 className="text-3xl font-bold text-white mb-4">Choose Your <span className="text-gradient">Lead Genie</span> Plan</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Whether you want to run your own campaigns or let our experts handle everything, we have a solution for you.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Self-Service Plan */}
        <Card className="glass-card overflow-hidden border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Self-Service</h3>
            </div>
            
            <div className="mb-6">
              <div className="flex items-end gap-2 mb-4">
                <span className="text-4xl font-bold text-white">$79</span>
                <span className="text-white/70 mb-1">/month</span>
              </div>
              <p className="text-white/70">
                Perfect for small businesses and solopreneurs who want to manage their own lead generation process.
              </p>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">✓</div>
                <span className="text-white/80">Up to 5 Ideal Customer Profiles</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">✓</div>
                <span className="text-white/80">AI Email Copy Generator</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">✓</div>
                <span className="text-white/80">500 Leads Management</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">✓</div>
                <span className="text-white/80">Full CRM Functionality</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">✓</div>
                <span className="text-white/80">Performance Analytics</span>
              </li>
            </ul>
            
            <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:shadow-glow" asChild>
              <a href="https://app.smartmaya.ai">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Card>
        
        {/* Concierge Plan */}
        <Card className="glass-card overflow-hidden border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 relative">
          <div className="absolute top-6 right-6">
            <span className="bg-teal-500/20 text-teal-400 text-xs font-medium py-1 px-2 rounded-full">POPULAR</span>
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-teal-500/20 flex items-center justify-center">
                <Users className="h-5 w-5 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Concierge Service</h3>
            </div>
            
            <div className="mb-6">
              <div className="flex items-end gap-2 mb-4">
                <span className="text-4xl font-bold text-white">$499</span>
                <span className="text-white/70 mb-1">/month</span>
              </div>
              <p className="text-white/70">
                For busy executives who want our experts to handle the entire lead generation process.
              </p>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-500">✓</div>
                <span className="text-white/80">Everything in Self-Service</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-500">✓</div>
                <span className="text-white/80">Campaign Management by Experts</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-500">✓</div>
                <span className="text-white/80">Lead Sourcing & Qualification</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-500">✓</div>
                <span className="text-white/80">Weekly Performance Reports</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-500">✓</div>
                <span className="text-white/80">Guaranteed MQLs Delivery</span>
              </li>
            </ul>
            
            <Button className="w-full bg-gradient-to-r from-teal-500 to-teal-700 hover:shadow-glow-teal" asChild>
              <a href="https://app.smartmaya.ai">
                Start Concierge Service <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LeadGenieCreator;
