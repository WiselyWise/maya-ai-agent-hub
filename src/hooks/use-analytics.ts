
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '@/lib/supabase';

export const useAnalytics = () => {
  const location = useLocation();
  
  useEffect(() => {
    const trackPageView = async () => {
      try {
        // Track page view in Supabase (will use mock client if not connected)
        await supabase
          .from('marketing_page_views')
          .insert({
            path: location.pathname,
            referrer: document.referrer,
            user_agent: navigator.userAgent,
            timestamp: new Date().toISOString(),
          });
      } catch (error) {
        console.error('Error tracking page view:', error);
      }
    };

    trackPageView();
  }, [location.pathname]);
};
