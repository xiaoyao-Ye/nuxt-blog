<template>
  <div class="page">
    <Header />
    <div v-html="newMsg"></div>
  </div>
</template>

<script>
// import data from '@/static/Git完整笔记.md';
import data from '@/static/test.md';
// console.log(data);
// import marked from 'marked';
// const marked = require('marked');
export default {
  data() {
    return {
      msg: '# Marked in the browser\n\nRendered by **marked**.'
    }
  },
  components: {
    Header: () => import('@/components/Header/index')
  },
  computed: {
    newMsg() {
      // return marked(this.msg)
      return data
    }
  }
}
</script>

<style lang="less" scoped>
.page {
  padding-top: 50px;
  height: 100vh;
  color: #101010;
}

</style>
