import type { NextConfig } from 'next';

/**
 * GitHub project Pages needs basePath.
 * When custom-domain DNS for margaritoramirezllc.com is live:
 * 1) Set useCustomDomain = true
 * 2) Add public/CNAME with margaritoramirezllc.com (only after DNS works)
 * 3) Update company.siteUrl to https://margaritoramirezllc.com
 * 4) Redeploy
 * Do not enable CNAME early — GitHub may redirect github.io → custom domain.
 */
const useCustomDomain = false;
const repo = 'margarito-ramirez-llc-nextjs-website';
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd && !useCustomDomain ? `/${repo}` : '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
