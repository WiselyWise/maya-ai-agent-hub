
import React from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs';
import { Users, Target, Mail, Database, List } from 'lucide-react';

const LeadGenieCapabilities = () => {
  return (
    <section className="py-16 bg-dark-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-coral-500 mb-3 block">CAPABILITIES</span>
          <h2 className="text-3xl font-bold text-white mb-4">What <span className="text-gradient">Lead Genie</span> Can Do</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our powerful AI tool replaces multiple expensive solutions with an integrated platform that handles your entire sales process.
          </p>
        </div>

        <Tabs defaultValue="icp" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-dark-800 rounded-xl p-1 mb-8">
            <TabsTrigger value="icp" className="data-[state=active]:bg-dark-700 data-[state=active]:text-white">ICP Creation</TabsTrigger>
            <TabsTrigger value="email" className="data-[state=active]:bg-dark-700 data-[state=active]:text-white">Email Campaigns</TabsTrigger>
            <TabsTrigger value="leads" className="data-[state=active]:bg-dark-700 data-[state=active]:text-white">Lead Management</TabsTrigger>
            <TabsTrigger value="crm" className="data-[state=active]:bg-dark-700 data-[state=active]:text-white">CRM Features</TabsTrigger>
            <TabsTrigger value="concierge" className="data-[state=active]:bg-dark-700 data-[state=active]:text-white">Concierge</TabsTrigger>
          </TabsList>
          
          <TabsContent value="icp" className="rounded-xl overflow-hidden">
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-coral-500/20 flex items-center justify-center">
                  <Target className="h-5 w-5 text-coral-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Create Multiple ICPs</h3>
              </div>
              <div className="space-y-4">
                <p className="text-white/70">
                  Develop detailed Ideal Customer Profiles to target the right audience for your products or services. Create and manage multiple ICPs to address different market segments.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-coral-500/20 flex items-center justify-center text-coral-500">✓</div>
                    <span className="text-white/80">Define demographic, firmographic, and technographic data</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-coral-500/20 flex items-center justify-center text-coral-500">✓</div>
                    <span className="text-white/80">Identify pain points and buying triggers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-coral-500/20 flex items-center justify-center text-coral-500">✓</div>
                    <span className="text-white/80">Track ICP performance and version history</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-coral-500/20 flex items-center justify-center text-coral-500">✓</div>
                    <span className="text-white/80">AI-assisted ICP refinement based on campaign results</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="email" className="rounded-xl overflow-hidden">
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-white">AI-Generated Email Campaigns</h3>
              </div>
              <div className="space-y-4">
                <p className="text-white/70">
                  Create compelling email sequences with our AI copywriting assistant. Generate up to three unique emails per ICP, each targeted to move prospects through your sales funnel.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">✓</div>
                    <span className="text-white/80">AI-written email copy customized for each ICP</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">✓</div>
                    <span className="text-white/80">Subject line optimization for higher open rates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">✓</div>
                    <span className="text-white/80">Multi-step email sequences with follow-ups</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">✓</div>
                    <span className="text-white/80">A/B testing capabilities for continuous improvement</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="leads" className="rounded-xl overflow-hidden">
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-teal-500/20 flex items-center justify-center">
                  <Users className="h-5 w-5 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Comprehensive Lead Management</h3>
              </div>
              <div className="space-y-4">
                <p className="text-white/70">
                  Easily import, organize, and manage your leads in one centralized system. Track lead status and engagement throughout your entire sales process.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-500">✓</div>
                    <span className="text-white/80">Bulk lead import via CSV or direct entry</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-500">✓</div>
                    <span className="text-white/80">Lead scoring and prioritization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-500">✓</div>
                    <span className="text-white/80">Enrichment with company and contact data</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-500">✓</div>
                    <span className="text-white/80">Detailed lead activity tracking and history</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="crm" className="rounded-xl overflow-hidden">
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Database className="h-5 w-5 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Built-in CRM Functionality</h3>
              </div>
              <div className="space-y-4">
                <p className="text-white/70">
                  Track opportunities from lead entry to closed deals with our integrated CRM. No need for expensive third-party systems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">✓</div>
                    <span className="text-white/80">Visual sales pipeline management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">✓</div>
                    <span className="text-white/80">Deal tracking and opportunity management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">✓</div>
                    <span className="text-white/80">Contact and activity logging</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">✓</div>
                    <span className="text-white/80">Sales forecasting and performance metrics</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="concierge" className="rounded-xl overflow-hidden">
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-coral-500/20 flex items-center justify-center">
                  <Users className="h-5 w-5 text-coral-500" />
                </div>
                <h3 className="text-xl font-bold text-white">White-Glove Concierge Service</h3>
              </div>
              <div className="space-y-4">
                <p className="text-white/70">
                  Let our expert team handle your email campaigns from start to finish. We'll run campaigns based on your ICPs, load leads, and deliver qualified marketing leads directly to you.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-coral-500/20 flex items-center justify-center text-coral-500">✓</div>
                    <span className="text-white/80">Campaign management by sales experts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-coral-500/20 flex items-center justify-center text-coral-500">✓</div>
                    <span className="text-white/80">Lead sourcing and qualification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-coral-500/20 flex items-center justify-center text-coral-500">✓</div>
                    <span className="text-white/80">MQL delivery directly to your inbox</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-coral-500/20 flex items-center justify-center text-coral-500">✓</div>
                    <span className="text-white/80">Regular performance reporting and optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default LeadGenieCapabilities;
