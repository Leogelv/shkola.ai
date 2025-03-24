/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
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
  },

  // Увеличиваем таймаут для загрузки ресурсов
  httpAgentOptions: {
    keepAlive: true,
    timeout: 60000
  }
}

module.exports = nextConfig
