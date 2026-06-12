import { getUncachableStripeClient } from './stripeClient.js';

async function seedProducts() {
  const stripe = await getUncachableStripeClient();

  console.log('Seeding Stripe products for Maison Sud...');

  const existingProducts = await stripe.products.search({
    query: "metadata['local_id']:'tee-homme-maison-sud' AND active:'true'"
  });

  if (existingProducts.data.length > 0) {
    const existing = existingProducts.data[0];
    const prices = await stripe.prices.list({ product: existing.id, active: true });
    console.log(`✓ T-shirt homme Maison Sud already exists.`);
    console.log(`  Product ID: ${existing.id}`);
    console.log(`  Price ID:   ${prices.data[0]?.id}`);
    return;
  }

  const product = await stripe.products.create({
    name: 'T-shirt homme Maison Sud',
    description: 'Le t-shirt signature Maison Sud. Logo brodé sur la poitrine, coupe régulière en coton premium blanc.',
    metadata: {
      local_id: 'tee-homme-maison-sud',
    },
  });
  console.log(`✓ Created product: ${product.name} (${product.id})`);

  const price = await stripe.prices.create({
    product: product.id,
    unit_amount: 2999,
    currency: 'eur',
  });
  console.log(`✓ Created price: 29.99 EUR (${price.id})`);

  console.log('\nDone! Run this again to verify.');
}

seedProducts().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
