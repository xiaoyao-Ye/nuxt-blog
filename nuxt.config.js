const path = require('path')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '( ‘-ωก̀ )~叶妖妖',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: '叶妖妖,叶妖妖的个人博客,叶妖妖blog,妖妖,yeyaoyao.icu' },
      { hid: 'description', name: 'description', content: '叶妖妖的个人博客demo,为了学习和了解nuxt,koa2,mysql,typescript,Linux,Nginx,服务器,域名等相关知识而创建的一套项目' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    './assets/styles/index.less',
    './assets/styles/animation.less',
  ],

  styleResources: {
    less: './assets/styles/variable.less'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/route'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.cur$/,
        loader: "url-loader",
      })
    }
  }
}
