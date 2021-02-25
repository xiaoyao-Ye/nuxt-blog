<template>
  <div>
    <a-button type="dashed" @click="$router.push('/')">登录页面开发中...(*^▽^*)去看看别的页面吧!</a-button>
    <div class="loading">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@keyframes loading {
  0%,
  100% {
    opacity: 0.98;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2.2);
  }
}
.loading {
  display: flex;
  margin-left: 10px;
  i {
    margin-right: 8px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    animation: loading 1.4s ease infinite;
    opacity: 0.98;
    background: rgb(60, 174, 207);
    &:nth-of-type(2) {
      animation-delay: 0.12s;
      background: rgb(76, 183, 212);
    }
    &:nth-of-type(3) {
      animation-delay: 0.24s;
      background: rgb(104, 193, 218);
    }
    &:nth-of-type(4) {
      animation-delay: 0.36s;
      background: rgb(125, 209, 233);
    }
    &:nth-of-type(5) {
      animation-delay: 0.48s;
      background: rgb(162, 227, 245);
    }
  }
}
</style>
