
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Search, Shield, Download } from 'lucide-react';
import AnimateOnScroll from '@/components/utils/AnimateOnScroll';

const ContractScannerHowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="h-8 w-8" />,
      title: 'Upload Contract',
      description: 'Securely upload your contract document in PDF, Word, or text format. Our system supports multiple file types.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: 'AI Analysis',
      description: 'Our advanced AI analyzes the document, identifying key clauses, obligations, and potential risk areas.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Risk Assessment',
      description: 'Receive a comprehensive risk assessment with severity ratings and detailed explanations for each identified risk.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: 'Get Results',
      description: 'Download your professional analysis report with actionable recommendations and mitigation strategies.',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="py-20 px-4 bg-dark-900/50">
      <div className="container mx-auto">
        <AnimateOnScroll animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How Maya AI Contract Scanner Works
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Get professional contract analysis in four simple steps. 
              Our AI-powered system delivers comprehensive insights in minutes.
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <AnimateOnScroll key={step.title} animation="fade-in" delay={index * 200}>
              <Card className="glass-card relative">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} text-white mb-4`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-white text-dark-800 rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContractScannerHowItWorks;
