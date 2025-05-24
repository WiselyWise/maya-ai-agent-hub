
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, Star } from 'lucide-react';
import AnimateOnScroll from '@/components/utils/AnimateOnScroll';

const ContractScannerAccess = () => {
  const benefits = [
    'Quick contract risk scanning',
    'Key risk area identification',
    'Professional summary reports',
    'Fast turnaround times',
    'Secure document processing',
    'Executive-friendly outputs'
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll animation="fade-in">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="h-8 w-8 text-blue-400" />
                <span className="text-blue-400 font-medium">Maya AI Contract Risk Scanner</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Start Quick Contract Risk Scanning Today
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Join busy executives and business owners who use Maya AI for preliminary 
                contract risk identification before consulting with their professional advisors.
              </p>
              
              <div className="space-y-3 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/80">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8"
                  asChild
                >
                  <a href="https://app.smartmaya.ai">Start Risk Scanner</a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10 px-8"
                  asChild
                >
                  <a href="https://smartmaya.ai/contact-us">Contact Us</a>
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-in" delay={300}>
            <Card className="glass-card">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/60 text-sm">Rated 4.9/5 by 134+ business professionals</p>
                </div>
                
                <blockquote className="text-white/80 text-center italic mb-6">
                  "Maya AI Contract Risk Scanner gives me the quick overview I need before 
                  my legal consultations. It saves time and helps me ask better questions 
                  during professional reviews."
                </blockquote>
                
                <div className="text-center">
                  <p className="text-white font-medium">Sarah Chen</p>
                  <p className="text-white/60 text-sm">Operations Director, TechCorp</p>
                </div>
                
                <div className="mt-6 bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                  <p className="text-yellow-200 text-xs text-center">
                    <strong>Disclaimer:</strong> Tool provides preliminary risk identification only. 
                    Not a substitute for professional legal advice.
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ContractScannerAccess;
