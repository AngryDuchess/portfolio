/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'res.cloudinary.com',
        pathname: '**'
      },
      {
        protocol: "https",
        hostname: 'media.giphy.com',
        pathname: '**'
      },
      {
        protocol: "https",
        hostname: 'portfolio-cms-jm8s.onrender.com',
        pathname: '**'
      },
      {
        protocol: "https",
        hostname: 'cms-0qf1.onrender.com',
        pathname: '**'
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/:all*(webp|gif|jpg|jpeg|png|svg)', 
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', 
          },
        ],
      },
    ];
  }
};

export default nextConfig;
