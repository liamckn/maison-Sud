import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;

    setLoading(true);
    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.status === 409) {
        toast({ title: "Déjà inscrit", description: "Cette adresse est déjà dans le Club VIP." });
      } else if (!res.ok) {
        toast({ title: "Erreur", description: data.error ?? "Une erreur est survenue.", variant: "destructive" });
      } else {
        toast({
          title: t("newsletter.toastTitle"),
          description: t("newsletter.toastDesc"),
        });
        setEmail("");
      }
    } catch {
      toast({ title: "Erreur", description: "Impossible de se connecter au serveur.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
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
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.4em] mb-4 sm:mb-6 opacity-80">{t("newsletter.vipAccess")}</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-widest mb-6 sm:mb-8">
            {t("newsletter.joinClub")}
          </h3>
          <p className="mb-8 sm:mb-12 text-primary-foreground/80 font-light text-base sm:text-lg px-2 sm:px-0">
            {t("newsletter.description")}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Input
              type="email"
              placeholder={t("newsletter.emailPlaceholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 sm:h-14 bg-transparent border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 rounded-none focus-visible:ring-primary-foreground uppercase tracking-widest text-xs"
            />
            <Button
              type="submit"
              className="h-12 sm:h-14 rounded-none bg-primary-foreground text-primary hover:bg-primary-foreground/90 uppercase tracking-widest text-xs font-bold px-6 sm:px-8 shrink-0"
            >
              {t("newsletter.subscribe")}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
