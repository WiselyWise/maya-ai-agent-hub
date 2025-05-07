
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const SmartReplyCreator = () => {
  return (
    <div id="create" className="container px-4 mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">
          <span className="text-gradient">Start Responding Smarter</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Join hundreds of businesses already using Smart Reply AI to improve customer communication and save time
        </p>
      </div>
      
      <Card className="max-w-md mx-auto glass-card backdrop-blur-md border-white/10">
        <CardHeader>
          <div className="flex items-center justify-center mb-4">
            <MessageSquare className="h-10 w-10 text-purple-500" />
          </div>
          <CardTitle className="text-white text-center">Professional Early Access</CardTitle>
          <CardDescription className="text-white/70 text-center">
            Be among the first business professionals to leverage AI-enhanced customer responses
          </CardDescription>
        </CardHeader>
        <CardContent className="text-white/80">
          <ul className="space-y-2">
            <li className="flex items-center">
              <div className="h-5 w-5 rounded-full bg-teal-500/20 mr-2 flex items-center justify-center">
                <span className="text-teal-500 text-xs">✓</span>
              </div>
              <span>Generate unlimited AI-enhanced replies</span>
            </li>
            <li className="flex items-center">
              <div className="h-5 w-5 rounded-full bg-teal-500/20 mr-2 flex items-center justify-center">
                <span className="text-teal-500 text-xs">✓</span>
              </div>
              <span>Multi-channel support (Email, WhatsApp, Social)</span>
            </li>
            <li className="flex items-center">
              <div className="h-5 w-5 rounded-full bg-teal-500/20 mr-2 flex items-center justify-center">
                <span className="text-teal-500 text-xs">✓</span>
              </div>
              <span>Brand voice customization</span>
            </li>
            <li className="flex items-center">
              <div className="h-5 w-5 rounded-full bg-teal-500/20 mr-2 flex items-center justify-center">
                <span className="text-teal-500 text-xs">✓</span>
              </div>
              <span>Response quality analytics</span>
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

export default SmartReplyCreator;
