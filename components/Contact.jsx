import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section  id="contact" className={styles.contact}>
      <div  className={styles.titleBar}>
        <h2 style={{fontSize:"29px"}}>Contacts</h2>
      </div>
      <div style={{marginLeft:"70px"}} className={styles.inner}>
        <div className={styles.info}>
          <h2>
            Have a project?
            <br />
            Let’s talk!
          </h2>
          <button className={styles.submit}>Submit</button>
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" rows={5} />
        </form>
      </div>
    </section>
  );
}
