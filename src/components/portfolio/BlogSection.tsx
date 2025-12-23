import { motion } from "framer-motion";
import { ArrowUpRight, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/portfolioData";

const BlogSection = () => {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Latest <span className="text-gradient">Insights</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Thoughts on frontend development, technical leadership, and industry trends
            </p>
          </div>
          <Button variant="ghost" className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-foreground" asChild>
            <Link to="/blog">
              View All Posts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <Badge 
                  variant="outline" 
                  className="border-accent/50 text-accent bg-accent/10"
                >
                  {post.category}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                <Link to="/blog">{post.title}</Link>
              </h3>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <div className="flex gap-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Read more indicator */}
              <Link to="/blog" className="flex items-center gap-2 mt-4 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                <span>Read article</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
