
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'C', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'JavaScript', level: 80 }
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'MySQL', level: 75 }
      ]
    },
    {
      title: 'Tools & Soft Skills',
      skills: [
        { name: 'Canva', level: 85 },
        { name: 'Communication', level: 95 },
        { name: 'Problem Solving', level: 90 }
      ]
    }
  ];

  const certifications = [
    'Communication Skills - TCS iON Certified'
  ];

  return (
    <section id="skills" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-300 animate-scale-in border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-center text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-primary font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-primary/70 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center animate-fade-in-up">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Certifications</h3>
          <div className="flex justify-center flex-wrap gap-4">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20">
                🏆 {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
