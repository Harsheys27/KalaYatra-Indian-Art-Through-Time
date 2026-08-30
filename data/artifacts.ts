export interface Artifact {
  id: string;
  title: string;
  period: string;
  periodId: string;
  date: string;
  region: string;
  artForm: string;
  artist: string;
  shortDescription: string;
  detailedDescription: string;
  historicalSignificance: string;
  interestingFact: string;
  image: string;
  accent: string;
}

export const artifacts: Artifact[] = [
  {
    id: "dancing-girl",
    title: "Dancing Girl of Mohenjo-daro",
    period: "Indus Valley Civilization",
    periodId: "indus-valley",
    date: "c. 2500 BCE",
    region: "Sindh (present-day Pakistan)",
    artForm: "Sculpture",
    artist: "Unknown (Indus Valley Civilization)",
    shortDescription:
      "A small bronze sculpture of a young girl in a confident, naturalistic pose — one of the earliest known metal sculptures in the world.",
    detailedDescription:
      "The Dancing Girl is a bronze statuette approximately 10.5 cm tall, discovered in 1926 at Mohenjo-daro by archaeologist Ernest Mackay. The figure depicts a young girl standing in a relaxed tribhanga (three-bend) pose, her right hand resting on her hip and her left arm covered in bangles. Despite her small size, the sculpture conveys a remarkable sense of personality and confidence. The piece was created using the lost-wax casting technique, demonstrating the advanced metallurgical skills of the Indus Valley people.",
    historicalSignificance:
      "This sculpture is one of the oldest known bronze sculptures in the world and provides crucial evidence of the artistic sophistication of the Indus Valley Civilization. It demonstrates mastery of lost-wax casting over 4,500 years ago and challenges assumptions about the rigidity of ancient art.",
    interestingFact:
      "When British archaeologist Mortimer Wheeler first saw the figurine, he famously remarked, \"She's about fifteen years old I should think, not more, but she stands there with bangles all the way up her arm and nothing else on. A girl perfectly, for the moment, perfectly confident of herself and the world. There's nothing like her, I think, in the world.\"",
    image: "/artifacts/Dancing_girl_of_Mohenjo-daro.jpg",
    accent: "#C4956A",
  },
  {
    id: "indus-seals",
    title: "Indus Valley Seals",
    period: "Indus Valley Civilization",
    periodId: "indus-valley",
    date: "c. 2600–1900 BCE",
    region: "Indus Valley (Harappa, Mohenjo-daro)",
    artForm: "Sculpture / Glyptic Art",
    artist: "Unknown (Indus Valley Civilization)",
    shortDescription:
      "Small carved steatite seals featuring animals, deities and an undeciphered script — used for trade, identification and possibly religious purposes.",
    detailedDescription:
      "Over 3,500 seals have been discovered from Indus Valley sites. Most are small square or rectangular objects carved from steatite (soapstone), depicting animals such as the humped bull, elephant, rhinoceros, tiger and the mythical unicorn-like creature. Many seals also feature a still-undeciphered script. The most famous is the Pashupati Seal, which shows a seated figure surrounded by animals, interpreted by some scholars as a proto-Shiva figure. The seals were likely used for trade and administrative purposes.",
    historicalSignificance:
      "The seals are primary evidence of the Indus Valley script, which remains undeciphered. They reveal a sophisticated system of trade, administration and possibly religious belief across one of the world's earliest urban civilizations.",
    interestingFact:
      "The Pashupati Seal, depicting a figure seated in a yogic pose surrounded by animals, has led some scholars to suggest that yoga and meditation practices may have roots stretching back over 4,000 years to the Indus Valley Civilization.",
    image: "/artifacts/IndusValleySeal.jpg",
    accent: "#A0845C",
  },
  {
    id: "ashoka-capital",
    title: "Ashokan Lion Capital",
    period: "Ancient & Classical India",
    periodId: "ancient",
    date: "c. 250 BCE",
    region: "Sarnath, Uttar Pradesh",
    artForm: "Sculpture",
    artist: "Commissioned by Emperor Ashoka (Maurya Dynasty)",
    shortDescription:
      "A polished sandstone capital with four back-to-back Asiatic lions — adopted as the national emblem of India.",
    detailedDescription:
      "The Lion Capital of Ashoka originally stood atop a pillar erected by Emperor Ashoka at Sarnath, the site where the Buddha first taught the Dharma. The capital features four Asiatic lions standing back-to-back, mounted on a circular abacus decorated with a bull, horse, lion and elephant separated by dharma wheels (Ashoka Chakras). Below the abacus is a bell-shaped lotus. The entire piece is carved from a single block of polished Chunar sandstone, exhibiting the distinctive Mauryan polish that gives it an almost mirror-like sheen.",
    historicalSignificance:
      "The Lion Capital is the national emblem of India. The Ashoka Chakra (wheel) from its base appears on the Indian national flag. It represents Emperor Ashoka's commitment to Dhamma (righteousness) and non-violence after the Kalinga War, and symbolizes the spread of Buddhism across Asia.",
    interestingFact:
      "The four lions are said to symbolize power, courage, confidence and pride. The polishing technique used on the sandstone was so advanced that modern researchers have been unable to fully replicate the 'Mauryan polish' with period-appropriate tools.",
    image: "/artifacts/Ashoka.jpg",
    accent: "#D4A574",
  },
  {
    id: "sanchi-stupa",
    title: "Sanchi Stupa",
    period: "Ancient & Classical India",
    periodId: "ancient",
    date: "c. 3rd century BCE – 1st century CE",
    region: "Sanchi, Madhya Pradesh",
    artForm: "Architecture / Sculpture",
    artist: "Commissioned by Emperor Ashoka; later additions by Satavahana and other dynasties",
    shortDescription:
      "One of the oldest stone structures in India, featuring elaborately carved gateways (toranas) depicting the life of Buddha and Jataka tales.",
    detailedDescription:
      "The Great Stupa at Sanchi (Stupa No. 1) was originally commissioned by Emperor Ashoka in the 3rd century BCE but was enlarged and embellished over the following centuries. The hemispherical dome is surrounded by a railing and four ornate gateways (toranas) added during the Satavahana period (1st century BCE to 1st century CE). The toranas are covered with intricate relief carvings depicting scenes from the life of the Buddha, Jataka tales, and daily life in ancient India. Notably, the Buddha is represented through symbols — the Bodhi tree, footprints, an empty throne — rather than in human form, reflecting early Buddhist artistic conventions.",
    historicalSignificance:
      "Sanchi is one of the best-preserved Buddhist complexes in India and a UNESCO World Heritage Site. The toranas represent the pinnacle of early Indian narrative sculpture and document the transition from aniconic to iconic representations of the Buddha.",
    interestingFact:
      "The Great Stupa was 'rediscovered' in 1818 by British officer Captain Taylor. It had been largely abandoned and overgrown after the decline of Buddhism in India. The site was restored under the direction of Sir John Marshall in the early 20th century.",
    image: "/artifacts/SachiStupa.jpg",
    accent: "#B8956E",
  },
  {
    id: "ajanta-caves",
    title: "Ajanta Cave Paintings",
    period: "Ancient & Classical India",
    periodId: "ancient",
    date: "c. 2nd century BCE – 5th century CE",
    region: "Aurangabad, Maharashtra",
    artForm: "Mural Art / Painting",
    artist: "Buddhist monks and artisans under Vakataka and Satavahana patronage",
    shortDescription:
      "Exquisite mural paintings in rock-cut caves depicting the life of the Buddha and Jataka tales — considered masterpieces of Buddhist religious art.",
    detailedDescription:
      "The Ajanta Caves are a complex of 30 rock-cut Buddhist cave monuments dating from the 2nd century BCE to about 480 CE. The caves include both chaitya-grihas (prayer halls) and viharas (monasteries). The paintings found in caves such as Cave 1, Cave 2, Cave 16 and Cave 17 are among the finest surviving examples of ancient Indian art. The murals depict the Jataka tales (stories of the Buddha's previous lives), the life of Gautama Buddha, and scenes from courtly and everyday life. The paintings use a technique involving layers of plaster, outline drawing and natural pigments applied over damp surfaces.",
    historicalSignificance:
      "Ajanta is a UNESCO World Heritage Site and one of the greatest achievements of Indian art. The cave paintings influenced the development of art across South and Southeast Asia and represent the high point of classical Indian painting. They provide invaluable insight into ancient Indian life, fashion, customs and religious practices.",
    interestingFact:
      "The caves were accidentally rediscovered in 1819 by a British officer named John Smith during a tiger hunt. He noticed a horseshoe-shaped rock face and found the entrance to Cave 10, still bearing ancient paintings that had survived for over a thousand years in the dark.",
    image: "/artifacts/AjantaCaves.jpg",
    accent: "#8B7355",
  },
  {
    id: "ellora-caves",
    title: "Ellora Cave Sculptures",
    period: "Medieval India",
    periodId: "medieval",
    date: "c. 600–1000 CE",
    region: "Aurangabad, Maharashtra",
    artForm: "Architecture / Sculpture",
    artist: "Artisans under Rashtrakuta, Chalukya and Yadava patronage",
    shortDescription:
      "A remarkable complex of Hindu, Buddhist and Jain rock-cut temples featuring the monolithic Kailasa Temple — carved from a single rock.",
    detailedDescription:
      "The Ellora Caves comprise 34 rock-cut caves: 12 Buddhist (caves 1–12), 17 Hindu (caves 13–29) and 5 Jain (caves 30–34). The crowning achievement is Cave 16, the Kailasa Temple, a monolithic structure dedicated to Lord Shiva. Carved from top to bottom out of a single basalt cliff, the Kailasa Temple represents Mount Kailash and is the largest monolithic rock excavation in the world. The temple complex includes elaborately sculpted panels depicting scenes from the Ramayana, Mahabharata, and the adventures of Lord Shiva and Lord Vishnu.",
    historicalSignificance:
      "Ellora is a UNESCO World Heritage Site that uniquely demonstrates the religious harmony of ancient India, with Buddhist, Hindu and Jain monuments side by side. The Kailasa Temple is considered one of the most remarkable feats of architecture and engineering in human history.",
    interestingFact:
      "Engineers estimate that approximately 200,000 tonnes of rock were removed to create the Kailasa Temple. The entire structure was carved from the top down — meaning the architects had to envision the complete temple before making a single cut, as there was no room for error.",
    image: "/artifacts/Ellora_Caves.jpg",
    accent: "#9B8B6E",
  },
  {
    id: "chola-nataraja",
    title: "Chola Nataraja",
    period: "Medieval India",
    periodId: "medieval",
    date: "c. 10th–12th century CE",
    region: "Tamil Nadu",
    artForm: "Sculpture",
    artist: "Chola Dynasty bronze casters",
    shortDescription:
      "An iconic bronze sculpture of Lord Shiva as the cosmic dancer — one of the finest achievements of Indian bronze casting and a universal symbol of Indian art.",
    detailedDescription:
      "The Nataraja (Lord of the Dance) is a depiction of the Hindu god Shiva as the cosmic dancer who performs the tandava, the dance through which the universe is created, maintained and dissolved. The Chola bronzes of Tamil Nadu, created using the lost-wax technique, are considered the finest expressions of this iconographic form. Shiva is shown with four arms within a circle of flames (prabhamandala). His upper right hand holds a damaru (drum, representing creation), his upper left hand holds agni (fire, representing destruction), his lower right hand is in abhaya mudra (the gesture of fearlessness), and his lower left hand points toward his raised foot (representing liberation). He dances upon the demon Apasmara, who represents ignorance.",
    historicalSignificance:
      "The Chola Nataraja is arguably the most recognizable symbol of Indian art worldwide. It encapsulates Hindu cosmology — the cycle of creation, preservation and destruction — in a single image. Chola bronze casting techniques influenced metalwork across Southeast Asia.",
    interestingFact:
      "A large Chola-style Nataraja statue stands at CERN, the European Organization for Nuclear Research in Geneva, Switzerland. It was a gift from the Indian government, reflecting physicist Fritjof Capra's observation that the cosmic dance of Shiva metaphorically parallels the dance of subatomic particles.",
    image: "/artifacts/Natraja.jpg",
    accent: "#C49B6A",
  },
  {
    id: "mughal-miniature",
    title: "Mughal Miniature Painting",
    period: "Mughal Era",
    periodId: "mughal",
    date: "c. 16th–19th century CE",
    region: "Delhi, Agra, Lahore",
    artForm: "Miniature Painting",
    artist: "Court painters including Mir Sayyid Ali, Abd al-Samad, Basawan, Mansur",
    shortDescription:
      "Exquisitely detailed small-scale paintings created for Mughal emperors — blending Persian, Indian and European artistic traditions.",
    detailedDescription:
      "Mughal miniature painting flourished under the patronage of emperors Akbar, Jahangir and Shah Jahan from the 16th to the 19th century. The tradition began when Emperor Humayun brought Persian painters Mir Sayyid Ali and Abd al-Samad to India. Under Akbar, a royal workshop (karkhana) of over 100 painters produced illustrated manuscripts such as the Hamzanama and Akbarnama. The style evolved to incorporate Indian naturalism and, later, European techniques of perspective and shading introduced by Jesuit missionaries. Subjects included court scenes, battles, hunting, portraits, flora and fauna, and literary epics.",
    historicalSignificance:
      "Mughal miniature painting represents one of the most important artistic syntheses in world art history — merging Persian sophistication with Indian sensibility and European techniques. It documented the political, cultural and natural world of the Mughal Empire with extraordinary precision.",
    interestingFact:
      "Emperor Jahangir was so passionate about painting that he claimed he could identify the work of individual artists by their brushstrokes alone. His court painter Ustad Mansur was given the title 'Nadir al-Asr' (Wonder of the Age) for his extraordinarily detailed depictions of birds and animals.",
    image: "/artifacts/Mughal.jpg",
    accent: "#B8860B",
  },
  {
    id: "madhubani",
    title: "Madhubani Painting",
    period: "Regional & Folk Traditions",
    periodId: "regional",
    date: "Ancient tradition, documented from c. 7th century CE onwards",
    region: "Mithila, Bihar",
    artForm: "Folk Art / Painting",
    artist: "Women artists of Mithila (traditionally)",
    shortDescription:
      "A vibrant folk art tradition from Bihar characterized by geometric patterns, natural dyes and depictions of Hindu deities, nature and rituals.",
    detailedDescription:
      "Madhubani painting (also known as Mithila painting) is a traditional art form practiced in the Mithila region of Bihar and parts of Nepal. Traditionally created by women on the walls and floors of homes during festivals, weddings and other auspicious occasions, the art form uses natural dyes and pigments derived from plants, soot and minerals. The paintings are characterized by eye-catching geometric patterns, bold outlines and the filling of all empty spaces with floral and animal motifs. Subjects include Hindu deities (especially Krishna and Radha), scenes from epics, fertility symbols, fish, peacocks, the sun and moon, and the tulsi plant.",
    historicalSignificance:
      "Madhubani painting preserves an unbroken artistic tradition that has been passed down through generations of women in Bihar. It gained international recognition after the 1934 Bihar earthquake when British colonial officer William Archer documented the paintings during relief work.",
    interestingFact:
      "In the 1960s, when droughts led to economic hardship in Mithila, the Indian government encouraged women to paint on paper and cloth for commercial sale, transforming a domestic ritual art into a globally recognized art form that now provides livelihoods to thousands of artists.",
    image: "/artifacts/Madhubani.png",
    accent: "#E25822",
  },
  {
    id: "warli",
    title: "Warli Painting",
    period: "Regional & Folk Traditions",
    periodId: "regional",
    date: "Ancient tradition (possibly 2,500+ years old)",
    region: "Maharashtra (Thane, Palghar districts)",
    artForm: "Folk Art / Painting",
    artist: "Warli tribe",
    shortDescription:
      "A tribal art tradition using simple white geometric forms on mud walls to depict daily life, nature and the harvest — among the oldest art forms in India.",
    detailedDescription:
      "Warli painting is a tribal art form practiced by the Warli (or Varli) people, an indigenous tribe in the northern Sahyadri Range of Maharashtra. The paintings use a basic graphic vocabulary of circles, triangles and squares to represent the sun, trees, mountains and human figures. Traditionally painted on the mud walls of homes using white rice paste on a red ochre or cow-dung wash background, the art depicts scenes of daily life — farming, fishing, hunting, festivals, dances (especially the tarpa dance) and wedding rituals. The style is characterized by its simplicity, rhythmic repetition and absence of mythological figures from mainstream Hinduism.",
    historicalSignificance:
      "Warli art is believed to be one of the oldest art forms in India, with possible roots dating back to 2,500 BCE or earlier. It provides a visual record of tribal life, beliefs and social customs that predate written history in the region.",
    interestingFact:
      "The central motif in traditional Warli wedding paintings is not the bride and groom, but 'Palaghata' — the mother goddess symbolizing fertility. The entire painting radiates outward from this central female figure, reflecting the matriarchal elements in Warli culture.",
    image: "/artifacts/Warli_painting.jpg",
    accent: "#CD853F",
  },
  {
    id: "pattachitra",
    title: "Pattachitra",
    period: "Regional & Folk Traditions",
    periodId: "regional",
    date: "Ancient tradition (c. 5th century CE onwards)",
    region: "Odisha",
    artForm: "Folk Art / Painting",
    artist: "Chitrakar (traditional painter) community",
    shortDescription:
      "Traditional cloth-based scroll paintings from Odisha depicting mythological narratives of Jagannath and Vaishnava traditions with intricate detail.",
    detailedDescription:
      "Pattachitra (from the Sanskrit 'patta' meaning cloth and 'chitra' meaning picture) is a traditional painting art form from the state of Odisha in eastern India. The paintings are done on specially prepared cloth treated with a mixture of chalk and gum made from tamarind seeds. Artists use natural colours derived from stones, plants and conch shells. The paintings are characterized by bold outlines, vibrant colours and intricate decorative borders. Subjects primarily include depictions of Lord Jagannath and his siblings, stories from the Ramayana and Mahabharata, Vaishnava legends, and the ten avatars (dashavatara) of Vishnu.",
    historicalSignificance:
      "Pattachitra is intimately connected with the Jagannath temple tradition in Puri, Odisha. The art form serves both religious and narrative functions and has been an important medium for visual storytelling in Indian culture for centuries.",
    interestingFact:
      "Each year, when the wooden idols of Lord Jagannath, Balabhadra and Subhadra in the Puri temple are repainted during the 'Nabakalebara' ritual, Pattachitra artists are the ones entrusted with this sacred task. The painting tradition and temple ritual have been inseparable for centuries.",
    image: "/artifacts/Pattachitra.jpg",
    accent: "#CC5500",
  },
  {
    id: "raja-ravi-varma",
    title: "Raja Ravi Varma's Paintings",
    period: "Colonial Period",
    periodId: "colonial",
    date: "c. 1848–1906",
    region: "Kerala / Baroda",
    artForm: "Painting (Oil on canvas)",
    artist: "Raja Ravi Varma (1848–1906)",
    shortDescription:
      "The first major Indian artist to master European oil painting techniques and use them to depict Hindu mythological subjects — making Indian art accessible to the masses through prints.",
    detailedDescription:
      "Raja Ravi Varma (1848–1906) was a painter from the princely state of Travancore (present-day Kerala) who is widely regarded as one of the greatest painters in the history of Indian art. He fused European academic realism — particularly oil painting techniques learned from visiting European artists — with Indian subjects drawn from Hindu epics and mythology. His paintings of draped sari-clad women depicting goddesses like Lakshmi, Saraswati and characters from the Ramayana and Mahabharata set the visual standard for how these figures are popularly imagined in India today. In 1894, he established a lithographic press in Bombay, producing affordable prints that brought art into ordinary Indian homes.",
    historicalSignificance:
      "Ravi Varma bridged Indian and European art traditions and democratized art in India through mass-produced oleograph prints. His visual interpretations of mythological figures became so popular that they continue to influence calendar art, religious imagery and popular culture in India.",
    interestingFact:
      "Raja Ravi Varma's oleograph press in Bombay made art affordable for ordinary Indians for the first time. His prints became so ubiquitous that the term 'Ravi Varma prints' became synonymous with popular religious art in India — the colourful images of gods and goddesses seen in homes, shops and temples across the country.",
    image: "/artifacts/Raja_Ravi_Varma.jpg",
    accent: "#8B6914",
  },
  {
    id: "bengal-school",
    title: "Bharat Mata",
    period: "Colonial Period",
    periodId: "colonial",
    date: "c. 1905",
    region: "Kolkata, West Bengal",
    artForm: "Painting",
    artist: "Abanindranath Tagore",
    shortDescription:
      "A nationalist art movement that rejected Western academic styles and revived Indian artistic traditions, drawing on Mughal miniatures, Ajanta murals and Japanese wash techniques.",
    detailedDescription:
      "The Bengal School of Art emerged in the early 20th century as a reaction against both the Western academic art promoted in British India and the commercial oleographs of Raja Ravi Varma. Founded by Abanindranath Tagore (nephew of Rabindranath Tagore) and supported by British art teacher E.B. Havell, the movement sought to create a distinctly Indian modernism rooted in Indian aesthetic traditions. Abanindranath drew inspiration from Mughal miniatures, Ajanta cave paintings and Japanese wash techniques (learned from visiting Japanese artist Okakura Kakuzo). Key works include Abanindranath's 'Bharat Mata' (1905) — an allegorical depiction of India as a goddess — and Nandalal Bose's illustrations for the Indian Constitution.",
    historicalSignificance:
      "The Bengal School was the first major modern art movement in India and was closely linked to the Indian independence movement and cultural nationalism. It challenged the colonial assumption that Indian art was inferior to Western art and laid the groundwork for all subsequent Indian modern art movements.",
    interestingFact:
      "Nandalal Bose, a key figure of the Bengal School, was personally chosen by Mahatma Gandhi to create the visual decorations for the Haripura session of the Indian National Congress in 1938. Later, he was commissioned to illustrate the original handwritten copy of the Constitution of India.",
    image: "/artifacts/Bharat_Mata_by_Abanindranath_Tagore.jpg",
    accent: "#6B4423",
  },
];
