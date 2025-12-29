import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cpu, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['C/C++', 'JavaScript', 'Python', 'SQL', 'TypeScript'],
  },
  {
    title: 'Web Development',
    icon: Cpu,
    skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'WebRTC'],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Tools & Concepts',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'OOP', 'DBMS', 'Computer Networks', 'Operating Systems'],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">What I Know</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Skills</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`glass p-6 rounded-xl hover:border-primary/50 transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.2 + categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <category.icon className="text-primary-foreground" size={20} />
                  </div>
                  <h3 className="font-display font-semibold text-lg">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="skill"
                      className={`${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                      style={{ animationDelay: `${0.4 + categoryIndex * 0.1 + skillIndex * 0.05}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
