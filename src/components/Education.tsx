import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const educationData = [
  {
    institution: 'KLE Technological University, Belagavi',
    degree: 'B.Tech. in Computer Science and Engineering',
    period: '2022 – 2026',
    grade: '8.52 CGPA',
    current: true,
  },
  {
    institution: 'MDR PU Science College, Suttatti',
    degree: 'Class XII (PCMB)',
    period: '2020 – 2022',
    grade: '95.5%',
    current: false,
  },
  {
    institution: 'Bhiradi High School, Bhiradi',
    degree: 'Class X',
    period: '2019 – 2020',
    grade: '92%',
    current: false,
  },
];

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-24 relative bg-muted/20">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">My Journey</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Education</h2>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block" />

            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div
                  key={edu.institution}
                  className={`relative ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 rounded-full bg-primary glow-primary hidden md:block" />

                  <div className="md:ml-20 glass p-6 rounded-xl hover:border-primary/50 transition-all duration-300 group">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <GraduationCap className="text-primary" size={20} />
                        </div>
                        <div>
                          <h3 className="font-display font-semibold text-lg">{edu.degree}</h3>
                          <p className="text-muted-foreground text-sm">{edu.institution}</p>
                        </div>
                      </div>
                      {edu.current && (
                        <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={16} />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <Award size={16} />
                        {edu.grade}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
