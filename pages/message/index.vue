<template>
  <div>
    <Header />
    <div class="warp">
      <a-button type="dashed" @click="$router.push('/')">留言页面开发中...(*^▽^*)去看看别的页面吧!</a-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('@/components/Header/index')
  }
}
</script>

<style lang="less" scoped>
.warp {
  height: 100vh;
  text-align: center;
  line-height: 60vh;
}
</style>
