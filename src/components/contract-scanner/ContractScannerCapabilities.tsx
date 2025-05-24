
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, FileCheck, Eye, Clock } from 'lucide-react';
import AnimateOnScroll from '@/components/utils/AnimateOnScroll';

const ContractScannerCapabilities = () => {
  const capabilities = [
    {
      icon: <FileCheck className="h-8 w-8 text-blue-400" />,
      title: 'Contract Types Supported',
      items: [
        'Service Agreements',
        'Vendor Contracts', 
        'Employment Agreements',
        'Partnership Agreements',
        'Non-Disclosure Agreements',
        'Licensing Agreements'
      ]
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-orange-400" />,
      title: 'Risk Categories Identified',
      items: [
        'Financial Exposure Areas',
        'Performance Obligations',
        'Liability Concerns',
        'Termination Clauses',
        'Payment Terms',
        'Intellectual Property Issues'
      ]
    },
    {
      icon: <Eye className="h-8 w-8 text-green-400" />,
      title: 'Scanning Approach',
      items: [
        'Key Clause Identification',
        'Risk Area Flagging',
        'Important Deadline Spotting',
        'Payment Term Highlighting',
        'Renewal Clause Detection',
        'Penalty Identification'
      ]
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-400" />,
      title: 'Output Formats',
      items: [
        'Executive Summary',
        'Risk Highlight Report',
        'Key Areas List',
        'Priority Review Items',
        'Quick Reference Guide',
        'Professional Discussion Points'
      ]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <AnimateOnScroll animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quick Risk Scanning Capabilities
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Maya AI Contract Risk Scanner provides rapid preliminary analysis to help busy 
              professionals identify areas requiring professional legal review.
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <AnimateOnScroll key={capability.title} animation="fade-in" delay={index * 150}>
              <Card className="glass-card h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {capability.icon}
                    <h3 className="text-lg font-semibold text-white">{capability.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {capability.items.map((item) => (
                      <li key={item} className="text-white/70 text-sm flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContractScannerCapabilities;
