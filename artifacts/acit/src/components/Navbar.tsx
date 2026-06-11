import { useEffect, useState } from "react";
import { ShoppingBag, Menu } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { itemCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 border-b ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg border-border/10 py-4" 
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button className="md:hidden text-foreground hover:text-primary transition-colors">
          <Menu className="h-6 w-6" />
        </button>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("collection")} className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors">Collection</button>
          <button onClick={() => scrollTo("lamarque")} className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors">La Marque</button>
          <button onClick={() => scrollTo("exclusif")} className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors">Exclusif</button>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-3xl md:text-4xl font-display font-extrabold text-primary tracking-[0.2em]">ACIT</h1>
        </div>

        <div className="flex items-center justify-end">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:text-primary transition-colors flex items-center gap-2 group"
          >
            <span className="hidden md:block text-sm font-medium uppercase tracking-widest">Panier</span>
            <div className="relative">
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                  {itemCount}
                </span>
              )}
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}