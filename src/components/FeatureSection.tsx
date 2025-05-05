
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Zap, Clock, Users } from 'lucide-react';

const features = [
  {
    name: 'Boost Productivity',
    description: 'Our AI tools help you complete tasks in minutes that would normally take hours.',
    icon: <Zap className="h-6 w-6 text-purple-500" />,
  },
  {
    name: 'Save Time',
    description: 'Streamline your workflow and eliminate repetitive tasks with our intelligent automation.',
    icon: <Clock className="h-6 w-6 text-teal-500" />,
  },
  {
    name: 'Built for Teams',
    description: 'Collaborate seamlessly with your team members to achieve better results faster.',
    icon: <Users className="h-6 w-6 text-coral-500" />,
  },
];

const FeatureSection = () => {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our AI Tools?</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our AI-powered tools are designed specifically for small business owners and busy executives who need to accomplish more in less time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.name} className="bg-dark-700/50 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-700">
                  {feature.icon}
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-medium text-white">{feature.name}</h3>
                <p className="mt-4 text-white/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
