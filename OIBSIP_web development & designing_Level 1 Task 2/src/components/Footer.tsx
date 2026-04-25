
const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <span className="text-3xl font-bold text-primary">MD</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Building the future, one line of code at a time.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="mailto:mamaimoumita23092004@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              📧
            </a>
            <a 
              href="https://linkedin.com/in/moumitadeb23" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              🔗
            </a>
            <a 
              href="https://instagram.com/moumitadeb_official" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              📸
            </a>
          </div>
          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">
              © 2024 Moumita Deb. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
