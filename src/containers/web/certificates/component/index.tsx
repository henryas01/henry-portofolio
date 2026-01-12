import { motion } from "motion/react";
import {
  Award,
  Building2,
  Calendar,
  ExternalLink,
  FileText,
  ShieldCheck,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import ParallaxSection from "@app/src/components/ParallaxSection";

import { use, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@app/src/app/ui/dialog";
import Modal from "@app/src/app/ui/modal";
import useTranslation from "@app/src/lib/dictionaries/hooks/useTranslation";
import { SiReact, SiSololearn } from "react-icons/si";
import { IconType } from "react-icons/lib";
import { FcGoogle } from "react-icons/fc";
import { FaNodeJs, FaHackerrank, FaCss3Alt } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { DiResponsive } from "react-icons/di";
import { BsFiletypeSql } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa6";

import { TbSeo } from "react-icons/tb";
import { placeholderImages } from "@app/src/app/ui/placholder-images";

type Certificate = {
  id?: number;
  name?: string;
  issuer?: string;
  year?: string;
  icon?: IconType;
  description?: string;
  verifyUrl?: string;
  pdfUrl?: string;
};

export default function CertificatesComponent() {
  const { t } = useTranslation("certificates");

  const iconMap = {
    google: FcGoogle,
    hackerrank: FaHackerrank,
    sololearn: SiSololearn,
    react: SiReact,
    javascript: IoLogoJavascript,
    css: FaCss3Alt,
    html: FaHtml5,
    sql: BsFiletypeSql,
    seo: TbSeo,
    responsive: DiResponsive,
    security: GrSecure,
  };

  const useCertificates = () => {
    const raw = t("list-certificates");
    if (!Array.isArray(raw)) return [];

    return raw.map((cert) => ({
      id: cert.id,
      name: cert.name,
      issuer: cert.issuer,
      year: cert.year,
      description: cert.description,
      verifyUrl: cert.verifyUrl,
      pdfUrl: cert.pdfUrl,
      icon: cert.icon,
    }));
  };

  const certificates = useCertificates();

  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />

      <ParallaxSection speed={0.2} className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[35rem] h-[35rem] bg-gradient-to-br from-cyan-500/15 to-blue-600/15 rounded-full blur-3xl" />
      </ParallaxSection>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Award className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {t("title")}
          </h1>
          <p className="text-xl text-gray-400">{t("description")}</p>
        </motion.div>

        {/* Certificate2  */}
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => {
            const Icon = iconMap[cert.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedCert(cert)}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/50 transition-all cursor-pointer overflow-hidden flex flex-col h-full"
              >
                {/* Icon & Year */}
                <div className="flex justify-between items-start mb-6">
                  <div className="text-4xl bg-slate-800/50 w-14 h-14 rounded-xl flex items-center justify-center border border-slate-700 group-hover:scale-110 transition-transform duration-500">
                    {Icon ? (
                      <Icon className="w-8 h-8 text-cyan-400" />
                    ) : (
                      <Award className="w-8 h-8 text-cyan-400" />
                    )}
                  </div>
                  <span className="text-[12px] font-mono tracking-tighter px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {cert.year}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-slate-400 text-xs flex items-center gap-2 mt-1">
                    <Building2 className="w-3.5 h-3.5" /> {cert.issuer}
                  </p>
                </div>

                {/* --- Added Description --- */}
                <p className="text-slate-400/80 text-sm leading-relaxed line-clamp-2 mb-6 flex-grow">
                  {cert.description}
                </p>

                {/* View Link */}
                <div className="flex items-center space-x-2 text-cyan-400 text-xs font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <span>View Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Continue Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            {t("continue-learning")}
          </h2>

          <p className="text-slate-400 leading-relaxed mb-6">
            {t("continue-learning-description")}
          </p>

          <p className="text-slate-400 leading-relaxed mb-10">
            {t("focus-description")}
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {t("focus-tag-1")}
            </span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {t("focus-tag-2")}
            </span>
            <span className="px-4 py-2 rounded-full bg-emerald-500/10 text-indigo-400 border border-emerald-500/20">
              {t("focus-tag-3")}
            </span>
            <span className="px-4 py-2 rounded-full bg-slate-500/10 text-slate-300 border border-slate-500/20">
              {t("focus-tag-4")}
            </span>
            <span className="px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {t("focus-tag-5")}
            </span>
          </div>
        </motion.div>

        {/* Certificate Dialog */}
        <Modal
          open={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          title={selectedCert?.name}
          subtitle={`${selectedCert?.issuer} • ${selectedCert?.year}`}
        >
          {selectedCert && (
            <div className="flex flex-col bg-white overflow-hidden">
              <div className="relative w-full h-[75vh] bg-white border-b border-slate-200 flex items-center justify-center">
                <Image
                  src={selectedCert.pdfUrl as string}
                  alt={selectedCert.name || "Certificate"}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={placeholderImages}
                />
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}
