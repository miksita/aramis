import type { NextConfig } from "next";

const nextConfig = {
  output: 'export', // Статический экспорт
  distDir: 'out',   // Папка для сборки (опционально)
  images: {
    unoptimized: true, // Отключает next/image оптимизацию
  },
};

export default nextConfig;