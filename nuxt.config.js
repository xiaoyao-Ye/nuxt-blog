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
    'nprogress/nprogress.css',
    './assets/styles/index.less',
    './assets/styles/animation.less',
  ],

  styleResources: {
    less: './assets/styles/variable.less'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // 这里的引入,如果是普通字符串,就在服务端马上运行
  // 如果是要等到浏览器在运行的代码,可以将配置改为对象,并且路径作为...
  // 如果只在浏览器加载的代码,可以添加一个属性ssr: false
  plugins: [
    '@/plugins/antd-ui',
    { src: '@/plugins/route', ssr: false },
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
  axios: {
    prefix: '/api',
    proxy: true
  },

  proxy: {
    '/api': {
      // target: 'http://yeyaoyao.icu',
      target: 'http://localhost:1024',
      pathRewrite: {
        '^/api/': '/'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.cur$/,
        loader: "url-loader",
      })
      config.module.rules.push({
        test: /\.md$/,
        loader: "./markdown-loader"
      })
    }
  }
}
