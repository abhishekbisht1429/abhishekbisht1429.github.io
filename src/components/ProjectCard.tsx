
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code } from "lucide-react";

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags, 
  demoUrl, 
  githubUrl 
}: ProjectProps) => {
  return (
    <Card className="overflow-hidden group h-full flex flex-col transition-all duration-300 hover:shadow-lg border border-border/50">
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <CardContent className="flex-grow p-5 space-y-4">
        <h3 className="text-xl font-heading font-semibold">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="px-2 py-1">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-5 pt-0 gap-3">
        {githubUrl && (
          <Button asChild variant="default" size="sm" className="flex-1">
            <a 
              href={githubUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1"
            >
              <Code className="w-3.5 h-3.5" />
              View Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
