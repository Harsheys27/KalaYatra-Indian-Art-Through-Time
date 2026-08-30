"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { artifacts } from "@/data/artifacts";
import { getArtifactImage, getAccentBg } from "@/lib/images";

interface GalleryProps {
  onArtifactClick: (id: string) => void;
}

export default function Gallery({ onArtifactClick }: GalleryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[#8a7d6b] text-xs tracking-[0.3em] uppercase mb-4">
            Visual Gallery
          </p>
          <h2
            className="text-3xl md:text-5xl font-light tracking-[0.04em]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            The <span className="text-[#c4956a]">Collection</span>
          </h2>
        </motion.div>
      </div>

      {/* Horizontal scrolling gallery */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="overflow-x-auto gallery-scroll pb-4"
      >
        <div className="flex gap-4 px-6 min-w-max">
          {artifacts.map((artifact, i) => (
            <motion.div
              key={artifact.id}
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -4 }}
              onClick={() => onArtifactClick(artifact.id)}
              className="group relative w-56 sm:w-64 md:w-72 flex-shrink-0 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden rounded-sm mb-3">
                <div
                  suppressHydrationWarning
                  className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url("${getArtifactImage(artifact.id, artifact.image)}")`,
                    backgroundColor: getAccentBg(artifact.accent),
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1714]/60 to-transparent" />
              </div>

              {/* Info */}
              <p
                className="text-sm font-light group-hover:text-[#c4956a] transition-colors duration-300"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-text-primary)" }}
              >
                {artifact.title}
              </p>
              <p className="text-[10px] tracking-[0.1em] text-[#8a7d6b] mt-1">
                {artifact.date}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
