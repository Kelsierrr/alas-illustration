import styles from "../(styles)/grid.module.css";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div className={styles.grid}>
      {products.map((p) => <ProductCard key={p.id} {...p} />)}
    </div>
  );
}
