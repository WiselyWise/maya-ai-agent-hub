
import React from 'react';
import FeatureCard from '@/components/FeatureCard';
import { Target, TrendingUp, MessageSquare } from 'lucide-react';
import { FeatureCardProps } from '@/types/feature-card';

const SmartReplyCapabilities = () => {
  const capabilities: Omit<FeatureCardProps, 'className'>[] = [
    {
      title: "Intent Recognition",
      description: "Our AI automatically detects the intent behind customer messages, allowing for highly relevant and targeted responses.",
      icon: <Target className="h-6 w-6" />,
      iconColor: "purple"
    },
    {
      title: "Business Goal Alignment",
      description: "Responses are crafted to support specific business objectives, whether it's customer retention, upselling, or issue resolution.",
      icon: <TrendingUp className="h-6 w-6" />,
      iconColor: "teal"
    },
    {
      title: "Tone Adaptation",
      description: "Adjust the tone of replies from formal to casual, based on your brand voice and the context of the conversation.",
      icon: <MessageSquare className="h-6 w-6" />,
      iconColor: "coral"
    }
  ];

  return (
    <div id="features" className="container mx-auto py-8">
      <div className="text-center mb-8">
        <span className="text-sm font-medium text-teal-500 mb-3 block">COMMUNICATION SOLUTION</span>
        <h2 className="text-white">
          <span className="text-white">Enterprise-Grade </span>
          <span className="text-gradient-mixed">Response Management</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Our AI-powered platform gives businesses all the tools needed to manage customer communications efficiently without sacrificing quality or personalization
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {capabilities.map((capability) => (
          <FeatureCard
            key={capability.title}
            {...capability}
            className="tracking-normal"
          />
        ))}
      </div>
    </div>
  );
};

export default SmartReplyCapabilities;
