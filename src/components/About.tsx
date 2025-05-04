
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-slide-up">
            <h2 className="section-title">About Me</h2>
            <div className="space-y-4 text-foreground/90">
              <p>
                Hello! I'm a passionate developer with a strong foundation in web development and
                a keen eye for design. I enjoy building things that live on the internet, whether
                that be websites, applications, or anything in between.
              </p>
              <p>
                My goal is to always build products that provide pixel-perfect, 
                performant experiences. I am proficient in modern frontend 
                technologies and frameworks, and I'm always looking to learn new things.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or enjoying outdoor activities.
              </p>
              <div className="pt-4">
                <Button asChild className="inline-flex items-center gap-2">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FileText className="w-4 h-4" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-primary/20">
              {/* Replace with your own image */}
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
