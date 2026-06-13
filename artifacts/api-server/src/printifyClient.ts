const PRINTIFY_API_BASE = 'https://api.printify.com/v1';
const SHOP_ID = '27907354';
const PRODUCT_ID = '6a2dc04573ad2eacae0efe6d';

const SIZE_TO_VARIANT: Record<string, number> = {
  S: 73199,
  M: 73203,
  L: 73207,
  XL: 73211,
  '2XL': 73215,
  '3XL': 79169,
  '4XL': 101476,
};

function getToken(): string {
  const token = process.env.PRINTIFY_API_TOKEN;
  if (!token) throw new Error('PRINTIFY_API_TOKEN environment variable is not set');
  return token;
}

async function printifyRequest(path: string, options: RequestInit = {}): Promise<any> {
  const resp = await fetch(`${PRINTIFY_API_BASE}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
    },
    signal: AbortSignal.timeout(15_000),
  });

  const body = await resp.json();

  if (!resp.ok) {
    throw new Error(
      `Printify API error ${resp.status}: ${JSON.stringify(body)}`
    );
  }

  return body;
}

export interface PrintifyAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1: string;
  address2?: string;
  city: string;
  region: string;
  zip: string;
  country: string;
}

export async function createPrintifyOrder(opts: {
  externalId: string;
  size: string;
  quantity: number;
  address: PrintifyAddress;
}): Promise<{ id: string }> {
  const variantId = SIZE_TO_VARIANT[opts.size] ?? SIZE_TO_VARIANT['M'];

  const payload = {
    external_id: opts.externalId,
    label: `Maison Sud — ${opts.externalId.slice(-8)}`,
    line_items: [
      {
        product_id: PRODUCT_ID,
        variant_id: variantId,
        quantity: opts.quantity,
      },
    ],
    shipping_method: 1,
    send_shipping_notification: true,
    address_to: {
      first_name: opts.address.firstName,
      last_name: opts.address.lastName,
      email: opts.address.email,
      phone: opts.address.phone || '',
      country: opts.address.country,
      region: opts.address.region || '',
      address1: opts.address.address1,
      address2: opts.address.address2 || '',
      city: opts.address.city,
      zip: opts.address.zip,
    },
  };

  return printifyRequest(`/shops/${SHOP_ID}/orders.json`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
