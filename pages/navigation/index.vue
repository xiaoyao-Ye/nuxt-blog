<template>
  <div>
    <div class="warp">
      <div class="card" v-for="item in navigationList" :key="item.to">
        <svg-icon :icon-class="item.icon" />
        <div class="txt">{{item.label}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigationList: [
        { to: 'www.baidu.com', label: '百度', icon: 'qq' },
        { to: 'www.baidu.com', label: '百度', icon: 'qq' },
        { to: 'www.baidu.com', label: '百度', icon: 'qq' },
        { to: 'www.baidu.com', label: '百度', icon: 'qq' },
        { to: 'www.baidu.com', label: '百度', icon: 'qq' },
      ]
    }
  },
}
</script>

<style lang="less">
.warp {
  display: flex;
  flex-wrap: wrap;
}
.card {
  cursor: @cursor-pointer;
  margin: 1%;
  padding: 20px 10px 10px;
  width: 18%;
  text-align: center;
  box-shadow: 0px 0px 5px skyblue;
  border-radius: 10px;
  .svg-icon {
    font-size: 100px;
    // width: 70%;
    // height: 200px;
  }
  .txt {
    padding: 20px 0;
    font-size: 20px;
  }
}
</style>
