/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // For GitHub Pages under /<repo>, set NEXT_PUBLIC_BASE_PATH=/<repo>
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true,
};
export default nextConfig;
