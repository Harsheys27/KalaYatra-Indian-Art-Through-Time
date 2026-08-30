"use client";

import { useState, useCallback } from "react";
import { artifacts } from "@/data/artifacts";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import PeriodFilter from "@/components/PeriodFilter";
import Timeline from "@/components/Timeline";
import ArtifactModal from "@/components/ArtifactModal";
import ArtMap from "@/components/ArtMap";
import ArtForms from "@/components/ArtForms";
import DidYouKnow from "@/components/DidYouKnow";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Sources from "@/components/Sources";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [modalArtifactId, setModalArtifactId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentArtifact = artifacts.find((a) => a.id === modalArtifactId) || null;
  const currentIndex = artifacts.findIndex((a) => a.id === modalArtifactId);

  const openModal = useCallback((id: string) => {
    setModalArtifactId(id);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const prevArtifact = useCallback(() => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : artifacts.length - 1;
    setModalArtifactId(artifacts[newIndex].id);
  }, [currentIndex]);

  const nextArtifact = useCallback(() => {
    const newIndex = currentIndex < artifacts.length - 1 ? currentIndex + 1 : 0;
    setModalArtifactId(artifacts[newIndex].id);
  }, [currentIndex]);

  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <Hero />

      <div className="section-divider" />

      <PeriodFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <Timeline onArtifactClick={openModal} activeFilter={activeFilter} />

      <div className="section-divider" />

      <ArtMap />

      <div className="section-divider" />

      <ArtForms />

      <div className="section-divider" />

      <DidYouKnow />

      <div className="section-divider" />

      <Gallery onArtifactClick={openModal} />

      <div className="section-divider" />

      <About />

      <div className="section-divider" />

      <Sources />

      <Footer />
      <BackToTop />

      <ArtifactModal
        artifact={currentArtifact}
        isOpen={isModalOpen}
        onClose={closeModal}
        onPrev={prevArtifact}
        onNext={nextArtifact}
      />
    </main>
  );
}
