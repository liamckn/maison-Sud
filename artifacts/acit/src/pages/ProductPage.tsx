import { useState } from "react";
import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, Check } from "lucide-react";
import { getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { CartDrawer } from "@/components/CartDrawer";
import { CartProvider } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

function ProductPageInner() {
  const { id } = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const product = getProductById(id ?? "");
  const { addItem, setIsCartOpen } = useCart();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-6">Produit introuvable</p>
          <button onClick={() => setLocation("/")} className="text-primary underline underline-offset-4 text-sm uppercase tracking-widest">
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.sizes.length > 1 && !selectedSize) {
      toast({ title: "Sélectionne une taille", description: "Choisis ta taille avant d'ajouter au panier." });
      return;
    }
    addItem({ ...product, selectedSize: selectedSize || product.sizes[0] });
    setAdded(true);
    toast({ title: product.name + " ajouté", description: selectedSize ? `Taille : ${selectedSize}` : "" });
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />

      <div className="pt-20 sm:pt-24 pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 sm:mb-12 text-xs uppercase tracking-widest"
            data-testid="button-back"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à la collection
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-muted/5 border border-border/20 overflow-hidden"
            >
              {product.badge && (
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  {product.badge}
                </div>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-[3/4] object-cover"
                data-testid={`img-product-${product.id}`}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:sticky lg:top-28"
            >
              <p className="text-xs text-primary font-bold uppercase tracking-[0.3em] mb-2 sm:mb-3">𝔸ℂ𝕀𝕋</p>
              <h1
                className="text-2xl sm:text-3xl md:text-4xl font-display font-bold uppercase tracking-wider mb-3"
                data-testid="text-product-name"
              >
                {product.name}
              </h1>
              <p className="text-xl sm:text-2xl font-mono text-primary mb-6 sm:mb-8" data-testid="text-product-price">
                {product.price} €
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8 sm:mb-10 text-sm">
                {product.description}
              </p>

              {product.sizes.length > 1 && (
                <div className="mb-6 sm:mb-8">
                  <p className="text-xs uppercase tracking-widest mb-3 sm:mb-4 font-bold">
                    Taille
                    {selectedSize && <span className="ml-2 text-primary font-normal">— {selectedSize}</span>}
                  </p>
                  <div className="flex flex-wrap gap-2" data-testid="size-selector">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        data-testid={`button-size-${size}`}
                        className={`w-11 h-11 sm:w-12 sm:h-12 text-xs font-bold uppercase tracking-wider border transition-all ${
                          selectedSize === size
                            ? "bg-foreground text-background border-foreground"
                            : "bg-transparent text-foreground border-border/40 hover:border-foreground"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={handleAddToCart}
                data-testid="button-add-to-cart"
                className={`w-full h-12 sm:h-14 flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-sm transition-all duration-300 ${
                  added
                    ? "bg-green-600 text-white"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                {added ? (
                  <>
                    <Check className="h-4 w-4" />
                    Ajouté au panier
                  </>
                ) : (
                  <>
                    <ShoppingBag className="h-4 w-4" />
                    Ajouter au panier
                  </>
                )}
              </button>

              <button
                onClick={() => { handleAddToCart(); setTimeout(() => setIsCartOpen(true), 200); }}
                data-testid="button-buy-now"
                className="w-full h-12 sm:h-14 mt-3 border border-border/40 hover:border-foreground text-sm font-bold uppercase tracking-widest transition-all"
              >
                Commander maintenant
              </button>

              <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border/10 space-y-3">
                <p className="text-xs uppercase tracking-widest font-bold mb-3 sm:mb-4">Détails du produit</p>
                {product.details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-1 h-1 bg-primary rounded-full shrink-0" />
                    {detail}
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/10 grid grid-cols-3 gap-3 sm:gap-4 text-center">
                <div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">Livraison</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">24h express</p>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">Retours</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">30 jours offerts</p>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">Origine</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Made in France</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductPage() {
  return (
    <CartProvider>
      <ProductPageInner />
    </CartProvider>
  );
}
