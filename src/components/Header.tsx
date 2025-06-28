
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 kadence-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="text-xl font-bold kadence-text-gradient">
              Kadence
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-kadence-primary transition-colors">Home</a>
            <a href="#features" className="text-foreground hover:text-kadence-primary transition-colors">Features</a>
            <a href="#about" className="text-foreground hover:text-kadence-primary transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-kadence-primary transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-kadence-primary text-kadence-primary hover:bg-kadence-primary hover:text-white">
              Login
            </Button>
            <Button className="kadence-gradient hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-kadence-primary transition-colors">Home</a>
              <a href="#features" className="text-foreground hover:text-kadence-primary transition-colors">Features</a>
              <a href="#about" className="text-foreground hover:text-kadence-primary transition-colors">About</a>
              <a href="#contact" className="text-foreground hover:text-kadence-primary transition-colors">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-kadence-primary text-kadence-primary hover:bg-kadence-primary hover:text-white">
                  Login
                </Button>
                <Button className="kadence-gradient hover:opacity-90 transition-opacity">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
