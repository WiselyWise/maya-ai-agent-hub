
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full border-b border-white/10 bg-dark-800/80 backdrop-blur-md fixed top-0 z-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-xl font-medium"
        >
          <Sparkles className="h-6 w-6 text-purple-500" />
          <span className="text-gradient font-bold">AI Powerhouse</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <a href="https://smartmaya.ai" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Home
          </a>
          <Link to="/presentation-generator" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Presentation Generator
          </Link>
          <Link to="/viral-post-generator" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Viral Post Generator
          </Link>
          <Link to="/prompt-genius" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Prompt Genius
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button 
            className="bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:shadow-glow transition-all duration-300"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
