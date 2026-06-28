import styles from "./Projects.module.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";

export default function Projects() {
  return (
    <div className={styles.all}>
      <section id="projects" className={styles.about}>
        <div className={styles.head}>
          <h1 className={styles.header}>Projects</h1>
          <div className={styles.vline}></div>
          <span className={styles.dot}></span>
        </div>

        {/* ================= FIRST PROJECT ================= */}
        <div className={styles.projectRow} data-aos="fade-right">
          <div className={styles.todos}>
            <h1 className={styles.todosHead}>Dr Ahmed Hamdi Website</h1>

            <div className={styles.tags}>
              <span>Next.js</span>
              <span>React</span>
              <span>Frontend</span>
              <span>Responsive UI</span>
            </div>

            <p
              style={{
                maxWidth: "500px",
                margin: "24px",
                fontFamily: "cursive",
              }}
              className={styles.description}
            >
              Built the full frontend for the homepage, blog pages, and contact
              section. Focused on creating a clean medical website experience
              with responsive layouts and easy-to-read content sections.
            </p>

            <div className={styles.buttons}>
              <a
                href="https://github.com/Kar1mAhmed/Doc-Ahmed"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primary}
              >
                View Github
              </a>

              <Link
                href="https://drahmedhamdi.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                View project
                <OpenInNewIcon fontSize="small" />
              </Link>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <img src="/drahmedhamdi.png" alt="Dr Ahmed Hamdi Website Preview" />
          </div>
        </div>

        {/* ================= SECOND PROJECT (REVERSED) ================= */}
        <div
          className={`${styles.projectRow} ${styles.reverse}`}
          data-aos="fade-left"
        >
          <div className={styles.imageWrapper}>
            <img src="/emmal.png" alt="Emmal Website Preview" />
          </div>

          <div className={styles.todos}>
            <h1 className={styles.todosHead}>Emmal Website</h1>

            <div className={styles.tags}>
              <span>Next.js</span>
              <span>React</span>
              <span>Frontend</span>
              <span>UI Implementation</span>
            </div>

            <p
              style={{
                maxWidth: "500px",
                margin: "24px",
                fontFamily: "cursive",
              }}
              className={styles.description}
            >
              Worked on the frontend implementation for all main website
              sections except the homepage. Built reusable UI sections, handled
              responsive behavior, and matched the required visual structure.
            </p>

            <div className={styles.buttons}>
              <a
                href="https://github.com/Kar1mAhmed/Emmal"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primary}
              >
                View Github
              </a>

              <Link
                href="https://emmal.kar1m.workers.dev/"
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

        {/* ================= THIRD PROJECT ================= */}
        <div className={styles.projectRow} data-aos="fade-right">
          <div className={styles.todos}>
            <h1 className={styles.todosHead}>Al Saif Website</h1>

            <div className={styles.tags}>
              <span>Next.js</span>
              <span>React</span>
              <span>Arabic UI</span>
              <span>Responsive Design</span>
            </div>

            <p
              style={{
                maxWidth: "500px",
                margin: "24px",
                fontFamily: "cursive",
              }}
              className={styles.description}
            >
              Developed the full frontend for the website, including Arabic
              layout support, responsive pages, and polished visual sections to
              present the company content clearly.
            </p>

            <div className={styles.buttons}>
              <a
                href="https://github.com/Kar1mAhmed/Al-Saif"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primary}
              >
                View Github
              </a>

              <Link
                href="https://al-saif.kar1m.workers.dev/ar"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                View project
                <OpenInNewIcon fontSize="small" />
              </Link>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <img src="/alsaif.png" alt="Al Saif Website Preview" />
          </div>
        </div>
      </section>
    </div>
  );
}