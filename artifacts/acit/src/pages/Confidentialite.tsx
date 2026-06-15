import { PageLayout } from "@/components/PageLayout";

export function Confidentialite() {
  return (
    <PageLayout title="Confidentialité" subtitle="Politique de confidentialité">
      <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">

        <section>
          <h3 className="font-display font-bold uppercase tracking-wider text-foreground mb-3">Données collectées</h3>
          <p>
            Dans le cadre de vos commandes et de votre navigation sur notre site, nous collectons les données suivantes : nom, prénom, adresse email, adresse de livraison, données de paiement (traitées exclusivement par Stripe).
          </p>
        </section>

        <section>
          <h3 className="font-display font-bold uppercase tracking-wider text-foreground mb-3">Utilisation des données</h3>
          <p>
            Vos données sont utilisées exclusivement pour le traitement de vos commandes, la gestion de votre relation client et, si vous y consentez, l'envoi de nos communications marketing.
          </p>
        </section>

        <section>
          <h3 className="font-display font-bold uppercase tracking-wider text-foreground mb-3">Paiement sécurisé</h3>
          <p>
            Toutes les transactions financières sont traitées par Stripe, certifié PCI DSS. Maison Sud ne stocke jamais vos coordonnées bancaires.
          </p>
        </section>

        <section>
          <h3 className="font-display font-bold uppercase tracking-wider text-foreground mb-3">Cookies</h3>
          <p>
            Notre site utilise des cookies techniques nécessaires à son bon fonctionnement (panier, langue) et des cookies analytiques anonymisés pour améliorer votre expérience.
          </p>
        </section>

        <section>
          <h3 className="font-display font-bold uppercase tracking-wider text-foreground mb-3">Vos droits (RGPD)</h3>
          <p>
            Conformément au Règlement Général sur la Protection des Données, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Pour exercer ces droits, contactez-nous à{" "}
            <a href="mailto:contact.houseofhouse@gmail.com" className="text-primary hover:underline underline-offset-4">
              contact.houseofhouse@gmail.com
            </a>.
          </p>
        </section>

        <section>
          <h3 className="font-display font-bold uppercase tracking-wider text-foreground mb-3">Conservation des données</h3>
          <p>
            Vos données personnelles sont conservées pendant la durée nécessaire à l'exécution du contrat et aux obligations légales applicables (maximum 5 ans).
          </p>
        </section>

      </div>
    </PageLayout>
  );
}
