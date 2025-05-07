
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PromptFAQ = () => {
  return (
    <div className="container px-4 mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Common Questions from <span className="text-gradient-mixed">Business Leaders</span></h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Get answers to questions asked by executives and professionals like you
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto glass-card rounded-2xl p-6 backdrop-blur-md">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-white/10">
            <AccordionTrigger className="text-white">Which AI systems does Prompt Genius work with?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Prompt Genius works with any AI system including ChatGPT, Claude, Bard/Gemini, Midjourney, DALL-E, and any other tool that accepts text-based prompts. Our system creates optimized prompts that you can copy and paste into any AI interface you already use.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-white/10">
            <AccordionTrigger className="text-white">How much technical knowledge do I need to use this?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              No technical knowledge is required. Prompt Genius is specifically designed for busy executives and professionals with no background in prompt engineering. You simply enter what you want in plain language, and our system transforms it into an expert-level prompt.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border-white/10">
            <AccordionTrigger className="text-white">What business domains do you support?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              We support all major business functions including marketing, sales, finance, operations, HR, strategy, product development, customer service, and general management. Each domain has specialized prompt frameworks that incorporate relevant terminology, methodologies, and best practices.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border-white/10">
            <AccordionTrigger className="text-white">How much time does this save compared to manual prompting?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Users report saving 70-80% of the time they previously spent crafting and refining prompts. More importantly, they report getting usable results on the first try instead of going through 3-5 iterations of refining their requests. This translates to saving several hours per week for heavy AI users.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="border-white/10">
            <AccordionTrigger className="text-white">Can I save my favorite prompts for reuse?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Yes, Prompt Genius includes a prompt library where you can save frequently used prompts, organize them into categories, and even share them with team members. The Enterprise plan includes team libraries and role-based access control for collaborative prompt management.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default PromptFAQ;
