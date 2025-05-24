import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import AnimateOnScroll from '@/components/utils/AnimateOnScroll';

const ContractScannerFAQ = () => {
  const faqs = [
    {
      question: 'Is Maya AI Contract Risk Scanner a replacement for legal advice?',
      answer: 'No, absolutely not. Maya AI Contract Risk Scanner is a preliminary tool designed to help busy executives quickly identify potential risk areas before consulting with qualified legal professionals. It is not legal advice and should never be used as a substitute for professional legal counsel.'
    },
    {
      question: 'What types of contracts can the risk scanner analyze?',
      answer: 'Our AI can scan various business contracts including service agreements, vendor contracts, employment agreements, partnership agreements, NDAs, and licensing agreements. The scanner works with PDF, Word, and text formats to provide quick risk identification.'
    },
    {
      question: 'How accurate is the risk identification?',
      answer: 'While our AI provides helpful preliminary risk identification, it is designed as a starting point for professional review. The tool flags potential areas of concern, but accuracy depends on contract complexity. Always have contracts reviewed by qualified professionals for final decisions.'
    },
    {
      question: 'Is my contract data secure and confidential?',
      answer: 'Yes, we use enterprise-grade encryption for all document uploads and processing. Your contracts are processed securely and are not stored permanently on our servers. We maintain strict confidentiality protocols for all business documents.'
    },
    {
      question: 'How quickly does the risk scanning process work?',
      answer: 'Most contract risk scans are completed within 2-5 minutes, making it perfect for busy executives who need quick preliminary insights before scheduling professional consultations with their legal advisors.'
    },
    {
      question: 'What do I get in the risk scan results?',
      answer: 'You receive a summary report highlighting identified risk areas, key clauses requiring attention, and brief explanations of what to look out for. This report is designed to help you prepare meaningful discussions with your professional advisors.'
    },
    {
      question: 'Can this tool help with compliance requirements?',
      answer: 'The risk scanner can identify clauses that may relate to compliance areas, but it does not provide compliance advice or guidance. All compliance matters must be addressed with qualified legal and regulatory professionals who understand your specific industry and situation.'
    },
    {
      question: 'Who should use Maya AI Contract Risk Scanner?',
      answer: 'This tool is designed for busy business owners, executives, and professionals who want a quick preliminary overview of contract risks before engaging with their legal advisors. It\'s perfect for time-pressed situations where you need initial insights quickly.'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <AnimateOnScroll animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-white/80">
              Common questions about Maya AI Contract Risk Scanner
            </p>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll animation="fade-in" delay={200}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card border-none rounded-lg px-6"
              >
                <AccordionTrigger className="text-white hover:text-blue-400 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/80 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimateOnScroll>
        
        <AnimateOnScroll animation="fade-in" delay={400}>
          <div className="mt-12 text-center">
            <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-red-100 text-sm">
                <strong>Important Legal Disclaimer:</strong> Maya AI Contract Risk Scanner provides preliminary risk identification only. 
                This tool does not constitute legal advice and is not a substitute for consultation with qualified legal professionals. 
                Users must seek appropriate legal and professional counsel for their specific circumstances and compliance requirements.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ContractScannerFAQ;
