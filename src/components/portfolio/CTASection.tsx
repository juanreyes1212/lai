import { motion } from "framer-motion";
import { ArrowUpRight, Mail, ExternalLink, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready to Build
            <br />
            <span className="text-gradient">Something Amazing?</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, challenging projects, 
            and innovative frontend solutions. Let's connect and explore how we can work together.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
              asChild
            >
              <a href="mailto:reyes1212@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border/50 hover:border-primary/50 hover:bg-primary/5"
              asChild
            >
              <Link to="/resume">
                Download Resume
              </Link>
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-border/50 mt-8"
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">Mesa, AZ</span>
              </div>
              <span className="hidden sm:block text-border">|</span>
              <a 
                href="mailto:reyes1212@gmail.com" 
                className="text-sm hover:text-primary transition-colors flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4 text-primary" />
                reyes1212@gmail.com
              </a>
              <span className="hidden sm:block text-border">|</span>
              <span className="text-sm">(480) 435-2155</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
