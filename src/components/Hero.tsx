
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  accentWord?: string;
}
const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText = "Try for Free",
  ctaLink = "https://app.smartmaya.ai",
  accentWord
}) => {
  // If accentWord is provided, replace it with a gradient version in the title
  const formattedTitle = accentWord ? title.replace(accentWord, `<span class="text-gradient-mixed">${accentWord}</span>`) : title;
  return <div className="relative overflow-hidden py-24 sm:py-32 lg:pb-32 xl:pb-36 mt-12">
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="backdrop-blur-[1px]">
            <span className="inline-flex items-center rounded-full bg-dark-700/70 px-3 py-1 text-sm font-medium text-white/80 backdrop-blur-sm ring-1 ring-inset ring-white/10 mb-6">
              <Sparkles className="mr-1.5 h-3.5 w-3.5 text-purple-500" />
              AI-Powered Business Marketing Tool
            </span>
            
            <h1 
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl tracking-[-0.02em] leading-tight" 
              style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '-2px', lineHeight: '1.4' }} 
              dangerouslySetInnerHTML={{__html: formattedTitle}}
            >
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-white/80" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '-2px', lineHeight: '1.4' }}>
              {subtitle}
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg hover:shadow-glow transition-all duration-300 rounded-2xl px-8">
                <a href={ctaLink}>
                  <Sparkles className="h-4 w-4 mr-2" />
                  {ctaText}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;
