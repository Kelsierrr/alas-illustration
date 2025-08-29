import FadeIn from "./(components)/FadeIn";
import ProductGrid from "./(components)/ProductGrid";
import hero from "./(styles)/hero.module.css";

const products = [
  {
    id: "arriety-sketches",
    title: "Arriety Sketches",
    price: 100,
    imageSrc: "/artworks/arriety-sketches.webp",
    alt: "Digital illustration sketches inspired by Arrietty with soft pastel tones"
  },
  {
    id: "cat-person",
    title: "Cat Person",
    price: 100,
    imageSrc: "/artworks/cat-person.webp",
    alt: "Character sheet of a cat-eared person with expressive sketches"
  },
  {
    id: "dellabelle-omori",
    title: "Dellabellle Omori",
    price: 100,
    imageSrc: "/artworks/dellabelle-omori.webp",
    alt: "Stylized portrait with chibi companions and playful icons"
  },
  {
    id: "firefly-hsr",
    title: "Firefly - Honkai Star Rail",
    price: 100,
    imageSrc: "/artworks/firefly-honkai-star-rail.webp",
    alt: "Firefly from Honkai Star Rail in a serene pastel sunset scene"
  },
  {
    id: "gojo-satoru-jjk",
    title: "Gojo Satoru - Jujustu Kaisen",
    price: 100,
    imageSrc: "/artworks/gojo-satoru-jjk.webp",
    alt: "Gojo Satoru holding an umbrella, monochrome attire with deep blues"
  },
  {
    id: "luocha-hsr",
    title: "Luocha - Honkai Star Rail",
    price: 100,
    imageSrc: "/artworks/luocha-honkai-star-rail.webp",
    alt: "Close-up portrait of Luocha with golden hair and soft lighting"
  },
  {
    id: "neuv-wrio-chatting",
    title: "Neuvillete and Wriothesely chatting - Genshin Impact",
    price: 100,
    imageSrc: "/artworks/neuvillete-and-wriothesely-chatting.webp",
    alt: "Neuvillette and Wriothesely seated, chatting with a lollipop prop"
  },
  {
    id: "scaramouche-furina-jump",
    title: "Scaramouche and Furina jump! - Genshin Impact",
    price: 100,
    imageSrc: "/artworks/scaramouche-and-furina-jump.webp",
    alt: "Dynamic jump pose of Scaramouche and Furina on white background"
  },
  {
    id: "scaramouches-sorrow",
    title: "Scaramouche's Sorrow",
    price: 100,
    imageSrc: "/artworks/scaramouches-sorrow.webp",
    alt: "Dramatic scene with Scaramouche amid dark blue lighting and stars"
  },
  {
    id: "shu-yamino",
    title: "Shu Yamino",
    price: 100,
    imageSrc: "/artworks/shu-yamino.webp",
    alt: "Profile portrait of Shu Yamino with lilac and yellow accents"
  },
  {
    id: "sunny-and-kel-omori",
    title: "Sunny and Kel - Omori",
    price: 100,
    imageSrc: "/artworks/sunny-and-kel-omori.webp",
    alt: "Sunny and Kel from Omori in a pose with bright colors"
  },
  {
    id: "xinqius-quiet-time",
    title: "Xinqiu's Quiet Time - Genshin Impact",
    price: 100,
    imageSrc: "/artworks/xinqius-quiet-time.webp",
    alt: "Xinqiu from Genshin Impact"
    },
    {
    id: "yashiro-nene",
    title: "Yashiro Nene",
    price: 100,
    imageSrc: "/artworks/yashiro-nene.webp",
    alt: "Yashiro Nene in a cute pose with pastel colors"
    },
    {
    id: "zuko-serves-tea",
    title: "Zuko Serves Tea",
    price: 100,
    imageSrc: "/artworks/zuko-serves-tea.webp",
    alt: "Zuko from Avatar: The Last Airbender serving tea with a gentle smile"
    }
];


export default function HomePage() {
  return (
    <FadeIn>
      <section className={hero.section}>
        <div className="container">
          <div className={hero.wrap}>
            <h1 className={hero.headline}>
              Digital illustrations by <span className={hero.grad}>Alas</span>
            </h1>
            <p className={hero.sub}>Premium digital artworks</p>
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: "2rem 0" }}>
        <h2 style={{ margin: "0 0 1rem 1.5rem" }}>Featured Artworks</h2>
        <p style={{ margin: "0 0 1.25rem 1.5rem", color: "var(--muted-foreground)" }}>
    Discover unique digital illustrations crafted with passion and creativity. Each piece tells its own story.
  </p>
        <ProductGrid products={products} />
      </section>
    </FadeIn>
  );
}
