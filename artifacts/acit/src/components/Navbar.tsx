import { useEffect, useState } from "react";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
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

  const leftLinks = [
    { label: "Homme", id: "collection" },
    { label: "Femme", id: "collection" },
    { label: "Enfant", id: "collection" },
  ];

  const rightLinks = [
    { label: "Collections", id: "collection" },
    { label: "Lookbook", id: "lifestyle" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled || menuOpen
            ? "bg-white border-b border-black/10 py-3"
            : "bg-white border-b border-black/10 py-3"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between h-12">

          <div className="hidden md:flex items-center gap-7 flex-1">
            {leftLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-xs font-medium uppercase tracking-widest text-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-foreground p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div className="absolute left-1/2 -translate-x-1/2">
            <span className="text-xl sm:text-2xl font-display font-bold tracking-[0.25em] uppercase text-foreground select-none">
              Maison Sud
            </span>
          </div>

          <div className="hidden md:flex items-center gap-7 flex-1 justify-end">
            {rightLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-xs font-medium uppercase tracking-widest text-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative ml-2 hover:text-primary transition-colors flex items-center gap-1.5 group"
            >
              <div className="relative">
                <ShoppingBag className="h-[18px] w-[18px]" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[9px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full">
                    {itemCount}
                  </span>
                )}
              </div>
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-1 hover:text-primary transition-colors"
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[9px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[61px] left-0 w-full z-30 bg-white border-b border-black/10 md:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {[...leftLinks, ...rightLinks].map((link, i) => (
                <button
                  key={link.id + i}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-sm font-medium uppercase tracking-widest py-3.5 border-b border-black/6 hover:text-primary transition-colors last:border-0"
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
