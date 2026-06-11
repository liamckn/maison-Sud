import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    toast({
      title: "Bienvenue au Club ＲＩＶＡ",
      description: "Vous êtes désormais sur la liste VIP.",
    });
    setEmail("");
  };

  return (
    <section id="exclusif" className="py-20 sm:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none overflow-hidden">
        <h2 className="text-[8rem] sm:text-[14rem] md:text-[20rem] font-display font-black tracking-tighter whitespace-nowrap">CLUB</h2>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.4em] mb-4 sm:mb-6 opacity-80">Accès VIP</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-widest mb-6 sm:mb-8">
            Rejoignez le Club
          </h3>
          <p className="mb-8 sm:mb-12 text-primary-foreground/80 font-light text-base sm:text-lg px-2 sm:px-0">
            Inscrivez-vous pour accéder en avant-première à nos éditions limitées et événements exclusifs sur la Côte d'Azur.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Input
              type="email"
              placeholder="VOTRE ADRESSE EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 sm:h-14 bg-transparent border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 rounded-none focus-visible:ring-primary-foreground uppercase tracking-widest text-xs"
            />
            <Button
              type="submit"
              className="h-12 sm:h-14 rounded-none bg-primary-foreground text-primary hover:bg-primary-foreground/90 uppercase tracking-widest text-xs font-bold px-6 sm:px-8 shrink-0"
            >
              S'inscrire
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
