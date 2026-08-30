"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface PeriodFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  { id: "all", label: "All" },
  { id: "indus-valley", label: "Indus Valley" },
  { id: "ancient", label: "Ancient" },
  { id: "medieval", label: "Medieval" },
  { id: "mughal", label: "Mughal" },
  { id: "regional", label: "Regional" },
  { id: "colonial", label: "Colonial" },
  { id: "modern", label: "Modern" },
];

export default function PeriodFilter({ activeFilter, onFilterChange }: PeriodFilterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="artifacts" ref={ref} className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-[#8a7d6b] text-xs tracking-[0.3em] uppercase mb-3">
            Filter by Period
          </p>
          <h2
            className="text-2xl md:text-4xl font-light tracking-[0.04em]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Explore the <span className="text-[#c4956a]">Collection</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3"
        >
          {filters.map((filter, i) => (
            <motion.button
              key={filter.id}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.05 }}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onFilterChange(filter.id)}
              className={`px-4 py-2 text-[11px] tracking-[0.15em] uppercase rounded-sm border transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-[#c4956a]/15 border-[#c4956a]/40 text-[#c4956a]"
                  : "bg-transparent border-[#3a3530] text-[#8a7d6b] hover:border-[#c4956a]/30 hover:text-[#b8a990]"
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
