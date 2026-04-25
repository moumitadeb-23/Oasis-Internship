
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'mamaimoumita23092004@gmail.com',
      link: 'mailto:mamaimoumita23092004@gmail.com'
    },
    {
      icon: '🔗',
      label: 'LinkedIn',
      value: 'linkedin.com/in/moumitadeb23',
      link: 'https://linkedin.com/in/moumitadeb23'
    },
    {
      icon: '📸',
      label: 'Instagram',
      value: '@moumitadeb_official',
      link: 'https://instagram.com/moumitadeb_official'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'd love to hear from you! Whether you have a project in mind or just want to chat about technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Let's Connect</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <a 
                      href={info.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {info.label}
                        </h4>
                        <p className="text-muted-foreground group-hover:text-primary/80 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Available for Opportunities
              </h4>
              <p className="text-muted-foreground">
                I'm currently seeking internship and entry-level positions in front-end development. 
                Let's discuss how we can work together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
