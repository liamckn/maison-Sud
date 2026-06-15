import { PageLayout } from "@/components/PageLayout";

export function MentionsLegales() {
  return (
    <PageLayout title="Mentions Légales" subtitle="Informations légales">
      <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">

        <section>
          <h3 className="font-display font-bold uppercase tracking-wider text-foreground mb-3">Éditeur du site</h3>
          <p>Maison Sud</p>
          <p>Email : <a href="mailto:contact.houseofhouse@gmail.com" className="text-primary hover:underline underline-offset-4">contact.houseofhouse@gmail.com</a></p>
        </section>

        <section>
          <h3 className="font-display font-bold uppercase tracking-wider text-foreground mb-3">Hébergement</h3>
          <p>Ce site est hébergé par Replit, Inc.</p>
          <p>1001 Mission Street, San Francisco, CA 94103, USA</p>
        </section>

        <section>
          <h3 className="font-display font-bold uppercase tracking-wider text-foreground mb-3">Propriété intellectuelle</h3>
          <p>
            L'ensemble du contenu de ce site (textes, images, logos, graphismes) est la propriété exclusive de Maison Sud et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction, distribution ou utilisation sans autorisation préalable est strictement interdite.
          </p>
        </section>

        <section>
          <h3 className="font-display font-bold uppercase tracking-wider text-foreground mb-3">Responsabilité</h3>
          <p>
            Maison Sud s'efforce de maintenir les informations de ce site à jour et exactes. Toutefois, nous ne pouvons garantir l'exactitude, la complétude ou l'actualité des informations diffusées.
          </p>
        </section>

        <section>
          <h3 className="font-display font-bold uppercase tracking-wider text-foreground mb-3">Droit applicable</h3>
          <p>
            Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </section>

      </div>
    </PageLayout>
  );
}
