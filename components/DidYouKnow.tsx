"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, Lightbulb } from "lucide-react";
import { facts } from "@/data/facts";

export default function DidYouKnow() {
  const [currentFact, setCurrentFact] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const nextFact = () => {
    setCurrentFact((prev) => (prev + 1) % facts.length);
  };

  return (
    <section ref={ref} className="py-24 md:py-32 pattern-bg">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Section label */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Lightbulb size={16} className="text-[#c4956a]" />
            <p className="text-[#8a7d6b] text-xs tracking-[0.3em] uppercase">Did You Know?</p>
          </div>

          {/* Large decorative number */}
          <motion.p
            key={currentFact}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.08, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[120px] md:text-[180px] font-light leading-none select-none"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text-primary)" }}
          >
            {String(currentFact + 1).padStart(2, "0")}
          </motion.p>

          {/* Fact text */}
          <div className="relative -mt-16 md:-mt-24 min-h-[120px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFact}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p
                  className="text-lg md:text-xl font-light leading-relaxed mb-3 max-w-2xl mx-auto"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--color-text-primary)" }}
                >
                  &ldquo;{facts[currentFact].text}&rdquo;
                </p>
                <p className="text-xs text-[#8a7d6b] tracking-[0.1em]">
                  — {facts[currentFact].source}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Counter and button */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <p className="text-xs text-[#8a7d6b] tracking-[0.15em]">
              {String(currentFact + 1).padStart(2, "0")} / {String(facts.length).padStart(2, "0")}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={nextFact}
              className="flex items-center gap-2 px-6 py-3 text-xs tracking-[0.15em] uppercase border border-[#3a3530] text-[#b8a990] hover:border-[#c4956a]/40 hover:text-[#c4956a] transition-colors rounded-sm"
            >
              Next Fact
              <ArrowRight size={14} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
