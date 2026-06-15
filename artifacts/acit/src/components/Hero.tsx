import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import hommeImg from "@assets/WhatsApp_Image_2026-06-15_at_20.43.00_(1)_1781549004006.jpeg";
import femmeImg from "@assets/WhatsApp_Image_2026-06-15_at_20.43.00_1781549004007.jpeg";
import { useTranslation } from "react-i18next";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={ref} className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center bg-background">

      {/* Split photos */}
      <div className="absolute inset-0 flex">
        {/* Homme — left */}
        <motion.div style={{ y }} className="relative w-1/2 h-full overflow-hidden">
          <img
            src={hommeImg}
            alt="Homme Maison Sud"
            className="w-full h-full object-cover object-top scale-105"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        </motion.div>

        {/* Femme — right */}
        <motion.div style={{ y }} className="relative w-1/2 h-full overflow-hidden">
          <img
            src={femmeImg}
            alt="Femme Maison Sud"
            className="w-full h-full object-cover object-top scale-105"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent" />
        </motion.div>
      </div>

      {/* Thin center divider */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-white/20 z-10" />

      {/* Center text overlay */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs tracking-[0.3em] text-white/70 mb-6 sm:mb-8"
        >
          <span>SAINT-TROPEZ</span>
          <span className="w-1 h-1 bg-primary rounded-full" />
          <span>MONACO</span>
          <span className="w-1 h-1 bg-primary rounded-full" />
          <span>CÔTE D'AZUR</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[4rem] sm:text-7xl md:text-8xl lg:text-[10rem] font-display font-bold text-white tracking-tight leading-none mb-4 sm:mb-6"
        >
          Maison Sud
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center gap-3 mt-2 sm:mt-4"
        >
          <span className="w-8 h-px bg-white/30" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/50">{t("hero.madeInFrance")}</span>
          <span className="w-8 h-px bg-white/30" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mt-10 sm:mt-14 w-full sm:w-auto px-4 sm:px-0"
        >
          <Button
            className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-12 sm:h-14 px-8 sm:px-12 text-xs sm:text-sm uppercase tracking-widest font-bold w-full sm:w-auto"
            onClick={() => document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t("hero.discover")}
          </Button>
          <Button
            variant="outline"
            className="rounded-none border-white/40 text-white hover:bg-white/10 hover:text-white h-12 sm:h-14 px-8 sm:px-12 text-xs sm:text-sm uppercase tracking-widest font-bold w-full sm:w-auto"
            onClick={() => document.getElementById("lamarque")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t("hero.history")}
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 text-white/50"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">{t("hero.scroll")}</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </div>
  );
}
