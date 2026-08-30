"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Palette, User, Lightbulb, BookOpen } from "lucide-react";
import type { Artifact } from "@/data/artifacts";
import { getArtifactImage, getAccentBg } from "@/lib/images";

interface ArtifactModalProps {
  artifact: Artifact | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function ArtifactModal({ artifact, isOpen, onClose, onPrev, onNext }: ArtifactModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!artifact) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] modal-backdrop flex items-start justify-center overflow-y-auto py-8 px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-4xl bg-[#221f1a] border border-[#3a3530] rounded-sm overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1714]/80 text-[#b8a990] hover:text-[#f5f0e8] hover:bg-[#1a1714] transition-colors border border-[#3a3530]"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Image section */}
            <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
              <motion.div
                suppressHydrationWarning
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url("${getArtifactImage(artifact.id, artifact.image)}")`,
                  backgroundColor: getAccentBg(artifact.accent),
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#221f1a] via-[#221f1a]/40 to-transparent" />

              {/* Title overlay */}
              <div className="absolute bottom-6 left-6 right-16">
                <p
                  className="text-xs tracking-[0.2em] uppercase mb-2"
                  style={{ color: artifact.accent }}
                >
                  {artifact.period}
                </p>
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl font-light"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--color-text-primary)" }}
                >
                  {artifact.title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 md:p-10">
              {/* Metadata grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 pb-8 border-b border-[#3a3530]">
                <MetaItem icon={<Calendar size={14} />} label="Date" value={artifact.date} accent={artifact.accent} />
                <MetaItem icon={<MapPin size={14} />} label="Region" value={artifact.region} accent={artifact.accent} />
                <MetaItem icon={<Palette size={14} />} label="Art Form" value={artifact.artForm} accent={artifact.accent} />
                <MetaItem icon={<User size={14} />} label="Artist / Civilization" value={artifact.artist} accent={artifact.accent} />
              </div>

              {/* Detailed description */}
              <div className="mb-8">
                <h3
                  className="text-sm tracking-[0.15em] uppercase mb-4 flex items-center gap-2"
                  style={{ color: artifact.accent }}
                >
                  <BookOpen size={14} />
                  About this Artifact
                </h3>
                <p className="text-[#b8a990] leading-relaxed text-sm md:text-base">
                  {artifact.detailedDescription}
                </p>
              </div>

              {/* Historical significance */}
              <div className="mb-8 p-5 rounded-sm border border-[#3a3530] bg-[#1a1714]/50">
                <h3
                  className="text-sm tracking-[0.15em] uppercase mb-3 flex items-center gap-2"
                  style={{ color: artifact.accent }}
                >
                  <BookOpen size={14} />
                  Historical Significance
                </h3>
                <p className="text-[#b8a990] leading-relaxed text-sm">
                  {artifact.historicalSignificance}
                </p>
              </div>

              {/* Interesting fact */}
              <div className="mb-8 p-5 rounded-sm border-l-2 bg-[#1a1714]/30" style={{ borderColor: artifact.accent }}>
                <h3
                  className="text-sm tracking-[0.15em] uppercase mb-3 flex items-center gap-2"
                  style={{ color: artifact.accent }}
                >
                  <Lightbulb size={14} />
                  Did You Know?
                </h3>
                <p className="text-[#b8a990] leading-relaxed text-sm italic">
                  {artifact.interestingFact}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-6 border-t border-[#3a3530]">
                <button
                  onClick={onPrev}
                  className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#b8a990] hover:text-[#c4956a] transition-colors"
                >
                  <ChevronLeft size={16} />
                  Previous
                </button>
                <button
                  onClick={onClose}
                  className="text-xs tracking-[0.15em] uppercase text-[#8a7d6b] hover:text-[#f5f0e8] transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={onNext}
                  className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#b8a990] hover:text-[#c4956a] transition-colors"
                >
                  Next
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MetaItem({ icon, label, value, accent }: { icon: React.ReactNode; label: string; value: string; accent: string }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 mb-1">
        <span style={{ color: accent }}>{icon}</span>
        <span className="text-[10px] tracking-[0.15em] uppercase text-[#8a7d6b]">{label}</span>
      </div>
      <p className="text-sm text-[#b8a990]">{value}</p>
    </div>
  );
}
