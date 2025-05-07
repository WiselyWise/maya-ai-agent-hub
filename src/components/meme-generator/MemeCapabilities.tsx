
import React from 'react';
import FeatureCard from '@/components/FeatureCard';
import { Clock, TrendingUp, MessageSquare } from 'lucide-react';
import { FeatureCardProps } from '@/types/feature-card';

const MemeCapabilities = () => {
  const capabilities: Omit<FeatureCardProps, 'className'>[] = [
    {
      title: "Rapid Content Creation",
      description: "Generate custom business memes in seconds, not days. Our AI works at the speed executives demand.",
      icon: <Clock className="h-6 w-6" />,
      iconColor: "purple"
    },
    {
      title: "Growth-Focused Content",
      description: "Create memes proven to increase engagement metrics across LinkedIn, Twitter, and other B2B platforms.",
      icon: <TrendingUp className="h-6 w-6" />,
      iconColor: "teal"
    },
    {
      title: "Brand Voice Compatible",
      description: "AI technology that adapts to your brand voice and industry, ensuring professional yet engaging content.",
      icon: <MessageSquare className="h-6 w-6" />,
      iconColor: "coral"
    }
  ];

  return (
    <div id="features" className="container mx-auto py-16">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-teal-500 mb-4 block">BUSINESS SOLUTION</span>
        <h2 className="text-white">
          <span className="text-white">Enterprise-Grade </span>
          <span className="text-gradient-mixed">Meme Marketing</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Our AI-powered platform gives busy executives and small business owners all the tools needed to create viral-worthy content without sacrificing professionalism
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

export default MemeCapabilities;
