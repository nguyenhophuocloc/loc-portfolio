/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Next 16 requires every `quality` value used by <Image> to be allow-listed
    qualities: [75, 100],
  },
};

export default nextConfig;
