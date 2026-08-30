import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Indian Art Through Time — An Interactive Journey Through 5,000 Years of Indian Art",
  description:
    "Explore the civilizations, traditions, masterpieces and artistic movements that shaped the visual history of India. An interactive digital timeline and museum experience.",
  keywords: [
    "Indian art",
    "Indian art history",
    "timeline",
    "Indus Valley",
    "Mughal art",
    "Indian painting",
    "Indian sculpture",
    "folk art",
    "Ajanta",
    "Ellora",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-sans)" }}>
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
