import FadeIn from "../(components)/FadeIn";
import styles from "../(styles)/about.module.css";
import Link from "next/link";

export default function AboutPage() {
  return (
    <FadeIn>
      <section className={styles.aboutContainer}>
        {/* image */}
        <div className={styles.imageSection}>
          <img
            src="/profile.webp"
            alt="Alas - Digital Illustrator"
            className={styles.profileImage}
          />
        </div>

        {/* text */}
        <div className={styles.textSection}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.greeting}>hi!</p>
          <p className={styles.intro}>
            I'm <strong>Alas</strong>, a digital illustrator based in Australia.
          </p>
          <p className={styles.description}>
            Drawing has always been something important to me. Getting better at
            visual storytelling along with my artistic skills are what I aim to
            achieve over time.
          </p>

          {/* tools */}
          <div style={{ marginTop: "2rem" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "1rem" }}>
              Tools I Use
            </h3>
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {["Clip Studio Paint", "Krita", "FireAlpaca"].map((tool) => (
                <li
                  key={tool}
                  style={{
                    padding: "0.5rem 1rem",
                    background: "var(--muted, #f3f3f3)",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                  }}
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          {/* link to portfolio */}
          <div style={{ marginTop: "2rem" }}>
            <Link href="/portfolio" style={{ fontWeight: "700", color: "var(--color-primary-2)" }}>
              → Some of my work
            </Link>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
