"use client";
import { useState } from "react";
import FadeIn from "../(components)/FadeIn";
import styles from "../(styles)/faq.module.css";

const faqs = [
  {
    q: "What software do you use?",
    a: "I use Clip Studio Paint for both illustrating and animation. Other animation software I use are Krita and FireAlpaca, both of which are free options.",
  },
  {
    q: "Are your commissions open?",
    a: "Very soon! I'm currently preparing to open commissions. Follow me on Instagram for updates.",
  },
  {
    q: "Can I use your work in my icon?",
    a: "Feel free to! Please credit me as the artist if possible, and don't claim my work as your own.",
  },
  {
    q: "Can I use your work in an edit?",
    a: "It's generally okay, just make sure you credit me and if possible ask me first on the website or my socials.",
  },
  {
    q: "Do you sell physical prints?",
    a: "At the moment, no — I only sell digital artwork. Prints may come in the future!",
  },
  {
    q: "What currency are your prices in?",
    a: "All prices are listed in Australian Dollars (AUD).",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <FadeIn>
      <section className={styles.faqContainer}>
        <h1 className={styles.title}>FAQ & Terms</h1>

        <div className={styles.faqList}>
          {faqs.map((item, i) => (
            <div key={i} className={styles.faqItem}>
              <button
                className={styles.question}
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                {item.q}
              </button>
              {openIndex === i && (
                <div className={styles.answer}>
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.terms}>
          <h2>Terms & Policies</h2>
          <p>
            By purchasing or commissioning artwork from Alas Illustration, you agree to the following:
          </p>
          <ul>
            <li>All works are for personal use unless otherwise agreed in writing.</li>
            <li>No reselling or redistribution of digital files.</li>
            <li>No use of artworks for AI training or NFTs.</li>
            <li>Refunds are not available once the artwork has been delivered.</li>
            <li>Prices are in AUD and do not include GST (not yet registered).</li>
          </ul>
        </div>
      </section>
    </FadeIn>
  );
}
