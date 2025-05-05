
import React from 'react';
import { cn } from '@/lib/utils';
import { FeatureCardProps } from '@/types/feature-card';

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon, 
  iconColor = 'purple',
  className 
}) => {
  const iconColors = {
    purple: 'bg-purple-500/20 text-purple-500',
    teal: 'bg-teal-500/20 text-teal-500',
    coral: 'bg-coral-500/20 text-coral-500'
  };

  return (
    <div className={cn(
      "neo-card group p-6 hover:border-white/20",
      className
    )}>
      <div className={cn(
        "feature-icon mb-5",
        iconColors[iconColor]
      )}>
        {icon}
      </div>
      
      <h3 className="text-xl font-medium text-white mb-3">{title}</h3>
      
      <p className="text-white/70">{description}</p>
    </div>
  );
};

export default FeatureCard;
