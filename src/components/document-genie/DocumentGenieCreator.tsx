
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Check } from 'lucide-react';

const DocumentGenieCreator = () => {
  return (
    <section className="py-16 container mx-auto">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-purple-500 mb-3 block">PRICING OPTIONS</span>
        <h2 className="text-3xl font-bold text-white mb-4">Choose Your <span className="text-gradient">Document Genie</span> Plan</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Select the plan that best fits your document creation needs, whether you're an individual professional or part of a larger team.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Basic Plan */}
        <Card className="glass-card overflow-hidden border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Basic</h3>
            </div>
            
            <div className="mb-6">
              <div className="flex items-end gap-2 mb-4">
                <span className="text-4xl font-bold text-white">$29</span>
                <span className="text-white/70 mb-1">/month</span>
              </div>
              <p className="text-white/70">
                Perfect for individuals who need occasional document creation.
              </p>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-white/80">5 Documents per month</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-white/80">Export as PDF & DOCX</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-white/80">Basic document types</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-white/80">Standard AI research</span>
              </li>
            </ul>
            
            <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:shadow-glow" asChild>
              <a href="https://app.smartmaya.ai">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Card>
        
        {/* Professional Plan */}
        <Card className="glass-card overflow-hidden border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 relative scale-105">
          <div className="absolute top-6 right-6">
            <span className="bg-teal-500/20 text-teal-400 text-xs font-medium py-1 px-2 rounded-full">POPULAR</span>
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-teal-500/20 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Professional</h3>
            </div>
            
            <div className="mb-6">
              <div className="flex items-end gap-2 mb-4">
                <span className="text-4xl font-bold text-white">$59</span>
                <span className="text-white/70 mb-1">/month</span>
              </div>
              <p className="text-white/70">
                Ideal for professionals who regularly create content.
              </p>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-500">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-white/80">20 Documents per month</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-500">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-white/80">All export formats</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-500">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-white/80">All document types</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-500">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-white/80">Advanced AI research</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-500">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-white/80">Custom branding</span>
              </li>
            </ul>
            
            <Button className="w-full bg-gradient-to-r from-teal-500 to-teal-700 hover:shadow-glow" asChild>
              <a href="https://app.smartmaya.ai">
                Start Now <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Card>
        
        {/* Enterprise Plan */}
        <Card className="glass-card overflow-hidden border-coral-500/20 hover:border-coral-500/50 transition-all duration-300">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-coral-500/20 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-coral-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Enterprise</h3>
            </div>
            
            <div className="mb-6">
              <div className="flex items-end gap-2 mb-4">
                <span className="text-4xl font-bold text-white">$199</span>
                <span className="text-white/70 mb-1">/month</span>
              </div>
              <p className="text-white/70">
                For teams that need extensive document creation capabilities.
              </p>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-coral-500/20 flex items-center justify-center text-coral-500">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-white/80">Unlimited documents</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-coral-500/20 flex items-center justify-center text-coral-500">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-white/80">Team collaboration</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-coral-500/20 flex items-center justify-center text-coral-500">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-white/80">Priority research</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-coral-500/20 flex items-center justify-center text-coral-500">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-white/80">API access</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-coral-500/20 flex items-center justify-center text-coral-500">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-white/80">Dedicated support</span>
              </li>
            </ul>
            
            <Button className="w-full bg-gradient-to-r from-coral-500 to-coral-700 hover:shadow-glow" asChild>
              <a href="https://app.smartmaya.ai">
                Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DocumentGenieCreator;
