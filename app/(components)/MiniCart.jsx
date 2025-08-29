"use client";
import { useEffect, useRef } from "react";
import { useCart } from "./CartContext";
import styles from "../(styles)/minicart.module.css";
import { FiX, FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";

/**
 * Accessibility helpers:
 * - Close on ESC
 * - Focus initial element when opening
 * - Close on overlay click
 */
export default function MiniCart() {
  const {
    items, subtotal,
    isCartOpen, openCart, closeCart,
    updateQuantity, removeItem, clearCart
  } = useCart();

  const overlayRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") closeCart();
    }
    if (isCartOpen) {
      document.addEventListener("keydown", onKey);
      // focus close button
      setTimeout(() => closeButtonRef.current?.focus(), 0);
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  function overlayClick(e) {
    if (e.target === overlayRef.current) closeCart();
  }

  return (
    <div className={styles.overlay} ref={overlayRef} onMouseDown={overlayClick} aria-modal="true" role="dialog">
      <aside className={`${styles.panel} ${styles.slideIn}`} aria-label="Shopping cart">
        <header className={styles.header}>
          <div className={styles.title}>Your Cart</div>
          <button ref={closeButtonRef} className={styles.close} onClick={closeCart} aria-label="Close cart">
            <FiX size="1.25rem" />
          </button>
        </header>

        <div className={styles.list}>
          {items.length === 0 && <p>Your cart is empty.</p>}
          {items.map((it) => (
            <div key={it.id} className={styles.item}>
              <img className={styles.thumb} src={it.image || "/placeholder.png"} alt={it.title} />
              <div className={styles.meta}>
                <div className={styles.name}>{it.title}</div>
                <div className={styles.price}>AUD {it.price}</div>
                <button className={styles.iconBtn} onClick={() => removeItem(it.id)} aria-label="Remove item">
                  <FiTrash2 />
                </button>
              </div>
              <div className={styles.qty}>
                <button className={styles.iconBtn} onClick={() => updateQuantity(it.id, it.qty - 1)} aria-label="Decrease">
                  <FiMinus />
                </button>
                <span>{it.qty}</span>
                <button className={styles.iconBtn} onClick={() => updateQuantity(it.id, it.qty + 1)} aria-label="Increase">
                  <FiPlus />
                </button>
              </div>
            </div>
          ))}
        </div>

        <footer className={styles.footer}>
          <div className={styles.row}>
            <span className={styles.totalLabel}>Subtotal</span>
            <span className={styles.totalValue}>AUD {subtotal.toFixed(2)}</span>
          </div>
          <div className={styles.actions}>
            {/* Placeholder buttons; Stripe routing comes later */}
            <button className={styles.primary} onClick={closeCart}>Checkout</button>
            <button className={styles.secondary} onClick={clearCart}>Clear cart</button>
          </div>
        </footer>
      </aside>
    </div>
  );
}
