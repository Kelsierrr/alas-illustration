import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "../(styles)/footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.grid}>
            <div>
              <h3 className={styles.sectionTitle}>Connect with Alas</h3>
              <div className={styles.stack}>
                <a
                  className={styles.link}
                  href="https://instagram.com/alambb_"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={styles.iconWrap}><FaInstagram /></span>
                  <span>@alambb_</span>
                </a>
                <a className={styles.link} href="mailto:alambbiiii@gmail.com">
                  <span className={styles.iconWrap}><MdEmail /></span>
                  <span>alambbiiii@gmail.com</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className={styles.sectionTitle}>Important Notes</h3>
              <p className={styles.note}>Digital artworks only — All purchases are digital.</p>
            </div>

            <div className={styles.legal}>
              <p className={styles.year}>© {year} Alas Illustration. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
