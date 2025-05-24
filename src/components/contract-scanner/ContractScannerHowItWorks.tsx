
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Search, AlertTriangle, Download } from 'lucide-react';
import AnimateOnScroll from '@/components/utils/AnimateOnScroll';

const ContractScannerHowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="h-8 w-8" />,
      title: 'Upload Contract',
      description: 'Securely upload your contract document in PDF, Word, or text format for quick preliminary scanning.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: 'AI Risk Scan',
      description: 'Our AI rapidly scans the document to identify potential risk areas and key clauses requiring attention.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: 'Risk Identification',
      description: 'Receive a quick overview of identified risk areas with brief explanations of what to look out for.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: 'Get Summary',
      description: 'Download your preliminary risk summary to discuss with your legal and professional advisors.',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="py-20 px-4 bg-dark-900/50">
      <div className="container mx-auto">
        <AnimateOnScroll animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How Maya AI Contract Risk Scanner Works
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Get a preliminary risk overview in four simple steps. Perfect for busy executives 
              who need quick insights before professional consultation.
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
                  <p className="text-white/80">{step.description}</p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
        
        <AnimateOnScroll animation="fade-in" delay={1000}>
          <div className="mt-12 text-center">
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-blue-100 text-sm">
                <strong>Remember:</strong> This is a preliminary scanning tool designed to help you prepare 
                for discussions with professional advisors. It does not replace professional legal counsel.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ContractScannerHowItWorks;
