
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-glow">Vanish</span>
            <br />
            <span className="text-muted-foreground">Into Performance</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Premium digital products and services designed to elevate your experience. 
            Disappear into a world of enhanced performance and unlimited possibilities.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/store">
              <Button size="lg" className="text-lg px-8 py-6 glow-effect group">
                Browse Store
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </Link>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <Shield className="h-12 w-12 text-primary mb-4 animate-float" />
              <h3 className="text-xl font-semibold mb-2">Secure & Trusted</h3>
              <p className="text-muted-foreground text-center">
                Industry-leading security with verified products and reliable service.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <Zap className="h-12 w-12 text-primary mb-4 animate-float" style={{ animationDelay: '2s' }} />
              <h3 className="text-xl font-semibold mb-2">Instant Delivery</h3>
              <p className="text-muted-foreground text-center">
                Get your digital products delivered instantly after purchase.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <Users className="h-12 w-12 text-primary mb-4 animate-float" style={{ animationDelay: '4s' }} />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground text-center">
                Our dedicated team is here to help you succeed around the clock.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
