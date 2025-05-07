
import React from 'react';
import { MessageSquare, Sparkles, PenTool, Zap } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';

const SmartReplyFeatures = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-purple-500 mb-3 block">KEY BENEFITS</span>
        <h2 className="text-white mb-4 text-3xl font-bold">
          Why Choose <span className="text-gradient">Smart Reply AI</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Our AI-powered reply generator saves time, improves customer satisfaction, and ensures consistent brand messaging across all channels.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FeatureCard
          title="Consistent Brand Voice"
          description="Maintain a consistent tone and messaging across all customer communication channels, regardless of which team member is responding."
          icon={<MessageSquare className="h-6 w-6" />}
          iconColor="purple"
        />
        
        <FeatureCard
          title="AI-Enhanced Replies"
          description="Leverage advanced AI to craft responses that incorporate proven communication techniques and best practices."
          icon={<Sparkles className="h-6 w-6" />}
          iconColor="teal"
        />
        
        <FeatureCard
          title="Fully Customizable"
          description="Review and edit AI-generated replies to add personal touches before sending them to customers."
          icon={<PenTool className="h-6 w-6" />}
          iconColor="coral"
        />
        
        <FeatureCard
          title="Multi-Channel Support"
          description="Generate replies for emails, WhatsApp, social media DMs, and other messaging platforms all from one powerful tool."
          icon={<Zap className="h-6 w-6" />}
          iconColor="purple"
        />
      </div>
    </section>
  );
};

export default SmartReplyFeatures;
