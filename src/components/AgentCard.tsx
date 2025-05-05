
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface AgentCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
  gradient?: string;
}

const AgentCard: React.FC<AgentCardProps> = ({ 
  title, 
  description, 
  icon, 
  slug,
  gradient = "from-purple-500 to-purple-600"
}) => {
  return (
    <div className="group relative">
      <div className="glow-effect">
        <Card className="overflow-hidden h-full agent-card-gradient backdrop-blur-sm border border-white/10 transition-all duration-300 relative z-10 group-hover:translate-y-[-5px]">
          <CardHeader className="p-6">
            <div className={`inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br ${gradient} shadow-glow mb-4`}>
              {icon}
            </div>
            <h3 className="text-xl font-medium text-white tracking-tight">{title}</h3>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <p className="text-white/70">{description}</p>
          </CardContent>
          <CardFooter className="p-6 pt-0 flex items-center justify-between">
            <Button 
              asChild
              variant="ghost" 
              className="text-white hover:text-purple-400 p-0 hover:bg-transparent"
            >
              <Link to={`/${slug}`} className="flex items-center gap-2">
                Try it now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AgentCard;
