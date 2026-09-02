import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CartDrawer from "@/components/cart-drawer";
import { CartProvider } from "@/lib/cart-context";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aadyaa Jewels | Lab-Grown Diamond Jewellery",
    template: "%s | Aadyaa Jewels",
  },
  description:
    "Delhi NCR's oldest exclusive lab-grown diamond jewellery brand. Ethically sourced, HUID certified, CVD-grown Type IIA diamonds — rings, solitaires, earrings, pendants, necklaces and bangles.",
  keywords: [
    "lab grown diamonds",
    "diamond jewellery india",
    "solitaire rings",
    "Aadyaa Jewels",
    "ethical diamonds",
    "HUID certified",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
