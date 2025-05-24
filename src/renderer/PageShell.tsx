
import React from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from 'react-helmet-async';
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import BackgroundEffects from "@/components/BackgroundEffects";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import type { PageContext } from './types'

// Create a client outside the component to avoid recreation on renders
const queryClient = new QueryClient();

export { PageShell }

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BackgroundEffects />
          <AnalyticsProvider>
            {children}
          </AnalyticsProvider>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  )
}
