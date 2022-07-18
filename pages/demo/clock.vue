<template>
  <div class="page">
    <div class="box">
      <div class="time">{{`${hour} : ${minute}`}}</div>
      <div class="date">{{`${month}月${day}日 星期${week}`}}</div>
      <ul>
        <li v-for="index in 60" :key="index" :style="{transform: `rotate(${(index-1) * 6}deg)`}">
          <div :style="{backgroundColor: second >= (index-1) ? '#fff' : '#777'}"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeID: null,
      hour: null,
      minute: null,
      second: null,
      month: null,
      day: null,
      week: null,
    }
  },
  mounted() {
    this.clock();
    this.timeID = setInterval(() => {
      this.clock();
    }, 1000)
  },
  methods: {
    clock() {
      const date = new Date();
      this.hour = date.getHours();
      this.minute = date.getMinutes();
      this.second = date.getSeconds();
      this.month = date.getMonth() + 1;
      this.day = date.getDate();
      this.week = '日一二三四五六'.split('')[date.getDay()];
    }
  },
  beforeDestroy() {
    clearInterval(this.timeID);
  },
}
</script>

<style lang="less" scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 90vw;
  height: 90vw;
  max-width: 90vh;
  max-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ul {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: rotate(-90deg);
    li {
      position: absolute;
      left: 50%;
      top: 50%;
      transform-origin: left;
      text-align: right;
      list-style: none;
      padding-left: 45%;
      width: 48%;
      height: 1%;
      > div {
        width: 100%;
        height: 100%;
        background-color: #777;
      }
    }
  }
}
.time {
  margin-bottom: 20px;
  font-size: 80px;
  font-weight: bold;
  color: #fff;
}
.date {
  font-size: 80px;
  color: #fff;
}
</style>
