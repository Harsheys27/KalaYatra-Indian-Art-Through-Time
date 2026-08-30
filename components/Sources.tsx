"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";

const sources = [
  {
    name: "Archaeological Survey of India (ASI)",
    url: "https://asi.nic.in/",
    description: "Official government body responsible for archaeological research and conservation of cultural monuments in India.",
  },
  {
    name: "UNESCO World Heritage Centre",
    url: "https://whc.unesco.org/",
    description: "International recognition and documentation of cultural and natural heritage sites including Ajanta, Ellora, Sanchi and others.",
  },
  {
    name: "National Museum, New Delhi",
    url: "https://nationalmuseumindia.gov.in/",
    description: "One of the largest museums in India, housing artifacts spanning 5,000 years of Indian cultural heritage.",
  },
  {
    name: "National Gallery of Modern Art (NGMA)",
    url: "https://ngmaindia.gov.in/",
    description: "Premier art gallery of India, preserving and promoting modern and contemporary Indian art.",
  },
  {
    name: "Ministry of Culture, Government of India",
    url: "https://www.indiaculture.gov.in/",
    description: "Government body overseeing the preservation and promotion of Indian art, culture and heritage.",
  },
  {
    name: "Indian Culture Portal",
    url: "https://indianculture.gov.in/",
    description: "Digital repository of Indian cultural heritage, including manuscripts, paintings, and artifacts.",
  },
  {
    name: "The Metropolitan Museum of Art — South Asian Art",
    url: "https://www.metmuseum.org/about-the-met/collection-areas/asian-art",
    description: "Extensive collection and scholarly resources on South Asian art and culture.",
  },
  {
    name: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/",
    description: "Referenced for public domain and freely licensed images of historical artifacts and artworks.",
  },
];

export default function Sources() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sources" ref={ref} className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#8a7d6b] text-xs tracking-[0.3em] uppercase mb-4">
            Academic References
          </p>
          <h2
            className="text-3xl md:text-5xl font-light tracking-[0.04em]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Sources & <span className="text-[#c4956a]">References</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {sources.map((source, i) => (
            <motion.a
              key={source.name}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex items-start gap-4 p-4 rounded-sm border border-[#3a3530] hover:border-[#c4956a]/20 transition-colors bg-[#2a2520]/50 hover:bg-[#2a2520]"
            >
              <ExternalLink
                size={16}
                className="text-[#8a7d6b] group-hover:text-[#c4956a] transition-colors mt-0.5 flex-shrink-0"
              />
              <div>
                <p className="text-sm text-[#f5f0e8] group-hover:text-[#c4956a] transition-colors mb-1">
                  {source.name}
                </p>
                <p className="text-xs text-[#8a7d6b] leading-relaxed">{source.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
