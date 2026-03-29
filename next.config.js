/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingIncludes: {
    '/api/download/handwritten': [
      'node_modules/pdfkit/js/data/**',
      'public/fonts/Caveat-Regular.ttf',
    ],
    '/app/api/download/handwritten/route': [
      'node_modules/pdfkit/js/data/**',
      'public/fonts/Caveat-Regular.ttf',
    ],
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // pdfkit, canvas, and fontkit are Node.js-only — don't bundle them for the browser
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
        fs: false,
        path: false,
        stream: false,
        zlib: false,
        'iconv-lite': false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
