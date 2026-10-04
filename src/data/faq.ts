export interface FaqItem {
  pregunta: string;
  respuesta: string;
}

export const faqs: FaqItem[] = [
  {
    pregunta: '¿Cuánto cuesta una página web?',
    respuesta:
      'Depende del tipo de proyecto, pero una web profesional para un negocio local arranca en un rango accesible y te paso el precio exacto por escrito antes de empezar. No hay costos ocultos ni sorpresas.',
  },
  {
    pregunta: '¿Cuánto tarda en estar lista?',
    respuesta:
      'Una web simple suele estar lista en 1 a 2 semanas. Un proyecto con sistema propio (como el de una inmobiliaria) puede llevar de 3 a 5 semanas. El plazo queda fijado en la propuesta.',
  },
  {
    pregunta: '¿Qué pasa si ya tengo una web en WordPress?',
    respuesta:
      'La migro a un sitio moderno sin perder tu contenido ni tu posicionamiento en Google. El resultado carga al instante, es más seguro y no necesita actualizaciones ni plugins pagos.',
  },
  {
    pregunta: '¿Por qué hablan de aparecer en la IA?',
    respuesta:
      'Cada vez más gente busca recomendaciones directamente en ChatGPT, Gemini o Google AI en lugar de Google. Optimizo tu sitio (AEO) con datos estructurados y contenido claro para que esos sistemas puedan entender tu negocio y recomendarlo.',
  },
  {
    pregunta: '¿Tengo que saber de tecnología?',
    respuesta:
      'No. Me encargo de todo lo técnico y te entrego el sitio funcionando, conectado a Google. Además te enseño a hacer cambios simples, como actualizar textos o precios.',
  },
  {
    pregunta: '¿Puedo pagar en cuotas?',
    respuesta:
      'Sí, se puede dividir el pago en etapas del proyecto (inicio, avance y entrega). Lo charlamos por WhatsApp según tu caso.',
  },
];
