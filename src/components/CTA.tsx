import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
const CTA = () => {
  return <section id="free-tool" className="relative py-24 overflow-hidden bg-gradient-luxury">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main CTA Headline */}
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-background mb-8 leading-tight">
            From Doing It All to Doing It Well
          </h2>
          
          <p className="font-body text-xl text-background/95 mb-14 leading-relaxed font-light">
            Let's build systems that give you your time and sanity back. <br />
            Book a <strong className="font-semibold">free strategy session</strong>, or start with my free AI starter kit—whichever feels right.
          </p>

          {/* CTA Buttons */}
          <div className="space-y-8 mb-16">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="gold" size="lg" className="font-heading text-lg px-12 py-7 h-auto shadow-gold hover:shadow-luxury" asChild>
                <a href="https://calendar.app.google/Da7khsGn6ECBnNKfA" target="_blank" rel="noopener noreferrer">
                  Schedule Your Strategy Session →
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="font-heading text-lg px-12 py-7 h-auto rounded-full border-2 border-background bg-transparent text-background hover:bg-background hover:text-primary transition-all duration-300" asChild>
                <a href="#free-tool">
                  Grab My Free AI Starter Kit →
                </a>
              </Button>
            </div>
            
            <p className="font-body text-sm text-background/90 font-light">
              No pitch — just clarity on your next best step.
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-background/95 border-t border-background/20 pt-12">
            <div className="flex items-center gap-3">
              <div className="bg-background/10 backdrop-blur-sm p-2 rounded-full">
                <Phone className="w-5 h-5" />
              </div>
              <a href="tel:+13852275229" className="font-body text-lg hover:text-accent transition-colors">720-434-2911</a>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-background/10 backdrop-blur-sm p-2 rounded-full">
                <Mail className="w-5 h-5" />
              </div>
              <a href="mailto:bossopsco@gmail.com" className="font-body text-lg hover:text-accent transition-colors">
                bossopsco@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CTA;