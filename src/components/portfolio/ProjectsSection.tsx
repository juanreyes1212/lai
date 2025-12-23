import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const workProjects = [
  {
    title: "PetSmart E-Commerce Platform",
    company: "PetSmart",
    description: "Led the frontend development of PetSmart's e-commerce platform serving 1.2M+ monthly users with React.js and TypeScript.",
    tech: ["React.js", "TypeScript", "Redux", "Contentful"],
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    title: "Hownd Business Dashboard",
    company: "Hownd",
    description: "Built a comprehensive business analytics dashboard with real-time data visualization and performance metrics.",
    tech: ["Vue.js", "D3.js", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    title: "Design System Architecture",
    company: "Enterprise",
    description: "Created a scalable design system reducing development time by 40% across multiple product teams.",
    tech: ["Storybook", "React", "CSS-in-JS", "Figma"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
    featured: false,
  },
];

const personalProjects = [
  {
    title: "Spotley WiFi",
    status: "Live",
    description: "WiFi management platform for businesses with customer analytics and marketing automation.",
    tech: ["Next.js", "Supabase", "Tailwind"],
  },
  {
    title: "Portfolio Site v2",
    status: "In Development",
    description: "Personal portfolio showcasing projects and technical writing with modern animations.",
    tech: ["React", "Framer Motion", "TypeScript"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="work" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Work Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Enterprise-scale projects showcasing frontend architecture and development excellence
            </p>
          </div>
          <Button variant="ghost" className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-foreground">
            View All Work
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {workProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-foreground/90 flex items-center justify-center">
                    <ArrowUpRight className="h-5 w-5 text-background" />
                  </div>
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    Featured
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-primary/50 text-primary bg-primary/5">
                    {project.company}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Personal Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Personal <span className="font-serif italic text-muted-foreground">Projects</span>
          </h3>
          <p className="text-muted-foreground">
            Side projects exploring new technologies and solving personal challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {personalProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <Badge 
                  variant="outline" 
                  className={`${
                    project.status === "Live" 
                      ? "border-green-500/50 text-green-400 bg-green-500/10" 
                      : "border-blue-500/50 text-blue-400 bg-blue-500/10"
                  }`}
                >
                  {project.status}
                </Badge>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {project.title}
              </h4>
              
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
