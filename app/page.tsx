import Hero from "@/components/Hero/Hero";
import styles from "./page.module.css";
import Portfolio from "@/components/Portfolio/Portfolio";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section id="home">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          {/* <div style={{ height: "500px", textAlign: "center", color: "white" }}>
            <h2>Contact Section</h2>
          </div> */}
        </section>
      </main>
    </div>
  );
}
