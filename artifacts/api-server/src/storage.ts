import { sql } from 'drizzle-orm';
import { db } from './db';

export class Storage {
  async getProduct(productId: string) {
    const result = await db.execute(
      sql`SELECT * FROM stripe.products WHERE id = ${productId}`
    );
    return result.rows[0] || null;
  }

  async getProductByLocalId(localId: string) {
    const result = await db.execute(
      sql`SELECT * FROM stripe.products WHERE metadata->>'local_id' = ${localId} AND active = true LIMIT 1`
    );
    return result.rows[0] || null;
  }

  async getPricesForProduct(productId: string) {
    const result = await db.execute(
      sql`SELECT * FROM stripe.prices WHERE product = ${productId} AND active = true ORDER BY unit_amount ASC`
    );
    return result.rows;
  }

  async listProductsWithPrices() {
    const result = await db.execute(sql`
      SELECT
        p.id as product_id,
        p.name as product_name,
        p.description as product_description,
        p.metadata as product_metadata,
        p.images as product_images,
        pr.id as price_id,
        pr.unit_amount,
        pr.currency
      FROM stripe.products p
      LEFT JOIN stripe.prices pr ON pr.product = p.id AND pr.active = true
      WHERE p.active = true
      ORDER BY p.name, pr.unit_amount
    `);
    return result.rows;
  }
}

export const storage = new Storage();
