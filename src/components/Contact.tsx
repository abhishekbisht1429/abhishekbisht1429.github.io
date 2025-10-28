
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setIsSubmitting(false);
      setFormState({ name: "", email: "", message: "" });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      title: "Email",
      value: "abhishekbisht1429@gmail.com",
      href: "mailto:abhishekbisht1429@gmail.com"
    },
    // {
    //   icon: <Phone className="w-5 h-5 text-primary" />,
    //   title: "Phone",
    //   value: "+91 8979588935",
    //   href: "tel:+918979588935"
    // },
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      title: "Location",
      value: "Bloomington, Indiana, USA",
      href: "https://maps.app.goo.gl/EfCPvv9Px828CL8D9"
    }
  ];

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title text-center mb-12">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="p-4 shadow-sm animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <a 
                  href={item.href}
                  className="flex items-center gap-4 group"
                  target={item.title === "Location" ? "_blank" : undefined}
                  rel={item.title === "Location" ? "noopener noreferrer" : undefined}
                >
                  <div className="p-3 rounded-full bg-primary/10">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              </Card>
            ))}
          </div>
          
          {/*<div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: "0.3s" }}>*/}
          {/*  <Card className="p-6 shadow-sm">*/}
          {/*    <form onSubmit={handleSubmit} className="space-y-4">*/}
          {/*      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">*/}
          {/*        <div className="space-y-2">*/}
          {/*          <label htmlFor="name" className="text-sm font-medium">*/}
          {/*            Name*/}
          {/*          </label>*/}
          {/*          <Input*/}
          {/*            id="name"*/}
          {/*            name="name"*/}
          {/*            placeholder="Your name"*/}
          {/*            required*/}
          {/*            value={formState.name}*/}
          {/*            onChange={handleChange}*/}
          {/*          />*/}
          {/*        </div>*/}
          {/*        <div className="space-y-2">*/}
          {/*          <label htmlFor="email" className="text-sm font-medium">*/}
          {/*            Email*/}
          {/*          </label>*/}
          {/*          <Input*/}
          {/*            id="email"*/}
          {/*            name="email"*/}
          {/*            type="email"*/}
          {/*            placeholder="Your email"*/}
          {/*            required*/}
          {/*            value={formState.email}*/}
          {/*            onChange={handleChange}*/}
          {/*          />*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*      */}
          {/*      <div className="space-y-2">*/}
          {/*        <label htmlFor="message" className="text-sm font-medium">*/}
          {/*          Message*/}
          {/*        </label>*/}
          {/*        <Textarea*/}
          {/*          id="message"*/}
          {/*          name="message"*/}
          {/*          placeholder="Your message"*/}
          {/*          rows={5}*/}
          {/*          required*/}
          {/*          value={formState.message}*/}
          {/*          onChange={handleChange}*/}
          {/*        />*/}
          {/*      </div>*/}
          {/*      */}
          {/*      <Button */}
          {/*        type="submit" */}
          {/*        className="w-full sm:w-auto gap-2"*/}
          {/*        disabled={isSubmitting}*/}
          {/*      >*/}
          {/*        {isSubmitting ? "Sending..." : (*/}
          {/*          <>*/}
          {/*            <Send className="w-4 h-4" />*/}
          {/*            Send Message*/}
          {/*          </>*/}
          {/*        )}*/}
          {/*      </Button>*/}
          {/*    </form>*/}
          {/*  </Card>*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
};

export default Contact;
