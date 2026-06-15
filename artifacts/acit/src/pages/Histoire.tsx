import { PageLayout } from "@/components/PageLayout";

export function Histoire() {
  return (
    <PageLayout title="Notre Histoire" subtitle="Depuis le Sud de la France">
      <div className="space-y-8 text-muted-foreground leading-relaxed max-w-2xl">
        <p className="text-foreground text-lg sm:text-xl font-light">
          Maison Sud est ancrée dans une conviction qui ne date pas d'hier : l'été n'est pas une saison, c'est un état d'esprit.
        </p>
        <p>
          Née sur les rives de la Méditerranée, Maison Sud puise son essence dans la lumière dorée de la Côte d'Azur — cette lumière qui a inspiré Picasso à Antibes, Matisse à Nice, Renoir à Cagnes. Un héritage culturel que nous portons dans chaque pièce, chaque fil, chaque détail.
        </p>
        <p>
          Nos collections naissent d'une exigence simple : des coupes qui durent, des matières qui vieillissent bien, une esthétique qui ne suit pas les tendances parce qu'elle les précède. Le Sud a toujours eu une longueur d'avance sur l'art de vivre.
        </p>
        <p>
          De Saint-Tropez à Monaco, en passant par les calanques et les villages de l'arrière-pays, notre ADN se forge au contact d'une terre qui a toujours su conjuguer rigueur et légèreté. C'est cette alliance que nous cherchons dans chaque création — l'élégance sans effort, le luxe sans ostentation.
        </p>
        <p>
          Maison Sud n'est pas seulement une marque. C'est une invitation à ralentir, à savourer, à choisir la qualité sur la quantité. À vivre le Sud, partout où l'on est.
        </p>
        <div className="border-t border-border/10 pt-8 mt-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Maison Sud — L'Été Est Un État D'Esprit</p>
        </div>
      </div>
    </PageLayout>
  );
}
