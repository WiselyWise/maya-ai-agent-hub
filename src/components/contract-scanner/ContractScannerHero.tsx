
import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Shield, FileCheck } from 'lucide-react';
import AnimateOnScroll from '@/components/utils/AnimateOnScroll';

const ContractScannerHero = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <AnimateOnScroll animation="fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">
              Maya AI <span className="text-gradient-mixed">Contract Risk Scanner</span>
            </h1>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll animation="fade-in" delay={200}>
          <p className="text-xl text-white mb-4 max-w-3xl mx-auto leading-relaxed">
            Quick contract risk scanning for busy business owners and executives. 
            Get instant insights into potential risks and key areas to review with your professional advisors.
          </p>
          <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-4 mb-8 max-w-4xl mx-auto">
            <p className="text-orange-100 text-sm">
              <strong>Important:</strong> This tool provides preliminary risk identification only and is not legal advice. 
              Always consult with qualified legal and professional advisors for your specific situation and compliance requirements.
            </p>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll animation="fade-in" delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 text-lg" asChild>
              <a href="https://app.smartmaya.ai">Start Quick Risk Scan</a>
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg" asChild>
              <a href="https://smartmaya.ai/contact-us">Contact Us</a>
            </Button>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll animation="fade-in" delay={600}>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-blue-400" />
              <span>Risk Identification</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="h-4 w-4 text-blue-400" />
              <span>Key Areas Review</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-blue-400" />
              <span>Quick Preliminary Scan</span>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ContractScannerHero;
