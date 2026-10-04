# Deploy — joalopez.com.ar

El sitio es 100% estático (Astro). Se puede hostear gratis en Cloudflare Pages,
Netlify o Vercel. Recomendado: **Cloudflare Pages** (rápido en Argentina, gratis, headers ya configurados).

## Build

```
npm install
npm run build
```

Salida: carpeta `dist/`.

---

## Opción A: Cloudflare Pages (recomendado)

1. Entrá a https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Elegí el repo `joalopez/personalsite`.
3. Configuración de build:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
4. **Save and Deploy**. En ~1 min tenés la URL `*.pages.dev`.
5. Ir a **Custom domains** → agregar `joalopez.com.ar` y `www.joalopez.com.ar`.
   Como el dominio probablemente ya está en Cloudflare, se conecta con un clic.
6. (Opcional) Analytics: Variables de entorno → `PUBLIC_UMAMI_SRC` y `PUBLIC_UMAMI_ID`.

Cada `git push` a `master` publica automáticamente.

---

## Opción B: Netlify

1. https://app.netlify.com → **Add new site** → **Import an existing project**.
2. Elegí el repo. Netlify lee `netlify.toml` (build y headers ya configurados).
3. Deploy. Luego **Domain settings** → agregar `joalopez.com.ar`.

---

## Opción C: Vercel

1. https://vercel.com/new → importá el repo.
2. Framework: **Astro** (detectado automáticamente).
3. Deploy. Luego **Settings → Domains** → `joalopez.com.ar`.

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

1. Creá cuenta gratis en https://cloud.umami.is y agregá el sitio.
2. Definí `PUBLIC_UMAMI_SRC` y `PUBLIC_UMAMI_ID` en el hosting (o `.env` local).
3. Se trackean automáticamente: clics en WhatsApp, clics en email y envíos del formulario.
