/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        port: "",
        pathname: "/api/character/avatar/**", // Ajusta el patrón según las rutas de tus imágenes
      },
    ],
  },
}

export default nextConfig
