
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText = "Get Started",
  ctaLink = "#tools"
}) => {
  return (
    <div className="relative overflow-hidden py-24 sm:py-32 lg:pb-32 xl:pb-36 mt-16">
      <div 
        className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
        aria-hidden="true"
      >
        <div className="relative h-full max-w-7xl mx-auto">
          <div className="absolute left-0 h-72 w-72 blur-[100px] bg-purple-500/20 rounded-full animate-pulse-slow" />
          <div className="absolute right-32 bottom-32 h-96 w-96 blur-[120px] bg-teal-500/20 rounded-full animate-pulse-slow" />
          <div className="absolute right-10 top-10 h-64 w-64 blur-[80px] bg-coral-500/20 rounded-full animate-pulse-slow" />
        </div>
      </div>

      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="backdrop-blur-[1px]">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="text-gradient">{title}</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/80">
              {subtitle}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg hover:shadow-glow transition-all duration-300 rounded-xl px-8"
              >
                <a href={ctaLink}>
                  <Sparkles className="h-4 w-4 mr-2" />
                  {ctaText}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
