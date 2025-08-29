// app/layout.jsx
import "./globals.css";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";
import { CartProvider } from "./(components)/CartContext";
import { Montserrat, Open_Sans } from "next/font/google";
import MiniCart from "./(components)/MiniCart";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-montserrat",
  display: "swap",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata = {
  title: "Alas Illustration",
  description: "Digital illustrations by Alas ($100 each)",
  icons: { icon: "/favicon.ico" }, 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <MiniCart/>
        </CartProvider>
      </body>
    </html>
  );
}
