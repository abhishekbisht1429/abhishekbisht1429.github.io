
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Publications from "@/components/Publications";

const Index = () => {
  useEffect(() => {
    document.title = "YourName | Personal Portfolio";
    // Add dark mode to the document body
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <main className="overflow-x-hidden bg-background">
        <Navbar />
        <Hero />
        <About />
        <Publications/>
        <Projects />
        <Skills />
        <Contact />
        <Footer />
    </main>
  );
};

export default Index;
