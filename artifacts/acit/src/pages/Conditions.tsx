import { PageLayout } from "@/components/PageLayout";

export function Conditions() {
  return (
    <PageLayout title="Conditions" subtitle="Conditions générales de vente">
      <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">

        <section>
          <h3 className="font-display font-bold uppercase tracking-wider text-foreground mb-3">Article 1 — Objet</h3>
          <p>
            Les présentes conditions générales de vente régissent l'ensemble des ventes conclues entre Maison Sud et ses clients via le site internet maisonsudbrand.com. Toute commande implique l'acceptation pleine et entière des présentes conditions.
          </p>
        </section>

        <section>
          <h3 className="font-display font-bold uppercase tracking-wider text-foreground mb-3">Article 2 — Produits</h3>
          <p>
            Les articles proposés à la vente sont ceux figurant sur le site au moment de la consultation. Les photographies sont représentatives mais non contractuelles. Maison Sud se réserve le droit de modifier son catalogue à tout moment.
          </p>
        </section>

        <section>
          <h3 className="font-display font-bold uppercase tracking-wider text-foreground mb-3">Article 3 — Prix</h3>
          <p>
            Les prix affichés sont en euros TTC. Maison Sud se réserve le droit de modifier ses prix à tout moment, les articles étant facturés au tarif en vigueur au moment de la validation de la commande.
          </p>
        </section>

        <section>
          <h3 className="font-display font-bold uppercase tracking-wider text-foreground mb-3">Article 4 — Commande et paiement</h3>
          <p>
            Le paiement s'effectue en ligne par carte bancaire via Stripe. La commande est validée après confirmation du paiement. Maison Sud se réserve le droit d'annuler toute commande suspecte ou anormale.
          </p>
        </section>

        <section>
          <h3 className="font-display font-bold uppercase tracking-wider text-foreground mb-3">Article 5 — Livraison</h3>
          <p>
            Les commandes sont expédiées sous 2 à 4 jours ouvrés. Les délais de livraison sont donnés à titre indicatif. Maison Sud ne saurait être tenu responsable des retards imputables au transporteur.
          </p>
        </section>

        <section>
          <h3 className="font-display font-bold uppercase tracking-wider text-foreground mb-3">Article 6 — Droit de rétractation</h3>
          <p>
            Conformément à la législation en vigueur, vous disposez d'un délai de 14 jours à compter de la réception de votre commande pour exercer votre droit de rétractation, sans avoir à justifier de motif. Les articles retournés doivent être en parfait état.
          </p>
        </section>

        <section>
          <h3 className="font-display font-bold uppercase tracking-wider text-foreground mb-3">Article 7 — Droit applicable</h3>
          <p>
            Les présentes conditions sont soumises au droit français. Tout litige relatif à leur interprétation ou exécution relève de la compétence exclusive des tribunaux français.
          </p>
        </section>

        <div className="border-t border-border/10 pt-6">
          <p className="text-xs text-muted-foreground/60">Dernière mise à jour : Juin 2026</p>
        </div>

      </div>
    </PageLayout>
  );
}
