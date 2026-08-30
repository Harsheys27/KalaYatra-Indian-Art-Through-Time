"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import { regions } from "@/data/regions";

export default function ArtMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const selected = regions.find((r) => r.id === selectedRegion);

  return (
    <section id="regions" ref={ref} className="py-24 md:py-32 pattern-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#8a7d6b] text-xs tracking-[0.3em] uppercase mb-4">
            Regional Diversity
          </p>
          <h2
            className="text-3xl md:text-5xl font-light tracking-[0.04em] mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            The Geography of <span className="text-[#c4956a]">Indian Art</span>
          </h2>
          <p className="text-sm text-[#8a7d6b] max-w-lg mx-auto">
            Click on a region to explore its unique artistic traditions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* SVG Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-[3/4]">
              {/* Simplified India outline */}
              <svg viewBox="0 0 100 130" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* India shape (simplified) */}
                <path
                  d="M35,5 L45,3 L55,5 L65,4 L75,8 L78,15 L80,22 L82,28 L78,32 L72,30 L68,32 L70,38 L73,42 L70,48 L65,50 L62,55 L58,58 L55,65 L52,72 L50,80 L48,88 L46,95 L45,100 L42,105 L38,110 L35,115 L33,118 L35,120 L30,125 L28,120 L25,115 L22,108 L20,100 L18,92 L16,85 L15,78 L14,70 L16,62 L18,55 L20,50 L18,45 L15,40 L12,35 L15,28 L18,22 L22,15 L28,10 Z"
                  fill="#2a2520"
                  stroke="#3a3530"
                  strokeWidth="0.5"
                />

                {/* Interactive region dots */}
                {regions.map((region) => (
                  <g key={region.id}>
                    <circle
                      cx={region.position.x}
                      cy={region.position.y}
                      r={selectedRegion === region.id ? "3.5" : "2.5"}
                      fill={selectedRegion === region.id ? "#c4956a" : "#c4956a66"}
                      stroke={selectedRegion === region.id ? "#dbb896" : "transparent"}
                      strokeWidth="1"
                      className="cursor-pointer transition-all duration-300"
                      onClick={() => setSelectedRegion(region.id === selectedRegion ? null : region.id)}
                    />
                    {/* Pulse animation for selected */}
                    {selectedRegion === region.id && (
                      <circle
                        cx={region.position.x}
                        cy={region.position.y}
                        r="6"
                        fill="none"
                        stroke="#c4956a"
                        strokeWidth="0.3"
                        opacity="0.5"
                      >
                        <animate
                          attributeName="r"
                          values="4;8;4"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.5;0;0.5"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                    {/* Label */}
                    <text
                      x={region.position.x}
                      y={region.position.y - 5}
                      textAnchor="middle"
                      className="cursor-pointer"
                      fill={selectedRegion === region.id ? "#f5f0e8" : "#8a7d6b"}
                      fontSize="2.5"
                      fontFamily="Inter, sans-serif"
                      onClick={() => setSelectedRegion(region.id === selectedRegion ? null : region.id)}
                    >
                      {region.name}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </motion.div>

          {/* Region details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {selected ? (
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-[#2a2520] border border-[#3a3530] rounded-sm p-6 md:p-8"
              >
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={16} className="text-[#c4956a]" />
                  <p className="text-xs tracking-[0.2em] uppercase text-[#c4956a]">
                    {selected.name}
                  </p>
                </div>
                <h3
                  className="text-xl md:text-2xl font-light mb-2"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--color-text-primary)" }}
                >
                  {selected.artTradition}
                </h3>
                <p className="text-sm text-[#c4956a]/70 mb-4">{selected.exampleArtwork}</p>
                <div className="section-divider mb-4" />
                <p className="text-sm text-[#b8a990] leading-relaxed">{selected.description}</p>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center">
                <MapPin size={32} className="text-[#3a3530] mb-4" />
                <p className="text-[#8a7d6b] text-sm">
                  Select a region on the map to explore its artistic traditions
                </p>
              </div>
            )}

            {/* Region list (mobile-friendly) */}
            <div className="mt-6 grid grid-cols-2 gap-2">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id === selectedRegion ? null : region.id)}
                  className={`text-left px-3 py-2 text-xs tracking-[0.1em] rounded-sm border transition-all duration-300 ${
                    selectedRegion === region.id
                      ? "bg-[#c4956a]/10 border-[#c4956a]/30 text-[#c4956a]"
                      : "bg-transparent border-[#3a3530] text-[#8a7d6b] hover:border-[#c4956a]/20 hover:text-[#b8a990]"
                  }`}
                >
                  {region.name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
