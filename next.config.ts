import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // THIS is the magic line that fixes GitHub Pages images!
  // Make sure this exactly matches your GitHub repository name
  basePath: '/METRIX-7.0', 
};

export default nextConfig;