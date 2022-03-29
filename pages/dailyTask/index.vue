<template>
  <div>
    <Header />
    <div class="warp">
      <a-button type="dashed" @click="$router.push('/')">每日任务,签到页面 开发中...(*^▽^*)去看看别的页面吧!</a-button>
    </div>
  </div>
</template>

<script>
import data from '@/static/Git完整笔记.md';
console.log(data);
export default {
  components: {
    Header: () => import('@/components/Header/index')
  },
}
</script>

<style lang="less" scoped>
.warp {
  padding-top: 50px;
  height: 100vh;
  text-align: center;
  // line-height: 60vh;
}
</style>
