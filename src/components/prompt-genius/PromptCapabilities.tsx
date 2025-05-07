
import React from 'react';
import FeatureCard from '@/components/FeatureCard';
import { BookTemplate, RefreshCw, Layout } from 'lucide-react';
import { FeatureCardProps } from '@/types/feature-card';

const PromptCapabilities = () => {
  const capabilities: Omit<FeatureCardProps, 'className'>[] = [
    {
      title: "Framework-Based Prompting",
      description: "Professional prompt templates based on proven prompt engineering frameworks used by top AI experts.",
      icon: <BookTemplate className="h-6 w-6" />,
      iconColor: "purple"
    },
    {
      title: "Iterative Improvement",
      description: "Intelligent refinement system that learns from results to continuously improve your prompting effectiveness.",
      icon: <RefreshCw className="h-6 w-6" />,
      iconColor: "teal"
    },
    {
      title: "Industry-Specific Templates",
      description: "Specialized prompt structures for different business domains with terminology and context awareness.",
      icon: <Layout className="h-6 w-6" />,
      iconColor: "coral"
    }
  ];

  return (
    <div id="features" className="container mx-auto py-16">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-teal-500 mb-4 block">BUSINESS SOLUTION</span>
        <h2 className="text-white">
          <span className="text-white">Enterprise-Grade </span>
          <span className="text-gradient-mixed">Prompt Engineering</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Our AI-powered platform gives busy professionals access to expert-level prompt engineering techniques without technical knowledge
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

export default PromptCapabilities;
