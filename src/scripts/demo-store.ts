import { allProperties, type Property } from '../data/demo-inmobiliaria';

const STORAGE_KEY = 'demo-inmo-overrides-v1';

export interface Overrides {
  additions: Property[];
  edits: Record<string, Property>;
  deleted: string[];
}

const empty = (): Overrides => ({ additions: [], edits: {}, deleted: [] });

export const readOverrides = (): Overrides => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return empty();
    const parsed = JSON.parse(raw) as Partial<Overrides>;
    return {
      additions: Array.isArray(parsed.additions) ? parsed.additions : [],
      edits: parsed.edits && typeof parsed.edits === 'object' ? parsed.edits : {},
      deleted: Array.isArray(parsed.deleted) ? parsed.deleted : [],
    };
  } catch {
    return empty();
  }
};

const writeOverrides = (overrides: Overrides): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
  } catch {
    /* almacenamiento no disponible */
  }
};

export const resetDemo = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* almacenamiento no disponible */
  }
};

export const isLocalId = (id: string): boolean => id.startsWith('local-');

export const newId = (): string => `local-${Date.now().toString(36)}`;

export const getMergedProperties = (): Property[] => {
  const { additions, edits, deleted } = readOverrides();
  const merged = allProperties
    .filter((p) => !deleted.includes(p.id))
    .map((p) => (edits[p.id] ? { ...p, ...edits[p.id] } : p));
  for (const addition of additions) {
    if (deleted.includes(addition.id)) continue;
    merged.push(edits[addition.id] ? { ...addition, ...edits[addition.id] } : addition);
  }
  return merged;
};

export const getMergedById = (id: string): Property | undefined =>
  getMergedProperties().find((p) => p.id === id);

export const upsertProperty = (property: Property): void => {
  const overrides = readOverrides();

  overrides.deleted = overrides.deleted.filter((id) => id !== property.id);

  if (isLocalId(property.id)) {
    const index = overrides.additions.findIndex((p) => p.id === property.id);
    if (index >= 0) overrides.additions[index] = property;
    else overrides.additions.push(property);
    delete overrides.edits[property.id];
  } else {
    overrides.edits[property.id] = property;
  }
  writeOverrides(overrides);
};

export const removeProperty = (id: string): void => {
  const overrides = readOverrides();
  if (isLocalId(id)) {
    overrides.additions = overrides.additions.filter((p) => p.id !== id);
  } else if (!overrides.deleted.includes(id)) {
    overrides.deleted.push(id);
  }
  delete overrides.edits[id];
  writeOverrides(overrides);
};

export const toggleFlag = (id: string, flag: 'destacada' | 'vendida'): void => {
  const property = getMergedById(id);
  if (!property) return;
  upsertProperty({ ...property, [flag]: !property[flag] });
};
