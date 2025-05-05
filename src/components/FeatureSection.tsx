
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Zap, Clock, Users } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    name: 'Boost Productivity',
    description: 'Our AI tools help you complete tasks in minutes that would normally take hours.',
    icon: <Zap className="h-6 w-6" />,
    iconColor: 'purple' as const,
  },
  {
    name: 'Save Time',
    description: 'Streamline your workflow and eliminate repetitive tasks with our intelligent automation.',
    icon: <Clock className="h-6 w-6" />,
    iconColor: 'teal' as const,
  },
  {
    name: 'Built for Teams',
    description: 'Collaborate seamlessly with your team members to achieve better results faster.',
    icon: <Users className="h-6 w-6" />,
    iconColor: 'coral' as const,
  },
];

const FeatureSection = () => {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-purple-500 mb-3 block">WHY CHOOSE US</span>
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our <span className="text-gradient">AI Tools</span>?</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our AI-powered tools are designed specifically for small business owners and busy executives who need to accomplish more in less time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.name}
              title={feature.name}
              description={feature.description}
              icon={feature.icon}
              iconColor={feature.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
