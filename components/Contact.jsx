"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function Contact() {

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_e1ibmxd",     // حط service id هنا
      "template_ff26lg8",    // حط template id هنا
      e.target,
      "ejbFw6Rz-vOY4JqUO"      // حط public key هنا
    )
    .then(() => {
      setOpen(true);
      e.target.reset();
    })
    .catch(() => {
      alert("Failed to send message");
    });
  };

  return (
    <section id="contact" className={styles.contact} data-aos="fade-down">
      
      <div className={styles.titleBar}>
        <h2 style={{ fontSize: "29px" }}>Contacts</h2>
      </div>

      <div style={{ marginLeft: "70px" }} className={styles.inner}>

        <div className={styles.info}>
          <h2>
            Have a project?
            <br />
            Let’s talk!
          </h2>
        </div>

        <form className={styles.form} onSubmit={sendEmail}>
          
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            required
          />

          <button type="submit" className={styles.submit}>
            Submit
          </button>

        </form>

      </div>

      {/* Success Message */}

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
        >
          Message sent successfully 🚀
        </Alert>
      </Snackbar>

    </section>
  );
}