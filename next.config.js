/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['img.pokemondb.net'],
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js'
  }
}
