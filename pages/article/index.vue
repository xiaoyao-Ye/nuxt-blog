<template>
  <div id="article">
    <!-- home-bg -->
    <div class="first-screen">
      <div class="header">
        <div class="left">logo~</div>
        <div class="right">
          <a-button type="link" ghost icon="bars"></a-button>
        </div>
      </div>
      <div class="welcome-tips">
        <div class="date">二月 5, 2021</div>
        <div class="title">welcome~~</div>
        <!-- <div class="desc">不要让世界的悲哀成为你的悲哀.</div> -->
        <div class="desc">我原本以为, 当灾难来临时,精神意志是人类的第一序列武器.后来明白,当灾难来临时,希望,才是人类的第一序列武器</div>
      </div>
      <div class="mask"></div>
      <div class="bg">
        <img src="~assets/img/19.jpg" alt />
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
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      clickHeart: false,

      articleList: [
        {
          id: 1, date: '2021-02-04', title: '企业级中后台产品的交互语言和视觉风格。', eye: 101, heart: 8, comment: 1, pic: require('@/assets/img/shan.jpg'),
          description: `众所周知，Ant Design 作为一门设计语言面世，经历过多年的迭代和积累，
          它对 UI 的设计思想已经成为一套事实标准，受到众多前端开发者及企业的追捧和喜爱，
          也是 React 开发者手中的神兵利器。希望 ant-design-vue 能够让 Vue 开发者也享受到 Ant Design 的优秀设计。
          ant-design-vue 是 Ant Design 的 Vue 实现，组件的风格与 Ant Design 保持同步，组件的 html 结构和 css 样式也保持一致，
          真正做到了样式 0 修改，组件 API 也尽量保持了一致。Ant Design Vue 致力于提供给程序员愉悦的开发体验。`
        },
        {
          id: 2, date: '2021-02-04', title: '企业级中后台产品的交互语言和视觉风格。', eye: 101, heart: 8, comment: 1, pic: require('@/assets/img/shan.jpg'),
          description: `众所周知，Ant Design 作为一门设计语言面世，经历过多年的迭代和积累，
          它对 UI 的设计思想已经成为一套事实标准，受到众多前端开发者及企业的追捧和喜爱，
          也是 React 开发者手中的神兵利器。希望 ant-design-vue 能够让 Vue 开发者也享受到 Ant Design 的优秀设计。
          ant-design-vue 是 Ant Design 的 Vue 实现，组件的风格与 Ant Design 保持同步，组件的 html 结构和 css 样式也保持一致，
          真正做到了样式 0 修改，组件 API 也尽量保持了一致。Ant Design Vue 致力于提供给程序员愉悦的开发体验。`
        },
      ]
    }
  },
  methods: {
    onClickHeart(index) {
      if (this.clickHeart) {
        this.articleList[index].heart--
      } else {
        this.articleList[index].heart++
      }
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
    }
    .bg {
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -98;
      // background: url("~assets/img/19.jpg") no-repeat center;
      // background-size: 100%;
      box-shadow: 0 2px 15px rgba(76, 80, 207, 0.53);
      img {
        width: 100%;
        // height: 100%;
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
      left: 8%;
      z-index: 1;
      width: 30%;
      transform: translateY(-50%);
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
            padding-left: 0;
            color: @text-color;
          }
        }
      }
    }
  }
}
</style>
