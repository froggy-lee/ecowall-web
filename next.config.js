const { i18n } = require('./next-i18next.config')

module.exports = {
  reactStrictMode: false,
  i18n,
  env: {
    NEXT_PUBLIC_ECO_PRICE: process.env.NEXT_PUBLIC_ECO_PRICE
  },
  images: {
    domains: [
      'placeimg.com',
      's3.ap-southeast-1.amazonaws.com',
      'freecash.com',
      'www.cpalead.com'
    ]
  }
}
