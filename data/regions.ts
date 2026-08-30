export interface Region {
  id: string;
  name: string;
  artTradition: string;
  exampleArtwork: string;
  description: string;
  position: { x: number; y: number };
}

export const regions: Region[] = [
  {
    id: "maharashtra",
    name: "Maharashtra",
    artTradition: "Warli Painting & Rock-Cut Architecture",
    exampleArtwork: "Ajanta & Ellora Caves, Warli tribal painting",
    description:
      "Maharashtra is home to the UNESCO World Heritage Sites of Ajanta and Ellora, representing some of the finest rock-cut architecture in the world. The state is also the birthplace of Warli painting, an ancient tribal art form using geometric shapes on mud walls.",
    position: { x: 30, y: 62 },
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    artTradition: "Chola Bronze Sculpture & Temple Architecture",
    exampleArtwork: "Chola Nataraja, Brihadeeswarar Temple",
    description:
      "Tamil Nadu's Chola dynasty produced some of the finest bronze sculptures in world art history, particularly the iconic Nataraja. The state's Dravidian temple architecture, exemplified by the Brihadeeswarar Temple in Thanjavur, is renowned for its towering gopurams and intricate carvings.",
    position: { x: 38, y: 85 },
  },
  {
    id: "bihar",
    name: "Bihar",
    artTradition: "Madhubani (Mithila) Painting",
    exampleArtwork: "Madhubani paintings, Nalanda ruins",
    description:
      "Bihar is the birthplace of Madhubani (Mithila) painting, a vibrant folk art tradition characterized by geometric patterns and natural dyes. The state was also home to the ancient Buddhist university of Nalanda and the Mauryan Empire, which produced the Ashokan pillars.",
    position: { x: 55, y: 42 },
  },
  {
    id: "odisha",
    name: "Odisha",
    artTradition: "Pattachitra Painting & Temple Sculpture",
    exampleArtwork: "Pattachitra scrolls, Konark Sun Temple",
    description:
      "Odisha is renowned for Pattachitra painting — intricate cloth-based scroll paintings depicting mythological narratives. The state is also famous for the Konark Sun Temple (a UNESCO World Heritage Site) and the Jagannath Temple at Puri, both showcasing extraordinary sculptural traditions.",
    position: { x: 52, y: 56 },
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    artTradition: "Bengal School of Art & Terracotta Temples",
    exampleArtwork: "Bengal School paintings, Bishnupur terracotta temples",
    description:
      "West Bengal gave birth to the Bengal School of Art in the early 20th century — India's first major modern art movement. Led by Abanindranath Tagore, it rejected Western academic art and revived Indian artistic traditions. The state also features remarkable terracotta temple architecture at Bishnupur.",
    position: { x: 58, y: 48 },
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    artTradition: "Rajput Miniature Painting & Palace Architecture",
    exampleArtwork: "Rajput miniatures, Hawa Mahal, Jaipur frescoes",
    description:
      "Rajasthan developed distinct schools of miniature painting at courts including Jaipur, Jodhpur, Udaipur and Bundi. Characterized by bold colours, romantic themes and depictions of courtly life, Rajput miniatures are among India's finest artistic traditions. The state's palace and fort architecture is equally magnificent.",
    position: { x: 27, y: 40 },
  },
  {
    id: "gujarat",
    name: "Gujarat",
    artTradition: "Textile Art & Stepwell Architecture",
    exampleArtwork: "Patola silk, Rani ki Vav stepwell",
    description:
      "Gujarat is celebrated for its textile arts, including the double ikat Patola silk weaving tradition, bandhani (tie-dye) and intricate embroidery. The state also features extraordinary stepwell architecture, including the UNESCO-listed Rani ki Vav at Patan, adorned with over 500 sculptures.",
    position: { x: 20, y: 50 },
  },
  {
    id: "madhya-pradesh",
    name: "Madhya Pradesh",
    artTradition: "Buddhist Stupas & Rock Art",
    exampleArtwork: "Sanchi Stupa, Bhimbetka rock shelters",
    description:
      "Madhya Pradesh is home to the Great Stupa at Sanchi — one of the oldest stone structures in India — and the Bhimbetka rock shelters, which contain some of the earliest known human art in the Indian subcontinent, dating back approximately 30,000 years. The state also features the magnificent Khajuraho temples.",
    position: { x: 36, y: 48 },
  },
];
