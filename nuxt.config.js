const pkg = require('./package')
const title = 'Touraine Tech 2019 - Conférence sur les nouvelles technologie du numérique'
const description = 'La première conférence technique en région centre sur les nouvelles technologies du numérique'
const url = "https://touraine.tech/"
module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: title,
    // this htmlAttrs you need
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'google-site-verification', content: 'aloBwm93e88RJEH5XUhpIl9yuBphazWNYt6Al0PR7cM'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: description},
      {property: 'og:title', content: title},
      {property: 'og:description', content: description},
      {property: 'og:type', content: 'website'},
      {property: 'og:url', content: url},
      {property: 'og:image', content: url + '/cover.png'},
      {property: 'og:locale', content: 'fr_FR'},
      // Twitter Card
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:site', content: '@tourainetech'},
      {name: 'twitter:title', content: title},
      {name: 'twitter:description', content: description},
      {name: 'twitter:image', content: url + '/cover.png'},
      {name: 'twitter:image:alt', content: 'Touraine tech logo'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Quicksand'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#222333'},

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    //'@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}