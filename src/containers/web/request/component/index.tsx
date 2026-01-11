import { motion } from "motion/react";
import { Rocket, Code, Smartphone, Sparkles } from "lucide-react";
import ParallaxSection from "@app/src/components/ParallaxSection";
import Link from "next/link";
import useTranslation from "@app/src/lib/dictionaries/hooks/useTranslation";

export default function RequestApplicationComponent() {
  const { t } = useTranslation("request");

  const services = [
    {
      icon: Code,
      titlekey: t("web-app-development"),
      description: t("web-app-description"),
      features: Array.isArray(t("web-app-features"))
        ? (t("web-app-features") as unknown as string[])
        : [],
    },
    {
      icon: Smartphone,
      titlekey: t("mobile-app-development"),
      description: t("mobile-app-description"),
      features: Array.isArray(t("mobile-app-features"))
        ? (t("mobile-app-features") as unknown as string[])
        : [],
    },
    {
      icon: Sparkles,
      titlekey: t("custom-software-development"),
      description: t("custom-software-description"),
      features: Array.isArray(t("custom-software-features"))
        ? (t("custom-software-features") as unknown as string[])
        : [],
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />

      <ParallaxSection speed={0.2} className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[50rem] h-[50rem] bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl" />
      </ParallaxSection>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Interstellar Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <Rocket className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
          <h1 className="text-5xl sm:text-6xl mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
            {t("request-project")}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t("request-description")}
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index + service.titlekey}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/50 transition-all"
            >
              <service.icon className="w-14 h-14 text-cyan-400 mb-4" />
              <h3 className="text-2xl mb-3">{service.titlekey}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>

              <div className="space-y-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="relative"
        >
          <div className="p-12 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 backdrop-blur-md text-center overflow-hidden">
            {/* Animated glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-cyan-500/0 animate-pulse" />

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t("get-started-today")}
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                {t("get-started-description")}
              </p>

              <Link
                href="/register"
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-xl hover:shadow-cyan-500/50 transition-all text-lg"
              >
                <Rocket className="w-6 h-6" />
                <span>{t("register-to-request-details")}</span>
              </Link>

              <p className="text-sm text-gray-400 mt-6">
                {t("already-have-account")}{" "}
                <Link
                  href="/login"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {t("sign-in-here")}
                </Link>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="text-3xl text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {t("how-it-works")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: t("register"),
                description: t("create-your-account"),
              },
              {
                step: "2",
                title: t("submit-request"),
                description: t("describe-your-project"),
              },
              {
                step: "3",
                title: t("get-quote"),
                description: t("receive-pricing-details"),
              },
              {
                step: "4",
                title: t("start-building"),
                description: t("start-building-description"),
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg shadow-cyan-500/50">
                  {item.step}
                </div>
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
