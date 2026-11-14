import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Modern formats first; Next falls back to the original for old browsers.
    formats: ['image/avif', 'image/webp']
  },
  // The sign-in, dashboard and pricing pages from the starter template are
  // gone. Send anything still linking to them home, permanently.
  async redirects() {
    return ['/sign-in', '/sign-up', '/pricing', '/dashboard', '/dashboard/:path*'].map(
      (source) => ({ source, destination: '/', permanent: true })
    );
  }
};

export default nextConfig;
