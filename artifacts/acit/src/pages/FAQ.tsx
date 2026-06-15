import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Quels sont les délais de livraison ?",
    a: "Chaque commande est traitée sous 2 à 4 jours ouvrés, puis expédiée. La livraison prend ensuite 3 à 7 jours ouvrés selon votre localisation.",
  },
  {
    q: "Comment choisir ma taille ?",
    a: "Nos t-shirts sont taillés de façon régulière. En cas de doute entre deux tailles, nous recommandons de prendre la taille supérieure pour un style plus oversize, ou la taille inférieure pour un fit plus ajusté.",
  },
  {
    q: "Puis-je retourner ma commande ?",
    a: "Oui, vous disposez de 14 jours après réception pour retourner votre article. Il doit être non porté, non lavé, avec ses étiquettes. Les frais de retour sont à votre charge.",
  },
  {
    q: "Comment fonctionne le paiement ?",
    a: "Nous acceptons toutes les cartes bancaires (Visa, Mastercard, American Express) via Stripe, notre prestataire de paiement sécurisé. Vous serez redirigé vers une page de paiement sécurisée.",
  },
  {
    q: "Mes informations de paiement sont-elles sécurisées ?",
    a: "Absolument. Nous n'stockons jamais vos données bancaires. Tous les paiements sont traités par Stripe, certifié PCI DSS niveau 1, le standard le plus élevé du secteur.",
  },
  {
    q: "Mes articles sont-ils fabriqués de façon responsable ?",
    a: "Nous attachons une grande importance à la qualité et à la traçabilité de nos produits. Nos t-shirts sont fabriqués en France avec des matières soigneusement sélectionnées.",
  },
  {
    q: "Comment puis-je vous contacter ?",
    a: "Vous pouvez nous écrire à contact.houseofhouse@gmail.com. Nous vous répondrons sous 48 heures ouvrées.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 hover:text-primary transition-colors"
      >
        <span className="font-medium text-sm sm:text-base">{q}</span>
        <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-muted-foreground text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <PageLayout title="FAQ" subtitle="Questions fréquentes">
      <div>
        {faqs.map((item, i) => (
          <FAQItem key={i} {...item} />
        ))}
        <div className="pt-8 mt-4">
          <p className="text-sm text-muted-foreground">
            Vous ne trouvez pas votre réponse ?{" "}
            <a href="mailto:contact.houseofhouse@gmail.com" className="text-primary hover:underline underline-offset-4">
              Écrivez-nous
            </a>
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
