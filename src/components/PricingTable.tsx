
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

const PricingTable = () => {
  const features = [
    "Increase revenue with AI tools — define your ideal customer, create outreach emails, manage leads, integrate with your CRM",
    "Enhance marketing — generate viral LinkedIn posts, create engaging memes (50 credits/month), and craft campaign content",
    "Boost productivity — handle key emails, messages, and tasks instantly with smart AI support and structured prompt templates",
    "Simplify education & training — create learning materials, automate training tasks with dedicated AI tools",
    "Support health & well-being — access specialized AI tools for balance and wellness",
    "Stay compliant — ensure all outputs are safe, on-brand, and consistent with enhanced Guardrails moderation",
    "Instantly create, save, and reuse your own Custom AI tools (no coding required)",
    "Includes priority email & chat support",
    "Buy for multiple users per organization"
  ];

  return (
    <section id="pricing" className="py-16 container mx-auto">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-purple-500 mb-3 block">PRICING OPTIONS</span>
        <h2 className="text-3xl font-bold text-white mb-4">One Subscription, <span className="text-gradient">All AI Tools</span></h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Get access to all our AI tools and future releases with one simple subscription. Perfect for teams of any size.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <Card className="glass-card overflow-hidden border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
          <div className="p-8">
            <div className="flex flex-col items-center gap-3 mb-6">
              <h3 className="text-3xl font-bold text-white">Starter</h3>
              <div className="flex items-end gap-2">
                <span className="text-5xl font-bold text-white">$10</span>
                <span className="text-white/70 mb-2">/user/month</span>
              </div>
            </div>
            
            <div className="mb-8">
              <p className="text-center text-white/80 font-medium text-lg mb-2">
                You Deserve Help — Unlock Maya AI's Full Power
              </p>
              <p className="text-center text-white/70">
                Get the support you need to move faster, achieve more, and protect your time — with 300+ AI agents
                working quietly in the background to lighten your load and keep you focused on what truly matters.
              </p>
            </div>
            
            <div className="mb-8">
              <ul className="space-y-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 pb-6 border-b border-white/10">
                    <div className="h-6 w-6 rounded-full bg-purple-500/20 flex-shrink-0 flex items-center justify-center text-purple-500 mt-0.5">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-center">
              <Button className="px-8 py-6 text-lg bg-gradient-to-r from-purple-500 to-purple-700 hover:shadow-glow" asChild>
                <a href="https://app.smartmaya.ai">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PricingTable;
