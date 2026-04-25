
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      year: '2021',
      title: 'Secondary Examination',
      institution: 'Hindmotor High School (WBBSE)',
      grade: '93%'
    },
    {
      year: '2023',
      title: 'Higher Secondary',
      institution: 'Hindmotor Education Centre (CBSE, Science)',
      grade: '72%'
    },
    {
      year: '2024–2027',
      title: 'BCA',
      institution: 'Techno College Hooghly (WBUT)',
      grade: 'Pursuing'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Who I Am</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Motivated Bachelor of Computer Applications (BCA) student with exceptional communication skills and a strong work ethic. Passionate about programming, designing, and effective communication. Dedicated to delivering high-quality results and exceeding expectations.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Creative Thinker
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Team Player
              </span>
            </div>
          </div>
          
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Education Timeline</h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-primary bg-card/50 hover:bg-card transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-primary font-bold text-lg">{item.year}</span>
                      <span className="text-primary font-semibold">{item.grade}</span>
                    </div>
                    <h4 className="text-foreground font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.institution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
