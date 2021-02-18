<template>
  <div id="layout">
    <div class="bg">
      <div class="warp">
        <!-- 按钮 -->
        <div class="btn">
          <!-- 边框 -->
          <div class="sides">
            <div class="top"></div>
            <div class="left"></div>
            <div class="right"></div>
            <div class="bottom"></div>
          </div>
          <!-- 斜杠 -->
          <div class="slash"></div>
          <!-- 文字 -->
          <div class="text">
            <div class="left">
              <div class="inner">IYEYAOYAO</div>
            </div>
            <div class="right">
              <div class="inner">IYEYAOYAO</div>
            </div>
          </div>
        </div>
        <!-- loading... -->
        <div class="loading"><i></i><i></i><i></i><i></i></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
// 背景动画
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
// 按钮边框
@keyframes side-top {
  0% {
    transform: translateX(-100%);
  }
  5%,
  50% {
    transform: translateX(0%);
  }
  55%,
  100% {
    transform: translateX(100%);
  }
}
@keyframes side-bottom {
  0% {
    transform: translateX(100%);
  }
  5%,
  50% {
    transform: translateX(0%);
  }
  55%,
  100% {
    transform: translateX(-100%);
  }
}
@keyframes side-left {
  0% {
    transform: translateY(100%);
  }
  5%,
  50% {
    transform: translateY(0%);
  }
  55%,
  100% {
    transform: translateY(-100%);
  }
}
@keyframes side-right {
  0% {
    transform: translateY(-100%);
  }
  5%,
  50% {
    transform: translateY(0%);
  }
  55%,
  100% {
    transform: translateY(100%);
  }
}
// 文字动画左
@keyframes txt-left {
  0% {
    transform: translateX(100%);
  }
  16%,
  60% {
    transform: translateX(0%);
  }
  76%,
  100% {
    transform: translateX(-200%);
  }
}
// 文字动画右
@keyframes txt-right {
  0% {
    transform: translateX(-187%);
  }
  16%,
  60% {
    transform: translateX(-87%);
  }
  76%,
  100% {
    transform: translateX(-287%);
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
        position: relative;
        margin: 0 auto;
        width: 260px;
        height: 70px;
        // 按钮盒子
        .sides {
          overflow: hidden;
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
            height: 3px;
            left: 0;
          }
          .left,
          .right {
            width: 3px;
            height: 100%;
            top: 0;
          }
          .top {
            transform: translateX(-100%);
            animation: side-top 9s 1s infinite;
          }
          .right {
            transform: translateY(-100%);
            right: 0;
            animation: side-right 9s 1.4s infinite;
          }
          .bottom {
            transform: translateX(100%);
            bottom: 0;
            animation: side-bottom 9s 1.8s infinite;
          }
          .left {
            transform: translateY(100%);
            animation: side-left 9s 2.2s infinite;
          }
        }
        // 斜杠-动画
        @keyframes slash {
          0% {
            transform: translate(-50%, -50%) rotate(15deg) scaleY(0);
          }
          4%,
          12% {
            transform: translate(-50%, -50%) rotate(15deg) scaleY(1);
          }
          16%,
          100% {
            transform: translate(-50%, -50%) rotate(15deg) scale(0);
          }
        }
        // 斜杠
        .slash {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 1;
          width: 12px;
          height: 200%;
          background-color: #000;
          transform: translate(-50%, -50%) rotate(15deg) scale(0);
          animation: slash 9s infinite;
          &::after {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            content: "";
            width: 3px;
            height: 80%;
            background-color: #fff;
          }
        }
        // 文字
        .text {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          font-size: 46px;
          color: #fff;
          > div {
            overflow: hidden;
            width: 50%;
            position: absolute;
            top: 0;
          }
          .left {
            left: 0;
            text-align: right;
            .inner {
              padding-left: 17px;
              transform: translateX(100%);
              animation: txt-left 9s infinite;
            }
          }
          .right {
            right: 0;
            text-align: left;
            .inner {
              transform: translateX(-187%);
              animation: txt-right 9s infinite;
            }
          }
        }
      }
      .loading {
        width: 140px;
        display: flex;
        margin: 35px auto;
        @keyframes loading {
          0% {
            opacity: 0.8;
            transform: scale(.4);
          }
          100% {
            opacity: 0;
            transform: scale(1);
          }
        }
        i {
          position: relative;
          margin: 10px;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          &::after {
            content: "";
            position: absolute;
            top: -10px;
            left: -10px;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            transform: scale(0.4);
            opacity: 0.8;
            animation: loading 2s infinite;
          }
          &:first-child {
            background-color: skyblue;
            &::after {
              background-color: skyblue;
            }
          }
          &:nth-child(2) {
            background-color: pink;
            &::after {
              background-color: pink;
            }
          }
          &:nth-child(3) {
            background-color: violet;
            &::after {
              background-color: violet;
            }
          }
          &:last-child {
            background-color: yellowgreen;
            &::after {
              background-color: yellowgreen;
            }
          }
        }
      }
    }
  }
}
</style>
