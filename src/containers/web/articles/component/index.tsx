import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight, BookOpen, Lock } from "lucide-react";
import ParallaxSection from "@app/src/components/ParallaxSection";

export default function ArticlesComponent() {
  const articles = [
    {
      title: "Building Scalable Microservices with Node.js",
      excerpt:
        "Learn best practices for designing and implementing microservices architecture using Node.js, Docker, and Kubernetes.",
      date: "2023-11-15",
      readTime: "8 min read",
      category: "Backend",
      image: "📦",
      available: false,
    },
    {
      title: "Modern State Management in React",
      excerpt:
        "A comprehensive guide to state management patterns in React, from Context API to Redux and Zustand.",
      date: "2023-11-10",
      readTime: "12 min read",
      category: "Frontend",
      image: "⚛️",
      available: false,
    },
    {
      title: "Optimizing Database Queries for Performance",
      excerpt:
        "Practical tips and techniques for improving database query performance in PostgreSQL and MongoDB.",
      date: "2023-11-05",
      readTime: "10 min read",
      category: "Database",
      image: "🗄️",
      available: false,
    },
    {
      title: "AI Integration in Web Apps",
      excerpt:
        "Exploring how to leverage LLMs and OpenAI APIs within modern JavaScript frameworks.",
      date: "2026-01-20",
      readTime: "15 min read",
      category: "AI",
      image: "🤖",
      available: false, // Coming Soon
    },
    {
      title: "Advanced TypeScript Patterns",
      excerpt:
        "Mastering generics, mapped types, and conditional types for robust enterprise applications.",
      date: "2026-02-01",
      readTime: "9 min read",
      category: "TypeScript",
      image: "🟦",
      available: false, // Coming Soon
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />

      <ParallaxSection speed={0.2} className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-[38rem] h-[38rem] bg-gradient-to-br from-cyan-500/15 to-blue-600/15 rounded-full blur-3xl" />
      </ParallaxSection>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
            Articles & Insights
          </h1>
          <p className="text-xl text-gray-400">
            Thoughts on software development, technology, and innovation
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group relative ${
                article.available ? "cursor-pointer" : "cursor-not-allowed"
              }`}
            >
              <div
                className={`h-full p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                  article.available
                    ? "bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-500/20 hover:border-cyan-400/50"
                    : "bg-white/5 border-white/10 opacity-60"
                }`}
              >
                {/* Thumbnail */}
                <motion.div
                  whileHover={article.available ? { scale: 1.05 } : {}}
                  className="w-full h-40 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-6xl mb-4 overflow-hidden relative"
                >
                  {!article.available && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Lock className="text-white/50 w-10 h-10" />
                    </div>
                  )}
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    {article.image}
                  </div>
                </motion.div>

                {/* Category Badge */}
                <div className="mb-3 flex justify-between items-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      article.available
                        ? "bg-cyan-500/20 text-cyan-400"
                        : "bg-gray-800 text-gray-500"
                    }`}
                  >
                    {article.category}
                  </span>
                  {!article.available && (
                    <span className="text-[10px] text-yellow-500/80 font-bold uppercase tracking-widest">
                      Coming Soon
                    </span>
                  )}
                </div>

                {/* Title with Gradient Hover */}
                <h2
                  className={`text-xl mb-3 font-bold transition-all duration-300 ${
                    article.available
                      ? "text-white group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent"
                      : "text-gray-500"
                  }`}
                >
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-400 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.available ? article.date : "Draft"}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Action Link */}
                <div
                  className={`flex items-center space-x-2 text-sm font-bold transition-all duration-300 ${
                    article.available
                      ? "text-cyan-400 opacity-0 group-hover:opacity-100"
                      : "text-gray-600"
                  }`}
                >
                  <span>
                    {article.available
                      ? "Read Full Article"
                      : "Currently in Review"}
                  </span>
                  {article.available && (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More */}
        <motion.div className="text-center mt-12">
          <button className="px-8 py-3 rounded-lg border border-cyan-500/50 text-cyan-400 font-bold hover:bg-cyan-500/10 transition-all active:scale-95 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            View All Insights
          </button>
        </motion.div>
      </div>
    </div>
  );
}
