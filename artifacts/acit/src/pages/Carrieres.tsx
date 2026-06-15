import { PageLayout } from "@/components/PageLayout";

export function Carrieres() {
  return (
    <PageLayout title="Carrières" subtitle="Rejoindre l'aventure">
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <p className="text-foreground text-lg sm:text-xl font-light">
          Vous partagez notre amour du Sud, de la mode et de l'excellence ? Nous serions ravis de vous connaître.
        </p>
        <p>
          Maison Sud est une marque en pleine croissance. Nous recherchons des personnes passionnées, créatives et engagées pour rejoindre notre aventure méditerranéenne.
        </p>
        <p>
          Nous ne croyons pas aux hiérarchies rigides. Ici, chaque voix compte. Nous construisons quelque chose de beau ensemble, et nous cherchons des talents qui partagent cette vision.
        </p>

        <div className="bg-muted/30 border border-border/10 p-6 sm:p-8 mt-8">
          <h3 className="font-display font-bold uppercase tracking-wider mb-3">Candidature spontanée</h3>
          <p className="text-sm mb-4">
            Aucune offre ouverte pour le moment, mais nous étudions toutes les candidatures spontanées avec attention.
          </p>
          <a
            href="mailto:contact.houseofhouse@gmail.com?subject=Candidature spontanée — Maison Sud"
            className="inline-block text-xs font-bold uppercase tracking-widest text-primary hover:underline underline-offset-4"
          >
            Envoyer ma candidature →
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
