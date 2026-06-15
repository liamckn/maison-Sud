import { PageLayout } from "@/components/PageLayout";
import { Package, RotateCcw, Clock, Globe } from "lucide-react";

export function Livraison() {
  return (
    <PageLayout title="Livraison & Retours" subtitle="Tout savoir sur votre commande">
      <div className="space-y-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: Clock, title: "Délai de traitement", body: "Chaque commande est préparée sous 2 à 4 jours ouvrés." },
            { icon: Globe, title: "Livraison mondiale", body: "Nous livrons partout en France et dans toute l'Europe." },
            { icon: Package, title: "Livraison standard", body: "3 à 7 jours ouvrés après expédition. Gratuite dès 80€ d'achat." },
            { icon: RotateCcw, title: "Retours", body: "Vous disposez de 14 jours après réception pour retourner votre commande." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="border border-border/10 p-5 sm:p-6">
              <Icon className="w-5 h-5 text-primary mb-3" />
              <h3 className="font-display font-bold uppercase tracking-wider text-sm mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-border/10 pt-8 space-y-6">
          <h3 className="font-display font-bold uppercase tracking-wider">Conditions de retour</h3>
          <ul className="space-y-3 text-muted-foreground text-sm">
            {[
              "Les articles doivent être non portés, non lavés et avec leurs étiquettes d'origine.",
              "Les retours s'effectuent par voie postale à vos frais.",
              "Le remboursement est effectué sous 5 à 10 jours ouvrés après réception du colis.",
              "Les articles en promotion ou en solde ne sont pas éligibles aux retours.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <div className="w-1 h-1 bg-primary rounded-full shrink-0 mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-border/10 pt-8">
          <p className="text-sm text-muted-foreground">
            Une question sur votre commande ?{" "}
            <a href="mailto:contact.houseofhouse@gmail.com" className="text-primary hover:underline underline-offset-4">
              Contactez-nous
            </a>
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
