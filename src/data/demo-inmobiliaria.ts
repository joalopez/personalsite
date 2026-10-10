import { WHATSAPP_NUMBER } from '../consts';

export type Operacion = 'venta' | 'alquiler';
export type TipoPropiedad = 'casa' | 'departamento' | 'terreno' | 'local';

export interface Property {
  id: string;
  titulo: string;
  tipo: TipoPropiedad;
  operacion: Operacion;
  zona: string;
  direccion: string;
  precio: number;
  moneda: 'USD' | 'ARS';
  ambientes: number;
  dormitorios: number;
  banios: number;
  metros: number;
  metrosTerreno?: number;
  cochera: boolean;
  descripcion: string;
  destacada: boolean;
  vendida: boolean;
}

export const DEMO_BASE = '/demos/inmobiliaria';

export const DEMO_BRAND = {
  nombre: 'Casa Norte Propiedades',
  claim: 'Venta y alquiler de propiedades en Comodoro Rivadavia',
  ciudad: 'Comodoro Rivadavia',
  matricula: 'Matrícula CUCIC N° 2147',
};

export const DEMO_ZONAS = [
  'Centro',
  'General Mosconi',
  'Máximo Abásolo',
  'Km 3',
  'Km 5',
  'Rada Tilly',
  'Caleta Córdova',
] as const;

export const TIPO_LABEL: Record<TipoPropiedad, string> = {
  casa: 'Casa',
  departamento: 'Departamento',
  terreno: 'Terreno',
  local: 'Local',
};

export const OPERACION_LABEL: Record<Operacion, string> = {
  venta: 'Venta',
  alquiler: 'Alquiler',
};

export const TIPOS: TipoPropiedad[] = ['casa', 'departamento', 'terreno', 'local'];
export const OPERACIONES: Operacion[] = ['venta', 'alquiler'];

export const allProperties: Property[] = [
  {
    id: 'casa-centro-1',
    titulo: 'Casa amplia sobre calle San Martín',
    tipo: 'casa',
    operacion: 'venta',
    zona: 'Centro',
    direccion: 'San Martín 450',
    precio: 145000,
    moneda: 'USD',
    ambientes: 4,
    dormitorios: 3,
    banios: 2,
    metros: 120,
    metrosTerreno: 240,
    cochera: true,
    descripcion:
      'Casa de categoría a metros del centro, con living comedor amplio, cocina equipada y patio con parrilla. Ideal para familia que busca comodidad y ubicación.',
    destacada: true,
    vendida: false,
  },
  {
    id: 'depto-mosconi-1',
    titulo: 'Departamento luminoso con balcón',
    tipo: 'departamento',
    operacion: 'venta',
    zona: 'General Mosconi',
    direccion: 'Rivadavia 1200',
    precio: 89000,
    moneda: 'USD',
    ambientes: 2,
    dormitorios: 1,
    banios: 1,
    metros: 55,
    cochera: false,
    descripcion:
      'Departamento al frente con excelente luz natural, balcón y cocina integrada. Perfecto para primera vivienda o inversión con renta.',
    destacada: false,
    vendida: false,
  },
  {
    id: 'casa-km3-1',
    titulo: 'Casa con garage y fondo verde',
    tipo: 'casa',
    operacion: 'venta',
    zona: 'Km 3',
    direccion: 'Güemes 3050',
    precio: 118000,
    moneda: 'USD',
    ambientes: 4,
    dormitorios: 3,
    banios: 2,
    metros: 140,
    metrosTerreno: 320,
    cochera: true,
    descripcion:
      'Casa de dos plantas en zona residencial tranquila, con garage para dos autos, quincho y jardín. Lista para entrar a vivir.',
    destacada: true,
    vendida: false,
  },
  {
    id: 'depto-centro-alq-1',
    titulo: 'Departamento de 2 dormitorios céntrico',
    tipo: 'departamento',
    operacion: 'alquiler',
    zona: 'Centro',
    direccion: 'Hipólito Yrigoyen 780',
    precio: 480000,
    moneda: 'ARS',
    ambientes: 3,
    dormitorios: 2,
    banios: 1,
    metros: 78,
    cochera: false,
    descripcion:
      'Departamento en edificio con ascensor, a pasos de la peatonal. Incluye cocina, placard y calefacción. Consultar condiciones de alquiler.',
    destacada: false,
    vendida: false,
  },
  {
    id: 'terreno-rada-tilly-1',
    titulo: 'Terreno en barrio residencial',
    tipo: 'terreno',
    operacion: 'venta',
    zona: 'Rada Tilly',
    direccion: 'Los Álamos 320',
    precio: 65000,
    moneda: 'USD',
    ambientes: 0,
    dormitorios: 0,
    banios: 0,
    metros: 0,
    metrosTerreno: 600,
    cochera: false,
    descripcion:
      'Lote de 600 m² en zona de quintas, con todos los servicios y vista al mar. Excelente oportunidad para construir la casa que buscás.',
    destacada: false,
    vendida: false,
  },
  {
    id: 'local-centro-1',
    titulo: 'Local comercial a la calle',
    tipo: 'local',
    operacion: 'alquiler',
    zona: 'Centro',
    direccion: '9 de Julio 530',
    precio: 650000,
    moneda: 'ARS',
    ambientes: 1,
    dormitorios: 0,
    banios: 1,
    metros: 90,
    cochera: false,
    descripcion:
      'Local con vidriera amplia sobre calle comercial de alto tránsito, con baño y depósito. Ideal para local de ropa, cafetería o showroom.',
    destacada: false,
    vendida: false,
  },
  {
    id: 'casa-km5-1',
    titulo: 'Casa moderna en esquina',
    tipo: 'casa',
    operacion: 'venta',
    zona: 'Km 5',
    direccion: 'Almirante Brown 4120',
    precio: 98000,
    moneda: 'USD',
    ambientes: 3,
    dormitorios: 2,
    banios: 2,
    metros: 110,
    metrosTerreno: 280,
    cochera: true,
    descripcion:
      'Construcción moderna y luminosa, con cocina-comedor integrados, dos baños completos y patio con deck. A estrenar.',
    destacada: true,
    vendida: false,
  },
  {
    id: 'depto-maximo-abasolo-1',
    titulo: 'Monoambiente equipado',
    tipo: 'departamento',
    operacion: 'venta',
    zona: 'Máximo Abásolo',
    direccion: 'Sarmiento 1560',
    precio: 76000,
    moneda: 'USD',
    ambientes: 2,
    dormitorios: 1,
    banios: 1,
    metros: 50,
    cochera: false,
    descripcion:
      'Monoambiente amplio con cocina y baño completos, muy bien mantenido. Alta demanda de alquiler en la zona.',
    destacada: false,
    vendida: true,
  },
  {
    id: 'casa-caleta-cordova-1',
    titulo: 'Casa con vista al mar',
    tipo: 'casa',
    operacion: 'venta',
    zona: 'Caleta Córdova',
    direccion: 'Costanera s/n',
    precio: 132000,
    moneda: 'USD',
    ambientes: 4,
    dormitorios: 3,
    banios: 2,
    metros: 150,
    metrosTerreno: 400,
    cochera: true,
    descripcion:
      'Casa de gran categoría frente a la costa, con doble altura, ventanales con vista al mar, cochera cubierta y parque.',
    destacada: false,
    vendida: false,
  },
];

export const getProperty = (id: string): Property | undefined =>
  allProperties.find((p) => p.id === id);

export const formatPrice = (p: Pick<Property, 'precio' | 'moneda'>): string => {
  const value = new Intl.NumberFormat('es-AR').format(p.precio);
  return p.moneda === 'USD' ? `US$ ${value}` : `$ ${value}`;
};

export const propertyWhatsappMessage = (p: Property): string =>
  `Hola Joaquín, vi la demo para inmobiliarias por la propiedad "${p.titulo}" (${p.zona}). Quiero una web así para mi inmobiliaria.`;

export const DEMO_CONVERSION_MESSAGE =
  'Hola Joaquín, vi la demo para inmobiliarias y quiero una web así para mi negocio.';

export const demoWhatsapp = (message: string = DEMO_CONVERSION_MESSAGE): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
