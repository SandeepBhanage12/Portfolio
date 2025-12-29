import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.jpeg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/20 rounded-full animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/30 glow-primary relative">
              <img
                src={profileImage}
                alt="Sandeep Bhanage"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 border-2 border-dashed border-primary/20 rounded-full animate-spin-slow" />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-xl">
            <p className="text-primary font-medium mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Hello, I'm
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <span className="text-gradient">Sandeep</span>
              <br />
              <span className="text-foreground">Bhanage</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              Computer Science Student & Full-Stack Developer passionate about building innovative web applications
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button variant="gradient" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="glow" size="lg" asChild>
                <a href="/resume/Sandeep_Bhanage_Resume.pdf" download>
                  <Download size={18} />
                  Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <a
                href="https://github.com/SandeepBhanage12"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sandeep-bhanage-939124273/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:sandeepbhanage50@gmail.com"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
