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

    const product = await storage.getProductByLocalId(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found in Stripe. Run the seed script first.' });
    }

    const prices = await storage.getPricesForProduct(product.product_id as string || product.id as string);
    if (!prices.length) {
      return res.status(404).json({ error: 'No active price found for this product.' });
    }

    const priceId = prices[0].id as string;

    const stripe = await getUncachableStripeClient();
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
