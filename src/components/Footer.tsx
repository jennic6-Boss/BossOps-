const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <p className="font-body text-foreground">
            <a 
              href="mailto:bossopsco@gmail.com" 
              className="text-primary hover:text-primary/80 transition-colors"
            >
              bossopsco@gmail.com
            </a>
          </p>
          
          <p className="font-body text-sm text-muted-foreground">
            © 2025 BossOps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
