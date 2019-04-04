module.exports = {
  modules: [
    '@nuxtjs/axios',
  ],
  plugins: [
    {
      src:"~plugins/vue-particles", ssr:false,
    },
  ],
  build: {
    vendor: ['vue-particles'],
  },
  head: {
    link: [
      {
          rel: 'stylesheet',
          href: 'https://use.fontawesome.com/releases/v5.7.1/css/all.css',
          integrity: 'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr',
          crossorigin: 'anonymous',
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' },
    ]
  },
  loading: {
    color: 'rgb(142, 16, 214)',
  },
  transition: {
    name: 'page',
    mode: 'out-in',
  },
  css: [
    '~/css/main.css'
  ],
  mode: 'spa',
}