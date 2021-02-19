<template>
  <div class="about">
    <Header />
    <div class="content">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4s</li>
      </ul>
      <!-- 最好换成icon统一原型边框,内部镂空的 -->
      <div class="contactUs">
        <a-icon type="wechat" theme="filled" />
        <a-icon type="mail" theme="filled" />
        <a-icon type="github" theme="filled" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {
    Header: () => import('@/components/Header')
  }
}
</script>

<style lang="less" scoped>
.about {
  padding-top: 50px;
  .content {
    width: 800px;
    margin: 0 auto;
    padding: 40px 0;
    .contactUs {
      padding: 20px 0 20px 20px;
      i {
        font-size: 24px;
      }
    }
  }
}
</style>
