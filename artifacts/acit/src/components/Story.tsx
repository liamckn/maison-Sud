import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function Story() {
  const { t } = useTranslation();

  const paragraphs = [
    t("story.p0"),
    t("story.p1"),
    t("story.p2"),
    t("story.p3"),
    t("story.p4"),
  ];

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 bg-background border-t border-border/10 overflow-hidden">
      <div className="container mx-auto max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-20"
        >
          <p className="text-xs text-primary font-bold uppercase tracking-[0.3em] mb-3">{t("story.chapter")}</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-wider leading-tight whitespace-pre-line">
            {t("story.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`text-muted-foreground text-base sm:text-lg leading-relaxed font-light ${
                i === 0 ? "md:col-span-2 text-lg sm:text-xl font-normal text-foreground/80" : ""
              }`}
            >
              {p}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-20 pt-10 sm:pt-12 border-t border-border/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-display font-bold uppercase tracking-wide">
            {t("story.closing")}
          </p>
          <div className="text-xs text-primary font-bold uppercase tracking-[0.3em] shrink-0">
            {t("story.founded")}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
