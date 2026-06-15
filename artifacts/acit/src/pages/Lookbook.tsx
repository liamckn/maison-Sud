import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import lookbookImg from "@assets/WhatsApp_Image_2026-06-14_at_22.10.25_(1)_1781526366779.jpeg";
import heroImg from "@assets/R_1781470124047.jpg";

const photos = [
  { src: lookbookImg, label: "Été 2026", caption: "Born in the South" },
  { src: heroImg, label: "Côte d'Azur", caption: "L'Été Est Un État d'Esprit" },
];

export function Lookbook() {
  return (
    <PageLayout title="Lookbook" subtitle="Été 2026 — Côte d'Azur">
      <div className="space-y-10 sm:space-y-16">

        {/* Featured full-width photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden"
        >
          <img
            src={lookbookImg}
            alt="Maison Sud Lookbook"
            className="w-full object-cover"
            style={{ maxHeight: "80vh" }}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 sm:p-8">
            <p className="text-white/60 text-xs uppercase tracking-[0.3em] mb-1">Été 2026</p>
            <p className="text-white text-lg sm:text-2xl font-display font-bold uppercase tracking-wider">Born in the South</p>
          </div>
        </motion.div>

        {/* Editorial text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-xs text-primary font-bold uppercase tracking-[0.3em] mb-3">La Collection</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-wider mb-4">
            Maison Sud — Été 2026
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Une collection née des rivages méditerranéens. Des pièces intemporelles portant les codes de la Côte d'Azur — légèreté, liberté, élégance naturelle. Chaque t-shirt est une invitation à vivre l'été comme un état d'esprit permanent.
          </p>
        </motion.div>

        {/* Grid of photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden group"
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ height: "400px" }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 sm:p-5">
                <p className="text-white/60 text-[10px] uppercase tracking-[0.3em] mb-0.5">{photo.label}</p>
                <p className="text-white text-sm font-bold uppercase tracking-wider">{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center py-8 sm:py-12 border-t border-border/10"
        >
          <p className="text-2xl sm:text-4xl font-display font-bold uppercase tracking-widest text-foreground/10">
            Côte d'Azur · Monaco · Saint-Tropez
          </p>
        </motion.div>

      </div>
    </PageLayout>
  );
}
