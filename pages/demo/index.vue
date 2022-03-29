<template>
  <div class="page">
    <svg-icon icon-class="template" class-name="template" />
    <svg-icon icon-class="compass" class-name="compass" />
    <div class="fade"></div>
    <!-- <div class="template"></div>
    <div class="compass"></div>
    <div class="fade"></div>-->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.page {
  overflow: hidden;
  position: relative;
  height: 100vh;
  background-color: #000;
}
.compass,
.template,
.fade {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: transparent;
}
@keyframes rotate {
  from {
    transform: translateY(-400px) rotate(0deg);
  }
  to {
    transform: translateY(-400px) rotate(360deg);
  }
}
.compass {
  opacity: 0.3;
  height: 1750px;
  background: url("@/icons/svg/compass.svg") no-repeat center;
  animation: rotate 360s infinite linear;
}
.template {
  opacity: 0.1;
  height: 950px;
  background: url("@/icons/svg/template.svg") no-repeat center;
  background-size: 200% 200%;
}
.fade {
  height: 100vh;
  min-height: 950px;
  background-image: radial-gradient(
    ellipse closest-corner at center center,
    hsl(198, 100%, 20%) 0%,
    hsla(204, 100%, 20%, 0) 100%
  );
}
</style>
