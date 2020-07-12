export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'ビールバーJAN - 四ッ谷荒木町',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '四ッ谷荒木町のビールバーJAN(ジャン)です。2018年8月1日オープン。クラフトビール樽生4種、ヱビス樽生、特製の鶏のからあげ。カウンター席、テーブル席、立ち飲みカウンター。日曜日定休。(月曜日が祝日の場合、土日営業し、月曜日がお休み)クラフトビールは日々替わります！新宿区荒木町2-15 2階 03-3226-1556'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '四ッ谷,荒木町,ビールバー,JAN,ジャン,クラフトビール,樽生,ヱビス,鶏のからあげ,カウンター席,テーブル席,立ち飲みカウンター',
        'xml:lang': 'ja',
        lang: 'ja'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,500,700|Noto+Serif+JP:400,500,700&display=swap&subset=japanese'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `/favicon-16x16.png`
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/favicon-32x32.png`
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: `/apple-touch-icon.png`
      }
    ],
    script: [
      { src: 'https://platform.twitter.com/widgets.js' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/style/common.scss',
    'swiper/css/swiper.css',
    'vue-thin-modal/dist/vue-thin-modal.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/vue-awesome-swiper', ssr: false },
    '@/plugins/vue-scrollto',
    '@/plugins/vue-thin-modal'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-fontawesome'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    // vendor: [
    //   'vue-awesome-swiper'
    // ]

    styleResources: {
      scss: ['@/assets/style/_styleResources']
    }
  },

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  }
}
