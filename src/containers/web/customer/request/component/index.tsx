import { motion } from "motion/react";
import { useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import ParallaxSection from "@app/src/components/ParallaxSection";

export default function CustomerRequestFormComponent() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    appType: "web",
    title: "",
    description: "",
    budget: 5000,
    timeline: "",
    features: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to API
    console.log("Form submitted:", formData);
    router.push("/customer");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "budget" ? parseInt(value) : value,
    }));
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />

      <ParallaxSection speed={0.3} className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-[38rem] h-[38rem] bg-gradient-to-br from-cyan-500/15 to-blue-600/15 rounded-full blur-3xl" />
      </ParallaxSection>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Sparkles className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
          <h1 className="text-4xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            New Application Request
          </h1>
          <p className="text-xl text-gray-400">
            Tell us about your project and we&apos;ll get back to you soon
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 backdrop-blur-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* App Type */}
            <div>
              <label
                htmlFor="appType"
                className="block text-sm text-gray-300 mb-2"
              >
                Application Type
              </label>
              <select
                id="appType"
                name="appType"
                value={formData.appType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all text-white"
                required
              >
                <option value="web">Web Application</option>
                <option value="android">Android Application</option>
                <option value="ios">iOS Application</option>
                <option value="custom">Custom Software</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Project Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm text-gray-300 mb-2"
              >
                Project Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all text-white"
                placeholder="e.g., E-Commerce Platform"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm text-gray-300 mb-2"
              >
                Project Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all text-white resize-none"
                placeholder="Describe your project in detail. What problems does it solve? Who are the users? What features do you need?"
                required
              />
            </div>

            {/* Key Features */}
            <div>
              <label
                htmlFor="features"
                className="block text-sm text-gray-300 mb-2"
              >
                Key Features (Optional)
              </label>
              <textarea
                id="features"
                name="features"
                value={formData.features}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all text-white resize-none"
                placeholder="List the main features you want in your application"
              />
            </div>

            {/* Budget Slider */}
            <div>
              <label
                htmlFor="budget"
                className="block text-sm text-gray-300 mb-2"
              >
                Estimated Budget:{" "}
                <span className="text-cyan-400">
                  ${formData.budget.toLocaleString()}
                </span>
              </label>
              <input
                type="range"
                id="budget"
                name="budget"
                min="1000"
                max="50000"
                step="1000"
                value={formData.budget}
                onChange={handleChange}
                className="w-full h-2 bg-black/50 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>$1,000</span>
                <span>$50,000+</span>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <label
                htmlFor="timeline"
                className="block text-sm text-gray-300 mb-2"
              >
                Desired Timeline
              </label>
              <input
                type="text"
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all text-white"
                placeholder="e.g., 3 months, ASAP, Flexible"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-xl hover:shadow-cyan-500/50 transition-all flex items-center justify-center space-x-2 text-lg"
            >
              <Send className="w-5 h-5" />
              <span>Submit Request</span>
            </button>
          </form>

          {/* Info Text */}
          <p className="text-sm text-gray-500 text-center mt-6">
            After submitting, our team will review your request and get back to
            you within 24-48 hours with a detailed quote.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
