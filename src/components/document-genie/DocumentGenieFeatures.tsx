
import React from 'react';
import { FileText, Search, Image, BarChart3, Download, Clock } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';

const DocumentGenieFeatures = () => {
  return (
    <section className="py-16 container mx-auto">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-purple-500 mb-3 block">KEY FEATURES</span>
        <h2 className="text-3xl font-bold text-white mb-4">Create Professional <span className="text-gradient">Documents</span> with AI</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Our AI-powered document generator creates original, well-researched content for various document types, saving time and effort for busy professionals.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          title="Intelligent Research"
          description="Our AI scours the internet to gather relevant, up-to-date information on your chosen topic."
          icon={<Search className="h-6 w-6" />}
          iconColor="purple"
        />
        
        <FeatureCard
          title="Multiple Document Types"
          description="Generate training guides, essays, white papers, case studies, and ebooks with consistent quality and structure."
          icon={<FileText className="h-6 w-6" />}
          iconColor="coral"
        />
        
        <FeatureCard
          title="Original Images"
          description="Automatically creates relevant images to illustrate your content and enhance visual appeal."
          icon={<Image className="h-6 w-6" />}
          iconColor="teal"
        />
        
        <FeatureCard
          title="Data Visualization"
          description="Includes charts and graphs where appropriate to present data in a clear, compelling format."
          icon={<BarChart3 className="h-6 w-6" />}
          iconColor="purple"
        />
        
        <FeatureCard
          title="Export Options"
          description="Download your finished documents as PDF or Word (DOCX) files for easy sharing and distribution."
          icon={<Download className="h-6 w-6" />}
          iconColor="coral"
        />
        
        <FeatureCard
          title="Time Efficiency"
          description="Complete documents in minutes that would otherwise take hours or days to research and create manually."
          icon={<Clock className="h-6 w-6" />}
          iconColor="teal"
        />
      </div>
    </section>
  );
};

export default DocumentGenieFeatures;
