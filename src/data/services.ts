import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, SITE_URL } from '../consts';

export interface ServicePage {
  slug: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  description: string;
  lead: string;
  problems: string[];
  includes: string[];
  priceNote: string;
  faqs: { pregunta: string; respuesta: string }[];
}

export const whatsappFor = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const defaultWa = whatsappFor(WHATSAPP_MESSAGE);

export const buildServiceJsonLd = (page: ServicePage) => [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.title,
    serviceType: page.title,
    description: page.description,
    provider: { '@id': `${SITE_URL}/#person` },
    areaServed: { '@type': 'Country', name: 'Argentina' },
    url: `${SITE_URL}/servicios/${page.slug}`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.pregunta,
      acceptedAnswer: { '@type': 'Answer', text: faq.respuesta },
    })),
  },
];

export const buildBreadcrumbJsonLd = (page: ServicePage) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${SITE_URL}/#servicios` },
    {
      '@type': 'ListItem',
      position: 3,
      name: page.title,
      item: `${SITE_URL}/servicios/${page.slug}`,
    },
  ],
});
