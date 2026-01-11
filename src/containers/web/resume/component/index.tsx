"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { Download, Mail, MapPin, GraduationCap } from "lucide-react";

import ParallaxSection from "@app/src/components/ParallaxSection";
import Link from "next/link";
import { Constants } from "@app/src/constants";
import { useContext } from "react";
import { HomeContext } from "@app/src/modules/home/contexts";
import useTranslation from "@app/src/lib/dictionaries/hooks/useTranslation";
import { FaLayerGroup } from "react-icons/fa6";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiDocker,
  SiMysql,
  SiGithub,
  SiMongodb,
  SiNestjs,
  SiPhp,
  SiLaravel,
  SiKotlin,
  SiSocketdotio,
  SiJest,
  SiRedux,
  SiJetpackcompose,
  SiExpress,
} from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";
import { BsGit } from "react-icons/bs";
import { FaGraduationCap, FaLinkedin, FaGithub, FaVuejs } from "react-icons/fa";
import Trans from "@app/src/lib/dictionaries/components/Trans";

type EducationTranslation = {
  institution: string;
  degree: string;
  location: string;
  period: string;
  description: string;
};

export default function ResumeComponent() {
  const { t } = useTranslation("resume");

  const skills = [
    // Frontend
    { name: "Next.js", category: "Frontend", icon: SiNextdotjs },
    { name: "React", category: "Frontend", icon: SiReact },
    { name: "Vue.js", category: "Frontend", icon: FaVuejs },
    { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss },
    { name: "Redux", category: "State Management", icon: SiRedux },

    // Backend
    { name: "Node.js", category: "Backend", icon: SiNodedotjs },
    { name: "NestJS", category: "Backend", icon: SiNestjs },
    { name: ".NET", category: "Backend", icon: AiOutlineDotNet },
    { name: "Laravel", category: "Backend", icon: SiLaravel },
    { name: "Socket.IO", category: "Realtime", icon: SiSocketdotio },
    { name: "Express.js", category: "Backend", icon: SiExpress },

    //mobile
    {
      name: "Kotlin Jetpack Compose",
      category: "Mobile",
      icon: SiJetpackcompose,
    },

    // Languages
    { name: "TypeScript", category: "Language", icon: SiTypescript },
    { name: "PHP", category: "Language", icon: SiPhp },
    { name: "Kotlin", category: "Language", icon: SiKotlin },

    // Databases
    { name: "MySQL", category: "Database", icon: SiMysql },
    { name: "MongoDB", category: "Database", icon: SiMongodb },

    // DevOps & Cloud
    { name: "Docker", category: "DevOps", icon: SiDocker },
    { name: "GitHub", category: "Tools", icon: SiGithub },
    { name: "Git", category: "Tools", icon: BsGit },

    // Testing
    { name: "Jest", category: "Testing", icon: SiJest },
  ];

  const useEducation = () => {
    const raw = t("list-education");
    if (!Array.isArray(raw)) return [];

    return raw.map((edu) => ({
      degree: edu.degree,
      school: edu.institution,
      location: edu.location,
      period: edu.period,
      description: edu.description,
    }));
  };
  const educations = useEducation();

  const splitByColon = (text: string): string[] => {
    if (!text.includes(":")) return [text];

    const [title, ...rest] = text.split(":");
    return [
      `${title}:`, // keep colon with title
      rest.join(":").trim(),
    ];
  };

  const { setDataHome, name } = useContext(HomeContext);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />

      <ParallaxSection speed={0.3} className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl" />
      </ParallaxSection>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          {/* Profile Photo */}
          <div className="relative inline-block mb-6">
            <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-[3px] shadow-lg shadow-cyan-500/50">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-900">
                <Image
                  src="/henry.webp"
                  alt="Henry AS"
                  width={160}
                  height={160}
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl -z-10" />
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl sm:text-5xl mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {Constants.SITE.NAME}
          </h1>
          <p className="text-xl text-gray-300 mb-6">{Constants.SITE.TAGLINE}</p>

          {/* Contact Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Link
              href={"mailto:" + Constants.SITE.EMAIL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </Link>
            <Link
              href={Constants.SITE.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
            >
              <FaGithub className="w-4 h-4" />
              <span>GitHub</span>
            </Link>
            <Link
              href={Constants.SITE.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
            >
              <FaLinkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </Link>
          </div>

          {/* Download CV Button */}
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center space-x-2 mx-auto">
            <Download className="w-5 h-5" />
            <span>{t("downloadResume")}</span>
          </button>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {t("about-me")}
          </h2>

          <div className="space-y-5">
            {t("about")
              .split("\n")
              .map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="text-lg text-gray-300 leading-relaxed"
                >
                  {paragraph.trim()}
                </motion.p>
              ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {t("skills.title")}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/50 transition-all"
              >
                <skill.icon className="w-8 h-8 text-cyan-400 mb-2" />
                <h3 className="mb-1">{skill.name}</h3>
                <p className="text-sm text-gray-400">{skill.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 mb-16"
        >
          <h2 className="text-3xl mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {t("workExperience.title")}
          </h2>
          <div className="space-y-6">
            {[
              {
                title: t("workExperience.company1.role"),
                company: t("workExperience.company1.name"),
                period: t("workExperience.company1.period"),
                description: t("workExperience.company1.description"),
              },
              {
                title: t("workExperience.company2.role"),
                company: t("workExperience.company2.name"),
                period: t("workExperience.company2.period"),
                description: t("workExperience.company2.description"),
              },
              {
                title: t("workExperience.company3.role"),
                company: t("workExperience.company3.name"),
                period: t("workExperience.company3.period"),
                description: t("workExperience.company3.description"),
              },
              {
                title: t("workExperience.company4.role"),
                company: t("workExperience.company4.name"),
                period: t("workExperience.company4.period"),
                description: t("workExperience.company4.description"),
              },
            ].map((job, index) => {
              const descriptions = Array.isArray(job.description)
                ? job.description
                : [job.description];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group hover:border-cyan-500/30 transition-all duration-1000 shadow-2xl overflow-hidden  p-6 rounded-xl bg-gradient-to-br from-cyan-500/5 to-blue-600/5 border border-cyan-500/20"
                >
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div className="flex gap-4">
                      <FaLayerGroup className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl text-cyan-400 mb-1">
                        {job.title}
                      </h3>
                    </div>

                    <h3 className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono  font-bold shadow-inner">
                      {job.period}
                    </h3>
                  </div>
                  <div className="flex font-semibold mb-3">
                    <h4 className="text-xl font-sizelg font-bold text-white text-cyan-400 mb-1">
                      {job.company}
                    </h4>
                  </div>

                  <div className="text-gray-400">
                    {descriptions.map((item, index) => (
                      <p key={index} className="leading-relaxed">
                        <Trans
                          raw
                          i18n={item}
                          components={{
                            strong: (
                              <strong className="font-bold text-cyan-400" />
                            ),
                          }}
                        />
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* --- MODERN EDUCATION SECTION --- */}
        <div className="grid grid-cols-1 gap-8 mt-12">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative flex flex-col md:flex-row gap-6 p-8 rounded-xl bg-[#0a0a0f]bg-gradient-to-br from-cyan-500/5 to-blue-600/5 border border-cyan-500/20 hover:border-cyan-500/30 transition-all duration-1000 shadow-2xl overflow-hidden"
            >
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-cyan-500/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.15)] group-hover:shadow-cyan-500/40 transition-all duration-500">
                  <GraduationCap className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
              </div>

              <div className="relative flex-grow">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg font-bold text-gray-400 mt-1 uppercase tracking-wider text-sm">
                      {edu.school}
                    </h4>
                  </div>

                  <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono font-bold shadow-inner">
                    {edu.period}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-300 font-semibold">
                    <MapPin className="w-4 h-4 text-cyan-500" />
                    <span>{edu.location}</span>
                  </div>

                  <p className="text-gray-500 leading-relaxed max-w-3xl group-hover:text-gray-400 transition-colors">
                    {edu.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-[-32px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent group-hover:via-cyan-500/50 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
