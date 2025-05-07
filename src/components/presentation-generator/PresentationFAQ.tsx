
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PresentationFAQ = () => {
  return (
    <div className="container px-4 mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Common Questions from <span className="text-gradient-mixed">Business Leaders</span></h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Get answers to questions asked by executives and presentation creators like you
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto glass-card rounded-2xl p-6 backdrop-blur-md">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-white/10">
            <AccordionTrigger className="text-white">How much time does this save compared to manual presentation creation?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Our users report saving 80% of their presentation creation time on average. What typically takes 5-10 hours can be accomplished in 15-30 minutes with our AI tool. The more complex the presentation, the more time you'll save.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-white/10">
            <AccordionTrigger className="text-white">Will the presentations look professional enough for board meetings?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Absolutely. Our templates are designed by presentation experts who have worked with Fortune 500 companies and follow enterprise design standards. You can also upload your company's brand guidelines to ensure visual consistency with your corporate identity.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border-white/10">
            <AccordionTrigger className="text-white">Can I include my own data and charts?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Yes, you can upload your own data as CSV files or connect to common business intelligence tools. Our AI will automatically create appropriate visualizations based on your data, or you can specify exactly how you want the information presented.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border-white/10">
            <AccordionTrigger className="text-white">Are there different presentation types available?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              We offer specialized templates for different presentation purposes: sales pitches, quarterly reports, training materials, product launches, investor decks, and general business presentations. Each type follows industry best practices for that specific presentation category.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="border-white/10">
            <AccordionTrigger className="text-white">Do you offer team collaboration features?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Our Enterprise plan includes full team collaboration capabilities, allowing multiple team members to work on the same presentation simultaneously. You can assign different sections to team members, track changes, and merge content seamlessly.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default PresentationFAQ;
