---
name: Maison Sud stack and integrations
description: Key facts about the Maison Sud project setup
---

Brand: Maison Sud — French luxury streetwear, "L'Été Est Un État d'Esprit", Côte d'Azur.
Palette: white background, black text, royal blue (#2563EB) accents.

Artifacts:
- `artifacts/acit` — React + Vite frontend (wouter routing, Tailwind v4, Framer Motion)
- `artifacts/api-server` — Express 5 API server, port via PORT env var

Integrations:
- Stripe: live key in `STRIPE_SECRET_KEY` secret (NOT via connectors proxy in prod)
- Printify: `PRINTIFY_API_TOKEN` secret; shop 27907354; product 6a2dc04573ad2eacae0efe6d

Product in Stripe: `prod_Uh2TRani0Pkyhb` / `price_1TiK1zJijcqfME0GGFVX0JPf` — 39.99 EUR one-time
Local product ID used for lookup: `tee-homme-maison-sud`

Available sizes on site + Printify: S, M, L, XL, 2XL, 3XL, 4XL (no XS, no XXL label — use 2XL).
