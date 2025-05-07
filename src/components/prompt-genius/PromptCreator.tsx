
import React from 'react';
import { Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const PromptCreator = () => {
  return (
    <div id="create" className="container px-4 mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">
          <span className="text-gradient">Business Prompt Engine</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Join hundreds of executives already using our AI Prompt Genius to get better results from all their AI interactions
        </p>
      </div>
      
      <Card className="max-w-md mx-auto glass-card backdrop-blur-md border-white/10">
        <CardHeader>
          <div className="flex items-center justify-center mb-4">
            <Lightbulb className="h-10 w-10 text-coral-500" />
          </div>
          <CardTitle className="text-white text-center">Executive Early Access</CardTitle>
          <CardDescription className="text-white/70 text-center">
            Be among the first business leaders to leverage expert-level AI prompt engineering without technical knowledge
          </CardDescription>
        </CardHeader>
        <CardContent className="text-white/80">
          <ul className="space-y-2">
            <li className="flex items-center">
              <div className="h-5 w-5 rounded-full bg-teal-500/20 mr-2 flex items-center justify-center">
                <span className="text-teal-500 text-xs">✓</span>
              </div>
              <span>Unlimited prompt enhancements</span>
            </li>
            <li className="flex items-center">
              <div className="h-5 w-5 rounded-full bg-teal-500/20 mr-2 flex items-center justify-center">
                <span className="text-teal-500 text-xs">✓</span>
              </div>
              <span>Domain-specific frameworks</span>
            </li>
            <li className="flex items-center">
              <div className="h-5 w-5 rounded-full bg-teal-500/20 mr-2 flex items-center justify-center">
                <span className="text-teal-500 text-xs">✓</span>
              </div>
              <span>Prompt history & favorites</span>
            </li>
            <li className="flex items-center">
              <div className="h-5 w-5 rounded-full bg-teal-500/20 mr-2 flex items-center justify-center">
                <span className="text-teal-500 text-xs">✓</span>
              </div>
              <span>Works with any AI system</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full neo-button" asChild>
            <a href="https://app.smartmaya.ai">Try for Free</a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PromptCreator;
