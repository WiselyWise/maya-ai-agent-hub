
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Presentation, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const PromptRelatedTools = () => {
  return (
    <div className="container px-4 mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Complete Your Business AI Toolkit</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Discover our suite of AI tools designed specifically for executives and business owners to maximize productivity and marketing impact
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card p-6 rounded-2xl hover:translate-y-[-5px] transition-all duration-300 backdrop-blur-md group">
          <div className="flex justify-between items-start mb-4">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 shadow-glow">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
            <Button 
              variant="ghost" 
              className="text-white hover:text-purple-400 p-0 hover:bg-transparent"
              asChild
            >
              <Link to="/meme-generator" className="flex items-center gap-1 text-sm">
                Explore
              </Link>
            </Button>
          </div>
          <h3 className="text-xl font-medium text-white tracking-tight mb-2">AI Meme Generator</h3>
          <p className="text-white/70">Create business-appropriate memes that boost engagement and make your brand more relatable.</p>
        </div>
        
        <div className="glass-card p-6 rounded-2xl hover:translate-y-[-5px] transition-all duration-300 backdrop-blur-md group">
          <div className="flex justify-between items-start mb-4">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 shadow-glow">
              <Presentation className="h-6 w-6 text-white" />
            </div>
            <Button 
              variant="ghost" 
              className="text-white hover:text-purple-400 p-0 hover:bg-transparent"
              asChild
            >
              <Link to="/presentation-generator" className="flex items-center gap-1 text-sm">
                Explore
              </Link>
            </Button>
          </div>
          <h3 className="text-xl font-medium text-white tracking-tight mb-2">Presentation Generator</h3>
          <p className="text-white/70">Create boardroom-ready presentations in minutes that would normally take your team hours or days.</p>
        </div>
        
        <div className="glass-card p-6 rounded-2xl hover:translate-y-[-5px] transition-all duration-300 backdrop-blur-md group">
          <div className="flex justify-between items-start mb-4">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 shadow-glow-teal">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <Button 
              variant="ghost" 
              className="text-white hover:text-teal-400 p-0 hover:bg-transparent"
              asChild
            >
              <Link to="/viral-post-generator" className="flex items-center gap-1 text-sm">
                Explore
              </Link>
            </Button>
          </div>
          <h3 className="text-xl font-medium text-white tracking-tight mb-2">Viral Post Generator</h3>
          <p className="text-white/70">Create engaging social media content that drives traffic, increases brand awareness, and boosts conversions.</p>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <Button variant="outline" className="border-white/20 text-white hover:text-purple-400 hover:border-purple-500/50" asChild>
          <Link to="/">View All Business AI Tools</Link>
        </Button>
      </div>
    </div>
  );
};

export default PromptRelatedTools;
