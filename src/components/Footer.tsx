import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import {fetchUpdateDate} from '../lib/utils';

const lovable_link = "https://lovable.dev/"

const socialLinks = [
  { 
    name: "GitHub",
    href: "https://github.com/abhishekbisht1429",
    icon: <Github className="w-5 h-5" /> 
  },
  { 
    name: "LinkedIn",
    href: "https://linkedin.com/in/abhishek-bisht1429",
    icon: <Linkedin className="w-5 h-5" /> 
  },
  // {
  //   name: "Twitter",
  //   href: "https://twitter.com/yourusername",
  //   icon: <Twitter className="w-5 h-5" />
  // },
  // {
  //   name: "Instagram",
  //   href: "https://instagram.com/yourusername",
  //   icon: <Instagram className="w-5 h-5" />
  // }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [updateDate, setUpdateDate] = useState(new Date(currentYear));

  useEffect(() => {
    fetchUpdateDate().then(setUpdateDate);
  }, []);
  
  return (
    <footer className="bg-secondary py-8">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-6">
          <a
            href="#home"
            className="text-xl font-heading font-bold text-primary"
          >
            Abhishek Bisht
          </a>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="w-full border-t border-border/50 pt-6 mt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Abhishek Bisht
              </p>
              <p className="text-sm text-muted-foreground">
                Built with assistance from AI provided by <a className="text-primary" target="_blank" href={lovable_link}>Loveable.dev</a>
              </p>
              <p className="text-sm text-muted-foreground">
                Last updated on {updateDate.toDateString()}
              </p>

              
              <nav className="flex space-x-6 text-sm text-muted-foreground">
                <a href="#home" className="hover:text-primary transition-colors">
                  Home
                </a>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
                <a href="#publications" className="hover:text-primary transition-colors">
                  Publications
                </a>
                <a href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </a>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
