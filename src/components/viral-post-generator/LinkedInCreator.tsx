
import React, { useState } from 'react';
import { TrendingUp, Copy, RefreshCw, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';

const LinkedInCreator = () => {
  const [topic, setTopic] = useState('');
  const [audience, setAudience] = useState('');
  const [industry, setIndustry] = useState('');
  const [hookStyle, setHookStyle] = useState('');
  const [contentType, setContentType] = useState('');
  const [format, setFormat] = useState('');
  const [takeaway, setTakeaway] = useState('');
  const [dataStat, setDataStat] = useState('');
  const [useEmojis, setUseEmojis] = useState(true);
  const [useHashtags, setUseHashtags] = useState(true);
  const [useCta, setUseCta] = useState(true);
  const [customCta, setCustomCta] = useState('');
  const [generatedPost, setGeneratedPost] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // Sample audiences
  const audiences = [
    "Small Business Owners",
    "C-Suite Executives",
    "Marketing Professionals",
    "Sales Leaders",
    "Entrepreneurs",
    "HR Directors",
    "Finance Professionals",
    "Technology Leaders",
    "Industry Thought Leaders"
  ];

  // Sample industries
  const industries = [
    "Technology",
    "Finance",
    "Healthcare",
    "Education",
    "Marketing",
    "Sales",
    "E-commerce",
    "Consulting",
    "Manufacturing",
    "Real Estate"
  ];

  // Sample hook styles
  const hookStyles = [
    "Curiosity",
    "Contrarian",
    "Vulnerable"
  ];

  // Sample content types
  const contentTypes = [
    "Professional Insight",
    "Personal Story",
    "Industry Trend",
    "How-To Guide",
    "Case Study",
    "Data/Statistics",
    "Career Advice",
    "Leadership Lesson"
  ];

  // Sample formats
  const formats = [
    "Plain Text",
    "Text with Bullet Points",
    "Carousel Preview"
  ];

  const handleGeneratePost = () => {
    if (!topic || !takeaway) {
      toast.error("Please fill in the required fields");
      return;
    }

    setIsGenerating(true);

    // Simulate API call with a timeout
    setTimeout(() => {
      // Generate a sample post based on inputs
      const emoji = useEmojis ? "📈 " : "";
      const hook = hookStyle === "Curiosity" 
        ? "Ever wonder why 80% of LinkedIn posts fail to generate engagement?"
        : hookStyle === "Contrarian" 
        ? "Most LinkedIn advice you're following is completely wrong."
        : "I failed 3 times at this before I finally cracked the LinkedIn code.";
      
      const stat = dataStat ? `\n\nInteresting fact: ${dataStat}` : "";
      
      const ctaText = useCta 
        ? `\n\n${customCta || "What strategies have helped you grow your LinkedIn presence? Comment below!"}` 
        : "";
      
      const hashtags = useHashtags 
        ? `\n\n#LinkedInGrowth #ProfessionalNetworking #${industry.replace(/\s+/g, '')}` 
        : "";

      const newPost = `${emoji}${hook}\n\nI've been studying what works on LinkedIn for ${audience || "professionals"} in the ${industry || "business"} space, and here's what I've discovered:\n\n${topic}\n\nKey takeaway: ${takeaway}${stat}${ctaText}${hashtags}`;
      
      setGeneratedPost(newPost);
      setIsGenerating(false);
      toast.success("LinkedIn post generated successfully!");
    }, 1500);
  };

  const handleCopyToClipboard = () => {
    if (!generatedPost) return;
    
    navigator.clipboard.writeText(generatedPost);
    toast.success("Post copied to clipboard!");
  };

  const handleReset = () => {
    setTopic('');
    setAudience('');
    setIndustry('');
    setHookStyle('');
    setContentType('');
    setFormat('');
    setTakeaway('');
    setDataStat('');
    setUseEmojis(true);
    setUseHashtags(true);
    setUseCta(true);
    setCustomCta('');
    setGeneratedPost('');
    toast.info("Form has been reset");
  };

  return (
    <div id="create" className="container px-4 mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">
          <span className="text-gradient">LinkedIn Post Generator</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Generate viral LinkedIn content in seconds using our AI tool that leverages years of LinkedIn algorithm data
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="glass-card backdrop-blur-md border-white/10">
          <CardHeader>
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="h-10 w-10 text-teal-500" />
            </div>
            <CardTitle className="text-white text-center">Create Your LinkedIn Post</CardTitle>
            <CardDescription className="text-white/70 text-center">
              Fill in the details below and our AI will generate an engaging LinkedIn post
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="topic" className="text-white">Topic/Main Idea <span className="text-red-500">*</span></Label>
              <Textarea 
                id="topic" 
                placeholder="Enter the main idea or topic of your post"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="bg-dark-700/50 border-white/10 text-white placeholder:text-white/50"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="audience" className="text-white">Audience Persona</Label>
                <Select value={audience} onValueChange={setAudience}>
                  <SelectTrigger className="bg-dark-700/50 border-white/10 text-white">
                    <SelectValue placeholder="Select audience" />
                  </SelectTrigger>
                  <SelectContent className="bg-dark-800 border-white/10 text-white">
                    {audiences.map(item => (
                      <SelectItem key={item} value={item}>{item}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="industry" className="text-white">Industry/Niche</Label>
                <Select value={industry} onValueChange={setIndustry}>
                  <SelectTrigger className="bg-dark-700/50 border-white/10 text-white">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent className="bg-dark-800 border-white/10 text-white">
                    {industries.map(item => (
                      <SelectItem key={item} value={item}>{item}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="hookStyle" className="text-white">Hook Style</Label>
                <Select value={hookStyle} onValueChange={setHookStyle}>
                  <SelectTrigger className="bg-dark-700/50 border-white/10 text-white">
                    <SelectValue placeholder="Select hook style" />
                  </SelectTrigger>
                  <SelectContent className="bg-dark-800 border-white/10 text-white">
                    {hookStyles.map(item => (
                      <SelectItem key={item} value={item}>{item}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contentType" className="text-white">Content Type</Label>
                <Select value={contentType} onValueChange={setContentType}>
                  <SelectTrigger className="bg-dark-700/50 border-white/10 text-white">
                    <SelectValue placeholder="Select content type" />
                  </SelectTrigger>
                  <SelectContent className="bg-dark-800 border-white/10 text-white">
                    {contentTypes.map(item => (
                      <SelectItem key={item} value={item}>{item}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="format" className="text-white">Format</Label>
                <Select value={format} onValueChange={setFormat}>
                  <SelectTrigger className="bg-dark-700/50 border-white/10 text-white">
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent className="bg-dark-800 border-white/10 text-white">
                    {formats.map(item => (
                      <SelectItem key={item} value={item}>{item}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="takeaway" className="text-white">Desired Takeaway <span className="text-red-500">*</span></Label>
              <Input 
                id="takeaway" 
                placeholder="What should readers learn from this post?"
                value={takeaway}
                onChange={(e) => setTakeaway(e.target.value)}
                className="bg-dark-700/50 border-white/10 text-white placeholder:text-white/50"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="dataStat" className="text-white">Optional Data/Stat</Label>
              <Input 
                id="dataStat" 
                placeholder="Include a compelling statistic (if applicable)"
                value={dataStat}
                onChange={(e) => setDataStat(e.target.value)}
                className="bg-dark-700/50 border-white/10 text-white placeholder:text-white/50"
              />
            </div>
            
            <div className="flex flex-col gap-4 pt-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="useEmojis" className="text-white cursor-pointer">Include Emojis</Label>
                <Switch 
                  id="useEmojis" 
                  checked={useEmojis} 
                  onCheckedChange={setUseEmojis}
                  className="data-[state=checked]:bg-teal-500"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="useHashtags" className="text-white cursor-pointer">Include Hashtags</Label>
                <Switch 
                  id="useHashtags" 
                  checked={useHashtags} 
                  onCheckedChange={setUseHashtags}
                  className="data-[state=checked]:bg-teal-500"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="useCta" className="text-white cursor-pointer">Include Call-to-Action</Label>
                <Switch 
                  id="useCta" 
                  checked={useCta} 
                  onCheckedChange={setUseCta}
                  className="data-[state=checked]:bg-teal-500"
                />
              </div>
            </div>
            
            {useCta && (
              <div className="space-y-2">
                <Label htmlFor="customCta" className="text-white">Custom CTA (optional)</Label>
                <Input 
                  id="customCta" 
                  placeholder="Custom call-to-action text"
                  value={customCta}
                  onChange={(e) => setCustomCta(e.target.value)}
                  className="bg-dark-700/50 border-white/10 text-white placeholder:text-white/50"
                />
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <div className="flex w-full gap-4">
              <Button 
                variant="outline" 
                className="w-1/3 border-white/10 text-white hover:bg-white/10"
                onClick={handleReset}
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Reset
              </Button>
              <Button 
                className="w-2/3 neo-button"
                onClick={handleGeneratePost}
                disabled={isGenerating || !topic || !takeaway}
              >
                {isGenerating ? "Generating..." : "Generate LinkedIn Post"}
              </Button>
            </div>
          </CardFooter>
        </Card>
        
        <Card className="glass-card backdrop-blur-md border-white/10">
          <CardHeader>
            <CardTitle className="text-white text-center">LinkedIn Post Preview</CardTitle>
            <CardDescription className="text-white/70 text-center">
              Your AI-generated LinkedIn post appears here
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-dark-700/50 border border-white/10 rounded-md p-4 min-h-[400px] text-white whitespace-pre-wrap">
              {generatedPost ? generatedPost : (
                <div className="text-white/40 flex flex-col items-center justify-center h-full">
                  <p className="text-center">Fill in the form and click "Generate LinkedIn Post" to see your AI-generated content here.</p>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button 
              variant="outline" 
              className="border-white/10 text-white hover:bg-white/10"
              onClick={handleCopyToClipboard}
              disabled={!generatedPost}
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy to Clipboard
            </Button>
            <Button 
              className="bg-[#0077B5] hover:bg-[#0077B5]/80 text-white"
              disabled={!generatedPost}
              onClick={() => window.open('https://www.linkedin.com/feed/?shareActive=true', '_blank')}
            >
              <Share className="mr-2 h-4 w-4" />
              Share to LinkedIn
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LinkedInCreator;
