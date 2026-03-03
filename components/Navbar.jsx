"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink}>
          <Avatar alt="Amin" src="/me.jpg" sx={{ width: 44, height: 44 }} />
          <span>Amin</span>
        </Link>
      </div>

      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`${styles.links} ${menuOpen ? styles.active : ""}`}>
        <li>
          <Link
            href="#home"
            className={active === "home" ? styles.activeLink : ""}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="#about"
            className={active === "about" ? styles.activeLink : ""}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            href="#projects"
            className={active === "projects" ? styles.activeLink : ""}
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            href="#contact"
            className={active === "contact" ? styles.activeLink : ""}
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
}
