import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-white/10 py-8 mt-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
            <h3 className="text-sm font-medium text-white mb-3">AI Tools</h3>
            <ul className="space-y-2">
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
              <li>
                <Link to="/smart-reply" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  Smart Reply AI
                </Link>
              </li>
              <li>
                <Link to="/lead-genie" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  Lead Genie
                </Link>
              </li>
              <li>
                <Link to="/document-genie" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  Document Genie
                </Link>
              </li>
              <li>
                <Link to="/contract-scanner" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  Contract Scanner
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-white mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://wiselywise.com/about-us/" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://smartmaya.ai/customer-success-hub/" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  Customer Success Hub
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-white mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://maya-ai.gitbook.io/maya" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="https://wiselywise.com/privacy-policy/" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://wiselywise.com/termsofservice/" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="https://smartmaya.ai/contact-us/" className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © 2025 Maya AI. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <a href="https://app.smartmaya.ai" className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors">
              Get Started <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
