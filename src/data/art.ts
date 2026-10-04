export type ArtVariant =
  | 'site'
  | 'inmobiliaria'
  | 'restaurante'
  | 'profesionales'
  | 'tiendas'
  | 'ia'
  | 'wordpress';

const SERVICE_ART: Record<string, ArtVariant> = {
  'migracion-wordpress': 'wordpress',
  'optimizacion-ia': 'ia',
  'webs-para-inmobiliarias': 'inmobiliaria',
  'webs-para-restaurantes': 'restaurante',
  'webs-para-profesionales': 'profesionales',
  'tiendas-online': 'tiendas',
};

const BLOG_ART: Record<string, ArtVariant> = {
  'wordpress-no-conviene': 'wordpress',
  'web-para-inmobiliarias': 'inmobiliaria',
  'errores-web-negocio': 'site',
  'como-aparecer-en-chatgpt': 'ia',
};

export const serviceArt = (slug: string): ArtVariant => SERVICE_ART[slug] ?? 'site';

export const blogArt = (id: string): ArtVariant => BLOG_ART[id] ?? 'site';
