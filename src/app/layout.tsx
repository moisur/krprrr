import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CartProvider } from "../components/cart/CartContext";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KrprsKR",
  description: "La meilleure Hoodie de Paris",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
        <CartProvider>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </CartProvider>
        </div>
      </body>
    </html>
  );
}