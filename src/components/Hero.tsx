
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground max-w-3xl">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl">
            Web Developer & Designer creating beautiful digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button asChild className="text-base">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" className="text-base">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </a>
      
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl" aria-hidden="true">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary/30 to-accent/30 opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
