import NProgress from 'nprogress'

/*全局配置 加载条*/
NProgress.configure({
  easing: 'ease-out-in',  // 动画方式
  speed: 700,  // 递增进度条的速度
  showSpinner: true, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})

// nuxt的实例解构出app.app里有router,store等对象
export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    NProgress.start();
    next()
  })
  app.router.afterEach((to, from) => {
    NProgress.done();
  })
}
