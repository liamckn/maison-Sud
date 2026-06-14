---
name: Printify fulfillment flow
description: How Printify order creation and fulfillment works in this project
---

Shop ID: `27907354` (Maison Sud, custom_integration)
Product ID: `6a2dc04573ad2eacae0efe6d` (Unisex Garment-Dyed T-shirt, all White)

Size → variant ID mapping:
- S → 73199, M → 73203, L → 73207, XL → 73211, 2XL → 73215, 3XL → 79169, 4XL → 101476

**Flow:** Stripe `checkout.session.completed` webhook → parse session → call `createPrintifyOrder()` → immediately call `send_to_production`.

**Why two steps:** Creating an order via Printify API leaves it in "pending" state. `send_to_production` must be called separately to start printing.

**Webhook parsing:** After `stripe-replit-sync` processes the webhook, parse `req.body` as JSON and check `event.type === 'checkout.session.completed'`. Signature already verified by sync so direct JSON parse is safe.

**Checkout route:** Queries Stripe API directly (`stripe.products.search`) rather than local DB — avoids stale product/price data from old Stripe accounts.
