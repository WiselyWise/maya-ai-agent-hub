
import React, { ReactNode } from 'react';
import { useAnalytics } from '@/hooks/use-analytics';

interface AnalyticsProviderProps {
  children: ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  // This hook will track page views
  useAnalytics();
  
  return <>{children}</>;
};

export default AnalyticsProvider;
