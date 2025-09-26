import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Box, 
  Camera, 
  Zap, 
  Package, 
  Palette,
  ArrowRight,
  Sparkles
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Text-to-3D",
      description: "Generate detailed 3D models instantly using natural language descriptions. No modeling experience required.",
      badge: "AI Powered",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: Box,
      title: "3D Viewport",
      description: "Interactive visualization playground where you can manipulate, position, and customize every element in real-time.",
      badge: "Interactive",
      gradient: "from-secondary to-secondary-glow",
    },
    {
      icon: Camera,
      title: "Photogrammetry",
      description: "Transform venue photos into accurate 3D models automatically. Perfect for existing locations and spaces.",
      badge: "Computer Vision",
      gradient: "from-accent to-accent-glow",
    },
    {
      icon: Zap,
      title: "Path Traced Renders",
      description: "Physically accurate lighting, materials, and shadows for photorealistic event visualizations.",
      badge: "Photorealistic",
      gradient: "from-primary to-accent",
    },
    {
      icon: Package,
      title: "Asset Store",
      description: "Extensive library of event-specific 3D models. From stage equipment to decorative elements.",
      badge: "Growing Library",
      gradient: "from-secondary to-primary",
    },
    {
      icon: Palette,
      title: "Brand Integration",
      description: "Seamlessly integrate client branding, logos, and color schemes into your event visualizations.",
      badge: "Customizable",
      gradient: "from-accent to-secondary",
    },
  ];

  return (
    <section id="features" className="py-20 bg-background-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Platform Features
            </Badge>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Everything You Need to
              <span className="bg-gradient-primary bg-clip-text text-transparent mx-3">
                Visualize Events
              </span>
            </h2>
            
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
              From AI-powered 3D generation to photorealistic rendering, MotionMesh provides all the tools 
              event organizers need to create compelling visual presentations.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card/50 backdrop-blur-sm border-card-border hover:border-primary/30 transition-smooth group cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Icon and Badge */}
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                      {feature.title}
                    </h3>
                    <p className="text-foreground-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="pt-2">
                    <Button variant="ghost" size="sm" className="group/btn p-0 h-auto">
                      Learn more
                      <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">
                Ready to Transform Your Event Planning?
              </h3>
              <p className="text-foreground-secondary">
                Join hundreds of event organizers already using MotionMesh
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};