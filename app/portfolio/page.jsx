"use client";
import { useState, useMemo, useCallback } from "react";
import FadeIn from "../(components)/FadeIn";
import Lightbox from "../(components)/Lightbox";
import styles from "../(styles)/portfolio.module.css";

const portfolioItems = [
  { id: "eren-jaeger", title: "Eren Jaeger — Attack on Titan", src: "/artworks/eren-jaeger.webp" },
  { id: "furina-sitting", title: "Furina sitting on grass", src: "/artworks/furina-sitting.webp" },
  { id: "furina-portrait", title: "Furina (portrait)", src: "/artworks/furina-portrait.webp" },
  { id: "gojo-and-geto", title: "Gojo and Geto — Jujutsu Kaisen", src: "/artworks/gojo-and-geto.webp" },
  { id: "nekomata", title: "Nekomata", src: "/artworks/nekomata.webp" },
  { id: "scaramouche-sitting", title: "Scaramouche sitting — Genshin Impact", src: "/artworks/scaramouche-sitting.webp" },
  { id: "till-and-ivan", title: "Till and Ivan — Alien Stage", src: "/artworks/till-and-ivan.webp" },
];

export default function PortfolioPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const items = useMemo(
    () => portfolioItems.map(p => ({ src: p.src, title: p.title, alt: p.title })),
    []
  );

  const onOpen = (i) => setOpenIndex(i);
  const onClose = () => setOpenIndex(null);

  const onPrev = useCallback(() => {
    setOpenIndex((i) => (i > 0 ? i - 1 : 0));
  }, []);
  const onNext = useCallback(() => {
    setOpenIndex((i) => (i < items.length - 1 ? i + 1 : items.length - 1));
  }, [items.length]);

  return (
    <FadeIn>
      <div className={styles.portfolioContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>Portfolio</h1>
          <p className={styles.subtitle}>
            A collection of my digital illustrations showcasing creativity, storytelling, and artistic growth.
          </p>
        </header>

        <div className={styles.gallery}>
          {portfolioItems.map((item, i) => (
            <div
              key={item.id}
              className={styles.galleryItem}
              onClick={() => onOpen(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen(i)}
              aria-label={`Open ${item.title}`}
            >
              <img src={item.src} alt={item.title} className={styles.galleryImage} />
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Want to see more?</h2>
          <p className={styles.subtitle}>
            Follow my journey on Instagram for behind-the-scenes content and latest artworks.
          </p>
          <a
            href="https://instagram.com/alambb_"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Follow me on Instagram
          </a>
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          items={items}
          index={openIndex}
          onClose={onClose}
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
    </FadeIn>
  );
}
