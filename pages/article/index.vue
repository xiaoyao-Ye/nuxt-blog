<template>
  <div class="article">
    <Header />
    <div class="content">
      <a-timeline>
        <a-timeline-item color="#ff6600" v-for="item in articleList" :key="item.date">
          <div class="date">{{item.date}}</div>
          <div class="item" v-for="son in item.data" :key="son.id">
            <div class="left">
              <div class="img">
                <img :src="son.img" alt />
              </div>
              <div>
                <div class="title">{{son.title}}</div>
                <div class="desc">{{son.desc}}</div>
              </div>
            </div>
            <div class="right">
              <span>{{son.date}}</span>
            </div>
          </div>
        </a-timeline-item>
        <a-timeline-item color="#ff6600"></a-timeline-item>
      </a-timeline>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articleList: [
        {
          date: 'Start, 2020',
          data: [
            { id: 1, img: require('@/assets/img/01.jpg'), title: 'title', desc: 'desc', date: '2ed' },
            { id: 2, img: require('@/assets/img/01.jpg'), title: 'title', desc: 'desc', date: '6th' }
          ]
        },
        {
          date: 'Feb, 2020',
          data: [
            { id: 3, img: require('@/assets/img/01.jpg'), title: 'title', desc: 'desc', date: '2ed' },
            { id: 4, img: require('@/assets/img/01.jpg'), title: 'title', desc: 'desc', date: '6th' },
            { id: 5, img: require('@/assets/img/01.jpg'), title: 'title', desc: 'desc', date: '6th' },
            { id: 6, img: require('@/assets/img/01.jpg'), title: 'title', desc: 'desc', date: '6th' },
          ]
        }
      ]
    }
  },
  components: {
    Header: () => import('@/components/Header')
  }
}
</script>

<style lang="less" scoped>
.article {
  padding-top: 50px;
  .content {
    margin: 40px auto;
    width: 600px;

    /deep/.ant-timeline-item-content {
      margin-left: 32px;
      .date {
        margin: 0 0 10px;
        font-size: 18px;
      }
      .item {
        display: flex;
        justify-content: space-between;
        padding: 25px 0;
        border-bottom: 1px solid #eee;
        .left {
          display: flex;
          .img {
            overflow: hidden;
            display: flex;
            justify-content: center;
            width: 45px;
            min-width: 45px;
            height: 45px;
            margin-right: 10px;
            border-radius: @border-radius-base;
            img {
              height: 100%;
            }
          }
          .title {
            font-size: 16px;
            color: @heading-color;
          }
        }
        .right {
          min-width: 40px;
          text-align: right;
          span {
            // 还需要导入字体样式
            font-family: eafont, Hiragino Sans GB, Hiragino Sans GB W3,
              Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
            color: #d2c6a3;
            // flex-grow: 1; //这三个元素只有它在有空余空间时可伸缩，也就是它占据了所有剩余空间
            // display: flex; //将它设置为flex,就可以单独对他进行主轴右对齐
            // justify-content: flex-end;
          }
        }
      }
    }
  }
}
</style>
