/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Игнорировать ошибки сборки для Vercel
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Оптимизация для больших ассетов
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf|hdr)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/[path][name].[hash][ext]'
      }
    })
    return config
  }
}

module.exports = nextConfig
