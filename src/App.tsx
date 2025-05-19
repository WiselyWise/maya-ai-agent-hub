
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import BackgroundEffects from "./components/BackgroundEffects";
import AnalyticsProvider from "./components/AnalyticsProvider";
import Index from "./pages/Index";
import PresentationGenerator from "./pages/PresentationGenerator";
import ViralPostGenerator from "./pages/ViralPostGenerator";
import PromptGenius from "./pages/PromptGenius";
import MemeGenerator from "./pages/MemeGenerator";
import SmartReply from "./pages/SmartReply";
import LeadGenie from "./pages/LeadGenie";
import DocumentGenie from "./pages/DocumentGenie";
import NotFound from "./pages/NotFound";

// Create a client outside the component to avoid recreation on renders
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BackgroundEffects />
          <AnalyticsProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/presentation-generator" element={<PresentationGenerator />} />
              <Route path="/viral-post-generator" element={<ViralPostGenerator />} />
              <Route path="/prompt-genius" element={<PromptGenius />} />
              <Route path="/meme-generator" element={<MemeGenerator />} />
              <Route path="/smart-reply" element={<SmartReply />} />
              <Route path="/lead-genie" element={<LeadGenie />} />
              <Route path="/document-genie" element={<DocumentGenie />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnalyticsProvider>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
