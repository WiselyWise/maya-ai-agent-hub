
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import AnimateOnScroll from '@/components/utils/AnimateOnScroll';

const ContractScannerFAQ = () => {
  const faqs = [
    {
      question: 'What types of contracts can Maya AI Contract Scanner analyze?',
      answer: 'Our AI can analyze various business contracts including service agreements, vendor contracts, employment agreements, partnership agreements, NDAs, licensing agreements, and more. The system works with PDF, Word, and text formats.'
    },
    {
      question: 'How accurate is the risk assessment and obligation identification?',
      answer: 'Maya AI Contract Scanner uses advanced natural language processing with 95%+ accuracy in identifying key obligations and risks. However, we always recommend having critical contracts reviewed by qualified professionals as a final step.'
    },
    {
      question: 'Is my contract data secure and confidential?',
      answer: 'Absolutely. We use enterprise-grade encryption for all document uploads and processing. Your contracts are processed securely and are never stored permanently on our servers. We maintain strict confidentiality protocols.'
    },
    {
      question: 'How long does the analysis process take?',
      answer: 'Most contract analyses are completed within 2-5 minutes, depending on document length and complexity. You\'ll receive a comprehensive report with risk assessments and mitigation strategies.'
    },
    {
      question: 'Can I compare multiple contract versions?',
      answer: 'Yes! Our comparison feature allows you to upload multiple versions of the same contract to identify changes, amendments, and new risks that may have been introduced between versions.'
    },
    {
      question: 'What format are the analysis reports provided in?',
      answer: 'Reports are available in professional PDF format with executive summaries, detailed risk breakdowns, obligation lists, and actionable recommendations. You can also export data to Excel for further analysis.'
    },
    {
      question: 'Do you offer team or enterprise plans?',
      answer: 'Yes, we offer scalable plans for teams and enterprises with features like centralized dashboards, collaboration tools, approval workflows, and advanced reporting capabilities.'
    },
    {
      question: 'Can the AI handle contracts in different languages?',
      answer: 'Currently, Maya AI Contract Scanner primarily supports English-language contracts. We\'re working on expanding language support and will announce additional languages as they become available.'
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
            <p className="text-lg text-white/70">
              Get answers to common questions about Maya AI Contract Scanner
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
                <AccordionContent className="text-white/70 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ContractScannerFAQ;
