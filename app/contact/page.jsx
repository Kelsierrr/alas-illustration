"use client";
import { useState } from "react";
import FadeIn from "../(components)/FadeIn";
import styles from "../(styles)/contact.module.css";
import { FiMail, FiInstagram } from "react-icons/fi";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submission placeholder — backend will be added later.");
  };

  return (
    <FadeIn>
      <section className={styles.contactContainer}>
        <h1 className={styles.title}>Contact Me</h1>
        <p className={styles.subtitle}>
          Have a question, collaboration idea, or just want to say hi? Reach out below.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="What's this about?"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.submit}>
            Send Message
          </button>
        </form>

        <div className={styles.socials}>
          <h2>Get in Touch</h2>
          <p className={styles.socialText}>
            I'm always excited to connect with fellow artists, potential clients,
            and art enthusiasts. Whether you have questions about my work or want
            to discuss a potential collaboration, don't hesitate to reach out.
          </p>
          <div className={styles.icons}>
            <a href="mailto:alambbiiii@gmail.com" aria-label="Email">
              <FiMail />
            </a>
            <a
              href="https://instagram.com/alambb_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FiInstagram />
            </a>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
