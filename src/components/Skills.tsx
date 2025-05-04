
import { Card } from "@/components/ui/card";
import { 
  Code, 
  Palette, 
  Database, 
  Globe, 
  Wrench, 
  Layers,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code className="w-5 h-5" />,
    skills: ["React", "TypeScript", "Next.js", "HTML/CSS", "Tailwind CSS"],
  },
  {
    title: "UI/UX Design",
    icon: <Palette className="w-5 h-5" />,
    skills: ["Figma", "Adobe XD", "Responsive Design", "Prototyping", "Wireframing"],
  },
  {
    title: "Backend Development",
    icon: <Database className="w-5 h-5" />,
    skills: ["Node.js", "Express", "MongoDB", "RESTful APIs", "GraphQL"],
  },
  {
    title: "Tools & Deployment",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["Git", "GitHub", "Docker", "Vercel", "Netlify"],
  },
  {
    title: "CMS & Integrations",
    icon: <Layers className="w-5 h-5" />,
    skills: ["WordPress", "Contentful", "Strapi", "API Integration", "Webhooks"],
  },
  {
    title: "Languages",
    icon: <Globe className="w-5 h-5" />,
    skills: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
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
