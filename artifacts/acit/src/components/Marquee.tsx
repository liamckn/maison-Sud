export function Marquee() {
  const keywords = [
    "L'ÉTÉ EST UN ÉTAT D'ESPRIT",
    "SAINT-TROPEZ",
    "MONACO",
    "CÔTE D'AZUR",
    "FRENCH LUXURY",
    "STREETWEAR",
    "SUMMER CLUB",
  ];

  return (
    <div className="bg-primary text-primary-foreground py-4 overflow-hidden flex border-y border-primary/20">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center">
            {keywords.map((word, j) => (
              <div key={j} className="flex items-center">
                <span className="text-sm font-bold uppercase tracking-[0.2em] px-8">
                  {word}
                </span>
                <span className="text-primary-foreground/30 px-2">•</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}