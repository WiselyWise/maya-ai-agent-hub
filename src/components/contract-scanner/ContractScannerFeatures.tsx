
import React from 'react';
import { AlertTriangle, FileCheck, Download, Search, Eye, Clock } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import AnimateOnScroll from '@/components/utils/AnimateOnScroll';

const ContractScannerFeatures = () => {
  const features = [
    {
      title: 'Quick Risk Identification',
      description: 'Rapidly identify potential risk areas in your contracts that may require professional review and attention.',
      icon: <AlertTriangle className="h-6 w-6" />,
      iconColor: 'coral' as const,
    },
    {
      title: 'Key Areas Highlighting',
      description: 'Pinpoint important contract sections and clauses that busy executives should prioritize for professional review.',
      icon: <Eye className="h-6 w-6" />,
      iconColor: 'teal' as const,
    },
    {
      title: 'Risk Explanations',
      description: 'Get brief explanations of identified risks to help you understand what to discuss with your professional advisors.',
      icon: <FileCheck className="h-6 w-6" />,
      iconColor: 'purple' as const,
    },
    {
      title: 'Fast Processing',
      description: 'Get your preliminary risk scan results in minutes, perfect for time-pressed business professionals.',
      icon: <Clock className="h-6 w-6" />,
      iconColor: 'teal' as const,
    },
    {
      title: 'Document Analysis',
      description: 'Scan various contract types to identify areas that may need professional business and advisory review.',
      icon: <Search className="h-6 w-6" />,
      iconColor: 'coral' as const,
    },
    {
      title: 'Summary Reports',
      description: 'Receive easy-to-read summaries highlighting key risk areas to share with your professional advisors.',
      icon: <Download className="h-6 w-6" />,
      iconColor: 'purple' as const,
    },
  ];

  return (
    <section className="py-20 px-4 bg-dark-900/50">
      <div className="container mx-auto">
        <AnimateOnScroll animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quick Contract Risk Scanning Features
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Designed for busy executives who need a preliminary overview of contract risks 
              before engaging with professional advisors.
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimateOnScroll key={feature.title} animation="fade-in" delay={index * 100}>
              <FeatureCard {...feature} />
            </AnimateOnScroll>
          ))}
        </div>
        
        <AnimateOnScroll animation="fade-in" delay={800}>
          <div className="mt-12 text-center">
            <div className="bg-gray-500/20 border border-gray-500/30 rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-gray-100 text-sm">
                <strong>Disclaimer:</strong> Maya AI Contract Risk Scanner provides preliminary risk identification only. 
                This tool is not a substitute for professional advice. Users must consult with qualified 
                professional advisors for specific guidance, compliance requirements, and final decision-making.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ContractScannerFeatures;
