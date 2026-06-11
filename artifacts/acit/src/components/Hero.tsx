import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={ref} className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center bg-background">
      {/* Dynamic glow background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none opacity-30 mix-blend-screen" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 text-xs md:text-sm font-mono tracking-[0.3em] text-primary/80 mb-8"
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
          className="text-7xl md:text-9xl lg:text-[12rem] font-display font-extrabold text-foreground tracking-tighter leading-none mb-6"
        >
          ACIT<span className="text-primary">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-3xl font-light tracking-[0.2em] text-muted-foreground uppercase max-w-2xl"
        >
          L'ÉTÉ EST UN ÉTAT D'ESPRIT
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-6 mt-16"
        >
          <Button 
            className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-12 text-sm uppercase tracking-widest font-bold w-full sm:w-auto"
            onClick={() => document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" })}
          >
            Découvrir
          </Button>
          <Button 
            variant="outline"
            className="rounded-none border-border hover:bg-white/5 hover:text-primary h-14 px-12 text-sm uppercase tracking-widest font-bold w-full sm:w-auto"
            onClick={() => document.getElementById("lamarque")?.scrollIntoView({ behavior: "smooth" })}
          >
            L'Histoire
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
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