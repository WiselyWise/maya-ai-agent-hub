
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

interface DemoSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  videoUrl?: string;
  ctaText?: string;
  ctaLink?: string;
}

const DemoSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  videoUrl,
  ctaText = "Try for Free",
  ctaLink = "https://app.smartmaya.ai"
}: DemoSectionProps) => {
  return (
    <section className="container mx-auto py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">
          <span className="text-gradient">See It In Action</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="max-w-4xl mx-auto glass-card rounded-2xl p-4 relative overflow-hidden">
        <div className="rounded-xl overflow-hidden relative group">
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="w-full h-auto rounded-xl transform transition-transform duration-300 group-hover:scale-[1.02]"
          />
          
          {videoUrl && (
            <a 
              href={videoUrl} 
              className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Play className="h-8 w-8 text-white fill-white" />
              </div>
            </a>
          )}
        </div>
        
        <div className="mt-6 flex justify-between items-center">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <Button asChild className="neo-button">
            <a href={ctaLink} className="flex items-center gap-2">
              {ctaText} <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
