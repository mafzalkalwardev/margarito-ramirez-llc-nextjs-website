import type { NextConfig } from 'next';

const repo = 'margarito-ramirez-llc-nextjs-website';
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? `/${repo}` : '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: isProd ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
