import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import { blogPosts } from "@/data/portfolioData";

const Blog = () => {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Architecture": "border-purple-500/50 text-purple-400 bg-purple-500/10",
      "Performance": "border-green-500/50 text-green-400 bg-green-500/10",
      "Leadership": "border-blue-500/50 text-blue-400 bg-blue-500/10",
      "TypeScript": "border-cyan-500/50 text-cyan-400 bg-cyan-500/10",
      "Accessibility": "border-pink-500/50 text-pink-400 bg-pink-500/10",
      "Migration": "border-orange-500/50 text-orange-400 bg-orange-500/10",
    };
    return colors[category] || "border-accent/50 text-accent bg-accent/10";
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
              Blog & <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Technical articles on frontend development, architecture, leadership, and industry trends.
            </p>
          </motion.div>

          {/* Featured Post */}
          {blogPosts[0] && (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 mb-12"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 lg:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent lg:hidden" />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>

                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="outline" className={getCategoryColor(blogPosts[0].category)}>
                      {blogPosts[0].category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-4">
                    {blogPosts[0].title}
                  </h2>

                  <p className="text-muted-foreground mb-6">
                    {blogPosts[0].excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{blogPosts[0].date}</span>
                    <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                      <span className="text-sm font-medium">Read Article</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          )}

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="outline" className={getCategoryColor(post.category)}>
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                    {post.title}
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
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
