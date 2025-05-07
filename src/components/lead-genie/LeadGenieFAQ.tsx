
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
    question: "What is an ICP and why do I need to define one?",
    answer: "An ICP (Ideal Customer Profile) is a detailed description of the perfect customer for your product or service. Defining ICPs helps you focus your marketing and sales efforts on the prospects most likely to convert and become valuable customers. Lead Genie allows you to create and manage multiple ICPs to target different market segments effectively."
  },
  {
    question: "How does the AI email copy generator work?",
    answer: "Our AI email copy generator uses advanced natural language processing to create personalized, compelling email content tailored to each of your ICPs. Simply input information about your product/service and target audience, and the AI will generate up to 3 unique emails designed to nurture leads through your sales funnel. You can edit, refine, and A/B test these emails to maximize conversion rates."
  },
  {
    question: "How many leads can I manage with Lead Genie?",
    answer: "Our self-service plan allows you to manage up to 500 leads, while our concierge service offers unlimited lead management. If you need to manage more leads in the self-service plan, you can upgrade to higher tiers with increased capacity."
  },
  {
    question: "What's included in the concierge service?",
    answer: "Our concierge service is a full-service solution where our team handles your entire lead generation process. This includes campaign management by sales experts, lead sourcing and qualification, MQL delivery directly to your inbox, and regular performance reporting. It's ideal for busy executives who want results without having to manage the process themselves."
  },
  {
    question: "Can Lead Genie replace my existing CRM?",
    answer: "Yes, Lead Genie includes a comprehensive CRM that can replace most traditional CRM systems. It features deal tracking, opportunity management, contact logging, sales pipeline visualization, and performance metrics. Many SMEs find they can eliminate their separate CRM subscription and use Lead Genie as an all-in-one solution."
  },
  {
    question: "How is Lead Genie different from other email marketing tools?",
    answer: "Unlike standard email marketing tools that focus only on sending messages, Lead Genie is an end-to-end solution that handles your entire sales process from ICP definition to closing deals. It combines AI-powered email creation, lead management, CRM functionality, and optional concierge services in one integrated platform, eliminating the need for multiple disconnected tools."
  }
];

const LeadGenieFAQ = () => {
  return (
    <section className="py-16 container mx-auto">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-purple-500 mb-3 block">FAQ</span>
        <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked <span className="text-gradient">Questions</span></h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Get answers to common questions about Lead Genie and how it can help streamline your sales process.
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
          Still have questions about how Lead Genie can help your business?
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

export default LeadGenieFAQ;
