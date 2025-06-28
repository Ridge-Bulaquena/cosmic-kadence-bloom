
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 kadence-gradient"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Build Your
            <span className="block">Dream Website?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their WordPress sites with Kadence. Start your journey today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg bg-white text-kadence-primary hover:bg-white/90">
              <Download className="mr-2 h-5 w-5" />
              Download Free
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-kadence-primary">
              View Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
            <div className="flex items-center">
              <span className="text-sm">✓ 30-day money-back guarantee</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm">✓ Free updates & support</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm">✓ No coding required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
