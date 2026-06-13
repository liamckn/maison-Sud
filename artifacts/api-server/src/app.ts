import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./routes";
import { WebhookHandlers } from "./webhookHandlers";
import { logger } from "./lib/logger";
import { createPrintifyOrder, type PrintifyAddress } from "./printifyClient";
import { getUncachableStripeClient } from "./stripeClient";

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);

app.post(
  '/api/stripe/webhook',
  express.raw({ type: 'application/json' }),
  async (req, res) => {
    const signature = req.headers['stripe-signature'];

    if (!signature) {
      res.status(400).json({ error: 'Missing stripe-signature' });
      return;
    }

    try {
      const sig = Array.isArray(signature) ? signature[0] : signature;

      if (!Buffer.isBuffer(req.body)) {
        logger.error('Webhook route received non-Buffer body — check middleware order');
        res.status(500).json({ error: 'Webhook processing error' });
        return;
      }

      // Let stripe-replit-sync handle DB sync first
      await WebhookHandlers.processWebhook(req.body as Buffer, sig);

      // Also handle checkout completion for Printify fulfillment
      const event = JSON.parse(req.body.toString());
      if (event.type === 'checkout.session.completed') {
        handlePrintifyFulfillment(event.data.object).catch((err) =>
          logger.error({ err }, 'Printify fulfillment failed')
        );
      }

      res.status(200).json({ received: true });
    } catch (error: any) {
      logger.error({ err: error }, 'Webhook processing error');
      res.status(400).json({ error: 'Webhook processing error' });
    }
  }
);

async function handlePrintifyFulfillment(session: any): Promise<void> {
  const stripe = await getUncachableStripeClient();

  // Retrieve full session to ensure shipping details are present
  const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
    expand: ['line_items'],
  });

  const shipping = fullSession.shipping_details;
  const customer = fullSession.customer_details;
  const meta = fullSession.metadata ?? {};

  if (!shipping?.address || !customer?.email) {
    logger.warn({ sessionId: session.id }, 'Printify: missing shipping address or email — skipping');
    return;
  }

  const nameParts = (shipping.name ?? customer.name ?? '').trim().split(' ');
  const firstName = nameParts[0] ?? '';
  const lastName = nameParts.slice(1).join(' ') || firstName;

  const address: PrintifyAddress = {
    firstName,
    lastName,
    email: customer.email,
    phone: customer.phone ?? '',
    address1: shipping.address.line1 ?? '',
    address2: shipping.address.line2 ?? '',
    city: shipping.address.city ?? '',
    region: shipping.address.state ?? '',
    zip: shipping.address.postal_code ?? '',
    country: shipping.address.country ?? '',
  };

  const size = meta.size || 'M';
  const quantity = fullSession.line_items?.data[0]?.quantity ?? 1;

  const order = await createPrintifyOrder({
    externalId: fullSession.id,
    size,
    quantity,
    address,
  });

  logger.info({ printifyOrderId: order.id, sessionId: fullSession.id, size }, 'Printify order created');
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
