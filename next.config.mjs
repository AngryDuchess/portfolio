/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol:"https",
          hostname:'res.cloudinary.com',
          pathname:'**'
        },
        {
          protocol:"https",
          hostname:'media.giphy.com',
          pathname:'**'
        },
        {
          protocol:"https",
          hostname:'hamida-mahama.onrender.com',
          pathname:'**'
        },
        {
          protocol:"https",
          hostname:'cms-0qf1.onrender.com',
          pathname:'**'
        }
      ],
    },
  };

export default nextConfig;
