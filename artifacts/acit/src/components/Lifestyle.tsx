import { motion } from "framer-motion";
import monacoImg from "@assets/OIP_(1)_1781199246291.webp";

const stats = [
  { value: "100%", label: "Made with Love" },
  { value: "24H", label: "Livraison Express" },
  { value: "∞", label: "Vibes Estivales" },
  { value: "FR", label: "Origine France" },
];

export function Lifestyle() {
  return (
    <section id="lamarque" className="bg-background py-32 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-sm text-primary font-bold uppercase tracking-[0.3em] mb-4">La Marque</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wider mb-8 leading-tight">
              L'essence de la<br />Méditerranée
            </h3>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-light">
              ACIT est plus qu'une marque de vêtements. C'est un hymne à la jeunesse, aux soirées qui s'étirent, au sable chaud sous les pieds et à l'élégance désinvolte de la French Riviera. Conçu pour ceux qui vivent chaque instant intensément.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-border/10">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.8 }}
                >
                  <div className="font-display text-4xl font-bold text-primary mb-2">{stat.value}</div>
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
            className="relative h-[600px] w-full"
          >
            <div className="absolute inset-0 bg-primary/15 blur-[100px] rounded-full opacity-40 z-0" />
            <img 
              src={monacoImg} 
              alt="Port de Monaco de nuit" 
              className="relative z-10 w-full h-full object-cover grayscale-[20%] contrast-[1.1] brightness-[0.9]"
            />
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary z-20 -translate-x-4 -translate-y-4" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary z-20 translate-x-4 translate-y-4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}