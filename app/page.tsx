"use client";

import Hero from "@/components/Hero/Hero";
import styles from "./page.module.css";
import Portfolio from "@/components/Portfolio/Portfolio";
import About from "@/components/About/About";
import SkillsSection from "@/components/Skills/SkillsSection";
import Contact from "@/components/Contact/Contact";
import { usePostHogTracking } from "@/hooks/usePostHogTracking";

export default function Home() {
  // Initialize PostHog tracking
  usePostHogTracking();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section id="home">
          <Hero />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
