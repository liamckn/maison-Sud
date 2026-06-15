import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { products } from "@/data/products";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function Collections() {
  const [, setLocation] = useLocation();

  return (
    <PageLayout title="Collections" subtitle="Été 2026 — Côte d'Azur">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            className="group relative cursor-pointer"
            onClick={() => setLocation(`/product/${product.id}`)}
          >
            <div className="relative aspect-[3/4] overflow-hidden mb-3 sm:mb-4 border border-border/10 bg-[#f5f5f5]">
              {product.badge && (
                <div className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  {product.badge}
                </div>
              )}
              <img
                src={product.image}
                alt={product.name}
                className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                  product.imageFit === "cover" ? "object-cover object-top" : "object-contain p-4"
                }`}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-5">
                <span className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  Voir le produit <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-display font-bold uppercase tracking-wider text-xs sm:text-sm group-hover:text-primary transition-colors leading-tight pr-2">
                {product.name}
              </h3>
              <span className="font-mono text-primary text-sm shrink-0">{product.price} €</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </PageLayout>
  );
}
