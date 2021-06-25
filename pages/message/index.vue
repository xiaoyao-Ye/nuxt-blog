<template>
  <div class="message">
    <Header />
    <div class="warp">
      <a-row>
        <a-col :lg="{ span: 12 }">
          <a-input v-model="username" placeholder="用户名称" :maxLength="10" :suffix="`${username.length}/10`" allow-clear />
        </a-col>
      </a-row>
      <a-row>
        <a-col :lg="{ span: 24 }">
          <a-textarea v-model="content" placeholder="请输入内容" :autoSize="{minRows: 6,maxRows: 10}" allow-clear />
        </a-col>
      </a-row>
      <a-button type="dashed" style="padding: 0 30px;" @click="submit">提交</a-button>

      <div class="rows" v-for="item in 10" :key="item">
        <a-row>
          <a-avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <div class="name">呵呵呵</div>
          <div class="date">2021.0514</div>
        </a-row>
        <a-row>111</a-row>
      </div>
      <Loading />

      <!-- <a-button type="dashed" @click="$router.push('/')">留言页面开发中...(*^▽^*)去看看别的页面吧!</a-button> -->
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('@/components/Header'),
    Loading: () => import('@/components/Loading')
  },
  data() {
    return {
      username: '',
      content: ''
    }
  },
  methods: {
    submit() {
      console.log('data', {
        username: this.username,
        content: this.content
      });
    }
  },
}
</script>

<style lang="less" scoped>
.message {
  padding-top: 50px;
}
.warp {
  padding-top: 40px;
  width: 800px;
  height: 100vh;
  .ant-input-affix-wrapper {
    margin-bottom: 20px;
    // border: 1px dashed #dcdff6;
  }
  .rows {
    padding: 30px 0;
    border-bottom: 1px solid #eee;
    .ant-row:first-child {
      display: flex;
      align-items: center;
      .name {
        flex: 1;
        padding-left: 10px;
        color: @success-color;
      }
    }
    .ant-row:last-child {
      padding-left: 40px;
      color: @main-color;
    }
  }
}
</style>
