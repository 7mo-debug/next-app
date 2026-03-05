import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about} data-aos="fade-up">
      <div className={styles.left}>
        <div className={styles.timeline}>
          <div className={styles.item}>
            <div className={styles.icon}>💻</div>
            <span>Website Development</span>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>📱</div>
            <span>App Development</span>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>☁️</div>
            <span>Website Hosting</span>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <h2>About me</h2>
        <p>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quisquam aspernatur ratione beatae, minus cum ipsa eum id vitae maxime sit expedita quae saepe a corporis magnam asperiores perferendis voluptas.
        </p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.number}>120 +</span>
            <span className={styles.label}>Completed Projects</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.number}>95 %</span>
            <span className={styles.label}>Client satisfaction</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.number}>10 +</span>
            <span className={styles.label}>Years of experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
