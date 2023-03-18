/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  //The below line solves the problem when accesing project local files from path on deployment
  experimental: { nftTracing: true }
}



module.exports = nextConfig
