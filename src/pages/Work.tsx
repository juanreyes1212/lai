import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import { workProjects } from "@/data/portfolioData";

const Work = () => {
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
              Professional <span className="text-gradient">Work</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Enterprise-scale projects from PetSmart, Hownd, and other companies showcasing frontend architecture and development excellence.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {workProjects.map((project, index) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <Link to={`/work/${project.slug}`}>
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 lg:h-auto overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 lg:block hidden" />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent lg:hidden" />
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="outline" className="border-primary/50 text-primary bg-primary/5">
                          {project.company}
                        </Badge>
                        {project.featured && (
                          <Badge className="bg-accent text-accent-foreground">
                            Featured
                          </Badge>
                        )}
                      </div>

                      <h2 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                        {project.title}
                      </h2>

                      <p className="text-sm text-muted-foreground mb-2">
                        {project.role} • {project.duration}
                      </p>

                      <p className="text-muted-foreground mb-6">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-6">
                        {project.highlights.slice(0, 3).map((highlight, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <span className="inline-flex items-center text-primary font-medium">
                        View Case Study
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
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

export default Work;
