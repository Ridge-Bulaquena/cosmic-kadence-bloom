
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 kadence-gradient opacity-5"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-kadence-primary/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-kadence-secondary/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-kadence-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-kadence-primary/10 text-kadence-primary text-sm font-medium mb-6 animate-fade-in-up">
            <span className="w-2 h-2 bg-kadence-primary rounded-full mr-2"></span>
            New WordPress Theme Available
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Build Amazing
            <span className="kadence-text-gradient block">
              WordPress Sites
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            The most powerful and flexible WordPress theme. Create stunning websites with our intuitive design system and advanced customization options.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="kadence-gradient hover:opacity-90 transition-opacity px-8 py-4 text-lg">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-kadence-primary text-kadence-primary hover:bg-kadence-primary hover:text-white">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold kadence-text-gradient mb-2">100K+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold kadence-text-gradient mb-2">500+</div>
              <div className="text-muted-foreground">Templates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold kadence-text-gradient mb-2">99%</div>
              <div className="text-muted-foreground">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold kadence-text-gradient mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
