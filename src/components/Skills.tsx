
import { Card } from "@/components/ui/card";
import { 
  Code, 
  Palette, 
  Database, 
  Globe, 
  Wrench, 
  Layers,
  FileTerminal,
  Binary,
  LayoutGrid,
  BrainCircuit,
  BrainCog,
  Goal
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Globe className="w-5 h-5" />,
    skills: ["C", "C++", "JAVA", "Python", "Javascript"],
  },
  {
    title: "Scripting Languages",
    icon: <FileTerminal className="w-5 h-5" />,
    skills: ["Shell (Bash)", "PowerShell"],
  },
  {
    title: "Frontend Development",
    icon: <Code className="w-5 h-5" />,
    skills: ["React", "TypeScript", "Next.js", "HTML/CSS", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: <Database className="w-5 h-5" />,
    skills: ["Django", "Spring-boot", "Micro-service Architecture",
      "REST Architecture", "Node.js", "Express", "MongoDB", "RESTful APIs", "GraphQL"],
  },
  {
    title: "Tools & Deployment",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["Git", "GitHub", "Docker", "CLion", "IntelliJ IDEA", "PyCharm", "WebStorm", "Postman"],
  },
  {
    title: "Domain Specific Languages (DSLs)",
    icon: <Goal className="w-5 h-5" />,
    skills: ["make", "CMake", "Groovy"],
  },
  {
    title: "System Programming",
    icon: <Binary className="w-5 h-5" />,
    skills: [
      "Compiler (LLVM)", "LLVM-MLIR", "ONNX Runtime", "TCF-DAP Protocol", "Socket Programming",
    ],
  },
  {
    title: "Android App Development",
    icon: <LayoutGrid className="w-5 h-5" />,
    skills: [
      "MVVM Architecture", "Android Multi-Threading Framework", "Gradle",
    ],
  },
  {
    title: "Machine Learning Concepts",
    icon: <BrainCircuit className="w-5 h-5" />,
    skills: [
      "Neural Networks", "Convolutional Neural Networks (CNN)",
      "Deep Q-Networks (DQN)",
      "Multi-agent-Reinforce Learning (MARL)",
    ],
  },
  {
    title: "Machine Learning Libraries/Frameworks",
    icon: <BrainCog className="w-5 h-5" />,
    skills: [ "NumPy", "Pandas", "Scikit-learn", "Keras", "Tensorflow", "PyTorch",
      "Jupyter", "Matplotlib", "ONNX",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title text-center mb-12">My Skills</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-md transition-shadow duration-300 animate-slide-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
