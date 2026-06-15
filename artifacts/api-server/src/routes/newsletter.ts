import { Router } from "express";
import { Resend } from "resend";
import { db } from "../db";
import { newsletterSubscribersTable } from "@workspace/db";
import { eq } from "drizzle-orm";
const router = Router();
const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: unknown): email is string {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

router.post("/newsletter/subscribe", async (req, res) => {
  const { email } = req.body ?? {};
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Adresse email invalide." });
  }

  const existing = await db
    .select()
    .from(newsletterSubscribersTable)
    .where(eq(newsletterSubscribersTable.email, email))
    .limit(1);

  if (existing.length > 0) {
    return res.status(409).json({ error: "Cette adresse est déjà inscrite." });
  }

  await db.insert(newsletterSubscribersTable).values({ email });

  await resend.emails.send({
    from: "Maison Sud <onboarding@resend.dev>",
    to: email,
    subject: "Bienvenue au Club Maison Sud 🌊",
    html: `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bienvenue au Club Maison Sud</title>
</head>
<body style="margin:0;padding:0;background:#ffffff;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;">
    <tr>
      <td align="center" style="padding:48px 24px;">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td align="center" style="padding-bottom:48px;border-bottom:1px solid #e5e5e5;">
              <h1 style="margin:0;font-size:28px;font-weight:900;letter-spacing:0.3em;text-transform:uppercase;color:#1a1a1a;">MAISON SUD</h1>
              <p style="margin:8px 0 0;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#9b8b7a;">L'Été Est Un État d'Esprit</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:48px 0;">
              <h2 style="margin:0 0 16px;font-size:22px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#1a1a1a;">Bienvenue dans le Club</h2>
              <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#555555;">
                Tu fais maintenant partie du cercle privé Maison Sud. En avant-première, tu seras le premier à découvrir nos nouvelles collections, nos drops exclusifs et nos offres réservées aux membres.
              </p>
              <p style="margin:0 0 40px;font-size:15px;line-height:1.7;color:#555555;">
                La Côte d'Azur, le soleil, la mer — cet été est un état d'esprit. Et tu en fais partie.
              </p>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#1b3d5e;padding:16px 40px;">
                    <a href="https://maisonsudbrand.replit.app" style="color:#ffffff;font-size:11px;font-weight:700;letter-spacing:0.3em;text-transform:uppercase;text-decoration:none;">
                      DÉCOUVRIR LA COLLECTION
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top:32px;border-top:1px solid #e5e5e5;">
              <p style="margin:0;font-size:11px;color:#aaaaaa;letter-spacing:0.1em;text-transform:uppercase;">
                Maison Sud · contact.houseofhouse@gmail.com
              </p>
              <p style="margin:8px 0 0;font-size:11px;color:#aaaaaa;">
                Tu reçois cet email car tu t'es inscrit au Club VIP Maison Sud.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
  });

  return res.status(201).json({ success: true });
});

export default router;
