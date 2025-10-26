import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="BossOps Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto py-12">
          {/* Main heading */}
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 leading-tight">
  <span className="block text-accent">The Uncomplicated Advantage for Growing Businesses</span>
  <span className="block text-background mt-2">The BossOps Blueprint: Structure + AI = Scale</span>
</h1>

{/* Subheadline */}
<p className="font-body text-xl md:text-2xl text-background/95 mb-14 font-light leading-relaxed max-w-4xl mx-auto">
  I built AI-powered systems that gave me back my time. Now, I’m helping entrepreneurs reclaim 10–40 hours every month to focus on creativity, human connection, and growth.
</p>


          {/* CTA Buttons */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                variant="gold" 
                size="lg" 
                className="font-heading text-lg px-12 py-7 h-auto shadow-gold hover:shadow-luxury transition-all duration-300"
                asChild
              >
                <a href="https://calendar.google.com/calendar/embed?src=jennic6%40gmail.com&ctz=America%2FDenver" target="_blank" rel="noopener noreferrer">
                  Schedule Your Strategy Session →
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="font-heading text-lg px-12 py-7 h-auto border-2 border-background text-background hover:bg-background/10 backdrop-blur-sm transition-all duration-300"
                asChild
              >
                <a href="#free-tool">
                  Grab My Free AI Starter Kit →
                </a>
              </Button>
            </div>
            
            <p className="font-body text-base text-background/90 font-light">
              Trusted by entrepreneurs and small business owners nationwide.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/80 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
