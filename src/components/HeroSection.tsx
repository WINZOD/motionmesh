import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Send, 
  Box, 
  Camera, 
  Lightbulb,
  Users,
  ArrowRight,
  Play
} from "lucide-react";
import { useState } from "react";

export const HeroSection = () => {
  const [textInput, setTextInput] = useState("");
  
  const handleGenerate = () => {
    if (textInput.trim()) {
      console.log("Generating 3D model for:", textInput);
      // TODO: Integrate with AI generation API
    }
  };

  const examplePrompts = [
    "Wedding ceremony setup with floral arch",
    "Corporate event stage with LED screens",
    "Concert venue with crowd barriers",
    "Trade show booth with interactive displays",
  ];

  return (
    <section className="min-h-screen pt-20 pb-16 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Hero Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="inline-flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  AI-Powered 3D Visualization
                </Badge>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Transform
                  <span className="bg-gradient-primary bg-clip-text text-transparent mx-3">
                    Event Ideas
                  </span>
                  into Reality
                </h1>
                
                <p className="text-lg sm:text-xl text-foreground-secondary leading-relaxed max-w-2xl">
                  Create stunning 3D visualizations of your events using AI. Perfect for showcasing concepts to clients, securing sponsorships, and eliminating costly mistakes.
                </p>
              </div>

              {/* AI Text Input */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-card-border">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-foreground-secondary">
                    <Lightbulb className="w-4 h-4" />
                    <span>Describe your event setup in natural language</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <Input
                      placeholder="e.g., Wedding setup with elegant floral arrangements and string lights"
                      value={textInput}
                      onChange={(e) => setTextInput(e.target.value)}
                      className="flex-1 bg-input-focus border-border focus:border-primary transition-smooth"
                      onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
                    />
                    <Button 
                      variant="primary" 
                      onClick={handleGenerate}
                      disabled={!textInput.trim()}
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Example Prompts */}
                  <div className="flex flex-wrap gap-2">
                    {examplePrompts.map((prompt, index) => (
                      <button
                        key={index}
                        onClick={() => setTextInput(prompt)}
                        className="text-xs px-3 py-1.5 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-smooth rounded-md border border-border/50"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              </Card>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" className="group">
                  Start Creating
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="group">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 pt-6 border-t border-border/30">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-foreground-secondary" />
                  <span className="text-sm text-foreground-secondary">
                    Trusted by <strong className="text-foreground">500+</strong> event organizers
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - 3D Viewport Preview */}
            <div className="relative">
              <Card className="p-6 bg-card/30 backdrop-blur-sm border-card-border overflow-hidden">
                <div className="aspect-video bg-background-secondary rounded-lg relative flex items-center justify-center group cursor-pointer">
                  {/* 3D Viewport Placeholder */}
                  <div className="absolute inset-4 bg-gradient-accent opacity-20 rounded-lg animate-pulse-glow" />
                  
                  <div className="text-center space-y-4 z-10">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto shadow-glow group-hover:scale-110 transition-transform">
                      <Box className="w-8 h-8 text-primary-foreground animate-float" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">3D Viewport</h3>
                      <p className="text-sm text-foreground-secondary">Interactive 3D scene preview</p>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="text-xs">
                      Real-time
                    </Badge>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Camera className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </div>
                
                {/* Feature Indicators */}
                <div className="flex justify-between items-center mt-4 text-xs text-foreground-secondary">
                  <span>• AI Generated</span>
                  <span>• Path Traced</span>
                  <span>• Interactive</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};