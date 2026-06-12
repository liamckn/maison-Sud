import { motion } from "framer-motion";

const paragraphs = [
  "Tout a commencé avec deux adolescents, un rêve trop grand pour leur âge et une obsession pour le sud de la France.",
  "On n'avait pas d'argent, pas de connexions, pas de local. On avait juste une vision : créer une marque qui parle vraiment aux jeunes. Pas une marque faite par des adultes qui essaient de comprendre notre génération. Une marque née dedans.",
  "L'été, on regardait Saint-Tropez, Monaco, la Méditerranée — ce monde de liberté, de soleil, de belle vie — et on se disait que ce feeling, cet état d'esprit, devait exister dans les vêtements qu'on porte.",
  "Pas dans un bureau. Pas dans une réunion. Dans la tête de deux gamins qui refusaient d'attendre d'être grands pour commencer à vivre.",
  "Aujourd'hui, chaque pièce qu'on crée porte cette énergie. L'été comme état d'esprit. La Côte d'Azur comme inspiration. La jeunesse comme force.",
];

export function Story() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 bg-background border-t border-border/10 overflow-hidden">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-20"
        >
          <p className="text-xs text-primary font-bold uppercase tracking-[0.3em] mb-3">Origines</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-wider leading-tight">
            Notre<br />Histoire
          </h2>
        </motion.div>

        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="border-l-4 border-primary pl-6 sm:pl-10 mb-14 sm:mb-20"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-display font-bold leading-snug text-foreground">
            C'est comme ça qu'est née <span className="text-primary">𝗠𝗮𝗶𝘀𝗼𝗻 𝗦𝘂𝗱</span>.
          </p>
        </motion.div>

        {/* Body paragraphs */}
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

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-20 pt-10 sm:pt-12 border-t border-border/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-display font-bold uppercase tracking-wide">
            𝗠𝗮𝗶𝘀𝗼𝗻 𝗦𝘂𝗱, c'est pour ceux<br className="hidden sm:block" /> qui n'attendent pas.
          </p>
          <div className="text-xs text-primary font-bold uppercase tracking-[0.3em] shrink-0">
            Fondé en 2025
          </div>
        </motion.div>

      </div>
    </section>
  );
}
