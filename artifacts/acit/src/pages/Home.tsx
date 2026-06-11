import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Collection } from "@/components/Collection";
import { Lifestyle } from "@/components/Lifestyle";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { CartProvider } from "@/context/CartContext";

export function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
        <Navbar />
        <CartDrawer />
        
        <main>
          <Hero />
          <Marquee />
          <Collection />
          <Lifestyle />
          <Newsletter />
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}