import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  "Hoodies",
  "Accessoires",
  "Éditions Limitées",
  "Coffrets"
];

export function CategoryTeaser() {
  return (
    <section className="py-10 border-y border-border/10 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 divide-x-0 md:divide-x divide-border/10">
          {categories.map((category, index) => (
            <motion.a
              href="#"
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex flex-col items-center justify-center py-8 px-4 text-center hover:bg-black/5 transition-colors"
            >
              <h4 className="font-display text-lg uppercase tracking-widest mb-4 group-hover:text-primary transition-colors">
                {category}
              </h4>
              <div className="w-8 h-[1px] bg-border group-hover:bg-primary transition-colors group-hover:w-12 duration-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}