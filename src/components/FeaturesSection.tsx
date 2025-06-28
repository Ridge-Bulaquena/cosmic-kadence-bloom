
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Zap, Shield, Smartphone, Code, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Advanced Customization",
      description: "Powerful theme customizer with live preview. Change colors, fonts, layouts, and more with just a few clicks."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast Performance",
      description: "Optimized for speed with clean code, lazy loading, and advanced caching techniques for better user experience."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security First",
      description: "Built with security best practices, regular updates, and compatibility with leading security plugins."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Responsive",
      description: "Perfectly responsive design that looks stunning on all devices, from desktop to mobile."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Developer Friendly",
      description: "Clean, well-documented code with hooks, filters, and extensive customization options for developers."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Premium Support",
      description: "Dedicated support team ready to help you succeed with comprehensive documentation and tutorials."
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-kadence-primary/10 text-kadence-primary text-sm font-medium mb-6">
            Features
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="kadence-text-gradient block">
              Build Amazing Sites
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Packed with powerful features and tools to help you create professional WordPress websites without any coding knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 kadence-gradient rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
