import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code2, Lightbulb, Users, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing efficient, maintainable, and well-documented code',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Tackling complex challenges with innovative solutions',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborating effectively to achieve shared goals',
  },
  {
    icon: Rocket,
    title: 'Fast Learner',
    description: 'Quickly adapting to new technologies and frameworks',
  },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Get To Know</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">About Me</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a final year Computer Science student at KLE Technological University, passionate about building innovative software and web applications. I enjoy transforming complex problems into simple, elegant solutions.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With hands-on experience in full-stack development using React, Node.js, and MongoDB, I've built real-time collaboration platforms and contributed to published research in AI-based medical imaging.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm constantly exploring new technologies and am eager to contribute to meaningful projects that make a difference.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`glass p-6 rounded-xl hover:border-primary/50 transition-all duration-300 hover:scale-105 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
