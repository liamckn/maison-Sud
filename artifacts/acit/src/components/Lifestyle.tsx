import { motion } from "framer-motion";
import monacoImg from "@assets/istockphoto-891378896-170667a_1781199590978.jpg";

const stats = [
  { value: "100%", label: "Made with Love" },
  { value: "24H", label: "Livraison Express" },
  { value: "∞", label: "Vibes Estivales" },
  { value: "FR", label: "Origine France" },
];

export function Lifestyle() {
  return (
    <section id="lamarque" className="bg-background py-16 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xs sm:text-sm text-primary font-bold uppercase tracking-[0.3em] mb-3 sm:mb-4">La Marque</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-wider mb-6 sm:mb-8 leading-tight">
              L'essence de la<br />Méditerranée
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed font-light">
              ACIT est plus qu'une marque de vêtements. C'est un hymne à la jeunesse, aux soirées qui s'étirent, au sable chaud sous les pieds et à l'élégance désinvolte de la French Riviera. Conçu pour ceux qui vivent chaque instant intensément.
            </p>

            <div className="grid grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-border/10">
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

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full"
          >
            <img
              src={monacoImg}
              alt="Port de Monaco de nuit"
              className="relative z-10 w-full h-auto block"
            />
            <div className="hidden sm:block absolute top-0 left-0 w-8 h-8 border-t border-l border-primary z-20 -translate-x-4 -translate-y-4" />
            <div className="hidden sm:block absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary z-20 translate-x-4 translate-y-4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
