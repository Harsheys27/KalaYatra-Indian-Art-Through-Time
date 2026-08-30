export interface Period {
  id: string;
  number: string;
  title: string;
  date: string;
  description: string;
  accent: string;
}

export const periods: Period[] = [
  {
    id: "indus-valley",
    number: "01",
    title: "Indus Valley Civilization",
    date: "c. 2500–1900 BCE",
    description:
      "One of the world's earliest urban civilizations, flourishing along the Indus River. Renowned for its advanced city planning, drainage systems and distinctive artistic traditions including bronze sculptures, terracotta figurines and intricately carved seals.",
    accent: "#C4956A",
  },
  {
    id: "ancient",
    number: "02",
    title: "Ancient & Classical India",
    date: "c. 600 BCE–600 CE",
    description:
      "An era of profound artistic, philosophical and religious development. The rise of Buddhism and Jainism inspired monumental architecture, stupas, rock-cut caves and some of the finest mural paintings in world art history.",
    accent: "#D4A574",
  },
  {
    id: "medieval",
    number: "03",
    title: "Medieval India",
    date: "c. 600–1500 CE",
    description:
      "A period of magnificent temple architecture, bronze sculpture and intricate stone carvings. The Chola, Pallava, Hoysala and Chandela dynasties created architectural and sculptural masterpieces that still inspire awe.",
    accent: "#B89B6E",
  },
  {
    id: "mughal",
    number: "04",
    title: "Mughal Era",
    date: "1526–1857 CE",
    description:
      "The Mughal emperors, great patrons of art, brought Persian, Indian and European traditions together. Mughal miniature painting, architecture (including the Taj Mahal) and decorative arts reached extraordinary levels of refinement.",
    accent: "#B8860B",
  },
  {
    id: "regional",
    number: "05",
    title: "Regional & Folk Traditions",
    date: "Various periods",
    description:
      "Across India, vibrant folk and tribal art traditions developed independently, passed down through generations. From Madhubani in Bihar to Warli in Maharashtra and Pattachitra in Odisha, these living traditions connect communities to their roots.",
    accent: "#CD853F",
  },
  {
    id: "colonial",
    number: "06",
    title: "Colonial Period",
    date: "18th–20th century",
    description:
      "The encounter with European art traditions sparked both imitation and resistance. Artists like Raja Ravi Varma mastered Western techniques, while the Bengal School reclaimed Indian identity through a return to indigenous aesthetics.",
    accent: "#8B6914",
  },
];
