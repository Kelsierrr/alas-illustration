"use client";
import Link from "next/link";
import Image from "next/image";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import styles from "../(styles)/header.module.css";
import { useCart } from "./CartContext";
import { useState, useEffect } from "react";

export default function Header() {
  const { itemCount, openCart } = useCart() || { itemCount: 0, openCart: () => {} };

  // two flags so we can animate out before unmounting
  const [mobileOpen, setMobileOpen] = useState(false);   // mounted & visible
  const [mobileClosing, setMobileClosing] = useState(false); // exit animation

  // ESC to close
  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") startClose(); }
    if (mobileOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  function startOpen() {
    setMobileClosing(false);
    setMobileOpen(true);
  }

  function startClose() {
    // run exit animation then unmount
    setMobileClosing(true);
    // keep this in sync with CSS animation duration (.28s below)
    setTimeout(() => {
      setMobileOpen(false);
      setMobileClosing(false);
    }, 280);
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brandLink}>
          <Image src="/logo.jpg" alt="Alas Illustration" width={40} height={40} className={styles.logo} />
        </Link>

        {/* desktop nav */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About me</Link>
          <Link href="/portfolio" className={styles.navLink}>Portfolio</Link>
          <Link href="/faq" className={styles.navLink}>FAQ</Link>
          <Link href="/contact" className={styles.navLink}>Contact me</Link>
          <button type="button" className={styles.cartBtn} onClick={openCart}>
            <FiShoppingCart style={{ marginRight: "0.5rem" }} />
            Cart{itemCount ? ` (${itemCount})` : ""}
          </button>
        </nav>

        {/* mobile actions */}
        <div className={styles.mobileActions}>
          <button type="button" className={styles.cartBtn} onClick={openCart} aria-label="Open cart">
            <FiShoppingCart />
            {itemCount ? <span className={styles.cartBadge}>{itemCount}</span> : null}
          </button>
          <button
            type="button"
            className={styles.mobileBtn}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={mobileOpen ? startClose : startOpen}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* overlay + menu are mounted while opening OR exiting */}
      {(mobileOpen || mobileClosing) && (
        <>
          {/* dim background */}
          <div
            className={`${styles.mobileOverlay} ${mobileClosing ? styles.overlayOut : styles.overlayIn}`}
            onClick={startClose}
          />
          {/* drawer */}
          <div
            id="mobile-menu"
            className={`${styles.mobileMenu} ${mobileClosing ? styles.menuOut : styles.menuIn}`}
          >
            <div className={`container ${styles.mobileMenuInner}`}>
              <Link href="/" className={styles.mobileNavLink} onClick={startClose}>Home</Link>
              <Link href="/about" className={styles.mobileNavLink} onClick={startClose}>About me</Link>
              <Link href="/portfolio" className={styles.mobileNavLink} onClick={startClose}>Portfolio</Link>
              <Link href="/faq" className={styles.mobileNavLink} onClick={startClose}>FAQ</Link>
              <Link href="/contact" className={styles.mobileNavLink} onClick={startClose}>Contact me</Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
