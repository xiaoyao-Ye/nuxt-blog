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
          date: 'Jan, 2021',
          data: [
            { id: 1, img: require('@/assets/img/01.jpg'), title: '天未寒  夜明歌尽非攻踏山河', desc: '荆天明', date: '2nd' },
            { id: 2, img: require('@/assets/img/01.jpg'), title: '月烟染  韶华纯然一笑凝芷兰', desc: '高月', date: '5th' }
          ]
        },
        {
          date: 'Jul, 2020',
          data: [
            { id: 3, img: require('@/assets/img/01.jpg'), title: '霸王枪  震八荒', desc: '项少羽', date: '2nd' },
            { id: 4, img: require('@/assets/img/2.jpg'), title: '泪凝蜀川故国亡', desc: '石兰', date: '6th' },
            { id: 5, img: require('@/assets/img/3.jpg'), title: '流光黯  聚散别离未思量', desc: 'desc', date: '9th' },
            { id: 6, img: require('@/assets/img/4.jpg'), title: '渊虹残  纵百川', desc: '盖聂', date: '4th' },
          ]
        },
        {
          date: 'Nov, 2020',
          data: [
            { id: 6, img: require('@/assets/img/5.png'), title: '墨染芙蓉玉骨寒', desc: '端木蓉', date: '2nd' },
            { id: 7, img: require('@/assets/img/6.jpg'), title: '铁铸魂', desc: '大铁锤', date: '5th' },
            { id: 8, img: require('@/assets/img/7.jpg'), title: '笑穿流云终不返', desc: '盗跖', date: '1st' },
            { id: 9, img: require('@/assets/img/8.jpg'), title: '阳春弦  水夜寒', desc: '高渐离', date: '16th' },
            { id: 10, img: require('@/assets/img/9.jpeg'), title: '白雪落  兮箫声咽', desc: '雪女', date: '6th' },
            { id: 11, img: require('@/assets/img/10.jpg'), title: '天下墨魂镇命浮生依', desc: '丹心尽  （太子丹）', date: '7th' },
          ]
        },
        {
          date: 'Dec, 2019',
          data: [
            { id: 12, img: require('@/assets/img/11.jpg'), title: '鲨齿寒 横沧澜', desc: '卫庄', date: '2nd' },
            { id: 13, img: require('@/assets/img/12.jpg'), title: '红衣轻舞瑶光乱', desc: '赤练', date: '4th' },
            { id: 14, img: require('@/assets/img/13.jpg'), title: '白羽凤舞九天凝风何日还', desc: '白凤凰', date: '6th' },
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
