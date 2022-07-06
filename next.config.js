/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   domains: ['res.cloudinary.com'],
  // },
  async rewrites(){
    return[
      {
        source:'/register',
        destination:'/auth/register',     
      },
    ]
  }
}

module.exports = nextConfig
