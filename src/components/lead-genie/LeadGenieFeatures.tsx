
import React from 'react';
import { Users, Mail, Database, Target, List } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';

const LeadGenieFeatures = () => {
  return (
    <section className="py-16 container mx-auto">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-coral-500 mb-3 block">KEY FEATURES</span>
        <h2 className="text-3xl font-bold text-white mb-4">Power Up Your <span className="text-gradient">Sales Process</span></h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Our all-in-one AI sales assistant helps busy executives and SME business owners streamline their lead management and sales process.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          title="ICP Management"
          description="Define and manage multiple Ideal Customer Profiles to target your perfect audience with pinpoint accuracy."
          icon={<Target className="h-6 w-6" />}
          iconColor="coral"
        />
        
        <FeatureCard
          title="AI Email Campaigns"
          description="Create personalized email sequences with AI-generated copy for up to 3 emails per ICP, all optimized for conversions."
          icon={<Mail className="h-6 w-6" />}
          iconColor="purple"
        />
        
        <FeatureCard
          title="Lead Management"
          description="Import or manually enter leads, track their progress, and manage your entire pipeline in one place."
          icon={<Users className="h-6 w-6" />}
          iconColor="teal"
        />
        
        <FeatureCard
          title="Version History"
          description="Track the performance of different ICP versions and email campaigns to continually refine your approach."
          icon={<List className="h-6 w-6" />}
          iconColor="coral"
        />
        
        <FeatureCard
          title="Integrated CRM"
          description="Manage your entire sales funnel from lead entry to closing deals without switching between multiple tools."
          icon={<Database className="h-6 w-6" />}
          iconColor="purple"
        />
        
        <FeatureCard
          title="Concierge Service"
          description="Optional white-glove service where our team manages your campaigns, loads leads, and delivers MQLs to your inbox."
          icon={<Users className="h-6 w-6" />}
          iconColor="teal"
        />
      </div>
    </section>
  );
};

export default LeadGenieFeatures;
