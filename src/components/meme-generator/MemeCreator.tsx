
import React from 'react';
import { Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MemeCreator = () => {
  return (
    <div id="create" className="container px-4 mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">
          <span className="text-gradient">Create Your First Meme</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          This feature is coming soon! Sign up to be notified when our Meme Generator is ready.
        </p>
      </div>
      
      <div className="max-w-md mx-auto glass-card p-8 rounded-2xl backdrop-blur-md">
        <div className="flex items-center justify-center mb-6">
          <Smile className="h-10 w-10 text-purple-500" />
        </div>
        <p className="text-white text-center mb-6">
          Be the first to know when our AI meme generator launches!
        </p>
        <Button className="w-full neo-button">
          Join Waitlist
        </Button>
      </div>
    </div>
  );
};

export default MemeCreator;
