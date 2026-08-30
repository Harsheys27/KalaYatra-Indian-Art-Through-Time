"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToTimeline = () => {
    const el = document.getElementById("timeline");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pattern-bg">
      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Large mandala-inspired circle */}
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] opacity-[0.04] float-animation">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="90" fill="none" stroke="#c4956a" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="70" fill="none" stroke="#c4956a" strokeWidth="0.3" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="#c4956a" strokeWidth="0.3" />
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1="100"
                y1="10"
                x2="100"
                y2="190"
                stroke="#c4956a"
                strokeWidth="0.2"
                transform={`rotate(${i * 30} 100 100)`}
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <circle
                key={`dot-${i}`}
                cx={100 + 80 * Math.cos((i * Math.PI * 2) / 8)}
                cy={100 + 80 * Math.sin((i * Math.PI * 2) / 8)}
                r="3"
                fill="#c4956a"
                opacity="0.5"
              />
            ))}
          </svg>
        </div>

        {/* Smaller decorative circle */}
        <div className="absolute bottom-1/4 -left-16 w-[300px] h-[300px] opacity-[0.03] float-animation-delayed">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="80" fill="none" stroke="#c4956a" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="#c4956a" strokeWidth="0.3" />
            {[...Array(6)].map((_, i) => (
              <rect
                key={i}
                x="95"
                y="20"
                width="10"
                height="10"
                fill="none"
                stroke="#c4956a"
                strokeWidth="0.3"
                transform={`rotate(${i * 60} 100 100)`}
              />
            ))}
          </svg>
        </div>

        {/* Lotus-like dots */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-[#c4956a]"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 18}%`,
              opacity: 0.15,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1714] to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Course label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#8a7d6b] text-xs tracking-[0.3em] uppercase mb-8"
        >
          21LE M301T • Indian Art Form
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-[0.04em] mb-6"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-text-primary)" }}
        >
          INDIAN ART
          <br />
          <span className="text-[#c4956a]">THROUGH TIME</span>
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-24 h-px bg-[#c4956a]/50 mx-auto mb-6"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-base sm:text-lg tracking-[0.08em] uppercase mb-4"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-text-secondary)" }}
        >
          An Interactive Journey Through 5,000 Years of Indian Art
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-sm md:text-base text-[#8a7d6b] max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Explore the civilizations, traditions, masterpieces and artistic movements that shaped
          the visual history of India.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={scrollToTimeline}
          className="btn-gold px-8 py-4 text-xs tracking-[0.2em] uppercase rounded-sm"
        >
          Begin the Journey →
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-[#3a3530] flex items-start justify-center pt-1.5"
          >
            <div className="w-0.5 h-2 bg-[#c4956a]/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
