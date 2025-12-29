import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, MessageSquare, Brain, Home, FileText } from 'lucide-react';

const projects = [
  {
    title: 'Collaborative Learning Platform',
    description: 'Built a real-time collaboration platform for students to join subject-specific discussion groups with group chat, dynamic room creation, and message synchronization.',
    icon: MessageSquare,
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'WebRTC'],
    highlights: ['Real-time messaging', 'Dynamic rooms', 'Backend APIs'],
    color: 'primary',
    ieeeLink: null,
    githubLink: 'https://github.com/SandeepBhanage12/Group-Study-Platform',
  },
  {
    title: 'Oral Cancer Classification',
    description: 'Trained CNN models (VGG19, MobileNetV2, DenseNet121) on histopathological images to detect OSCC. Achieved 85% classification accuracy for early cancer detection.',
    icon: Brain,
    technologies: ['Python', 'TensorFlow', 'Keras', 'CNNs', 'Transfer Learning'],
    highlights: ['IEEE Published', '85% Accuracy', 'Medical AI'],
    color: 'accent',
    ieeeLink: 'https://ieeexplore.ieee.org/document/11140815',
    githubLink: 'https://github.com/SandeepBhanage12',
  },
  {
    title: 'House Rental Management System',
    description: 'Developed a full-stack rental platform to list, search, and manage property listings with user authentication and role-based access control.',
    icon: Home,
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    highlights: ['Full-stack', 'Auth & RBAC', 'Responsive UI'],
    color: 'primary',
    ieeeLink: null,
    githubLink: 'https://github.com/SandeepBhanage12/findMyStay',
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 relative bg-muted/20">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">What I've Built</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Projects</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group glass p-6 rounded-xl hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${project.color === 'accent' ? 'bg-accent/20' : 'bg-primary/20'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <project.icon className={project.color === 'accent' ? 'text-accent' : 'text-primary'} size={28} />
                </div>

                {/* Title & Description */}
                <h3 className="font-display font-semibold text-xl mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className={`text-xs font-medium px-2 py-1 rounded ${
                        project.color === 'accent' ? 'bg-accent/20 text-accent' : 'bg-primary/20 text-primary'
                      }`}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  {project.ieeeLink && (
                    <Button variant="outline" size="sm" className="flex-1 border-accent/50 text-accent hover:bg-accent/20" asChild>
                      <a href={project.ieeeLink} target="_blank" rel="noopener noreferrer">
                        <FileText size={16} />
                        IEEE
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Achievement */}
          <div
            className={`mt-12 glass p-6 rounded-xl border-accent/30 max-w-2xl mx-auto text-center ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.6s' }}
          >
            <div className="inline-flex items-center gap-2 text-accent font-medium mb-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Achievement
            </div>
            <p className="text-muted-foreground">
              Published research paper on <span className="text-foreground font-medium">"Performance Benchmarking of CNN Models in Oral Cancer Detection using Histopathological Images"</span> at IEEE Conference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
