<template>
  <div class="about">
    <Header />
    <div class="content">
      <h1>hello~我是叶妖妖呀!</h1>
      <ul>
        <li>出生于1999年5月14日</li>
        <li>没读过书,没有学历的农村娃</li>
        <li>两年多前端经验,主要做pc端后台管理开发.</li>
        <li>技能点: HTML, Css, Javascript, Vue, Nodejs等等</li>
        <li>有空没空都喜欢听听音乐呀,放着歌儿打代码超级有战斗力的!!!o(*￣︶￣*)o</li>
        <li>要好好的,要开心呀~</li>
        <li>叶妖妖.i see you</li>
        <li>叶妖妖.icu</li>
      </ul>
      <p>
        注册域名的时候,考虑了很久,综合考量性价比也就.top/.icu/.xyz这三个新顶级域名会合适点,最终决定.icu比较适合我,工作996生病icu
        还有就是: "叶妖妖. I see you"
        有时候会想到很多很多,有时候又说不出什么东西,今天就先到这里吧,喂蚊子都喂饱了喂~
        平时不太爱说话,比较喜欢安静,但是非常欢迎你的主动联系!!!以前有空会比较喜欢lol,炉石,剑灵等游戏,最近很长一段时间都在努力学习中...
      </p>
      <br />
      <p>网站持续建设中...</p>
      <p>明天的明天,你还好吗?</p>
      <p>要记住我的网站yeyaoyao.icu呀!</p>
      <!-- 最好换成icon统一原型边框,内部镂空的 -->
      <div class="contactUs">
        <a-tooltip>
          <template slot="title">YQCyecong</template>
          <a-icon type="wechat" theme="filled" />
        </a-tooltip>
        <a-tooltip>
          <template slot="title">YQCyecong@163.com</template>
          <a-icon type="mail" theme="filled" />
        </a-tooltip>
        <a-tooltip>
          <template slot="title">没弄好暂不开放</template>
          <a-icon type="github" theme="filled" />
        </a-tooltip>
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
    Header: () => import('@/components/Header/index')
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
    color: #333;

    .contactUs {
      padding: 20px 0;
      i {
        margin-right: 20px;
        font-size: 24px;
      }
    }
    h1 {
      font-weight: bolder;
    }
    ul {
      padding: 0;
      font-size: 16px;
      line-height: 30px;
      li {
        list-style: none;
        &::before {
          content: "✧";
        }
      }
    }
    p {
      font-size: 16px;
      &:nth-of-type(1) {
        text-indent: 2em;
      }
    }
  }
}
</style>
