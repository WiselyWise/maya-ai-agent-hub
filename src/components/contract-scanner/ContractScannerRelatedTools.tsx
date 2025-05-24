
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Users, MessageSquare, Sparkles } from 'lucide-react';
import AnimateOnScroll from '@/components/utils/AnimateOnScroll';

const ContractScannerRelatedTools = () => {
  const relatedTools = [
    {
      title: 'Document Genie',
      description: 'Create professional contracts and business documents after your analysis is complete.',
      icon: <FileText className="h-6 w-6" />,
      color: 'from-purple-500 to-purple-600',
      link: '/document-genie'
    },
    {
      title: 'Lead Genie', 
      description: 'Manage vendor and client relationships discovered through contract analysis.',
      icon: <Users className="h-6 w-6" />,
      color: 'from-coral-500 to-coral-600',
      link: '/lead-genie'
    },
    {
      title: 'Smart Reply',
      description: 'Generate professional responses for contract negotiations and communications.',
      icon: <MessageSquare className="h-6 w-6" />,
      color: 'from-teal-500 to-teal-600',
      link: '/smart-reply'
    }
  ];

  return (
    <section className="py-20 px-4 bg-dark-900/50">
      <div className="container mx-auto">
        <AnimateOnScroll animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Your Contract Workflow
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Enhance your contract management process with our integrated AI tools 
              designed to work seamlessly together.
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid md:grid-cols-3 gap-8">
          {relatedTools.map((tool, index) => (
            <AnimateOnScroll key={tool.title} animation="fade-in" delay={index * 150}>
              <Card className="glass-card h-full group hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${tool.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{tool.title}</h3>
                  <p className="text-white/70 mb-6 flex-grow">{tool.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-white/20 text-white hover:bg-white/10"
                    asChild
                  >
                    <Link to={tool.link}>
                      Explore {tool.title}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
        
        <AnimateOnScroll animation="fade-in" delay={600}>
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 text-white/60 text-sm mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Part of the Maya AI Agent Hub</span>
            </div>
            <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white" asChild>
              <Link to="/">Explore All AI Tools</Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ContractScannerRelatedTools;
