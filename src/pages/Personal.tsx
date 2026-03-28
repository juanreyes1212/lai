import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import PageLayout from "@/components/portfolio/PageLayout";
import PageHeader from "@/components/portfolio/PageHeader";
import { personalProjects } from "@/data/portfolioData";
import { getStatusColor } from "@/lib/colors";

const Personal = () => {
  return (
    <PageLayout>
      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <PageHeader
            backTo="/"
            backLabel="Back to Home"
            title="Personal"
            titleHighlight="Projects"
            description="Side projects demonstrating technical exploration, problem-solving, and passion for building useful tools."
          />

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
                      loading="lazy"
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
    </PageLayout>
  );
};

export default Personal;
