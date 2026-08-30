"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import type { Artifact } from "@/data/artifacts";
import { getArtifactImage, getAccentBg } from "@/lib/images";

interface ArtifactCardProps {
  artifact: Artifact;
  onClick: () => void;
}

export default function ArtifactCard({ artifact, onClick }: ArtifactCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="group relative bg-[#2a2520] rounded-sm overflow-hidden cursor-pointer card-glow border border-[#3a3530] hover:border-[#c4956a]/30 transition-colors duration-500"
      onClick={onClick}
    >
      {/* Image area */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <div
          suppressHydrationWarning
          className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `url("${getArtifactImage(artifact.id, artifact.image)}")`,
            backgroundColor: getAccentBg(artifact.accent),
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a2520] via-[#2a2520]/30 to-transparent" />

        {/* Period badge */}
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1 text-[10px] tracking-[0.15em] uppercase rounded-sm"
            style={{
              background: getAccentBg(artifact.accent, "22"),
              color: artifact.accent,
              border: `1px solid ${getAccentBg(artifact.accent)}`,
            }}
          >
            {artifact.artForm}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {/* Date and region */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[10px] tracking-[0.15em] uppercase" style={{ color: artifact.accent }}>
            {artifact.date}
          </span>
          <span className="text-[#3a3530]">|</span>
          <span className="text-[10px] tracking-[0.1em] text-[#8a7d6b] flex items-center gap-1">
            <MapPin size={10} />
            {artifact.region}
          </span>
        </div>

        {/* Title */}
        <h4
          className="text-lg md:text-xl font-light mb-3 text-[#f5f0e8] group-hover:text-[#c4956a] transition-colors duration-300"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {artifact.title}
        </h4>

        {/* Description */}
        <p className="text-sm text-[#8a7d6b] leading-relaxed line-clamp-3 mb-4">
          {artifact.shortDescription}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#c4956a] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Explore Artifact</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
        style={{ background: artifact.accent }}
      />
    </motion.article>
  );
}
