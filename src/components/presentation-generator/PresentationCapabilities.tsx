
import React from 'react';
import FeatureCard from '@/components/FeatureCard';
import { FileText, Brush, Layers } from 'lucide-react';
import { FeatureCardProps } from '@/types/feature-card';

const PresentationCapabilities = () => {
  const capabilities: Omit<FeatureCardProps, 'className'>[] = [
    {
      title: "Content Generation",
      description: "Our AI creates complete slide content based on your topic, including talking points, data visualization, and conclusions.",
      icon: <FileText className="h-6 w-6" />,
      iconColor: "purple"
    },
    {
      title: "Slide Design",
      description: "Professional templates with customizable themes that align with your brand guidelines and presentation purpose.",
      icon: <Brush className="h-6 w-6" />,
      iconColor: "teal"
    },
    {
      title: "Presentation Structure",
      description: "Automatically organize your ideas into coherent sections with proper flow, transitions, and narrative structure.",
      icon: <Layers className="h-6 w-6" />,
      iconColor: "coral"
    }
  ];

  return (
    <div id="features" className="container mx-auto py-16">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-teal-500 mb-4 block">BUSINESS SOLUTION</span>
        <h2 className="text-white">
          <span className="text-white">Executive-Grade </span>
          <span className="text-gradient-mixed">Presentation Tool</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Our AI-powered platform gives busy professionals and corporate teams the ability to create compelling presentations without the usual time investment
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

export default PresentationCapabilities;
