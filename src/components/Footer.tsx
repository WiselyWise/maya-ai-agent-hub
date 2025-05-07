
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-white/10 py-12 mt-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-purple-500" />
              <span className="text-gradient text-xl font-bold">Maya AI Agent Hub</span>
            </div>
            <p className="text-white/70 text-sm">
              Enhance your productivity with our suite of AI-powered tools designed for small businesses and busy executives.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-white mb-4">AI Tools</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/presentation-generator" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  Presentation Generator
                </Link>
              </li>
              <li>
                <Link to="/viral-post-generator" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  Viral Post Generator
                </Link>
              </li>
              <li>
                <Link to="/prompt-genius" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  Prompt Genius
                </Link>
              </li>
              <li>
                <Link to="/meme-generator" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  Meme Generator
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <a href="https://smartmaya.ai/blog" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/help-center" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © 2025 Maya AI. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <a href="https://facebook.com" className="text-white/70 hover:text-purple-400 transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://twitter.com" className="text-white/70 hover:text-purple-400 transition-colors" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="https://instagram.com" className="text-white/70 hover:text-purple-400 transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://linkedin.com" className="text-white/70 hover:text-purple-400 transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://app.smartmaya.ai" className="ml-4 inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors">
              Get Started <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
