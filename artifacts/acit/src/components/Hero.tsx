import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import hommeImg from "@assets/WhatsApp_Image_2026-06-15_at_20.43.00_(1)_1781549004006.jpeg";
import femmeImg from "@assets/WhatsApp_Image_2026-06-15_at_20.47.43_1781549297924.jpeg";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative h-[100dvh] w-full flex bg-white overflow-hidden">

      {/* Left photo — Homme */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="w-[28%] sm:w-[30%] h-full flex-shrink-0 overflow-hidden"
      >
        <img src={hommeImg} alt="Homme Maison Sud" className="w-full h-full object-cover object-top" />
      </motion.div>

      {/* Center — brand content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-3 sm:px-8 gap-0 bg-white relative z-10">

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden sm:block text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-3"
        >
          SAINT-TROPEZ · MONACO · CÔTE D'AZUR
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display font-bold text-foreground leading-none tracking-tight text-[1.9rem] sm:text-5xl lg:text-6xl mb-2"
        >
          Maison Sud
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-[8px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground italic font-light mb-2 sm:mb-3"
        >
          L'Été Est Un État d'Esprit
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-8 h-px bg-primary mb-2 sm:mb-4"
        />

        {/* Made in France */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-[9px] sm:text-[11px] text-muted-foreground uppercase tracking-widest mb-4 sm:mb-6 font-light"
        >
          {t("hero.madeInFrance")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-row items-center gap-2 sm:gap-3 w-full"
        >
          <Button
            className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-9 sm:h-11 px-3 sm:px-8 text-[9px] sm:text-[11px] uppercase tracking-[0.15em] font-bold flex-1 sm:flex-none whitespace-nowrap"
            onClick={() => document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t("hero.discover")}
          </Button>
          <Button
            variant="outline"
            className="rounded-none border-foreground/20 text-foreground hover:bg-foreground/5 h-9 sm:h-11 px-3 sm:px-8 text-[9px] sm:text-[11px] uppercase tracking-[0.15em] font-bold flex-1 sm:flex-none whitespace-nowrap"
            onClick={() => document.getElementById("lamarque")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t("hero.history")}
          </Button>
        </motion.div>
      </div>

      {/* Right photo — Femme */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="w-[28%] sm:w-[30%] h-full flex-shrink-0 overflow-hidden"
      >
        <img src={femmeImg} alt="Femme Maison Sud" className="w-full h-full object-cover object-top" />
      </motion.div>
    </div>
  );
}
