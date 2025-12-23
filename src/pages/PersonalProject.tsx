import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Calendar } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import { personalProjects } from "@/data/portfolioData";

const PersonalProject = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = personalProjects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/personal" replace />;
  }

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

  // Find related projects
  const relatedProjects = personalProjects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 bg-noise pointer-events-none opacity-50" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-glow pointer-events-none" />

      <Navigation />

      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/personal"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Personal Projects
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <Badge variant="outline" className={`${getStatusColor(project.status)} mb-4`}>
              {project.status}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {project.title}
            </h1>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                Visit Live Project
              </a>
            )}
          </motion.header>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden mb-12"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </motion.div>

          {/* Project Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8 mb-12"
          >
            {/* Overview */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">About This Project</h2>
              <p className="text-foreground/90 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-4">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-medium mt-0.5">
                      ✓
                    </span>
                    <span className="text-foreground/90">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Technology Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm px-4 py-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Actions */}
            {project.link && (
              <div className="flex gap-4">
                <Button asChild className="gap-2">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    View Live Project
                  </a>
                </Button>
              </div>
            )}
          </motion.div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6">More Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.slug}
                    to={`/personal/${relatedProject.slug}`}
                    className="group glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                      <Badge 
                        variant="outline" 
                        className={`absolute top-4 right-4 ${getStatusColor(relatedProject.status)}`}
                      >
                        {relatedProject.status}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {relatedProject.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PersonalProject;
