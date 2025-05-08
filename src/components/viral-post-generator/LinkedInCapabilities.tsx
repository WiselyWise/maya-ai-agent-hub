
import React from 'react';
import FeatureCard from '@/components/FeatureCard';
import { Share2, Hash, BarChart4 } from 'lucide-react';
import { FeatureCardProps } from '@/types/feature-card';

const LinkedInCapabilities = () => {
  const capabilities: Omit<FeatureCardProps, 'className'>[] = [
    {
      title: "LinkedIn Algorithm Optimization",
      description: "Create content specifically tailored to LinkedIn's algorithm for maximum reach and engagement.",
      icon: <Share2 className="h-6 w-6" />,
      iconColor: "purple"
    },
    {
      title: "Professional Networking",
      description: "Position yourself as a thought leader with content that resonates with professional audiences.",
      icon: <Hash className="h-6 w-6" />,
      iconColor: "teal"
    },
    {
      title: "Business Performance Tracking",
      description: "Monitor engagement metrics, connection growth, and content performance to optimize your strategy.",
      icon: <BarChart4 className="h-6 w-6" />,
      iconColor: "coral"
    }
  ];

  return (
    <div id="features" className="container mx-auto py-16">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-teal-500 mb-4 block">BUSINESS SOLUTION</span>
        <h2 className="text-white">
          <span className="text-white">Professional-Grade </span>
          <span className="text-gradient-mixed">LinkedIn Engine</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Our AI-powered platform helps executives and business owners create high-performing LinkedIn content that drives real business results
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

export default LinkedInCapabilities;
