
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, FileCheck, AlertTriangle, Shield } from 'lucide-react';
import AnimateOnScroll from '@/components/utils/AnimateOnScroll';

const ContractScannerDemo = () => {
  const demoResults = [
    {
      icon: <FileCheck className="h-5 w-5 text-green-400" />,
      title: 'Key Obligations Identified',
      count: '12',
      description: 'Critical obligations and responsibilities found'
    },
    {
      icon: <AlertTriangle className="h-5 w-5 text-orange-400" />,
      title: 'Risk Areas Detected',
      count: '5',
      description: 'Potential risks requiring attention'
    },
    {
      icon: <Shield className="h-5 w-5 text-blue-400" />,
      title: 'Mitigation Strategies',
      count: '8',
      description: 'Actionable recommendations provided'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll animation="fade-in">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                See Maya AI Contract Scanner in Action
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Watch how our AI analyzes a sample service agreement, identifying 
                key risks and providing actionable mitigation strategies in real-time.
              </p>
              
              <div className="space-y-4 mb-8">
                {demoResults.map((result) => (
                  <div key={result.title} className="flex items-center gap-4 p-4 rounded-lg bg-white/5">
                    {result.icon}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-white">{result.count}</span>
                        <span className="text-white font-medium">{result.title}</span>
                      </div>
                      <p className="text-white/60 text-sm">{result.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white" asChild>
                <a href="https://app.smartmaya.ai">Try Contract Scanner Free</a>
              </Button>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-in" delay={300}>
            <Card className="glass-card">
              <CardContent className="p-0">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button 
                      size="lg" 
                      className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 rounded-full w-20 h-20"
                    >
                      <Play className="h-8 w-8 ml-1" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/50 rounded-lg p-4">
                      <p className="text-white text-sm font-medium">Demo: Service Agreement Analysis</p>
                      <p className="text-white/70 text-xs">Watch AI identify risks and obligations in real-time</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ContractScannerDemo;
