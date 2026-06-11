import { Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/10 pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-display font-bold text-primary tracking-[0.2em] mb-6">ACIT</h2>
            <p className="text-muted-foreground text-sm uppercase tracking-widest max-w-xs mb-8">
              L'Été Est Un État D'Esprit.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-border/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-border/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">La Marque</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Notre Histoire</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Manifesto</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Boutiques</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Carrières</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Informations</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Livraison & Retours</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs uppercase tracking-wider">
            &copy; {new Date().getFullYear()} ACIT. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground uppercase tracking-wider">
            <span>FR / EUR</span>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}