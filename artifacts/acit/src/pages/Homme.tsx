import { PageLayout } from "@/components/PageLayout";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

const hommeProducts = products.filter((p) => p.id.includes("homme"));

export function Homme() {
  return (
    <PageLayout title="Homme" subtitle="Collection Été 2026">
      {hommeProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {hommeProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      ) : (
        <div className="py-20 sm:py-32 flex flex-col items-center gap-4 text-center border border-border/10">
          <p className="text-xs text-primary font-bold uppercase tracking-[0.4em]">Prochainement</p>
          <p className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-wider text-foreground/20">Collection Homme</p>
          <p className="text-sm text-muted-foreground uppercase tracking-widest mt-2">La collection arrive bientôt — restez à l'écoute.</p>
        </div>
      )}
    </PageLayout>
  );
}
