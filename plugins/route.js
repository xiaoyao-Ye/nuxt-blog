export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    // ...
    // 页面刷新有时候没有动画效果,会导致页面还没渲染完成就直接显示,
    // 路由守卫延迟放行好像可以触发动画,
    // 或者是跳转前加一个加载中状态,跳转过去之后延迟取消.
    console.log('11');
    setTimeout(() => {
      next()
    }, 2000);
  })
  app.router.afterEach((to, from) => {
    // to and from are both route objects.
    console.log('22');
  })
}
