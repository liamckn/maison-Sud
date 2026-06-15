import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { Navbar } from "@/components/Navbar";
import { CartDrawer } from "@/components/CartDrawer";
import { CartProvider } from "@/context/CartContext";
import { Footer } from "@/components/Footer";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

function PageLayoutInner({ title, subtitle, children }: PageLayoutProps) {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <CartDrawer />

      <main className="flex-1 pt-20 sm:pt-24 pb-20 sm:pb-32">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10 sm:mb-14 text-xs uppercase tracking-widest"
          >
            <ArrowLeft className="h-4 w-4" />
            Maison Sud
          </button>

          <div className="mb-10 sm:mb-14 border-b border-border/10 pb-8 sm:pb-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-wider mb-3">
              {title}
            </h1>
            {subtitle && (
              <p className="text-muted-foreground text-sm uppercase tracking-widest">{subtitle}</p>
            )}
          </div>

          <div className="prose-content">{children}</div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export function PageLayout(props: PageLayoutProps) {
  return (
    <CartProvider>
      <PageLayoutInner {...props} />
    </CartProvider>
  );
}
