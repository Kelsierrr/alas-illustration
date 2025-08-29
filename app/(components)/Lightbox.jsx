"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "../(styles)/lightbox.module.css";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const [mounted, setMounted] = useState(false);
  const overlayRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    setTimeout(() => closeBtnRef.current?.focus(), 0);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [mounted, onClose, onPrev, onNext]);

  const overlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  const content = (
    <div
      className={styles.overlay}
      onMouseDown={overlayClick}
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <div className={styles.panel}>
        <div className={styles.topBar}>
          <div className={styles.title}>{items[index]?.title || "Artwork"}</div>
          <div className={styles.controls}>
            <button className={styles.iconBtn} onClick={onPrev} aria-label="Previous" disabled={index <= 0}>
              <FiChevronLeft />
            </button>
            <button className={styles.iconBtn} onClick={onNext} aria-label="Next" disabled={index >= items.length - 1}>
              <FiChevronRight />
            </button>
            <button ref={closeBtnRef} className={styles.iconBtn} onClick={onClose} aria-label="Close">
              <FiX />
            </button>
          </div>
        </div>

        <figure className={styles.figure}>
          <img
            src={items[index]?.src}
            alt={items[index]?.alt || items[index]?.title}
            className={styles.img}
          />
        </figure>

        <div className={styles.caption}>
          <div className={styles.counter}>{index + 1} / {items.length}</div>
          {items[index]?.title}
        </div>
      </div>
    </div>
  );

  if (!mounted) return null;
  return createPortal(content, document.body);
}
