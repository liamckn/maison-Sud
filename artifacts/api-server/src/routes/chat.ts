import { Router } from "express";
import OpenAI from "openai";

const router = Router();

const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `Tu es l'assistant de Maison Sud, une marque de luxe française inspirée de la Côte d'Azur. Ton style est raffiné, chaleureux et légèrement poétique — comme une conversation à Saint-Tropez.

À propos de Maison Sud :
- Marque française premium, "L'Été Est Un État d'Esprit"
- Inspirée de la Côte d'Azur : Saint-Tropez, Monaco, Antibes
- Made in France, qualité supérieure
- Collection actuelle : T-shirt Maison Sud "Côte d'Azur" à 39,99€
  • Imprimé exclusif illustré à la main
  • Coton épais 320g/m², coupe oversized
  • Disponible en XS, S, M, L, XL, XXL
  • Couleur : blanc cassé / écru
- Livraison internationale, expédition sous 3-5 jours ouvrés
- Retours acceptés sous 30 jours

Tu réponds en français ou dans la langue de l'utilisateur si nécessaire. Tu restes bref, élégant, et toujours utile. Si quelqu'un pose une question à laquelle tu ne peux pas répondre, propose-lui de contacter le service client via l'email contact@maisonsud.fr`;

router.post("/chat", async (req, res) => {
  const { messages } = req.body;

  if (!Array.isArray(messages)) {
    res.status(400).json({ error: "messages requis" });
    return;
  }

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  try {
    const stream = await openai.chat.completions.create({
      model: "gpt-5-mini",
      max_completion_tokens: 512,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.slice(-10),
      ],
      stream: true,
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content;
      if (content) {
        res.write(`data: ${JSON.stringify({ content })}\n\n`);
      }
    }

    res.write("data: [DONE]\n\n");
    res.end();
  } catch (err: any) {
    req.log.error({ err }, "Chat error");
    res.write(`data: ${JSON.stringify({ error: "Erreur du service" })}\n\n`);
    res.end();
  }
});

export default router;
