const repoBasePath = '/margarito-ramirez-llc-nextjs-website';

/** Matches `next.config.ts` production basePath for static GitHub Pages assets. */
export const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === 'production' ? repoBasePath : '');

export function withBasePath(path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
