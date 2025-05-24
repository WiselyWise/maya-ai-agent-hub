
import { useEffect } from 'react';

interface RenderLoggerProps {
  componentName: string;
  route?: string;
}

const RenderLogger: React.FC<RenderLoggerProps> = ({ componentName, route }) => {
  useEffect(() => {
    console.log(`[PRERENDER DEBUG] ${componentName} mounted${route ? ` on route: ${route}` : ''}`);
    
    return () => {
      console.log(`[PRERENDER DEBUG] ${componentName} unmounted${route ? ` from route: ${route}` : ''}`);
    };
  }, [componentName, route]);

  useEffect(() => {
    // Log when component is fully rendered and ready
    const timer = setTimeout(() => {
      console.log(`[PRERENDER DEBUG] ${componentName} render complete${route ? ` on route: ${route}` : ''}`);
      
      // Signal to prerenderer that page is ready
      if (typeof window !== 'undefined') {
        (window as any).prerenderReady = true;
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [componentName, route]);

  return null;
};

export default RenderLogger;
