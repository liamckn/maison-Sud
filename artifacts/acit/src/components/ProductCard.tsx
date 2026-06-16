import { useLocation } from "wouter";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [, setLocation] = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
      onClick={() => setLocation(`/product/${product.id}`)}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 ${
            product.imageFit === "cover" ? "object-cover object-center" : "object-contain"
          }`}
        />

        {product.badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-[#1a2744] text-white text-[9px] font-bold uppercase tracking-[0.25em] px-3 py-1.5">
              {product.badge}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out bg-white/95 backdrop-blur-sm px-5 py-4">
          <span className="text-[#1a2744] text-[10px] font-bold uppercase tracking-[0.3em]">
            Découvrir →
          </span>
        </div>
      </div>

      <div className="pt-4 pb-1">
        <div className="flex justify-between items-start gap-3">
          <h3 className="font-display font-semibold uppercase tracking-wide text-[11px] sm:text-xs leading-snug text-foreground group-hover:text-[#1a2744] transition-colors duration-300 flex-1">
            {product.name}
          </h3>
          <span className="text-[#1a2744] font-light text-sm tabular-nums shrink-0 pt-px">
            {product.price.toFixed(2)} €
          </span>
        </div>
      </div>
    </motion.div>
  );
}
