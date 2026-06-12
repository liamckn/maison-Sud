import { Router, type IRouter } from 'express';
import { storage } from '../storage';
import { getUncachableStripeClient } from '../stripeClient';

const router: IRouter = Router();

router.post('/stripe/checkout', async (req, res) => {
  try {
    const { productId, size, quantity = 1 } = req.body;

    if (!productId) {
      return res.status(400).json({ error: 'productId is required' });
    }

    const stripe = await getUncachableStripeClient();

    // Look up product directly from Stripe API (bypasses stale local DB cache)
    const searchResult = await stripe.products.search({
      query: `metadata['local_id']:'${productId}' AND active:'true'`,
      limit: 1,
    });

    const product = searchResult.data[0];
    if (!product) {
      return res.status(404).json({ error: 'Product not found in Stripe. Run the seed script first.' });
    }

    // Get active prices for this product directly from Stripe
    const priceList = await stripe.prices.list({
      product: product.id,
      active: true,
      limit: 1,
    });

    if (!priceList.data.length) {
      return res.status(404).json({ error: 'No active price found for this product.' });
    }

    const priceId = priceList.data[0].id;
    const host = `${req.protocol}://${req.get('host')}`;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity,
        },
      ],
      mode: 'payment',
      success_url: `${host}/?checkout=success`,
      cancel_url: `${host}/product/${productId}`,
      metadata: { productId, size: size || '' },
    });

    res.json({ url: session.url });
  } catch (err: any) {
    req.log.error({ err }, 'Checkout error');
    res.status(500).json({ error: err.message });
  }
});

router.get('/stripe/products', async (_req, res) => {
  try {
    const rows = await storage.listProductsWithPrices();
    res.json({ data: rows });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
