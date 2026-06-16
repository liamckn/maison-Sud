import { useRoute } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { ProductCard } from "@/components/ProductCard";
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
  "femme/tshirt": ["tee-femme-maison-sud"],
};

export function CategoryPage() {
  const [, params] = useRoute("/:genre/:category");

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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {pageProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      )}
    </PageLayout>
  );
}
