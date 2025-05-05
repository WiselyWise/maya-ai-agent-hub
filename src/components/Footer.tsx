
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-white/10 py-12 mt-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-purple-500" />
              <span className="text-gradient text-xl font-bold">AI Powerhouse</span>
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
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  FAQ
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
                <Link to="/contact" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} AI Powerhouse. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/50 hover:text-purple-400 transition-colors">
              Twitter
            </a>
            <a href="#" className="text-white/50 hover:text-purple-400 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-white/50 hover:text-purple-400 transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
