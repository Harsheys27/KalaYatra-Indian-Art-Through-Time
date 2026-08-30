"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { periods } from "@/data/periods";
import { artifacts } from "@/data/artifacts";
import ArtifactCard from "./ArtifactCard";

interface TimelineProps {
  onArtifactClick: (id: string) => void;
  activeFilter: string;
}

export default function Timeline({ onArtifactClick, activeFilter }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const filteredArtifacts = activeFilter === "all"
    ? artifacts
    : artifacts.filter((a) => a.periodId === activeFilter);

  return (
    <section id="timeline" ref={containerRef} className="relative py-24 md:py-32 pattern-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <SectionHeader />

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Vertical timeline line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="absolute inset-0 bg-[#3a3530]" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#c4956a] to-[#8b6914]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px">
            <div className="absolute inset-0 bg-[#3a3530]" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#c4956a] to-[#8b6914]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Period blocks with artifacts */}
          {periods.map((period, periodIndex) => {
            const periodArtifacts = filteredArtifacts.filter((a) => a.periodId === period.id);
            if (activeFilter !== "all" && periodArtifacts.length === 0) return null;

            return (
              <TimelinePeriod
                key={period.id}
                period={period}
                periodIndex={periodIndex}
                periodArtifacts={periodArtifacts}
                onArtifactClick={onArtifactClick}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SectionHeader() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="text-center mb-4">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-[#8a7d6b] text-xs tracking-[0.3em] uppercase mb-4"
      >
        The Exhibition
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl md:text-5xl font-light tracking-[0.04em]"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Journey Through <span className="text-[#c4956a]">Time</span>
      </motion.h2>
    </div>
  );
}

interface TimelinePeriodProps {
  period: (typeof periods)[number];
  periodIndex: number;
  periodArtifacts: typeof artifacts;
  onArtifactClick: (id: string) => void;
}

function TimelinePeriod({ period, periodIndex, periodArtifacts, onArtifactClick }: TimelinePeriodProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = periodIndex % 2 === 0;

  return (
    <div ref={ref} className="relative mb-20 md:mb-28">
      {/* Period marker */}
      <div className="relative flex items-center mb-10">
        {/* Timeline dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, type: "spring" }}
          className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10"
        >
          <div
            className="w-10 h-10 rounded-full border-2 flex items-center justify-center"
            style={{ borderColor: period.accent, background: "#1a1714" }}
          >
            <span
              className="text-xs font-semibold"
              style={{ color: period.accent, fontFamily: "var(--font-serif)" }}
            >
              {period.number}
            </span>
          </div>
        </motion.div>

        {/* Period info */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`pl-20 md:pl-0 md:w-5/12 ${
            isLeft ? "md:pr-16 md:text-right" : "md:ml-auto md:pl-16 md:text-left"
          }`}
        >
          <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: period.accent }}>
            {period.date}
          </p>
          <h3
            className="text-xl md:text-2xl font-light mb-2"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text-primary)" }}
          >
            {period.title}
          </h3>
          <p className="text-sm text-[#8a7d6b] leading-relaxed">{period.description}</p>
        </motion.div>
      </div>

      {/* Artifact cards for this period */}
      {periodArtifacts.length > 0 && (
        <div className="pl-20 md:pl-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {periodArtifacts.map((artifact, i) => (
              <motion.div
                key={artifact.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              >
                <ArtifactCard artifact={artifact} onClick={() => onArtifactClick(artifact.id)} />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
