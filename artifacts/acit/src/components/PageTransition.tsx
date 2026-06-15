import { useEffect, useState, useRef } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

export function PageTransition() {
  const [location] = useLocation();
  const [visible, setVisible] = useState(false);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 900);
    return () => clearTimeout(t);
  }, [location]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={location}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center gap-6 pointer-events-none"
        >
          <span className="text-2xl font-display font-bold tracking-[0.3em] uppercase text-foreground">
            Maison Sud
          </span>
          <div className="w-32 h-px bg-border/20 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
