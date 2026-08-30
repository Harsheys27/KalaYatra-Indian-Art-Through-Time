"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 pattern-bg">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#8a7d6b] text-xs tracking-[0.3em] uppercase mb-4">
            About the Timeline
          </p>
          <h2
            className="text-3xl md:text-5xl font-light tracking-[0.04em] mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            What is <span className="text-[#c4956a]">Indian Art</span>?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-5"
        >
          <p className="text-[#b8a990] leading-relaxed text-sm md:text-base">
            Indian art encompasses one of the richest and most diverse artistic traditions in the
            world, spanning over five thousand years of continuous cultural development. From the
            sophisticated urban art of the Indus Valley Civilization to the vibrant contemporary art
            scene of today, Indian art reflects the subcontinent&apos;s extraordinary religious, cultural
            and philosophical diversity.
          </p>
          <p className="text-[#b8a990] leading-relaxed text-sm md:text-base">
            The tradition includes monumental stone and bronze sculpture, exquisite mural and
            miniature painting, awe-inspiring temple and cave architecture, vibrant folk and tribal
            art, refined court art, and innovative modern and contemporary works. Indian art has
            been shaped by Hinduism, Buddhism, Jainism, Islam, and Christianity, as well as by
            secular traditions, royal patronage and the everyday creativity of communities across
            the subcontinent.
          </p>
          <p className="text-[#b8a990] leading-relaxed text-sm md:text-base">
            This interactive timeline presents key artifacts, movements and traditions that have
            defined the visual history of India — from the Dancing Girl of Mohenjo-daro to the
            groundbreaking works of modern Indian artists. Each artifact tells a story not only
            about art, but about the people, beliefs and civilizations that created it.
          </p>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-24 h-px bg-[#c4956a]/30 mx-auto mt-12"
        />
      </div>
    </section>
  );
}
