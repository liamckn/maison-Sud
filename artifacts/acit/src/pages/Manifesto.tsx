import { PageLayout } from "@/components/PageLayout";

export function Manifesto() {
  const points = [
    { num: "01", title: "L'été comme philosophie", body: "Pour nous, l'été n'est pas une saison calendaire. C'est une façon d'être au monde — légère, lumineuse, sans compromis. Maison Sud porte cette philosophie dans chaque création." },
    { num: "02", title: "La qualité avant tout", body: "Nous refusons le jetable. Chaque pièce est pensée pour durer, pour traverser les étés, pour devenir une seconde peau. La qualité n'est pas un luxe, c'est un respect." },
    { num: "03", title: "L'ancrage méditerranéen", body: "La Méditerranée n'est pas un décor. C'est notre source, notre terrain de jeu, notre maison. Ses couleurs, ses textures, sa lumière — tout cela vit dans nos collections." },
    { num: "04", title: "Made in France", body: "Nous sommes fiers de nos racines françaises. Créer en France, c'est soutenir un savoir-faire, une tradition d'excellence et une vision exigeante de la mode." },
    { num: "05", title: "La liberté de style", body: "Maison Sud ne dicte pas. Elle propose. Nos pièces s'adaptent à chaque personnalité, chaque corps, chaque moment. La mode doit être libératrice, jamais contraignante." },
  ];

  return (
    <PageLayout title="Manifesto" subtitle="Ce en quoi nous croyons">
      <div className="space-y-10">
        {points.map((p) => (
          <div key={p.num} className="flex gap-6 sm:gap-10 pb-10 border-b border-border/10 last:border-0">
            <span className="text-3xl sm:text-4xl font-display font-bold text-primary/20 shrink-0 leading-none mt-1">{p.num}</span>
            <div>
              <h3 className="font-display font-bold uppercase tracking-wider text-lg sm:text-xl mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
