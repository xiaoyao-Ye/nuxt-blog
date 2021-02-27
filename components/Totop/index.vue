<template>
  <!-- up-top -->
  <a-back-top>
    <div class="ant-back-top-inner">UP</div>
  </a-back-top>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
// up-top
.ant-back-top-inner {
  cursor: @cursor-pointer;
  transition: all 0.5s ease;
  height: 100%;
  line-height: 36px;
  text-align: center;
  border: 2px dotted @border-color-base;
  border-radius: 20px;
  box-shadow: @box-shadow-base;
  &:hover {
    box-shadow: 0 2px 10px rgba(255, 0, 0, 0.5);
  }
}
</style>
