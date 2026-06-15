import { useLocation } from "wouter";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { products } from "@/data/products";

const hommeProducts = products.filter((p) => p.id.includes("homme"));

export function Homme() {
  const [, setLocation] = useLocation();

  return (
    <PageLayout title="Homme" subtitle="Collection Été 2026">
      {hommeProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
          {hommeProducts.map((product) => (
            <div
              key={product.id}
              className="group relative cursor-pointer"
              onClick={() => setLocation(`/product/${product.id}`)}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-3 sm:mb-4 border border-border/10">
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
            </div>
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
