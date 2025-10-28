
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const timelineData = [
  {
    date: "March 2024 - June 2025",
    position: "Software Engineer II",
    organization: "Advanced Micro Devices (AMD)",
    description: "Worked on compiler for ML-Models to support various state-of-the-art models (including Windows Co-Pilot) on RyzenAI PCs",
  },
  {
    date: "Aug 2023 - Jan 2024",
    position: "Intern",
    organization: "Advanced Micro Devices (AMD)",
    description: "Worked on TCF-DAP based debugger for AMD Adaptive Computing platforms.",
  },
  {
    date: "Jan 2022 - May 2023",
    position: "MS in CS",
    organization: "International Institute of Information Technology, Hyderabad, India",
    description: "Research Scholar under Prof. Ashok Kumar Das",
  },
  {
    date: "July 2017 - May 2021",
    position: "BTech. in CSE",
    organization: "UPES, Dehradun, India",
    description: "Bachelors student in Computer Science and Engineering",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-slide-up">
            <h2 className="section-title">About Me</h2>
            <div className="space-y-4 text-foreground/90">
              <p>
                Hello! I'm a passionate researcher and engineer with a strong foundation in Computer Fundamentals.
              </p>
              <p>
                 I wish to use my technical skills to contribute towards advancement of our civilization. That is why I continue to learn new things  and aspire to be at the forefront of computer science research.
              </p>
              <p>
                Besides work, I am an astrophile and a huge admirer of PC games with aesthetic visuals and stunning stories. The Witcher 3 and
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
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Timeline</h3>
          <div className="relative pl-2 md:pl-0">
            {/* Vertical line */}
            <div className="absolute left-2 md:left-1/2 top-0 w-0.5 h-full bg-primary/20 -translate-x-1/2 md:-translate-x-1/2"></div>

            {/* Timeline items */}
            {timelineData.map((item, idx) => (
                <div key={idx} className="relative mb-8">
                  {/* Circle - Centered vertically */}
                  <div className="
                        absolute
                        left-0 md:left-1/2
                        top-1/2 -translate-y-1/2
                        w-4 h-4 rounded-full bg-primary
                        -translate-x-1/2 md:-translate-x-1/2
                        z-10
                        ">
                  </div>

                  {/* Card - Adjusted padding to eliminate gap */}
                  <div
                      className={`
                        ml-0 md:ml-0
                        ${idx % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}
                        w-full md:w-[50%] lg:w-[50%]
                        p-4 md:p-6 bg-background rounded-lg shadow-sm border
                      `}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h4 className="text-lg font-semibold">{item.position}</h4>
                      <span className="text-sm text-primary">{item.date}</span>
                    </div>
                    <p className="font-medium text-muted-foreground mb-1">{item.organization}</p>
                    <p className="text-sm text-foreground/80">{item.description}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
