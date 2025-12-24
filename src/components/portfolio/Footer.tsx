import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">
              <span className="text-gradient">JR</span>
              <span className="text-foreground/80 font-light">.</span>
            </span>
            <span className="text-muted-foreground text-sm">
              © {currentYear} Juan Reyes
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4" role="list" aria-label="Social media links">
            <a 
              href="https://github.com/juanreyes1212" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="GitHub profile (opens in new tab)"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Twitter profile (opens in new tab)"
            >
              <Twitter className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          {/* Made with */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span>& React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
