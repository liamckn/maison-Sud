import { useEffect, useState, useRef } from "react";
import { ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";

const LANGUAGES = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "it", label: "IT" },
  { code: "de", label: "DE" },
  { code: "zh", label: "ZH" },
  { code: "pt", label: "PT" },
  { code: "ru", label: "RU" },
  { code: "ja", label: "JA" },
  { code: "ar", label: "AR" },
];

const FEMME_MENU = [
  "Tout",
  "Nouveautés",
  "Vêtements",
  "Polaires",
  "Sport & Tennis",
  "Accessoires",
  "Chaussures",
];

const HOMME_MENU = [
  "Tout",
  "Vêtements",
  "Accessoires",
  "Polaires",
  "Chaussures",
];

function NavDropdown({
  label,
  items,
  isOpen,
  onOpen,
  onClose,
}: {
  label: string;
  items: string[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="relative" onMouseLeave={onClose}>
      <button
        onMouseEnter={onOpen}
        onClick={() => (isOpen ? onClose() : onOpen())}
        className="flex items-center gap-0.5 text-xs font-medium uppercase tracking-widest text-foreground hover:text-primary transition-colors whitespace-nowrap"
      >
        {label}
        <ChevronDown className={`h-3 w-3 mt-px transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full mt-2 bg-white border border-black/10 shadow-lg py-2 min-w-[190px] z-50"
          >
            {items.map((item) => (
              <button
                key={item}
                onClick={onClose}
                className="flex items-center justify-between w-full text-left px-4 py-2.5 text-xs font-medium tracking-wider text-foreground hover:text-primary transition-colors group"
              >
                <span>{item}</span>
                {["Vêtements", "Polaires", "Sport & Tennis", "Accessoires", "Chaussures"].includes(item) && (
                  <ChevronDown className="h-3 w-3 -rotate-90 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const { itemCount, setIsCartOpen } = useCart();
  const { t, i18n } = useTranslation();

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
    setLangOpen(false);
    document.documentElement.dir = code === "ar" ? "rtl" : "ltr";
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const [location, setLocation] = useLocation();

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    if (location !== "/") {
      setLocation("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 1100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const rightLinks = [
    { label: t("nav.collections"), path: "/collections" },
    { label: t("nav.lookbook"), path: "/lookbook" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40 bg-white border-b border-black/10 transition-all duration-300">
        <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between h-12">

          {/* Left: Femme + Homme dropdowns + Enfant */}
          <div className="hidden md:flex items-center flex-1" style={{ gap: "5rem" }}>
            <NavDropdown
              label={t("nav.women")}
              items={FEMME_MENU}
              isOpen={activeDropdown === "femme"}
              onOpen={() => setActiveDropdown("femme")}
              onClose={() => setActiveDropdown(null)}
            />
            <NavDropdown
              label={t("nav.men")}
              items={HOMME_MENU}
              isOpen={activeDropdown === "homme"}
              onOpen={() => setActiveDropdown("homme")}
              onClose={() => setActiveDropdown(null)}
            />
            <button
              onClick={() => scrollTo("collection")}
              className="text-xs font-medium uppercase tracking-widest text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              {t("nav.kids")}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-foreground p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Center: brand */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <span className="text-xl sm:text-2xl font-display font-bold tracking-[0.25em] uppercase text-foreground select-none">
              Maison Sud
            </span>
          </div>

          {/* Right: Collections + Lookbook + Lang + Cart */}
          <div className="hidden md:flex items-center gap-5 flex-1 justify-end">
            {rightLinks.map((link, i) => (
              <button
                key={i}
                onClick={() => setLocation(link.path)}
                className="text-xs font-medium uppercase tracking-widest text-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}

            {/* Language selector */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-0.5 text-xs font-medium uppercase tracking-widest text-foreground hover:text-primary transition-colors"
              >
                {currentLang.label}
                <ChevronDown className="h-3 w-3 mt-px" />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 bg-white border border-black/10 shadow-lg py-1 min-w-[60px] z-50"
                  >
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`block w-full text-left px-3 py-1.5 text-xs font-medium uppercase tracking-widest transition-colors ${
                          lang.code === i18n.language
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative ml-1 hover:text-primary transition-colors"
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

          {/* Mobile right: lang + cart */}
          <div className="md:hidden flex items-center gap-3">
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="text-xs font-medium uppercase tracking-widest text-foreground hover:text-primary transition-colors flex items-center gap-0.5"
              >
                {currentLang.label}
                <ChevronDown className="h-3 w-3" />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 bg-white border border-black/10 shadow-lg py-1 min-w-[60px] z-50 grid grid-cols-2"
                  >
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`block text-left px-3 py-1.5 text-xs font-medium uppercase tracking-widest transition-colors ${
                          lang.code === i18n.language
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[49px] left-0 w-full z-30 bg-white border-b border-black/10 md:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {[
                { label: t("nav.women"), action: () => scrollTo("collection") },
                { label: t("nav.men"), action: () => scrollTo("collection") },
                { label: t("nav.kids"), action: () => scrollTo("collection") },
                { label: t("nav.collections"), action: () => setLocation("/collections") },
                { label: t("nav.lookbook"), action: () => setLocation("/lookbook") },
              ].map((link, i) => (
                <button
                  key={i}
                  onClick={() => { setMenuOpen(false); link.action(); }}
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
