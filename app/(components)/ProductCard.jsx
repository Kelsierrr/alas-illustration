"use client";
import { useEffect, useRef, useState } from "react";
import styles from "../(styles)/product-card.module.css";
import { FiShoppingCart, FiCheck } from "react-icons/fi";
import { useCart } from "./CartContext";

export default function ProductCard({ id, title, price, imageSrc, alt }) {
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const timerRef = useRef(null);

  function handleAdd() {
    addItem({ id, title, price, image: imageSrc});
    setAdded(true);

  // reset "added" state after 2s
  clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setAdded(false), 2000);
  }

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={alt || title} className={styles.img} />
      <div className={styles.meta}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>${price}</div>
      </div>
      <button className={styles.btn} onClick={handleAdd}>
        {added ? <FiCheck /> : <FiShoppingCart />} {added ? "Added" : "Add to cart"}
      </button>
    </div>
  );
}
