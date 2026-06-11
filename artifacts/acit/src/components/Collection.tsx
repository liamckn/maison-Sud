import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

const products = [
  {
    id: "p1",
    name: "TEE ACIT SUNSET",
    price: 65,
    image: "/images/tee.png",
    badge: "NOUVEAU",
  },
  {
    id: "p2",
    name: "SHORT RIVIERA",
    price: 85,
    image: "/images/shorts.png",
  },
  {
    id: "p3",
    name: "CASQUETTE MONACO",
    price: 55,
    image: "/images/cap.png",
    badge: "BEST-SELLER",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

export function Collection() {
  const { addItem } = useCart();

  return (
    <section id="collection" className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-sm text-primary font-bold uppercase tracking-[0.3em] mb-4">Chapitre I</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wider">La Collection</h3>
          </div>
          <a href="#" className="hidden md:block text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">
            Tout voir
          </a>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants} className="group relative">
              <div className="relative aspect-[3/4] bg-muted/20 overflow-hidden mb-6 border border-border/20">
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 bg-background/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/20">
                    {product.badge}
                  </div>
                )}
                
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <button 
                      onClick={() => addItem(product)}
                      className="w-full bg-primary text-primary-foreground h-12 flex items-center justify-center gap-2 uppercase tracking-widest text-xs font-bold hover:bg-primary/90 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <h4 className="font-display font-bold uppercase tracking-wider text-sm">{product.name}</h4>
                <span className="font-mono text-primary text-sm">{product.price}€</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="inline-block text-sm uppercase tracking-widest text-muted-foreground border-b border-muted-foreground pb-1">
            Tout voir
          </a>
        </div>
      </div>
    </section>
  );
}