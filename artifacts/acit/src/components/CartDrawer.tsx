import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, removeItem, updateQuantity, total } = useCart();
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-background border-l border-border/10 shadow-2xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border/10">
              <h2 className="text-xl font-display font-bold uppercase tracking-wider text-primary">{t("cart.title")}</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-muted-foreground space-y-4">
                  <ShoppingBag className="h-12 w-12 opacity-20" />
                  <p className="text-sm uppercase tracking-widest">{t("cart.empty")}</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="h-24 w-20 bg-muted/20 overflow-hidden relative border border-border/10">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-display font-bold text-sm uppercase">{item.name}</h3>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-muted-foreground hover:text-destructive transition-colors"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="text-primary font-mono text-sm mt-1">{item.price}€</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center border border-border/20 text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="font-mono text-sm w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center border border-border/20 text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-6 border-t border-border/10 bg-background/50 backdrop-blur-md">
              <div className="flex items-center justify-between mb-6">
                <span className="text-muted-foreground uppercase tracking-wider text-sm">{t("cart.total")}</span>
                <span className="font-display font-bold text-2xl text-primary">{total}€</span>
              </div>
              <Button
                className="w-full rounded-none bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] transition-all h-14 uppercase tracking-widest font-bold"
                disabled={items.length === 0}
              >
                {t("cart.checkout")}
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
