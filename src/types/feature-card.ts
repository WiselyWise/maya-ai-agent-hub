
import { ReactNode } from 'react';

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  iconColor?: 'purple' | 'teal' | 'coral';
  className?: string;
}
