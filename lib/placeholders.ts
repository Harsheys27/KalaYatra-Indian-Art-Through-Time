// Generates elegant SVG placeholder images for artifacts
// These create beautiful geometric patterns inspired by Indian art

interface PlaceholderConfig {
  title: string;
  accent: string;
  pattern: "circles" | "diamonds" | "waves" | "lotus" | "grid" | "arches" | "mandala";
}

const configs: Record<string, PlaceholderConfig> = {
  "dancing-girl": { title: "Dancing Girl", accent: "#C4956A", pattern: "circles" },
  "indus-seals": { title: "Indus Valley Seals", accent: "#A0845C", pattern: "grid" },
  "ashoka-capital": { title: "Lion Capital", accent: "#D4A574", pattern: "diamonds" },
  "sanchi-stupa": { title: "Sanchi Stupa", accent: "#B8956E", pattern: "arches" },
  "ajanta-caves": { title: "Ajanta Caves", accent: "#8B7355", pattern: "waves" },
  "ellora-caves": { title: "Ellora Caves", accent: "#9B8B6E", pattern: "mandala" },
  "chola-nataraja": { title: "Chola Nataraja", accent: "#C49B6A", pattern: "circles" },
  "mughal-miniature": { title: "Mughal Miniature", accent: "#B8860B", pattern: "diamonds" },
  "madhubani": { title: "Madhubani", accent: "#E25822", pattern: "grid" },
  "warli": { title: "Warli Painting", accent: "#CD853F", pattern: "circles" },
  "pattachitra": { title: "Pattachitra", accent: "#CC5500", pattern: "waves" },
  "raja-ravi-varma": { title: "Raja Ravi Varma", accent: "#8B6914", pattern: "lotus" },
  "bengal-school": { title: "Bengal School", accent: "#6B4423", pattern: "arches" },
  "amrita-sher-gil": { title: "Modern Indian Art", accent: "#704214", pattern: "mandala" },
};

function generatePattern(pattern: string, accent: string): string {
  switch (pattern) {
    case "circles":
      return Array.from({ length: 6 }, (_, i) =>
        `<circle cx="${200 + i * 30}" cy="${200 + i * 20}" r="${60 - i * 8}" fill="none" stroke="${accent}" stroke-width="0.8" opacity="${0.3 - i * 0.04}"/>`
      ).join("");
    case "diamonds":
      return Array.from({ length: 4 }, (_, i) =>
        `<rect x="${180 + i * 10}" y="${180 + i * 10}" width="${80 - i * 15}" height="${80 - i * 15}" fill="none" stroke="${accent}" stroke-width="0.6" opacity="${0.25}" transform="rotate(45 220 220)"/>`
      ).join("");
    case "waves":
      return Array.from({ length: 5 }, (_, i) =>
        `<path d="M 0 ${160 + i * 30} Q 110 ${140 + i * 30} 220 ${160 + i * 30} T 440 ${160 + i * 30}" fill="none" stroke="${accent}" stroke-width="0.6" opacity="${0.2}"/>`
      ).join("");
    case "lotus":
      return Array.from({ length: 8 }, (_, i) =>
        `<ellipse cx="220" cy="200" rx="20" ry="60" fill="none" stroke="${accent}" stroke-width="0.5" opacity="0.2" transform="rotate(${i * 45} 220 200)"/>`
      ).join("");
    case "grid":
      return Array.from({ length: 5 }, (_, i) =>
        `<line x1="${140 + i * 40}" y1="120" x2="${140 + i * 40}" y2="320" stroke="${accent}" stroke-width="0.3" opacity="0.15"/>
         <line x1="120" y1="${140 + i * 40}" x2="320" y2="${140 + i * 40}" stroke="${accent}" stroke-width="0.3" opacity="0.15"/>`
      ).join("");
    case "arches":
      return Array.from({ length: 3 }, (_, i) =>
        `<path d="M ${160 + i * 20} 280 Q ${220} ${160 - i * 30} ${280 - i * 20} 280" fill="none" stroke="${accent}" stroke-width="0.7" opacity="${0.25 - i * 0.05}"/>`
      ).join("");
    case "mandala":
      return Array.from({ length: 12 }, (_, i) =>
        `<line x1="220" y1="200" x2="${220 + 80 * Math.cos(i * Math.PI / 6)}" y2="${200 + 80 * Math.sin(i * Math.PI / 6)}" stroke="${accent}" stroke-width="0.4" opacity="0.2"/>`
      ).join("") + `<circle cx="220" cy="200" r="60" fill="none" stroke="${accent}" stroke-width="0.5" opacity="0.2"/><circle cx="220" cy="200" r="40" fill="none" stroke="${accent}" stroke-width="0.3" opacity="0.15"/>`;
    default:
      return "";
  }
}

export function getPlaceholderSvg(id: string): string {
  const config = configs[id];
  if (!config) return "";

  const pattern = generatePattern(config.pattern, config.accent);

  return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="440" height="400" viewBox="0 0 440 400">
    <defs>
      <linearGradient id="bg-${id}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1a1714"/>
        <stop offset="100%" stop-color="#2a2520"/>
      </linearGradient>
    </defs>
    <rect width="440" height="400" fill="url(#bg-${id})"/>
    ${pattern}
    <text x="220" y="200" text-anchor="middle" dominant-baseline="middle" fill="${config.accent}" font-family="Georgia, serif" font-size="18" opacity="0.6" letter-spacing="2">${config.title}</text>
  </svg>`)}`;
}

export default configs;
