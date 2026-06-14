import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@assets/R_1781470124047.jpg";
import { useTranslation } from "react-i18next";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={ref} className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center bg-background">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Côte d'Azur"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/20" />
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs md:text-sm font-mono tracking-[0.2em] sm:tracking-[0.3em] text-white/70 mb-6 sm:mb-8"
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
          className="text-[4.5rem] sm:text-7xl md:text-9xl lg:text-[12rem] font-display font-extrabold text-white tracking-tighter leading-none mb-4 sm:mb-6"
        >
          𝗠𝗮𝗶𝘀𝗼𝗻 𝗦𝘂𝗱<span className="text-primary">.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mt-5 sm:mt-7"
        >
          <span className="w-6 h-px bg-white/30" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-white/50">{t("hero.madeInFrance")}</span>
          <span className="w-6 h-px bg-white/30" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mt-10 sm:mt-16 w-full sm:w-auto px-4 sm:px-0"
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 sm:gap-4 text-white/50"
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
