# Deploy — joalopez.com.ar

El sitio es 100% estático (Astro) y está deployado en **Vercel** (deploy automático
desde el repo `joalopez/personalsite`). También se podría hostear en Cloudflare Pages
o Netlify.

## Build

```
npm install
npm run build
```

Salida: carpeta `dist/`.

---

## Vercel (hosting actual)

1. https://vercel.com/new → importá el repo `joalopez/personalsite`.
2. Framework: **Astro** (detectado automáticamente). Output: `dist`.
3. **Settings → Domains** → `joalopez.com.ar` y `www.joalopez.com.ar`.
4. **Settings → Environment Variables** → agregar `PUBLIC_GA_ID` con el Measurement
   ID de GA4 (`G-...`). Aplicar a Production (y Preview si querés).
5. Tras cambiar una variable de entorno, **Redeploy** para que tome efecto.

Cada `git push` a la rama de producción publica automáticamente.

---

## Cloudflare Pages (alternativa)

1. Entrá a https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Elegí el repo `joalopez/personalsite`.
3. Configuración de build:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
4. **Save and Deploy**. En ~1 min tenés la URL `*.pages.dev`.
5. Ir a **Custom domains** → agregar `joalopez.com.ar` y `www.joalopez.com.ar`.
   Como el dominio probablemente ya está en Cloudflare, se conecta con un clic.
6. Variables de entorno → `PUBLIC_GA_ID` (analytics).

---

## Netlify (alternativa)

1. https://app.netlify.com → **Add new site** → **Import an existing project**.
2. Elegí el repo. Netlify lee `netlify.toml` (build y headers ya configurados).
3. Deploy. Luego **Domain settings** → agregar `joalopez.com.ar`.
4. Variables de entorno → `PUBLIC_GA_ID` (analytics).

---

## Después del deploy (checklist SEO)

- [ ] **Google Search Console**: https://search.google.com/search-console → agregar la propiedad `joalopez.com.ar` (verificación DNS) → enviar `sitemap-index.xml`.
- [ ] **Bing Webmaster Tools**: enviar el mismo sitemap.
- [ ] **Google Business Profile**: crear/verificar el perfil local (aparecer en Maps y SEO local).
- [ ] Actualizar el DNS del dominio para apuntar al hosting elegido.
- [ ] Verificar en https://pagespeed.web.dev que el sitio dé 95+ en mobile y desktop.
- [ ] Probar el formulario de contacto (si configuraste Web3Forms) y el botón de WhatsApp.

## Formulario de contacto

Por defecto el formulario deriva a WhatsApp (funciona sin configurar nada).
Para que también envíe un email sin salir del sitio:

1. Creá una cuenta gratis en https://web3forms.com (usás tu email).
2. Copiá tu **Access Key**.
3. Pegala en `src/consts.ts` → `FORM_ACCESS_KEY`.

## Analytics (opcional)

1. Creá una propiedad GA4 en https://analytics.google.com y copiá tu **Measurement ID** (`G-XXXXXXXXXX`).
2. Definí `PUBLIC_GA_ID` en las **Environment Variables** de Vercel (Settings → Environment
   Variables) o en un `.env` local. En Vercel, redeployá después de agregarla.
3. Se trackean automáticamente: clics en WhatsApp, clics en email y envíos del formulario
   (eventos `whatsapp`, `email` y `contacto_form`).
