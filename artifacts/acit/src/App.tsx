import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Home } from "@/pages/Home";
import { ProductPage } from "@/pages/ProductPage";
import { Histoire } from "@/pages/Histoire";
import { Manifesto } from "@/pages/Manifesto";
import { Boutiques } from "@/pages/Boutiques";
import { Carrieres } from "@/pages/Carrieres";
import { Livraison } from "@/pages/Livraison";
import { FAQ } from "@/pages/FAQ";
import { MentionsLegales } from "@/pages/MentionsLegales";
import { Contact } from "@/pages/Contact";
import { Confidentialite } from "@/pages/Confidentialite";
import { Conditions } from "@/pages/Conditions";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/product/:id" component={ProductPage} />
      <Route path="/histoire" component={Histoire} />
      <Route path="/manifesto" component={Manifesto} />
      <Route path="/boutiques" component={Boutiques} />
      <Route path="/carrieres" component={Carrieres} />
      <Route path="/livraison" component={Livraison} />
      <Route path="/faq" component={FAQ} />
      <Route path="/mentions-legales" component={MentionsLegales} />
      <Route path="/contact" component={Contact} />
      <Route path="/confidentialite" component={Confidentialite} />
      <Route path="/conditions" component={Conditions} />
      <Route component={NotFound} />
    </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
