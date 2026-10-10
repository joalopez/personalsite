import {
  DEMO_BASE,
  OPERACION_LABEL,
  TIPO_LABEL,
  formatPrice,
  propertyWhatsappMessage,
  demoWhatsapp,
  type Property,
  type TipoPropiedad,
} from '../data/demo-inmobiliaria';

export const escapeHtml = (value: string): string =>
  value.replace(
    /[&<>"']/g,
    (char) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char] ?? char
  );

const hashSeed = (seed: string): number => {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
};

const mulberry32 = (seed: number): (() => number) => {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const windows = (rand: () => number, x: number, y: number, w: number, h: number): string => {
  const cols = Math.max(1, Math.floor((w - 14) / 20));
  const rows = Math.max(1, Math.floor((h - 18) / 22));
  const gapX = (w - cols * 10) / (cols + 1);
  const gapY = (h - rows * 12) / (rows + 1);
  let out = '';
  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      if (rand() < 0.22) continue;
      const wx = x + gapX + c * (10 + gapX);
      const wy = y + gapY + r * (12 + gapY);
      out += `<rect class="di-art__win" x="${wx.toFixed(1)}" y="${wy.toFixed(1)}" width="10" height="12" rx="1.5"/>`;
    }
  }
  return out;
};

export const propertyArtSvg = (seed: string, tipo: TipoPropiedad): string => {
  const rand = mulberry32(hashSeed(seed));
  const sun = `<circle class="di-art__sun" cx="${60 + Math.round(rand() * 40)}" cy="${52 + Math.round(rand() * 24)}" r="${14 + Math.round(rand() * 10)}"/>`;
  const base = `<rect class="di-art__bg" width="400" height="260"/><line class="di-art__ground" x1="0" y1="222" x2="400" y2="222"/>`;

  if (tipo === 'terreno') {
    const treeX = 300 + Math.round(rand() * 40);
    return `<svg class="di-art" viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">${base}${sun}
      <polygon class="di-art__land" points="70,150 330,150 400,222 0,222"/>
      <path class="di-art__line" d="M120 168 h60 M210 168 h70 M150 190 h90"/>
      <line class="di-art__trunk" x1="${treeX}" y1="150" x2="${treeX}" y2="196"/>
      <circle class="di-art__tree" cx="${treeX}" cy="132" r="26"/>
      <rect class="di-art__post" x="96" y="120" width="26" height="34" rx="3"/>
    </svg>`;
  }

  if (tipo === 'local') {
    return `<svg class="di-art" viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">${base}${sun}
      <rect class="di-art__bldg di-art__bldg--a1" x="84" y="108" width="232" height="114" rx="10"/>
      <rect class="di-art__win di-art__win--big" x="104" y="150" width="120" height="56" rx="4"/>
      <rect class="di-art__door" x="244" y="160" width="46" height="62" rx="4"/>
      <rect class="di-art__stripe di-art__stripe--a1" x="84" y="118" width="232" height="16"/>
      <rect class="di-art__stripe di-art__stripe--a2" x="96" y="118" width="18" height="16"/>
      <rect class="di-art__stripe di-art__stripe--a2" x="132" y="118" width="18" height="16"/>
      <rect class="di-art__stripe di-art__stripe--a2" x="168" y="118" width="18" height="16"/>
      <rect class="di-art__stripe di-art__stripe--a2" x="204" y="118" width="18" height="16"/>
      <rect class="di-art__stripe di-art__stripe--a2" x="240" y="118" width="18" height="16"/>
      <rect class="di-art__stripe di-art__stripe--a2" x="276" y="118" width="18" height="16"/>
      <line class="di-art__line" x1="118" y1="140" x2="220" y2="140"/>
    </svg>`;
  }

  if (tipo === 'departamento') {
    return `<svg class="di-art" viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">${base}${sun}
      <rect class="di-art__bldg di-art__bldg--a1" x="118" y="40" width="120" height="182" rx="8"/>
      ${windows(rand, 118, 52, 120, 150)}
      <rect class="di-art__bldg di-art__bldg--a2" x="244" y="120" width="70" height="102" rx="8"/>
      ${windows(rand, 244, 128, 70, 70)}
      <rect class="di-art__bldg di-art__bldg--a2" x="52" y="140" width="58" height="82" rx="8"/>
      ${windows(rand, 52, 148, 58, 56)}
      <rect class="di-art__door" x="164" y="192" width="28" height="30" rx="3"/>
    </svg>`;
  }

  const treeX = 320 + Math.round(rand() * 30);
  return `<svg class="di-art" viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">${base}${sun}
    <rect class="di-art__bldg di-art__bldg--a1" x="118" y="122" width="164" height="100" rx="6"/>
    <polygon class="di-art__roof" points="96,122 200,58 304,122"/>
    <rect class="di-art__door" x="182" y="172" width="32" height="50" rx="4"/>
    <rect class="di-art__win" x="138" y="150" width="34" height="30" rx="3"/>
    <rect class="di-art__win" x="228" y="150" width="34" height="30" rx="3"/>
    <line class="di-art__trunk" x1="${treeX}" y1="150" x2="${treeX}" y2="196"/>
    <circle class="di-art__tree" cx="${treeX}" cy="132" r="26"/>
  </svg>`;
};

const shortSpecs = (p: Property): string => {
  if (p.tipo === 'terreno') return `${p.metrosTerreno ?? 0} m²`;
  const parts = [`${p.ambientes} amb`, `${p.dormitorios} dorm`, `${p.metros} m²`];
  if (p.cochera) parts.push('cochera');
  return parts.join(' · ');
};

export interface Spec {
  label: string;
  value: string;
}

export const specsOf = (p: Property): Spec[] => {
  if (p.tipo === 'terreno') {
    return [
      { label: 'Tipo', value: TIPO_LABEL[p.tipo] },
      { label: 'Superficie', value: `${p.metrosTerreno ?? 0} m²` },
    ];
  }
  const specs: Spec[] = [
    { label: 'Ambientes', value: String(p.ambientes) },
    { label: 'Dormitorios', value: String(p.dormitorios) },
    { label: 'Baños', value: String(p.banios) },
    { label: 'Superficie cubierta', value: `${p.metros} m²` },
  ];
  if (p.metrosTerreno) specs.push({ label: 'Terreno', value: `${p.metrosTerreno} m²` });
  specs.push({ label: 'Cochera', value: p.cochera ? 'Sí' : 'No' });
  return specs;
};

const badges = (p: Property): string => {
  const items = [
    `<span class="di-tag di-tag--${p.operacion}">${OPERACION_LABEL[p.operacion]}</span>`,
    `<span class="di-tag">${TIPO_LABEL[p.tipo]}</span>`,
  ];
  if (p.destacada && !p.vendida) items.push('<span class="di-tag di-tag--destacada">Destacada</span>');
  if (p.vendida) items.push('<span class="di-tag di-tag--vendida">Vendida</span>');
  return items.join('');
};

export const cardHtml = (p: Property): string => {
  const sold = p.vendida ? ' di-card--vendida' : '';
  return `<article class="di-card${sold}">
    <a class="di-card__link" href="${DEMO_BASE}/propiedad/${p.id}">
      <span class="di-card__media">${propertyArtSvg(`${p.id}-frente`, p.tipo)}</span>
      <span class="di-card__body">
        <span class="di-card__tags">${badges(p)}</span>
        <span class="di-card__price">${formatPrice(p)}</span>
        <span class="di-card__title">${escapeHtml(p.titulo)}</span>
        <span class="di-card__loc">${escapeHtml(p.zona)} · ${escapeHtml(p.direccion)}</span>
        <span class="di-card__specs">${shortSpecs(p)}</span>
      </span>
    </a>
  </article>`;
};

export const galleryHtml = (p: Property): string => {
  const seeds = [`${p.id}-frente`, `${p.id}-living`, `${p.id}-fondo`];
  return seeds
    .map(
      (seed, index) =>
        `<figure class="di-ficha__shot${index === 0 ? ' di-ficha__shot--main' : ''}">${propertyArtSvg(seed, p.tipo)}</figure>`
    )
    .join('');
};

export const panelRowHtml = (p: Property): string => {
  const flags = [
    p.destacada ? '<span class="di-tag di-tag--destacada">Destacada</span>' : '',
    p.vendida ? '<span class="di-tag di-tag--vendida">Vendida</span>' : '',
    p.id.startsWith('local-') ? '<span class="di-tag di-tag--nueva">Agregada por vos</span>' : '',
  ]
    .filter(Boolean)
    .join('');
  const name = escapeHtml(p.titulo);
  return `<li class="di-panel__row">
    <span class="di-panel__thumb">${propertyArtSvg(`${p.id}-frente`, p.tipo)}</span>
    <div class="di-panel__meta">
      <span class="di-panel__name">${name}</span>
      <span class="di-panel__sub">${TIPO_LABEL[p.tipo]} · ${OPERACION_LABEL[p.operacion]} · ${escapeHtml(p.zona)} · ${formatPrice(p)}</span>
      ${flags ? `<span class="di-panel__flags">${flags}</span>` : ''}
    </div>
    <div class="di-panel__actions">
      <button class="di-btn-sm" type="button" data-action="preview" data-id="${p.id}" aria-label="Vista previa de ${name}">Vista previa</button>
      <button class="di-btn-sm" type="button" data-action="edit" data-id="${p.id}" aria-label="Editar ${name}">Editar</button>
      <button class="di-btn-sm" type="button" data-action="destacar" data-id="${p.id}" aria-label="${p.destacada ? 'Quitar destacado a' : 'Destacar'} ${name}">${p.destacada ? 'No destacar' : 'Destacar'}</button>
      <button class="di-btn-sm" type="button" data-action="vender" data-id="${p.id}" aria-label="${p.vendida ? 'Marcar disponible' : 'Marcar vendida'} ${name}">${p.vendida ? 'Disponible' : 'Vendida'}</button>
      <button class="di-btn-sm di-btn-sm--danger" type="button" data-action="delete" data-id="${p.id}" aria-label="Eliminar ${name}">Eliminar</button>
    </div>
  </li>`;
};

export const fichaHtml = (p: Property): string => {
  const specs = specsOf(p)
    .map((s) => `<div class="di-spec"><dt>${s.label}</dt><dd>${s.value}</dd></div>`)
    .join('');
  return `<div class="di-ficha__preview">
    <div class="di-ficha__gallery">${galleryHtml(p)}</div>
    <div class="di-ficha__info">
      <div class="di-card__tags">${badges(p)}</div>
      <p class="di-ficha__price">${formatPrice(p)}</p>
      <h3>${escapeHtml(p.titulo)}</h3>
      <p class="di-ficha__loc">${escapeHtml(p.zona)} · ${escapeHtml(p.direccion)}</p>
      <dl class="di-specs">${specs}</dl>
      <p class="di-ficha__desc">${escapeHtml(p.descripcion)}</p>
      <a class="btn btn--primary" href="${demoWhatsapp(propertyWhatsappMessage(p))}" target="_blank" rel="noopener">
        Consultar esta propiedad
      </a>
    </div>
  </div>`;
};
