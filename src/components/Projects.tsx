
import ProjectCard from "./ProjectCard";
import {ExternalLink} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

const more_url = "https://github.com/abhishekbisht1429?tab=repositories"

const projects = [
    {
    "title": "ONNX-MLIR",
    "description": "I contributed to the Xilinx fork of ONNX-MLIR, which is a compiler infrastructure for representing and lowering ONNX models in MLIR, enabling efficient deployment and optimization of machine learning models.",
    "image": "onnx-mlir.png",
    "tags": ["ONNX", "MLIR", "Compiler", "Machine Learning", "Open Source"],
    "demoUrl": "#",
    "githubUrl": "https://github.com/Xilinx/onnx-mlir"
    },
    {
    "title": "PHR Storage and Sharing System",
    "description": "A personal health record storage and sharing system using blockchain, searchable symmetric encryption, and IPFS for secure and efficient data management.",
    "image": "phr_ss_img.png",
    "tags": ["Blockchain", "IPFS", "Healthcare", "Security"],
    "demoUrl": "#",
    "githubUrl": "https://github.com/abhishekbisht1429/phr-ss-system"
    },
    {
    "title": "PEKS for Cloud",
    "description": "Provably secure public key encryption with keyword search for data outsourcing in cloud environments, enabling privacy-preserving data retrieval.",
    "image": "peks_cloud.jpg",
    "tags": ["Cloud Security", "Encryption", "Keyword Search", "C++"],
    "demoUrl": "#",
    "githubUrl": "https://github.com/abhishekbisht1429/peks-for-cloud"
    },
    {
        "title": "Linux File Explorer",
        "description": "A terminal based lightweight file explorer application for Linux environments, designed for efficient navigation and management of files and directories.",
        "image": "file_explorer.png",
        "tags": ["Linux", "File Explorer", "C++"],
        "demoUrl": "#",
        "githubUrl": "https://github.com/abhishekbisht1429/linux-file-explorer"
    },
    {
        "title": "Video Emotion Recognition",
        "description": "A project for predicting speaker emotions using multimodal data from videos, including audio and facial features, with deep learning models.",
        "image": "video_emotion_recog.png",
        "tags": ["Python", "Deep Learning", "Emotion Detection", "Multimodal"],
        "demoUrl": "#",
        "githubUrl": "https://github.com/research-works/video-emotion-recognition"
      },
      {
        "title": "Sound Meter for PSLab Android",
        "description": "Developed the sound meter functionality for the PSLab Android app, enabling real-time audio level measurement and analysis.",
        "image": "ps_lab.png",
        "tags": ["Android", "Sound Meter", "Science App", "Open Source"],
        "demoUrl": "#",
        "githubUrl": "https://github.com/fossasia/pslab-android"
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
        <div className="p-5 pt-0">
          <Button asChild variant="secondary" size="default" className="w-full">
            <a
                href={more_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              More Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
