import { Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-background border-t border-border/10 pt-16 sm:pt-24 pb-10 sm:pb-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="col-span-2">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-[0.2em] mb-4 sm:mb-6">𝗠𝗮𝗶𝘀𝗼𝗻 𝗦𝘂𝗱</h2>
            <p className="text-muted-foreground text-sm uppercase tracking-widest max-w-xs mb-6 sm:mb-8">
              L'Été Est Un État D'Esprit.
            </p>
            <a
              href="mailto:contact.houseofhouse@gmail.com"
              className="text-xs text-primary hover:underline underline-offset-4 tracking-widest mb-5 sm:mb-6 block"
            >
              contact.houseofhouse@gmail.com
            </a>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 border border-border/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@shop.tonteeshirt" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 border border-border/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6">{t("footer.brandSection")}</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors">{t("footer.ourHistory")}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors">{t("footer.manifesto")}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors">{t("footer.stores")}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors">{t("footer.careers")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6">{t("footer.information")}</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors">{t("footer.shipping")}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors">{t("footer.faq")}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors">{t("footer.legal")}</a></li>
              <li><a href="mailto:contact.houseofhouse@gmail.com" className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors">{t("footer.contact")}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/10 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-muted-foreground text-xs uppercase tracking-wider">
            &copy; {new Date().getFullYear()} 𝗠𝗮𝗶𝘀𝗼𝗻 𝗦𝘂𝗱. {t("footer.rights")}
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs text-muted-foreground uppercase tracking-wider">
            <a href="#" className="hover:text-primary transition-colors">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-primary transition-colors">{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
