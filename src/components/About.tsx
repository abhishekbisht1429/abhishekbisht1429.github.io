
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
                Hello! I'm a passionate researcher and developer with a strong foundation in Computer Fundamentals.
              </p>
              <p>
                 I wish to use my technical skills to contribute towards advancement our civilization. That is why I continue to learn new things  and aspire to be at the forefront of research in my domain.
              </p>
              <p>
                Besides work, I am an astrophile and a huge admirer of PC games with aesthetic visuals and stunning stores. The Witcher 3 and
                Cyberpunk are on the top of my list.
              </p>
              <div className="pt-4">
                <Button asChild className="inline-flex items-center gap-2">
                  <a href="CV_Abhishek_Bisht.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="w-4 h-4" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-primary/20">
              <img
                src="/abhishek.jpeg"
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
