import { useRoute } from "wouter";
import { PageLayout } from "@/components/PageLayout";

const LABEL_MAP: Record<string, string> = {
  "tshirt": "T-shirt",
  "maillot-de-bain": "Maillot de Bain",
  "short": "Short",
  "pantalon": "Pantalon",
  "accessoires": "Accessoires",
};

const GENRE_MAP: Record<string, string> = {
  "femme": "Femme",
  "homme": "Homme",
  "enfant": "Enfant",
};

export function CategoryPage() {
  const [, params] = useRoute("/:genre/:category");
  const genre = params?.genre ?? "";
  const category = params?.category ?? "";

  const genreLabel = GENRE_MAP[genre] ?? genre;
  const categoryLabel = LABEL_MAP[category] ?? category;

  return (
    <PageLayout title={categoryLabel} subtitle={`${genreLabel} — Collection Été 2026`}>
      <div className="py-20 sm:py-32 flex flex-col items-center gap-4 text-center border border-border/10">
        <p className="text-xs text-primary font-bold uppercase tracking-[0.4em]">Prochainement</p>
        <p className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-wider text-foreground/20">
          {genreLabel} — {categoryLabel}
        </p>
        <p className="text-sm text-muted-foreground uppercase tracking-widest mt-2">
          La collection arrive bientôt — restez à l'écoute.
        </p>
      </div>
    </PageLayout>
  );
}
