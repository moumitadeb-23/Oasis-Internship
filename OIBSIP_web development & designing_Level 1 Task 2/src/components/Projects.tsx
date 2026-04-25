
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Medical Store Management System',
      description: 'Developed using Python and MySQL to manage inventory, billing, and stock alerts.',
      technologies: ['Python', 'MySQL', 'GUI Programming'],
      features: [
        'Inventory Management',
        'Billing System',
        'Stock Alerts',
        'Database Integration'
      ],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      status: 'Completed'
    },
    {
      title: 'Instagram Clone',
      description: 'Built with HTML, CSS, and JavaScript to replicate core Instagram UI/UX.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Responsive Design',
        'User Interface',
        'Interactive Elements',
        'Modern Layout'
      ],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      status: 'Completed'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 bg-card border-primary/20 hover:border-primary/40 animate-fade-in-up overflow-hidden">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs border-primary/30 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center animate-fade-in-up">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
