---
name: Stripe credentials in production
description: Why REPLIT_CONNECTORS_HOSTNAME fails in production and how to fix it
---

In production (Cloud Run / autoscale), `REPLIT_CONNECTORS_HOSTNAME` is set to `helium` — an internal Replit hostname that is not resolvable from production containers. Fetching Stripe credentials via the connectors proxy fails with `getaddrinfo EAI_AGAIN helium`.

**Fix:** Check `STRIPE_SECRET_KEY` env var first, fall back to connectors proxy only in dev.

```ts
if (process.env.STRIPE_SECRET_KEY) {
  return { secretKey: process.env.STRIPE_SECRET_KEY, webhookSecret: process.env.STRIPE_WEBHOOK_SECRET };
}
// ... connectors proxy fallback
```

**Why:** The connectors proxy is only reachable inside Replit dev containers, not Cloud Run.

**How to apply:** Any time Stripe stops working in production, check this first.
