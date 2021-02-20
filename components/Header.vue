<template>
  <div class="header">
    <div class="left" @click="$router.push('/')">妖</div>
    <div class="center" :style="{opacity: opacity}">~</div>
    <div class="right" @click="$router.push('/about')">
      <img src="@/assets/img/01.jpg" alt />
    </div>
  </div>
</template>

<script>
function throttle(func, wait) {
  let timeout;
  return function () {
    let context = this;
    // console.log(arguments);
    let args = arguments;
    if (!timeout) { // timeout有内容了,则跳过,
      timeout = setTimeout(() => {
        timeout = null;
        // func();
        func.apply(context, args)
      }, wait)
    }
  }
}

export default {
  data() {
    return {
      opacity: 0,
    }
  },
  mounted() {
    window.onscroll = throttle(this.onScroll, 300)
  },
  methods: {
    onScroll() {
      console.log(document.documentElement.scrollTop || document.body.scrollTop)
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      this.opacity = top > 10 ? 1 : 0;
    }
  },
}
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f6f7f8;
  background-color: #fff;
  .left {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 24px;
    font-family: cursive;
    color: #000;
    cursor: @cursor-pointer;
  }
  .center {
    transition: all 0.6s ease;
  }
  .right {
    width: 30px;
    height: 30px;
    cursor: @cursor-pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
