export const base = import.meta.env.BASE_URL;

export function pagePath(path = '') {
  return `${base}${path.replace(/^\/+/, '')}`;
}
