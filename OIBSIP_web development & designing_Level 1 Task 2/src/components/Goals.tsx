
import { Card, CardContent } from '@/components/ui/card';

const Goals = () => {
  return (
    <section id="goals" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Future <span className="text-primary">Goals</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 animate-scale-in">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="mb-6">
                  <span className="text-6xl">🎯</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">My Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Currently focused on learning and exploring. Future goals include working professionally in front-end development and UI/UX design.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">💻</span>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Front-End Development</h4>
                    <p className="text-sm text-muted-foreground">Master modern frameworks and create stunning user interfaces</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">UI/UX Design</h4>
                    <p className="text-sm text-muted-foreground">Design intuitive and user-friendly digital experiences</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Professional Growth</h4>
                    <p className="text-sm text-muted-foreground">Build a successful career in the tech industry</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Goals;
