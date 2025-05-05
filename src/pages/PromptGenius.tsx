
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Lightbulb } from 'lucide-react';

const PromptGenius = () => {
  return (
    <>
      <Helmet>
        <title>Prompt Genius | Transform Simple Inputs into Advanced AI Prompts</title>
        <meta name="description" content="Enhance your AI interactions with Prompt Genius. Our tool transforms simple inputs into sophisticated prompts that generate better results from any AI system." />
        <meta name="keywords" content="ai prompt engineering, prompt optimization, ai prompt templates, chatgpt prompts, prompt generator" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Prompt Genius",
              "applicationCategory": "BusinessApplication",
              "offers": {
                "@type": "Offer",
                "price": "0"
              },
              "description": "Transform simple inputs into sophisticated AI prompts with Prompt Genius."
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-dark-800">
        <Hero 
          title="Prompt Genius"
          subtitle="Transform simple inputs into sophisticated AI prompts. Get better results from any AI system by leveraging proven prompt engineering frameworks."
          ctaText="Enhance Your Prompts"
          ctaLink="#enhance"
        />
        
        <div className="container px-4 mx-auto py-16">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Transform Your AI Interactions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-6">
              <div className="mb-6 inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 shadow-glow">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Framework-Based Prompts</h3>
              <p className="text-white/70">
                Our tool uses proven prompt engineering frameworks to structure your inputs for optimal AI responses.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-6">
              <div className="mb-6 inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 shadow-glow-teal">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Domain-Specific Templates</h3>
              <p className="text-white/70">
                Choose from specialized prompt templates for marketing, content creation, business strategy, and more.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-6">
              <div className="mb-6 inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-coral-500 to-coral-600 shadow-glow-coral">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Iterative Refinement</h3>
              <p className="text-white/70">
                Our system helps you refine prompts based on the results, continuously improving your AI outputs.
              </p>
            </div>
          </div>
          
          <div className="mt-16 p-8 glass-card rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Real-world Applications</h3>
                <ul className="space-y-4 text-white/70">
                  <li className="flex gap-3 items-start">
                    <div className="h-6 w-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-medium mt-0.5">✓</div>
                    <span>Generate detailed marketing copy that converts based on simple product descriptions</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="h-6 w-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-medium mt-0.5">✓</div>
                    <span>Create comprehensive business strategies from high-level objectives</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="h-6 w-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-medium mt-0.5">✓</div>
                    <span>Transform basic research questions into sophisticated analytical prompts</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-dark-900 p-6 rounded-xl">
                <div className="border-b border-white/10 pb-3 mb-3">
                  <div className="text-sm text-white/50 mb-2">Simple Input:</div>
                  <div className="text-white">Write about our new coffee product.</div>
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-2">Enhanced Prompt:</div>
                  <div className="text-white">
                    Create compelling marketing copy for our new premium single-origin coffee. Highlight its unique flavor profile (hints of chocolate and berries), ethical sourcing practices, and small-batch roasting process. Include sensory descriptions that evoke the experience of enjoying the coffee. Target audience: urban professionals aged 25-40 who value quality and sustainability. Include a strong call to action and 3 key benefits in bullet points.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PromptGenius;
