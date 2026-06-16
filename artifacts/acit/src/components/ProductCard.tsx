import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [, setLocation] = useLocation();
  const { addItem } = useCart();
  const [liked, setLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [added, setAdded] = useState<string | null>(null);

  function handleSizeClick(e: React.MouseEvent, size: string) {
    e.stopPropagation();
    addItem({
      id: `${product.id}-${size}`,
      name: `${product.name} — ${size}`,
      price: product.price,
      image: product.image,
    });
    setAdded(size);
    setTimeout(() => setAdded(null), 1500);
  }

  function handleLike(e: React.MouseEvent) {
    e.stopPropagation();
    setLiked((prev) => !prev);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setLocation(`/product/${product.id}`)}
    >
      <div className="relative overflow-hidden bg-[#f7f6f4]" style={{ aspectRatio: "3/4" }}>
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 ${
            product.imageFit === "cover" ? "object-cover object-center" : "object-contain"
          }`}
        />

        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-[#1a2744] text-white text-[9px] font-bold uppercase tracking-[0.25em] px-2.5 py-1">
              {product.badge}
            </span>
          </div>
        )}

        <button
          onClick={handleLike}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors duration-200"
        >
          <Heart
            className={`h-4 w-4 transition-all duration-300 ${
              liked ? "fill-[#1a2744] stroke-[#1a2744] scale-110" : "stroke-[#1a2744]"
            }`}
          />
        </button>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm px-4 py-3"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#1a2744] mb-2.5">
                Ajout rapide
              </p>
              <div className="flex flex-wrap gap-1.5">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={(e) => handleSizeClick(e, size)}
                    className={`px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide border transition-all duration-200 ${
                      added === size
                        ? "bg-[#1a2744] text-white border-[#1a2744]"
                        : "border-[#1a2744]/30 text-[#1a2744] hover:border-[#1a2744] hover:bg-[#1a2744] hover:text-white"
                    }`}
                  >
                    {added === size ? "✓" : size}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="pt-3 pb-1">
        <div className="flex justify-between items-baseline gap-3">
          <h3 className="font-display font-semibold uppercase tracking-wide text-[11px] sm:text-xs leading-snug text-foreground group-hover:text-[#1a2744] transition-colors duration-300 flex-1">
            {product.name}
          </h3>
          <span className="text-[#1a2744] font-light text-sm tabular-nums shrink-0">
            {product.price.toFixed(2)} €
          </span>
        </div>
      </div>
    </motion.div>
  );
}
