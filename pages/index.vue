<template>
  <div id="layout">
    <div class="bg">
      <div class="warp">
        <div class="btn">
          <div class="sides">
            <div class="top"></div>
            <div class="left"></div>
            <div class="right"></div>
            <div class="bottom"></div>
          </div>
          <!-- <div class="text">
            <div class="right">YEYAOYAO</div>
            <div class="left">YEYAOYAO</div>
          </div>-->
          <!-- 边框的动画为: 边框进入-停留其余三个边框画出的时间+满边框后静止时间->边框移出+停留其余三个边框移出的时间+无边框后静止时间->重复 -->
          <!-- 文字动画应为: 按钮无边框后静止时间时,文字开始动画进入(center点往两边扩散)-文字停留-边框开始动画-边框移出时文字移出动画 -->
          <!-- 斜杠动画为: 文字开始动画从中心点往两边扩散时同时动画收缩属性0->1然后迅速->0 -->
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style lang="less" scoped>
@keyframes change {
  0% {
    background-position-x: 0%;
  }
  50% {
    background-position-x: 100%;
  }
  100% {
    background-position-x: 0%;
  }
}

@keyframes side-top {
  0% {
    transform: translateX(-100%);
  }
  8%,
  50% {
    transform: translateX(0%);
  }
  58%,
  100% {
    transform: translateX(100%);
  }
}
@keyframes side-bottom {
  0% {
    transform: translateX(100%);
  }
  8%,
  50% {
    transform: translateX(0%);
  }
  58%,
  100% {
    transform: translateX(-100%);
  }
}
@keyframes side-left {
  0% {
    transform: translateY(100%);
  }
  8%,
  50% {
    transform: translateY(0%);
  }
  58%,
  100% {
    transform: translateY(-100%);
  }
}
@keyframes side-right {
  0% {
    transform: translateY(-100%);
  }
  8%,
  50% {
    transform: translateY(0%);
  }
  58%,
  100% {
    transform: translateY(100%);
  }
}
#layout {
  // transition: all 0.5s;
  height: 100vh;
  .bg {
    width: 100%;
    height: 100vh;
    animation: change 15s infinite;
    background: linear-gradient(
      125deg,
      #2980b9,
      #633bd3,
      #8e44ad,
      #192f44,
      #27ae60
    );
    background-size: 800%;
    z-index: -99;
    .warp {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      // 按钮最外层盒子overflow: hidden;
      .btn {
        overflow: hidden;
        margin: 0 auto;
        width: 200px;
        height: 60px;
        // 按钮盒子
        .sides {
          position: relative;
          width: 100%;
          height: 100%;
          // 边框
          > div {
            position: absolute;
            background: #fff;
          }
          .top,
          .bottom {
            width: 100%;
            height: 2px;
            left: 0;
          }
          .left,
          .right {
            width: 2px;
            height: 100%;
            top: 0;
          }
          .top {
            transform: translateX(-100%);
            animation: side-top 6s infinite;
          }
          .right {
            transform: translateY(-100%);
            right: 0;
            animation: side-right 6s 0.5s infinite;
          }
          .bottom {
            transform: translateX(100%);
            bottom: 0;
            animation: side-bottom 6s 1s infinite;
          }
          .left {
            transform: translateY(100%);
            animation: side-left 6s 1.5s infinite;
          }
        }
      }
    }
  }

}
</style>
