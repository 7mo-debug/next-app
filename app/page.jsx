import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import styles from "./page.module.css";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
