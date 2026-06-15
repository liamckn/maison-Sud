import { useRoute, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { products } from "@/data/products";

const LABEL_MAP: Record<string, string> = {
  "tshirt": "T-shirt",
  "maillot-de-bain": "Maillot de Bain",
  "short": "Short",
  "pantalon": "Pantalon",
  "accessoires": "Accessoires",
};

const GENRE_MAP: Record<string, string> = {
  "femme": "Femme",
  "homme": "Homme",
  "enfant": "Enfant",
};

const CATEGORY_PRODUCTS: Record<string, string[]> = {
  "homme/tshirt": ["tee-homme-maison-sud"],
};

export function CategoryPage() {
  const [, params] = useRoute("/:genre/:category");
  const [, setLocation] = useLocation();

  const genre = params?.genre ?? "";
  const category = params?.category ?? "";
  const key = `${genre}/${category}`;

  const genreLabel = GENRE_MAP[genre] ?? genre;
  const categoryLabel = LABEL_MAP[category] ?? category;

  const productIds = CATEGORY_PRODUCTS[key] ?? [];
  const pageProducts = products.filter((p) => productIds.includes(p.id));

  return (
    <PageLayout title={categoryLabel} subtitle={`${genreLabel} — Collection Été 2026`}>
      {pageProducts.length === 0 ? (
        <div className="py-20 sm:py-32 flex flex-col items-center gap-4 text-center border border-border/10">
          <p className="text-xs text-primary font-bold uppercase tracking-[0.4em]">Prochainement</p>
          <p className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-wider text-foreground/20">
            {genreLabel} — {categoryLabel}
          </p>
          <p className="text-sm text-muted-foreground uppercase tracking-widest mt-2">
            La collection arrive bientôt — restez à l'écoute.
          </p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8"
        >
          {pageProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
              onClick={() => setLocation(`/product/${product.id}`)}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-3 bg-[#f5f5f5]">
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
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    Voir le produit <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-baseline">
                <h3 className="font-display font-bold uppercase tracking-wider text-xs sm:text-sm group-hover:text-primary transition-colors pr-2">
                  {product.name}
                </h3>
                <span className="font-mono text-primary text-sm shrink-0">{product.price} €</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </PageLayout>
  );
}
