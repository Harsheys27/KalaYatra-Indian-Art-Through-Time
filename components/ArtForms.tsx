"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Hammer, Paintbrush, Building2, Flower2, Image, Layers, Scissors } from "lucide-react";

const artForms = [
  {
    icon: Hammer,
    title: "Sculpture",
    description:
      "From the bronze Dancing Girl of Mohenjo-daro to the Chola Nataraja, Indian sculpture spans over 4,500 years. Techniques include stone carving, bronze casting (lost-wax method), terracotta modelling and wood carving.",
    accent: "#C4956A",
  },
  {
    icon: Paintbrush,
    title: "Painting",
    description:
      "Indian painting traditions range from the ancient Ajanta murals to Mughal miniatures, Rajput court paintings and modern oil painting. Each tradition developed distinctive styles, techniques and subject matter.",
    accent: "#D4A574",
  },
  {
    icon: Building2,
    title: "Architecture",
    description:
      "Indian architecture encompasses rock-cut caves, stupas, temples with towering gopurams, Islamic mosques and mausoleums, stepwells and colonial-era buildings — each reflecting the spiritual and cultural values of their era.",
    accent: "#B89B6E",
  },
  {
    icon: Flower2,
    title: "Folk Art",
    description:
      "India's folk art traditions — Madhubani, Warli, Pattachitra, Gond and many more — are living art forms passed down through generations. They use natural materials and reflect the daily life, beliefs and rituals of communities.",
    accent: "#CD853F",
  },
  {
    icon: Image,
    title: "Miniature Painting",
    description:
      "Miniature painting flourished in Mughal, Rajput and Deccan courts from the 16th century onwards. These exquisitely detailed small-scale paintings depict court life, hunting, portraits, nature and literary narratives.",
    accent: "#B8860B",
  },
  {
    icon: Layers,
    title: "Mural Art",
    description:
      "From the Ajanta caves to the Kerala mural tradition, Indian mural painting has decorated temples, palaces and homes for millennia. Murals use natural pigments applied to prepared wall surfaces and often depict religious narratives.",
    accent: "#8B7355",
  },
  {
    icon: Scissors,
    title: "Textile Art",
    description:
      "India's textile traditions — including Patola silk weaving, Banarasi brocade, Kanchipuram silk, bandhani (tie-dye), kalamkari (pen-painted cloth) and chikankari embroidery — are among the richest in the world.",
    accent: "#9B8B6E",
  },
];

export default function ArtForms() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="art-forms" ref={ref} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#8a7d6b] text-xs tracking-[0.3em] uppercase mb-4">
            Artistic Traditions
          </p>
          <h2
            className="text-3xl md:text-5xl font-light tracking-[0.04em] mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            The Many Languages of <span className="text-[#c4956a]">Indian Art</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {artForms.map((form, i) => (
            <motion.div
              key={form.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-[#2a2520] border border-[#3a3530] rounded-sm p-6 cursor-default hover:border-[#c4956a]/20 transition-colors duration-500 card-glow"
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-colors duration-300"
                style={{
                  background: form.accent + "15",
                  border: `1px solid ${form.accent}30`,
                }}
              >
                <form.icon size={18} style={{ color: form.accent }} />
              </div>

              {/* Title */}
              <h3
                className="text-lg font-light mb-3 group-hover:text-[#c4956a] transition-colors duration-300"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-text-primary)" }}
              >
                {form.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-[#8a7d6b] leading-relaxed">
                {form.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
