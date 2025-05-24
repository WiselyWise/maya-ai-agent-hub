
import React from 'react';
import { Shield, AlertTriangle, CheckCircle, Scale, FileCheck, Download } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import AnimateOnScroll from '@/components/utils/AnimateOnScroll';

const ContractScannerFeatures = () => {
  const features = [
    {
      title: 'Obligation Identification',
      description: 'Automatically identify and extract key obligations, responsibilities, and commitments from any business contract.',
      icon: <CheckCircle className="h-6 w-6" />,
      iconColor: 'teal' as const,
    },
    {
      title: 'Risk Assessment',
      description: 'Comprehensive analysis of potential business risks with severity levels and impact assessments.',
      icon: <AlertTriangle className="h-6 w-6" />,
      iconColor: 'coral' as const,
    },
    {
      title: 'Mitigation Strategies',
      description: 'Receive actionable recommendations and strategies to mitigate identified risks and protect your business.',
      icon: <Shield className="h-6 w-6" />,
      iconColor: 'purple' as const,
    },
    {
      title: 'Compliance Monitoring',
      description: 'Track compliance requirements and ensure your organization meets all contractual obligations.',
      icon: <Scale className="h-6 w-6" />,
      iconColor: 'teal' as const,
    },
    {
      title: 'Document Comparison',
      description: 'Compare multiple contract versions and identify changes, amendments, and potential issues.',
      icon: <FileCheck className="h-6 w-6" />,
      iconColor: 'coral' as const,
    },
    {
      title: 'Professional Reports',
      description: 'Generate comprehensive analysis reports in PDF format for stakeholder review and decision-making.',
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
              Comprehensive Contract Analysis Features
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Leverage AI-powered analysis to streamline your contract review process 
              and make informed business decisions with confidence.
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
      </div>
    </section>
  );
};

export default ContractScannerFeatures;
