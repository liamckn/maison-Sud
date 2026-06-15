import { PageLayout } from "@/components/PageLayout";
import { MapPin } from "lucide-react";

export function Boutiques() {
  return (
    <PageLayout title="Boutiques" subtitle="Nous retrouver">
      <div className="space-y-6">
        <p className="text-muted-foreground leading-relaxed mb-10">
          Nos boutiques physiques ouvriront prochainement dans les plus belles villes de la Côte d'Azur. En attendant, retrouvez toute notre collection en ligne.
        </p>

        <div className="border border-border/20 p-6 sm:p-8 flex gap-4 items-start opacity-50">
          <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <h3 className="font-display font-bold uppercase tracking-wider mb-1">Saint-Tropez</h3>
            <p className="text-muted-foreground text-sm">Prochainement — Été 2026</p>
          </div>
        </div>

        <div className="border border-border/20 p-6 sm:p-8 flex gap-4 items-start opacity-50">
          <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <h3 className="font-display font-bold uppercase tracking-wider mb-1">Monaco</h3>
            <p className="text-muted-foreground text-sm">Prochainement — Été 2026</p>
          </div>
        </div>

        <div className="border border-border/20 p-6 sm:p-8 flex gap-4 items-start opacity-50">
          <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <h3 className="font-display font-bold uppercase tracking-wider mb-1">Nice</h3>
            <p className="text-muted-foreground text-sm">Prochainement — Été 2026</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border/10">
          <p className="text-sm text-muted-foreground">
            Pour toute question sur nos points de vente, contactez-nous à{" "}
            <a href="mailto:contact.houseofhouse@gmail.com" className="text-primary hover:underline underline-offset-4">
              contact.houseofhouse@gmail.com
            </a>
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
