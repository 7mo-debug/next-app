"use client";
import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const backRef = useRef(null);
  const frontRef = useRef(null);
  const deskRef = useRef(null);

  useEffect(() => {
    const hero = backRef.current?.parentElement;

    const handleScroll = () => {
      if (!hero) return;

      const scrollY = window.scrollY;
      const heroTop = hero.offsetTop;
      const heroHeight = hero.offsetHeight;

      const scrollInsideHero = scrollY - heroTop;

      if (scrollInsideHero < 0 || scrollInsideHero > heroHeight) return;

      
      let progress = scrollInsideHero / (heroHeight * 0.5);

     
      progress = Math.min(Math.max(progress, 0), 1);

     

      
      backRef.current.style.transform = `translateY(${progress * 250}px)`;
      backRef.current.style.opacity = 1 - progress;

      frontRef.current.style.transform = `translateY(${progress * 350}px)`;
      frontRef.current.style.opacity = 1 - progress;

      
      deskRef.current.style.transform = `translateX(${progress * 400}px)`;
      deskRef.current.style.opacity = 1 - progress;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section id="home" className={styles.hero}>
      {/* Background */}
      <div className={styles.bg} />

      {/* Animated layers */}
      <div ref={backRef} className={`${styles.layer} ${styles.back}`} />
      <div ref={frontRef} className={`${styles.layer} ${styles.front}`} />
      <div ref={deskRef} className={`${styles.layer} ${styles.desk}`} />

      {/* Overlay */}
      <div className={styles.overlay} />

      {/* ORIGINAL CONTENT RESTORED */}
      <div className={styles.content}>
        <p className={styles.greeting}>
          Hello<span className={styles.dot}></span>
        </p>
        <h1 className={styles.name}>I’m Amin</h1>
        <h2 className={styles.title}>Software Developer</h2>

        <div className={styles.buttons}>
          <a href="#contact" className={styles.primary}>
            Got a project?
          </a>
          <a href="#resume" className={styles.secondary}>
            My resume
          </a>
        </div>

        <ul className={styles.skills}>
          <li>HTML5</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Next.js</li>
          <li>React</li>
          <li>Git</li>
          <li>GitHub</li>
        </ul>
      </div>
    </section>
  );
}
