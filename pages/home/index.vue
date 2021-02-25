<template>
  <div id="article">
    <!-- home-bg -->
    <div class="first-screen">
      <div class="header">
        <div class="left">乂叶妖妖</div>
        <div class="right">
          <a-button type="dashed" ghost icon="menu" @click="$router.push('/')"></a-button>
        </div>
      </div>
      <div class="welcome-tips">
        <div class="date">二月 21, 2021</div>
        <div class="title">聚散别离未思量</div>
        <div class="desc">当灾难来临时,精神意志是人类的第一序列武器? 当灾难来临时,希望,才是人类的第一序列武器!</div>
      </div>
      <div class="mask"></div>
      <div class="bg" id="scene">
        <div data-depth="0.4">
          <img src="~assets/img/19.jpg" class="moveImg" :width="imgWidth" :height="imgHeight" />
        </div>
      </div>
    </div>
    <!-- articleList -->
    <div class="warp">
      <div class="articleList">
        <div class="item" v-for="(item, index) in articleList" :key="item.id">
          <div class="pic">
            <img :src="item.pic" alt />
          </div>
          <div class="content">
            <div class="date">{{item.date}}</div>
            <h2 class="title">{{item.title}}</h2>
            <div class="description">{{item.description}}</div>
            <div class="handle">
              <a-button type="link" icon="eye">{{item.eye}}</a-button>
              <a-button type="link" @click="onClickHeart(index)">
                <a-icon type="heart" v-show="!clickHeart" theme="twoTone" two-tone-color="hotpink" />
                <a-icon type="heart" v-show="clickHeart" theme="filled" />
                {{item.heart}}
              </a-button>
              <a-button type="link" icon="message">{{item.comment}}</a-button>
            </div>
          </div>
        </div>
        <!-- 底线 -->
        <div class="bottom-line">
          <a-button type="dashed">你真当我没有底线的吗~╭(╯^╰)╮</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Parallax from 'parallax-js'

export default {
  data() {
    return {
      imgWidth: null,
      imgHeight: null,
      clickHeart: false,

      articleList: [
        {
          id: 1, date: '2021-02-04', title: '天未寒,夜明歌尽非攻踏山河', eye: 101, heart: 8, comment: 1, pic: require('@/assets/img/shan.jpg'),
          description: `天未寒,夜明歌尽非攻踏山河.自秦时明月    --荆天明`
        },
        {
          id: 2, date: '2021-02-01', title: '月烟染,韶华纯然一笑凝芷兰', eye: 99, heart: 45, comment: 78, pic: require('@/assets/img/7.jpg'),
          description: `月烟染,韶华纯然一笑凝芷兰.自秦时明月    --高月。`
        },
        {
          id: 3, date: '2021-01-30', title: '帝王业 谋局制权走马已惘然', eye: 49, heart: 55, comment: 8, pic: require('@/assets/img/16.jpg'),
          description: `帝王业 谋局制权走马已惘然, 秦时明月 -- 李斯`
        },
        {
          id: 4, date: '2020-11-01', title: '未央颂 九州八荒定国功成战', eye: 10, heart: 0, comment: 3, pic: require('@/assets/img/6.jpg'),
          description: `未央颂 九州八荒定国功成战。秦时明月 -- 嬴政`
        },
      ]
    }
  },
  created() {

  },
  mounted() {
    let wWidth = document.documentElement.clientWidth
    let wHeight = document.documentElement.clientHeight
    this.imgWidth = wWidth + 150
    this.imgHeight = wHeight + 150
    if (wWidth <= 600) { this.imgWidth = 1920 / 1.3; this.imgHeight = 960 }

    const scene = document.getElementById('scene');
    new Parallax(scene, {
      relativeInput: true,
      clipRelativeInput: true,
    })
  },
  methods: {
    onClickHeart(index) {
      if (this.clickHeart) {
        this.articleList[index].heart--
      } else {
        this.articleList[index].heart++
      }
      // 点亮一个,所有文章的heart都会被同步.
      this.clickHeart = !this.clickHeart;
    }
  },
}
</script>

<style lang="less" scoped>
#article {
  .first-screen {
    position: relative;
    height: 100vh;
    .header {
      position: absolute;
      top: 60px;
      width: 100%;
      padding: 0 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 36px;
      z-index: 1;
      .left {
        font-family: cursive;
        color: #fff;
      }
      .right {
        line-height: 100%;
      }
    }
    .bg {
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -98;
      box-shadow: 0 2px 15px rgba(76, 80, 207, 0.53);
      img {
        position: absolute;
        top: -40px;
        left: 50%;
        margin-bottom: 20px;
        transform: translateX(-50%);
        max-width: none;
        display: block;
      }
    }
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      clip-path: polygon(0 0, 25% 0, 60% 100%, 0 100%);
      background-color: rgba(76, 80, 207, 0.53);
    }
    .welcome-tips {
      position: absolute;
      top: 45%;
      left: 10%;
      z-index: 1;
      width: 30%;
      transform: translateY(-50%);
      font-family: cursive;
      color: #fff;
      .title {
        padding-bottom: 20px;
        font-size: 36px;
      }
      .desc {
        font-size: 16px;
      }
    }
  }
  //
  .articleList {
    position: relative;
    padding: 80px 0;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: 1px;
      height: 100%;
      z-index: -99;
      background-color: @border-color-base;
    }
    .item {
      display: flex;
      align-items: center;
      padding-bottom: 80px;
      &:nth-child(odd) {
        .content {
          margin-left: -20px;
        }
      }
      &:nth-child(even) {
        flex-direction: row-reverse;
        .content {
          margin-right: -20px;
        }
      }
      .pic {
        cursor: @cursor-pointer;
        overflow: hidden;
        width: 680px;
        height: 440px;
        border-radius: @border-radius-base;
        box-shadow: @box-shadow-base;
        z-index: 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .content {
        padding: 80px 100px;
        width: 500px;
        height: 400px;
        border: 1px solid @border-color-base;
        border-radius: @border-radius-base;
        .date {
          font-size: 12px;
        }
        .title {
          cursor: @cursor-pointer;
          padding: 8px 0 0;
          font-size: 24px;
          line-height: 30px;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .description {
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .handle {
          padding-top: 60px;
          .ant-btn {
            position: relative;
            padding-left: 0;
            color: @text-color;
            &::after,
            &::before {
              opacity: 0;
              visibility: visible;
              transition: all 0.3s;
            }
            &:hover {
              &::after,
              &::before {
                opacity: 1;
                visibility: visible;
              }
            }
            &::before {
              content: "";
              display: block;
              position: absolute;
              top: auto !important;
              right: auto !important;
              left: 50% !important;
              bottom: 100% !important;
              transform: translate(-50%, 5px);
              border: 5px solid transparent;
              border-top-color: #ef6d57;
              border-radius: 0;
              background-color: transparent;
            }
            &::after {
              content: "浏览量";
              position: absolute;
              left: 50%;
              bottom: 100%;
              transform: translate(-50%, -5px);
              padding: 5px 14px;
              font-size: 12px;
              white-space: nowrap;
              color: #fff;
              border-radius: 10px;
              background: #ef6d57;
            }
            &:nth-of-type(2) {
              &::after {
                content: "点个赞~";
              }
            }
            &:nth-of-type(3) {
              &::after {
                content: "评论量";
              }
            }
            &:nth-of-type(1):hover {
              color: #ef6d57;
            }
            &:nth-of-type(2):hover {
              color: #50bcb6;
              i {
                color: #50bcb6;
              }
              &::after {
                background-color: #50bcb6;
              }
              &::before {
                border-top-color: #50bcb6;
              }
            }
            &:nth-of-type(3):hover {
              color: #ffa800;
              &::after {
                background-color: #ffa800;
              }
              &::before {
                border-top-color: #ffa800;
              }
            }
          }
        }
      }
    }
    // 底线
    .bottom-line {
      text-align: center;
    }
  }
}
</style>
