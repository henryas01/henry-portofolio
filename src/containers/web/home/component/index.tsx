"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight, Code, Smartphone, Sparkles } from "lucide-react";
import SpaceBackground from "@app/src/components/SpaceBackground";
import ParallaxSection from "@app/src/components/ParallaxSection";
import Link from "next/link";
import { HomeContext } from "@app/src/modules/home/contexts";
import { useContext } from "react";
import useTranslation from "@app/src/lib/dictionaries/hooks/useTranslation";

export default function HomeComponent() {
  const { setDataHome, name } = useContext(HomeContext);

  const { t } = useTranslation("home");

  const listApps = [
    {
      icon: Code,
      titleKey: "web-app-development",
      descriptionKey: "web-app-description",
    },
    {
      icon: Smartphone,
      titleKey: "mobile-app-development",
      descriptionKey: "mobile-app-description",
    },
    {
      icon: Sparkles,
      titleKey: "custom-software-development",
      descriptionKey: "custom-software-description",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <SpaceBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Black hole gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-blue-950/20 to-black opacity-70" />

        {/* Blue gradient layers */}
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 rounded-full blur-3xl" />
        </ParallaxSection>

        <ParallaxSection speed={0.5} className="absolute inset-0">
          <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-gradient-to-tl from-blue-500/20 to-cyan-400/20 rounded-full blur-3xl" />
        </ParallaxSection>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
              {t("greeting")}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {t("description")}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/resume"
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center space-x-2"
              >
                <span>{t("view-resume")}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/request"
                className="px-8 py-3 rounded-lg border border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
              >
                <span>{t("request-application")}</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-cyan-400/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-cyan-400 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 px-4">
        <ParallaxSection speed={0.2}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
        </ParallaxSection>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t("services")}
            </h2>
            <p className="text-xl text-gray-400">{t("services-description")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {listApps.map((service, index) => (
              <motion.div
                key={service.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/50 transition-all"
              >
                <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl mb-3">{t(service.titleKey)}</h3>
                <p className="text-gray-400">{t(service.descriptionKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4">
        <ParallaxSection speed={0.4}>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl" />
        </ParallaxSection>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 backdrop-blur-sm"
          >
            <h2 className="text-4xl sm:text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t("request-project")}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t("request-project-description")}
            </p>
            <Link
              href="/register"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-xl hover:shadow-cyan-500/50 transition-all text-lg"
            >
              <span>{t("get-started-today")}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
