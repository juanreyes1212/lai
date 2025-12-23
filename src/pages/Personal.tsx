import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import { personalProjects } from "@/data/portfolioData";

const Personal = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "border-green-500/50 text-green-400 bg-green-500/10";
      case "In Development":
        return "border-blue-500/50 text-blue-400 bg-blue-500/10";
      default:
        return "border-muted-foreground/50 text-muted-foreground bg-muted/10";
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 bg-noise pointer-events-none opacity-50" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-glow pointer-events-none" />
      
      <Navigation />
      
      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Personal <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Side projects demonstrating technical exploration, problem-solving, and passion for building useful tools.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {personalProjects.map((project, index) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <Link to={`/personal/${project.slug}`} className="block">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    
                    {/* Status Badge */}
                    <Badge 
                      variant="outline" 
                      className={`absolute top-4 right-4 ${getStatusColor(project.status)}`}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>

                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="inline-flex items-center text-primary font-medium text-sm">
                        View Project
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                      {project.link && (
                        <span className="text-muted-foreground text-xs flex items-center gap-1">
                          <ExternalLink className="h-3 w-3" />
                          Live
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Personal;
