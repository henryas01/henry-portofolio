import { motion } from "motion/react";
import { FileText, FilePlus, Wrench, Sparkles } from "lucide-react";
import ParallaxSection from "@app/src/components/ParallaxSection";

export default function ToolsComponent() {
  const tools = [
    {
      icon: FileText,
      title: "PDF to Word Converter",
      description:
        "Convert your PDF documents to editable Word files instantly with high accuracy.",
      available: false,
    },
    {
      icon: FilePlus,
      title: "Combine PDF Files",
      description:
        "Merge multiple PDF documents into a single file quickly and easily.",
      available: false,
    },
    {
      icon: Wrench,
      title: "Image Optimizer",
      description:
        "Compress and optimize images without losing quality for faster web performance.",
      available: false,
    },
    {
      icon: FileText,
      title: "Code Formatter",
      description:
        "Format and beautify your code with support for multiple programming languages.",
      available: false,
    },
    {
      icon: Sparkles,
      title: "Text Analyzer",
      description:
        "Analyze text for readability, word count, and other useful metrics.",
      available: false,
    },
    {
      icon: FilePlus,
      title: "JSON Validator",
      description: "Validate and format JSON data with helpful error messages.",
      available: false,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />

      <ParallaxSection speed={0.3} className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[42rem] h-[42rem] bg-gradient-to-br from-cyan-500/15 to-blue-600/15 rounded-full blur-3xl" />
      </ParallaxSection>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Wrench className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Developer Tools
          </h1>
          <p className="text-xl text-gray-400">
            Useful utilities to boost your productivity
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={tool.available ? { y: -10 } : {}}
              className={`relative p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 backdrop-blur-sm transition-all ${
                tool.available
                  ? "hover:border-cyan-400/50 cursor-pointer"
                  : "opacity-60"
              }`}
            >
              {/* Floating effect */}
              {tool.available && (
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0"
                />
              )}

              <div className="relative">
                {/* Status Badge */}
                {!tool.available && (
                  <div className="absolute -top-4 -right-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-gray-700 text-gray-400 text-xs">
                      Coming Soon
                    </span>
                  </div>
                )}

                {/* Icon */}
                <tool.icon
                  className={`w-12 h-12 mb-4 ${
                    tool.available ? "text-cyan-400" : "text-gray-500"
                  }`}
                />

                {/* Title */}
                <h3
                  className={`text-xl mb-3 ${
                    tool.available ? "" : "text-gray-400"
                  }`}
                >
                  {tool.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6">{tool.description}</p>

                {/* Action Button */}
                <button
                  disabled={!tool.available}
                  className={`w-full py-3 rounded-lg flex items-center justify-center space-x-2 transition-all ${
                    tool.available
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50"
                      : "bg-gray-700 cursor-not-allowed"
                  }`}
                >
                  <span>{tool.available ? "Use Tool" : "Coming Soon"}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 text-center"
        >
          <Sparkles className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-2xl mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            More Tools in Development
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We&apos;re constantly working on new tools to help developers work
            more efficiently. Check back regularly for updates and new releases!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
