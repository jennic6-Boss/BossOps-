import Hero from "@/components/Hero";
import About from "@/components/About";
import Outcomes from "@/components/Outcomes";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import PersonalNote from "@/components/PersonalNote";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Outcomes />
      <Services />
      <Pricing />
      <WhyChooseUs />
      <Testimonials />
      <Process />
      <PersonalNote />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
