
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <div className="container px-4 mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked <span className="text-gradient-mixed">Questions</span></h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Everything you need to know about our meme generator
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto glass-card rounded-2xl p-6 backdrop-blur-md">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-white/10">
            <AccordionTrigger className="text-white">How does the AI meme generator work?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Our AI analyzes your text prompt to understand the humor and context. It then searches through thousands of templates to find the perfect match, applies your text with optimal placement, and generates a ready-to-share meme in seconds.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-white/10">
            <AccordionTrigger className="text-white">Can I customize the memes after they're generated?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Yes! Once your meme is generated, you can customize the font, colors, text position, and even swap the template if you'd like. Our editor is intuitive and designed for busy professionals.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border-white/10">
            <AccordionTrigger className="text-white">How many memes can I create?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Our free plan allows you to create 5 memes per day. Premium plans offer unlimited meme creation plus additional features for businesses.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border-white/10">
            <AccordionTrigger className="text-white">Can I use these memes commercially?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Yes, all memes created with our platform can be used for commercial purposes, including marketing, social media, and internal communications.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="border-white/10">
            <AccordionTrigger className="text-white">Do you store the memes I create?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              We don't store your memes on our servers unless you explicitly choose to save them to your account. Your privacy and content ownership are important to us.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
