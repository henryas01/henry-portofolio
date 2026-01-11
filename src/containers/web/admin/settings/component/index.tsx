import { motion } from "motion/react";
import { useState } from "react";
import { Plus, Edit, Trash2, Save } from "lucide-react";
import ParallaxSection from "@app/src/components/ParallaxSection";

type TabType = "certificates" | "projects" | "articles";

export default function SettingsComponent() {
  const [activeTab, setActiveTab] = useState<TabType>("certificates");

  const tabs: { id: TabType; label: string }[] = [
    { id: "certificates", label: "Certificates" },
    { id: "projects", label: "Projects" },
    { id: "articles", label: "Articles" },
  ];

  const mockCertificates = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon",
      year: "2023",
    },
    {
      id: 2,
      name: "React Advanced Certification",
      issuer: "Meta",
      year: "2022",
    },
  ];

  const mockProjects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      tech: "React, Node.js",
      status: "Published",
    },
    {
      id: 2,
      name: "Task Management System",
      tech: "Next.js, MongoDB",
      status: "Published",
    },
  ];

  const mockArticles = [
    {
      id: 1,
      title: "Building Scalable Microservices",
      date: "2023-11-15",
      status: "Published",
    },
    {
      id: 2,
      title: "Modern State Management",
      date: "2023-11-10",
      status: "Draft",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />

      <ParallaxSection speed={0.2} className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[32rem] h-[32rem] bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl" />
      </ParallaxSection>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Content Management
          </h1>
          <p className="text-gray-400">Create, edit, and manage your content</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/50"
                  : "bg-black/30 border border-cyan-500/20 hover:border-cyan-400/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 backdrop-blur-sm"
        >
          {/* Add New Button */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl">
              Manage {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              <Plus className="w-5 h-5" />
              <span>Add New</span>
            </button>
          </div>

          {/* Certificates Table */}
          {activeTab === "certificates" && (
            <div className="space-y-3">
              {mockCertificates.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 rounded-lg bg-black/30 border border-cyan-500/10 hover:border-cyan-400/30 transition-all flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-lg text-cyan-400 mb-1">{cert.name}</h3>
                    <p className="text-sm text-gray-400">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/10 transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg border border-red-500/30 hover:bg-red-500/10 transition-colors text-red-400">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Projects Table */}
          {activeTab === "projects" && (
            <div className="space-y-3">
              {mockProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-4 rounded-lg bg-black/30 border border-cyan-500/10 hover:border-cyan-400/30 transition-all flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-lg text-cyan-400 mb-1">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-400">{project.tech}</p>
                    <span className="inline-block mt-2 px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
                      {project.status}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/10 transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg border border-red-500/30 hover:bg-red-500/10 transition-colors text-red-400">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Articles Table */}
          {activeTab === "articles" && (
            <div className="space-y-3">
              {mockArticles.map((article) => (
                <div
                  key={article.id}
                  className="p-4 rounded-lg bg-black/30 border border-cyan-500/10 hover:border-cyan-400/30 transition-all flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-lg text-cyan-400 mb-1">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-400">{article.date}</p>
                    <span
                      className={`inline-block mt-2 px-2 py-1 rounded-full text-xs ${
                        article.status === "Published"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {article.status}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/10 transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg border border-red-500/30 hover:bg-red-500/10 transition-colors text-red-400">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
