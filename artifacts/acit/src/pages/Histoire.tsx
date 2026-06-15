import { PageLayout } from "@/components/PageLayout";

export function Histoire() {
  return (
    <PageLayout title="Notre Histoire" subtitle="Depuis le Sud de la France">
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <p className="text-foreground text-lg sm:text-xl font-light">
          Maison Sud est née d'une conviction simple : l'été n'est pas une saison, c'est un état d'esprit.
        </p>
        <p>
          Fondée sur les rives de la Méditerranée, Maison Sud puise son inspiration dans la lumière dorée de la Côte d'Azur, les eaux turquoise de ses calanques et l'art de vivre unique du Sud de la France. Chaque pièce de notre collection est conçue pour capturer cet instant suspendu entre ciel et mer.
        </p>
        <p>
          Nous croyons en une mode qui respire — des coupes épurées, des matières nobles, une palette de couleurs inspirée du littoral. Maison Sud n'est pas seulement une marque, c'est une invitation à ralentir, à savourer, à vivre pleinement.
        </p>
        <p>
          De Saint-Tropez à Monaco, en passant par les villages perchés de l'arrière-pays, notre ADN se forge au contact de cette terre lumineuse qui a inspiré Picasso, Matisse et tant d'autres. Nous portons cet héritage avec fierté, dans chaque fil, chaque couture, chaque détail.
        </p>
        <div className="border-t border-border/10 pt-8 mt-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Maison Sud — L'Été Est Un État D'Esprit</p>
        </div>
      </div>
    </PageLayout>
  );
}
