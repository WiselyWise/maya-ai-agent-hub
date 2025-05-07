
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SmartReplyFAQ = () => {
  const faqs = [
    {
      question: "How does Smart Reply AI understand customer intent?",
      answer: "Smart Reply AI uses advanced natural language processing to analyze the content, tone, and context of customer messages. It identifies key elements like questions, complaints, inquiries, and sentiment to determine the appropriate response strategy."
    },
    {
      question: "Can I customize the replies to match my brand voice?",
      answer: "Absolutely! Smart Reply AI allows you to set your preferred tone, style, and messaging guidelines. You can also edit any generated response before sending it to ensure perfect alignment with your brand voice."
    },
    {
      question: "Which messaging platforms does Smart Reply AI work with?",
      answer: "Smart Reply AI works with virtually any platform where text-based customer communication happens, including email, WhatsApp, Facebook Messenger, Instagram DMs, Twitter/X, LinkedIn messages, and customer service platforms."
    },
    {
      question: "How does Smart Reply AI handle complex customer issues?",
      answer: "For complex issues, Smart Reply AI generates thoughtful responses that acknowledge the complexity, provide clear information on what you can address, set appropriate expectations, and outline next steps or escalation paths when needed."
    },
    {
      question: "Is my customer data secure when using Smart Reply AI?",
      answer: "Yes, customer data security is our priority. We use enterprise-grade encryption, don't store customer messages beyond the session, and comply with major data protection regulations including GDPR and CCPA."
    }
  ];

  return (
    <section id="faq" className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-purple-500 mb-3 block">FAQ</span>
        <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked <span className="text-gradient">Questions</span></h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Everything you need to know about our Smart Reply AI tool and how it can transform your customer communications.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto glass-card rounded-2xl p-6">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
              <AccordionTrigger className="text-white hover:text-purple-400 transition-colors text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/70">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default SmartReplyFAQ;
