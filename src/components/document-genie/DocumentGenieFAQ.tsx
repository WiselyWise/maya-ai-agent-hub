
import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQs = [
  {
    question: "How accurate is the information in the generated documents?",
    answer: "Document Genie uses advanced AI to research and compile information from reputable online sources. While we strive for high accuracy, we recommend reviewing the content for your specific needs and making any necessary edits before finalizing. The AI is continuously improving and learning to provide more accurate results."
  },
  {
    question: "Can I customize the document style and format?",
    answer: "Yes! After Document Genie creates your initial document, you can customize its style, format, and content. You can edit text, rearrange sections, adjust formatting, and make other changes before exporting the final document. Professional and Enterprise plans offer additional custom branding options."
  },
  {
    question: "What types of documents can I create with Document Genie?",
    answer: "Document Genie allows you to create training guides, essays, white papers, case studies, and ebooks. Each document type is structured appropriately for its purpose, with suitable formatting, sections, and visual elements. We're continuously expanding our range of document types based on user feedback."
  },
  {
    question: "How do the export options work?",
    answer: "You can export your completed documents in PDF format (all plans) or Word (DOCX) format (Professional and Enterprise plans). The exported documents preserve all formatting, images, charts, and other elements created by Document Genie. This allows you to easily share, print, or further edit your documents using standard office software."
  },
  {
    question: "Are the images and charts in my document original?",
    answer: "Yes, Document Genie creates original images specifically for your document based on your topic and content. The charts and graphs are generated from relevant data discovered during the research process or from information you provide. These visual elements are unique to your document and help illustrate your content effectively."
  },
  {
    question: "Can I use the documents for commercial purposes?",
    answer: "Absolutely! All content created by Document Genie is yours to use as you wish, including for commercial purposes. You can use the documents for business reports, marketing materials, educational resources, or any other purpose. There are no usage restrictions or royalties on the content generated."
  }
];

const DocumentGenieFAQ = () => {
  return (
    <section className="py-16 container mx-auto">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-purple-500 mb-3 block">FAQ</span>
        <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked <span className="text-gradient">Questions</span></h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Get answers to common questions about Document Genie and how it can help with your document creation needs.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {FAQs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="glass-card border border-white/10">
              <AccordionTrigger className="px-6 py-4 text-white font-medium text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-white/70">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-white/70 mb-6">
          Still have questions about how Document Genie can help your business?
        </p>
        <a 
          href="https://smartmaya.ai/contact-us/" 
          className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors"
        >
          Contact our team for personalized assistance <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </section>
  );
};

export default DocumentGenieFAQ;
