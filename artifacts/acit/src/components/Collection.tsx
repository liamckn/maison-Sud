import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import { products } from "@/data/products";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export function Collection() {
  const [, setLocation] = useLocation();

  return (
    <section id="collection" className="py-16 sm:py-28 px-4 sm:px-6 bg-background border-t border-border/10">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-10 sm:mb-14">
          <div>
            <p className="text-xs text-primary font-bold uppercase tracking-[0.3em] mb-2 sm:mb-3">Chapitre I</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-wider">La Collection</h2>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group relative cursor-pointer"
              onClick={() => setLocation(`/product/${product.id}`)}
              data-testid={`card-product-${product.id}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-4 sm:mb-5 border border-border/10" style={{ backgroundColor: "#d4d4d4" }}>
                {product.badge && (
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                    {product.badge}
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4 sm:p-6">
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
      </div>
    </section>
  );
}
