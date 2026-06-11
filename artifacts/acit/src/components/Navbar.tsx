import { useEffect, useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const navLinks = [
    { label: "Collection", id: "collection" },
    { label: "La Marque", id: "lamarque" },
    { label: "Exclusif", id: "exclusif" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 border-b ${
          isScrolled || menuOpen
            ? "bg-background/95 backdrop-blur-lg border-border/10 py-4"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-primary tracking-[0.2em]">
              ＲＩＶＡ
            </h1>
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

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-[57px] left-0 w-full z-30 bg-background/98 backdrop-blur-xl border-b border-border/10 md:hidden"
          >
            <div className="flex flex-col py-8 px-6 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-2xl font-display font-bold uppercase tracking-wider py-4 border-b border-border/10 hover:text-primary transition-colors last:border-0"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
