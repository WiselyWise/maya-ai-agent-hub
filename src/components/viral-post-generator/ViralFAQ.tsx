
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ViralFAQ = () => {
  return (
    <div className="container px-4 mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Common Questions from <span className="text-gradient-mixed">Marketing Leaders</span></h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Get answers to questions asked by social media managers and executives like you
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto glass-card rounded-2xl p-6 backdrop-blur-md">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-white/10">
            <AccordionTrigger className="text-white">How does the AI create content that feels authentic?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Our AI is trained on millions of high-performing social media posts and can be customized to match your brand voice. During onboarding, you can provide samples of content you like, and our system will adapt to your tone and style. You always have final edit control to ensure the content feels authentic to your brand.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-white/10">
            <AccordionTrigger className="text-white">What platforms are supported?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              We currently support content creation for LinkedIn, Twitter, Facebook, Instagram, and TikTok. Each platform has specialized algorithms to ensure content matches the specific format, length, tone, and style that performs best on that network. We regularly update our models based on platform algorithm changes.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border-white/10">
            <AccordionTrigger className="text-white">Can I schedule posts directly from the tool?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Yes, our Enterprise plan includes direct integration with major social media management platforms like Hootsuite, Buffer, and Later. You can generate content and schedule it directly within our interface. We also analyze optimal posting times based on your audience's activity patterns.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border-white/10">
            <AccordionTrigger className="text-white">How does the AI keep up with current trends?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Our system continuously monitors trending topics, hashtags, and viral content patterns across all major social platforms. When you create content, it automatically suggests relevant trends that align with your brand and message, helping you join conversations that are already gaining traction.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="border-white/10">
            <AccordionTrigger className="text-white">What metrics do you track for measuring success?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Our analytics dashboard tracks engagement metrics (likes, shares, comments), reach, click-through rates, conversion metrics, audience growth, and sentiment analysis. We compare your performance against industry benchmarks and provide actionable insights to continuously improve your content strategy.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ViralFAQ;
