
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import BackgroundEffects from "./components/BackgroundEffects";
import Index from "./pages/Index";
import PresentationGenerator from "./pages/PresentationGenerator";
import ViralPostGenerator from "./pages/ViralPostGenerator";
import PromptGenius from "./pages/PromptGenius";
import MemeGenerator from "./pages/MemeGenerator";
import SmartReply from "./pages/SmartReply";
import LeadGenie from "./pages/LeadGenie";
import DocumentGenie from "./pages/DocumentGenie";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BackgroundEffects />
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
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
