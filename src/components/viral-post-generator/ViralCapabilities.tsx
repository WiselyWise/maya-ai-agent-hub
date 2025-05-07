
import React from 'react';
import FeatureCard from '@/components/FeatureCard';
import { Share2, Hash, BarChart4 } from 'lucide-react';
import { FeatureCardProps } from '@/types/feature-card';

const ViralCapabilities = () => {
  const capabilities: Omit<FeatureCardProps, 'className'>[] = [
    {
      title: "Multi-Platform Optimization",
      description: "Create platform-specific content for LinkedIn, Twitter, Instagram, and Facebook with optimal formatting for each.",
      icon: <Share2 className="h-6 w-6" />,
      iconColor: "purple"
    },
    {
      title: "Trend Integration",
      description: "Automatically incorporates current trends and relevant hashtags to maximize reach and discoverability.",
      icon: <Hash className="h-6 w-6" />,
      iconColor: "teal"
    },
    {
      title: "Performance Analytics",
      description: "Track engagement metrics, conversion rates, and audience growth to continuously refine your content strategy.",
      icon: <BarChart4 className="h-6 w-6" />,
      iconColor: "coral"
    }
  ];

  return (
    <div id="features" className="container mx-auto py-16">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-teal-500 mb-4 block">BUSINESS SOLUTION</span>
        <h2 className="text-white">
          <span className="text-white">Enterprise-Grade </span>
          <span className="text-gradient-mixed">Social Engine</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Our AI-powered platform helps executives and marketing teams create high-performing content that drives real business results
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

export default ViralCapabilities;
