import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about} data-aos="fade-up">
      <div className={styles.left}>
        <div className={styles.timeline}>
          <div className={styles.item}>
            <div className={styles.icon}>💻</div>
            <span>Frontend Development</span>
          </div>

          <div className={styles.item}>
            <div className={styles.icon}>⚛️</div>
            <span>React & Next.js</span>
          </div>

          <div className={styles.item}>
            <div className={styles.icon}>📱</div>
            <span>Responsive Web Applications</span>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <h2>About me</h2>

        <p>
          I'm a Frontend Developer specializing in React and Next.js, with
          experience building responsive, production-ready websites. I enjoy
          transforming UI designs into clean, reusable components while focusing
          on performance, accessibility, and user experience. Recently, I've
          worked on several real-world projects for businesses, developing and
          maintaining complete frontend interfaces.
        </p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.number}>3</span>
            <span className={styles.label}>Real Projects</span>
          </div>

          <div className={styles.stat}>
            <span className={styles.number}>100%</span>
            <span className={styles.label}>Responsive Design</span>
          </div>

          <div className={styles.stat}>
            <span className={styles.number}>Next.js</span>
            <span className={styles.label}>Primary Framework</span>
          </div>
        </div>
      </div>
    </section>
  );
}