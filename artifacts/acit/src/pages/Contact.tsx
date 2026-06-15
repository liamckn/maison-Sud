import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:contact.houseofhouse@gmail.com?subject=${encodeURIComponent(form.subject || "Contact — Maison Sud")}&body=${encodeURIComponent(`Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    toast({ title: "Merci !", description: "Votre client mail va s'ouvrir pour envoyer votre message." });
  };

  const field = "w-full border border-border/20 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50 tracking-wide";

  return (
    <PageLayout title="Contact" subtitle="Nous écrire">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

        <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
          <p className="text-foreground text-base font-light">
            Une question, une demande spéciale ou simplement envie de nous dire bonjour ? Nous sommes à l'écoute.
          </p>
          <div>
            <p className="font-bold uppercase tracking-widest text-foreground text-xs mb-2">Email</p>
            <a href="mailto:contact.houseofhouse@gmail.com" className="text-primary hover:underline underline-offset-4">
              contact.houseofhouse@gmail.com
            </a>
          </div>
          <div>
            <p className="font-bold uppercase tracking-widest text-foreground text-xs mb-2">Réseaux sociaux</p>
            <a href="https://www.tiktok.com/@shop.tonteeshirt" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4">
              TikTok — @shop.tonteeshirt
            </a>
          </div>
          <div>
            <p className="font-bold uppercase tracking-widest text-foreground text-xs mb-2">Délai de réponse</p>
            <p>Nous répondons sous 48 heures ouvrées.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            placeholder="Votre nom"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className={field}
          />
          <input
            required
            type="email"
            placeholder="Votre email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className={field}
          />
          <input
            placeholder="Sujet"
            value={form.subject}
            onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
            className={field}
          />
          <textarea
            required
            rows={5}
            placeholder="Votre message..."
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            className={`${field} resize-none`}
          />
          <button
            type="submit"
            className="w-full h-12 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Envoyer
          </button>
        </form>

      </div>
    </PageLayout>
  );
}
