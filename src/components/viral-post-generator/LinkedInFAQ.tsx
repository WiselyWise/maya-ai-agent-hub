
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const LinkedInFAQ = () => {
  return (
    <div className="container px-4 mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Common Questions from <span className="text-gradient-mixed">LinkedIn Power Users</span></h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Get answers to questions asked by business owners and executives about maximizing LinkedIn impact
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto glass-card rounded-2xl p-6 backdrop-blur-md">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-white/10">
            <AccordionTrigger className="text-white">How does the AI optimize for LinkedIn's algorithm?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Our AI is trained on thousands of high-performing LinkedIn posts and regularly updated to match LinkedIn's algorithm preferences. It focuses on creating native content that encourages meaningful engagement, uses appropriate text length, incorporates strategic formatting, and includes relevant hashtags. The system adapts to LinkedIn's preference for posts that drive on-platform conversation rather than external links.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-white/10">
            <AccordionTrigger className="text-white">What types of LinkedIn content can this generate?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Our LinkedIn Post Generator can create various types of professional content including thought leadership pieces, industry insights, career advice, company announcements, personal achievements, and professional storytelling. You can specify the content type and our AI will adapt the tone, structure, and approach accordingly while maintaining professional standards.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border-white/10">
            <AccordionTrigger className="text-white">How do I customize the post for my industry?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Simply select your industry from the dropdown menu in the generator interface. Our AI will automatically incorporate industry-specific language, trends, and topics that resonate with your professional network. You can further customize by adding specific data points, company terminology, or trends you want to highlight in your content.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border-white/10">
            <AccordionTrigger className="text-white">What's the best hook style for LinkedIn?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Each hook style has its advantages on LinkedIn. Curiosity hooks perform well for thought leadership and educational content. Contrarian hooks work best when challenging industry norms or presenting new perspectives. Vulnerable hooks create authentic connections through professional storytelling. We recommend testing different styles with your audience and tracking which generates the most engagement.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="border-white/10">
            <AccordionTrigger className="text-white">How often should I post on LinkedIn for best results?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              For most professionals, posting 2-3 times per week on LinkedIn delivers optimal results. Consistency is more important than frequency. Our Enterprise plan includes a content calendar feature that helps you maintain a consistent posting schedule without overwhelming your audience. The quality of your posts matters more than quantity—one thoughtful post per week is better than daily low-quality content.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default LinkedInFAQ;
