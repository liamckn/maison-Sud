import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import lookbookImg from "@assets/WhatsApp_Image_2026-06-14_at_22.10.25_(1)_1781526366779.jpeg";

export function Lifestyle() {
  const { t } = useTranslation();

  const stats = [
    { value: "100%", label: "Made with Love" },
    { value: "3-5J", label: t("lifestyle.statDelivery") },
    { value: "∞", label: t("lifestyle.statVibes") },
    { value: "🇫🇷", label: t("lifestyle.statMadeIn") },
  ];

  return (
    <section id="lifestyle" className="bg-background py-16 sm:py-32 px-4 sm:px-6 relative overflow-hidden border-t border-border/10">
      <div className="container mx-auto max-w-7xl">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={lookbookImg}
                alt="Maison Sud Lookbook"
                className="w-full object-cover"
                style={{ maxHeight: "75vh" }}
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Été 2026 — Lookbook</span>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xs sm:text-sm text-primary font-bold uppercase tracking-[0.3em] mb-3 sm:mb-4">{t("lifestyle.brand")}</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-wider mb-6 sm:mb-8 leading-tight whitespace-pre-line">
              {t("lifestyle.title")}
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed font-light">
              {t("lifestyle.description")}
            </p>

            <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-8 sm:pt-10 border-t border-border/10">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.8 }}
                >
                  <div className="font-display text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
