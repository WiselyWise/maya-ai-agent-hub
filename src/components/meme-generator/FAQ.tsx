
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <div className="container px-4 mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Common Questions from <span className="text-gradient-mixed">Business Leaders</span></h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Get answers to questions asked by executives and small business owners like you
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto glass-card rounded-2xl p-6 backdrop-blur-md">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-white/10">
            <AccordionTrigger className="text-white">How do memes help my business marketing strategy?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Memes increase engagement by up to 300% compared to standard posts. They make your brand more relatable, improve audience retention, and enhance message memorability. Modern audiences connect with brands that understand their language, and memes are the fastest growing communication medium across all demographics.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-white/10">
            <AccordionTrigger className="text-white">Will memes maintain our professional brand image?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Absolutely. Our AI is trained to maintain your brand's professional image while adding just the right amount of humor. You can set parameters for tone and style that align with your brand guidelines. Many Fortune 500 companies now use memes in their marketing to humanize their brand without sacrificing professionalism.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border-white/10">
            <AccordionTrigger className="text-white">How much time does this save my marketing team?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              On average, our clients report saving 3-5 hours per week on content creation. Traditional meme creation requires concept development, design skills, and multiple revisions. Our AI generates ready-to-publish content in under 30 seconds, allowing your team to focus on strategy rather than execution.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border-white/10">
            <AccordionTrigger className="text-white">Is there an enterprise plan for my marketing department?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Yes, we offer enterprise plans with team collaboration features, brand voice settings, approval workflows, and detailed analytics. Enterprise customers also receive priority support and custom onboarding. Contact our sales team for a personalized demo tailored to your industry.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="border-white/10">
            <AccordionTrigger className="text-white">What kind of ROI can I expect?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Businesses using our platform report an average 27% increase in social media engagement and 35% better response rates on email campaigns that include memes. For small businesses, this translates to more efficient marketing spend and higher conversion rates. Our analytics dashboard helps you track performance and refine your approach over time.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
