import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, ChevronDown } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Navbar = () => {
  return <header className="w-full border-b border-white/10 bg-dark-800/80 backdrop-blur-md fixed top-0 z-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 text-xl font-medium">
          <img 
            src="/lovable-uploads/de824123-311a-4de4-be8e-689bdc8c4ac1.png" 
            alt="Maya Logo" 
            className="h-9 w-9"
          />
          <span className="text-gradient font-bold">Maya AI Agent Hub</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <a href="https://smartmaya.ai" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Home
          </a>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors focus:outline-none">
              AI Tools <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-dark-700 border border-white/10 text-white">
              <DropdownMenuItem asChild>
                <Link to="/presentation-generator" className="flex items-center gap-2 cursor-pointer">
                  <span className="h-4 w-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Sparkles className="h-3 w-3 text-purple-400" />
                  </span>
                  Presentations
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/viral-post-generator" className="flex items-center gap-2 cursor-pointer">
                  <span className="h-4 w-4 rounded-full bg-teal-500/20 flex items-center justify-center">
                    <Sparkles className="h-3 w-3 text-teal-400" />
                  </span>
                  Viral Posts
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/prompt-genius" className="flex items-center gap-2 cursor-pointer">
                  <span className="h-4 w-4 rounded-full bg-coral-500/20 flex items-center justify-center">
                    <Sparkles className="h-3 w-3 text-coral-400" />
                  </span>
                  Prompt Genius
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/meme-generator" className="flex items-center gap-2 cursor-pointer">
                  <span className="h-4 w-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Sparkles className="h-3 w-3 text-purple-400" />
                  </span>
                  Meme Generator
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:shadow-glow transition-all duration-300" asChild>
            <a href="https://app.smartmaya.ai">Try for Free</a>
          </Button>
        </div>
      </div>
    </header>;
};
export default Navbar;
