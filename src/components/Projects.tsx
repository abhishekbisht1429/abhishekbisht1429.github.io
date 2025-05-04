
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce website with product filtering, search functionality, and a shopping cart built with React and Node.js.",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website featuring a responsive design, dark mode, and animations. Built with Next.js and Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity application with task management, project organization, and statistics tracking.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["React", "TypeScript", "Firebase"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A weather application that displays current weather information and forecasts for locations worldwide.",
    image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    tags: ["JavaScript", "API", "CSS"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Recipe Finder",
    description: "An application that helps users find recipes based on available ingredients, dietary restrictions, and cuisine preferences.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["React", "API Integration", "Styled Components"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Fitness Tracker",
    description: "A web app for tracking workouts, setting fitness goals, and monitoring progress with data visualization.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["Vue.js", "Chart.js", "Express"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-secondary/50">
      <div className="container">
        <h2 className="section-title text-center mb-12">My Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="animate-slide-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
