<template>
  <div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 390px;
  list-style: none;
  background: #333333;
  li {
    position: absolute;
    bottom: -200px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.2);
    &:nth-child(1) {
      left: 25%;
      width: 50px;
      height: 50px;
      animation: BnnerAnimate 25s 0s infinite;
    }
    &:nth-child(2) {
      left: 10%;
      width: 100px;
      height: 100px;
      animation: BnnerAnimate 20s 2s infinite;
    }
    &:nth-child(3) {
      left: 75%;
      width: 75px;
      height: 75px;
      animation: BnnerAnimate 22s 6s infinite;
    }
    &:nth-child(4) {
      left: 60%;
      width: 60px;
      height: 60px;
      animation: BnnerAnimate 28s 8s infinite;
    }
    &:nth-child(5) {
      left: 35%;
      width: 80px;
      height: 80px;
      animation: BnnerAnimate 26s 10s infinite;
    }
    &:nth-child(6) {
      left: 90%;
      width: 70px;
      height: 70px;
      animation: BnnerAnimate 25s 0s infinite;
    }
    &:nth-child(7) {
      left: 80%;
      width: 120px;
      height: 120px;
      animation: BnnerAnimate 25s 4s infinite;
    }
    &:nth-child(8) {
      left: 40%;
      width: 140px;
      height: 140px;
      animation: BnnerAnimate 27s 2s infinite;
      animation-direction: 18s;
    }
    &:nth-child(9) {
      left: 50%;
      width: 20px;
      height: 20px;
      animation: BnnerAnimate 20s 0s infinite;
    }
    &:nth-child(10) {
      left: 30%;
      width: 50px;
      height: 50px;
      animation: BnnerAnimate 30s 0s infinite;
    }
  }
}

@keyframes BnnerAnimate {
  0% {
    transform: translateY(0px) rotate(0turn);
    border-radius: 0%;
  }
  100% {
    transform: translateY(-800px) rotate(2turn);
    border-radius: 50%;
  }
}
</style>
