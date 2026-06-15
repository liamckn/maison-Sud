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
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-[28%] sm:w-[30%] h-full flex-shrink-0 overflow-hidden"
      >
        <img
          src={hommeImg}
          alt="Homme Maison Sud"
          className="w-full h-full object-cover object-top"
        />
      </motion.div>

      {/* Center — brand content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-8 py-12 bg-white relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4 sm:mb-6"
        >
          SAINT-TROPEZ · MONACO · CÔTE D'AZUR
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-foreground leading-none tracking-tight text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl mb-3 sm:mb-4"
        >
          Maison Sud
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.65 }}
          className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-muted-foreground mb-6 sm:mb-8 italic font-light"
        >
          L'Été Est Un État d'Esprit
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="w-12 h-px bg-primary mb-8 sm:mb-10"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="text-[11px] sm:text-sm text-muted-foreground uppercase tracking-widest mb-8 sm:mb-10 font-light"
        >
          {t("hero.madeInFrance")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <Button
            className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-11 sm:h-13 px-6 sm:px-10 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold w-full sm:w-auto"
            onClick={() => document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t("hero.discover")}
          </Button>
          <Button
            variant="outline"
            className="rounded-none border-foreground/20 text-foreground hover:bg-foreground/5 h-11 sm:h-13 px-6 sm:px-10 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold w-full sm:w-auto"
            onClick={() => document.getElementById("lamarque")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t("hero.history")}
          </Button>
        </motion.div>
      </div>

      {/* Right photo — Femme */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-[28%] sm:w-[30%] h-full flex-shrink-0 overflow-hidden"
      >
        <img
          src={femmeImg}
          alt="Femme Maison Sud"
          className="w-full h-full object-cover object-top"
        />
      </motion.div>
    </div>
  );
}
