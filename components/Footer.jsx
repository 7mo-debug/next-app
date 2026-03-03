import styles from "./Footer.module.css";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.name}>Mohamed Amin</p>
      <p className={styles.copy}>
        Designed with love, all rights reserved for Mohamed Amin.
      </p>
      <div className={styles.social}>
        <a href="#" aria-label="email">
          <EmailIcon fontSize="large" />
        </a>
        <a href="#" aria-label="github">
          <GitHubIcon fontSize="large" />
        </a>
        <a href="#" aria-label="linkedin">
          <LinkedInIcon fontSize="large" />
        </a>
      </div>
    </footer>
  );
}
