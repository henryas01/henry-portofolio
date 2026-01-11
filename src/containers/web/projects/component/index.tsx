"use client";

import { motion } from "motion/react";
import { ExternalLink, Code, Layers, CheckCircle2, Lock } from "lucide-react";
import ParallaxSection from "@app/src/components/ParallaxSection";
import useTranslation from "@app/src/lib/dictionaries/hooks/useTranslation";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@app/src/components/ui/tooltip";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@app/src/components/ui/dialog";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@app/src/components/ui/carousel";
import Link from "next/link";

/* ---------------- TYPES ---------------- */

type ProjectType = {
  category: string;
  name: string;
  nameApp?: string;
  company?: string;
  years: string;
  status?: string; // developing or null
  description: string;
  features: string[];
  techStack: string[];
  linkProject?: string;
  images: string[];
  github?: {
    type: "public" | "private" | string;
    links: string[];
  };
};

export default function ProjectsComponent() {
  const { t } = useTranslation("projects");

  const pictureList: Record<string, string[]> = {
    RenosIdWeb: [
      "/projects/renosidweb/pdp.webp",
      "/projects/renosidweb/home.webp",
      "/projects/renosidweb/product.webp",
      "/projects/renosidweb/checkout.webp",
      "/projects/renosidweb/payment_1.webp",
      "/projects/renosidweb/payment_2.webp",
      "/projects/renosidweb/payment_3.webp",
      "/projects/renosidweb/rich_result.webp",
      "/projects/renosidweb/seo_1.webp",
      "/projects/renosidweb/seo_2.webp",
    ],
    RenosIdMobile: [
      "/projects/renosidmobile/1.webp",
      "/projects/renosidmobile/2.webp",
      "/projects/renosidmobile/3.webp",
    ],
    MileApp: [
      "/projects/mileapp/1.webp",
      "/projects/mileapp/2.webp",
      "/projects/mileapp/3.webp",
      "/projects/mileapp/4.webp",
      "/projects/mileapp/5.webp",
    ],
    BFIWeb: [
      "/projects/bfiweb/1.webp",
      "/projects/bfiweb/2.webp",
      "/projects/bfiweb/3.webp",
      "/projects/bfiweb/4.webp",
      "/projects/bfiweb/5.webp",
      "/projects/bfiweb/6.webp",
      "/projects/bfiweb/7.webp",
      "/projects/bfiweb/8.webp",
    ],
    MoleaWiz: [
      "/projects/moleawiz/1.webp",
      "/projects/moleawiz/2.webp",
      "/projects/moleawiz/3.webp",
      "/projects/moleawiz/4.webp",
      "/projects/moleawiz/5.webp",
      "/projects/moleawiz/6.webp",
      "/projects/moleawiz/7.webp",
      "/projects/moleawiz/7.webp",
      "/projects/moleawiz/8.webp",
      "/projects/moleawiz/9.webp",
      "/projects/moleawiz/10.webp",
      "/projects/moleawiz/11.webp",
      "/projects/moleawiz/12.webp",
      "/projects/moleawiz/13.webp",
    ],
    DigimaWeb: ["/projects/digimaweb/home.webp"],

    DigitalLibrary: [
      "/projects/digitallibrary/1.webp",
      "/projects/digitallibrary/2.webp",
      "/projects/digitallibrary/3.webp",
      "/projects/digitallibrary/4.webp",
      "/projects/digitallibrary/5.webp",
      "/projects/digitallibrary/6.webp",
    ],
    MovieApp: ["/projects/movieapp/1.webp", "/projects/movieapp/2.webp"],

    DocAPP: [
      "/projects/docapp/1.webp",
      "/projects/docapp/2.webp",
      "/projects/docapp/3.webp",
      "/projects/docapp/4.webp",
      "/projects/docapp/5.webp",
    ],

    MeetBuddy: [
      "/projects/meetbuddy/1.webp",
      "/projects/meetbuddy/2.webp",
      "/projects/meetbuddy/3.webp",
    ],
    Ndenokum: [
      "/projects/ndenokum/1.webp",
      "/projects/ndenokum/2.webp",
      "/projects/ndenokum/3.webp",
      "/projects/ndenokum/4.webp",
      "/projects/ndenokum/5.webp",
      "/projects/ndenokum/6.webp",
    ],
  };

  const useProjects = (): ProjectType[] => {
    const raw = t("list-projects");
    if (!Array.isArray(raw)) return [];

    return raw.map((p) => ({
      category: p.category,
      name: p.name,
      nameApp: p.nameApp,
      company: p.company,
      status: p.status,
      years: p.years,
      description: p.description,
      features: Array.isArray(p.features) ? p.features : [p.features],
      techStack: p.techStack ?? [],
      linkProject: p.linkProject,
      images: pictureList[p.nameApp] ?? [],
      github: p.github,
    }));
  };

  const projects = useProjects();
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  return (
    <TooltipProvider>
      <div className="relative min-h-screen bg-[#030712] text-slate-200 overflow-hidden font-sans">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div className="absolute top-1/4 right-1/3 w-[40rem] h-[40rem] bg-cyan-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[100px]" />
        </ParallaxSection>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <Code className="w-10 h-10 text-cyan-400" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Showcasing enterprise solutions, creative platforms, and technical
              innovations.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
                className="group relative p-8 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-md transition-all hover:border-cyan-500/40 hover:bg-slate-900/60 cursor-pointer shadow-2xl"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                  {project.name}
                </h3>

                <p className="text-slate-400 mb-8 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Previews */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-black/40 border border-slate-700 text-[11px] font-semibold text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-3 py-1 rounded-lg bg-black/40 border border-slate-700 text-[11px] font-semibold text-slate-500">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    {project.linkProject && (
                      <ExternalLink className="w-5 h-5 text-cyan-400" />
                    )}
                    {project.github && (
                      <FaGithub className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                  <div className="text-sm font-bold text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                    Learn More <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Detail Dialog */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="max-w-5xl bg-slate-950 border-slate-800 p-0 overflow-hidden shadow-[0_0_50px_-12px_rgba(6,182,212,0.3)]">
            {selectedProject && (
              <div className="flex flex-col max-h-[90vh]">
                {/* Visual Section */}
                <div className="relative w-full h-[45vh] hover:h-[85vh] bg-slate-900 overflow-hidden transition-all duration-700 ease-in-out group/visual-section">
                  {selectedProject.images?.length > 0 ? (
                    <Carousel className="w-full h-full">
                      <CarouselContent>
                        {selectedProject.images.map((img, i) => (
                          <CarouselItem
                            key={i}
                            className="relative h-full w-full pl-0 flex-none overflow-hidden"
                          >
                            <Image
                              src={img}
                              alt={selectedProject.name}
                              width={1200} // High-res base
                              height={800} // Defines aspect ratio
                              priority
                              className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover/visual-section:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-4 bg-black/50 border-slate-700" />
                      <CarouselNext className="right-4 bg-black/50 border-slate-700" />
                    </Carousel>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-700">
                      <Layers className="w-20 h-20 opacity-20" />
                    </div>
                  )}

                  {/* Floating Header Info */}
                  <div className="absolute bottom-8 left-8 right-8 z-10 pointer-events-none">
                    <div className="flex items-center gap-3 mb-2 transition-transform duration-500 group-hover/visual-section:-translate-y-2">
                      <span className="text-cyan-400 text-md font-bold uppercase tracking-[0.2em]">
                        {selectedProject.company}
                      </span>
                      {/* Release Year Badge */}
                      <span className="px-2 py-0.5 rounded border border-white/10 bg-white/5 text-sm font-mono text-slate-400">
                        {selectedProject.years || "2024"}
                      </span>

                      {/* --- Still Developing Status --- */}
                      {selectedProject.status === "developing" ? (
                        <div className="flex items-center gap-2 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                          {/* Animated Pulse Dot */}
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                          </span>
                          <span className="text-xs font-bold text-amber-500 uppercase tracking-tight">
                            Still Developing
                          </span>
                        </div>
                      ) : null}
                    </div>
                    <DialogTitle className="text-3xl md:text-4xl font-black text-white">
                      {selectedProject.name}
                    </DialogTitle>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-cyan-500" /> Project
                        Overview
                      </h4>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500" /> Key
                        Features
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedProject.features.map((f) => (
                          <li
                            key={f}
                            className="text-sm text-slate-400 flex items-start gap-2"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-8 border-l border-slate-800/50 pl-0 md:pl-8">
                    <div>
                      <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-bold text-cyan-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-8 border-t border-slate-800 flex flex-col gap-3">
                      {selectedProject.linkProject && (
                        <Link
                          href={selectedProject.linkProject}
                          target="_blank"
                          className="flex items-center justify-center gap-2 w-full py-3 text-white  rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                        >
                          <ExternalLink className="w-4 h-4" /> Live
                        </Link>
                      )}
                      <GithubButton github={selectedProject.github} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </TooltipProvider>
  );
}

const GithubButton = ({ github }: { github: ProjectType["github"] }) => {
  if (!github) return null;

  const isPrivate = github.type === "private";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl border font-bold transition-all ${
            isPrivate
              ? "bg-slate-900 border-slate-800 text-slate-500 cursor-not-allowed"
              : "bg-white/5 border-white/10 text-white hover:bg-white/10 cursor-pointer"
          }`}
        >
          {isPrivate ? (
            <Lock className="w-4 h-4" />
          ) : (
            <FaGithub className="w-4 h-4" />
          )}
          {isPrivate ? "Private Repo" : "GitHub Repositories"}
        </div>
      </TooltipTrigger>
      <TooltipContent className="bg-slate-900 border-slate-800 text-slate-200">
        {isPrivate ? (
          "Repository is company-owned or private"
        ) : (
          <ul className="text-xs space-y-2 p-1">
            {github.links.map((link) => (
              <li
                key={link}
                className="flex items-center gap-2 hover:text-cyan-400"
              >
                <ExternalLink className="w-3 h-3" />
                <Link href={link} target="_blank">
                  {link.split("/").pop()}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </TooltipContent>
    </Tooltip>
  );
};
