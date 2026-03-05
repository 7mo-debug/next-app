import styles from "./Projects.module.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";

export default function Projects() {
  return (
    <div className={styles.all}>
      <section id="projects" className={styles.about} >
        <div className={styles.head}>
          <h1 className={styles.header}>Projects</h1>
          <div className={styles.vline}></div>
          <span className={styles.dot}></span>
        </div>

        {/* ================= FIRST PROJECT ================= */}
        <div className={styles.projectRow} data-aos="fade-right">
          {/* LEFT SIDE */}
          <div className={styles.todos}>
            <h1 className={styles.todosHead}>Todos App</h1>

            <div className={styles.tags}>
              <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
              <span>React.js</span>
            </div>

            <p
              style={{
                maxWidth: "500px",
                margin: "24px",
                fontFamily: "cursive",
              }}
              className={styles.description}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              reprehenderit soluta dicta vitae? Maiores beatae deleniti
              aspernatur quaerat.
            </p>

            <div className={styles.buttons}>
              <a
                href="https://github.com/7mo-debug/next-app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primary}
              >
                View Github
              </a>

              <Link
                href="https://amin-todos.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                View project
                <OpenInNewIcon fontSize="small" />
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className={styles.imageWrapper}>
            <img src="/todos.png" alt="Todos App Preview" />
          </div>
        </div>

        {/* ================= SECOND PROJECT (REVERSED) ================= */}
        <div className={`${styles.projectRow} ${styles.reverse}`} data-aos="fade-left">
          {/* LEFT SIDE (IMAGE NOW) */}
          <div className={styles.imageWrapper}>
            <img src="/weather.png" alt="Project 2 Preview" />
          </div>

          {/* RIGHT SIDE (CONTENT NOW) */}
          <div className={styles.todos}>
            <h1 className={styles.todosHead}>Weather App</h1>

            <div className={styles.tags}>
              <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
              <span>Next.js</span>
            </div>

            <p
              style={{
                maxWidth: "500px",
                margin: "24px",
                fontFamily: "cursive",
              }}
              className={styles.description}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              reprehenderit soluta dicta vitae? Maiores beatae deleniti
              aspernatur quaerat.
            </p>

            <div className={styles.buttons}>
              <a
                href="https://github.com/7mo-debug/next-app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primary}
              >
                View Github
              </a>

              <Link
                href="https://amins-weather-app.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                View project
                <OpenInNewIcon fontSize="small" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
