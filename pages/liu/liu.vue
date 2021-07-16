<template>
  <div class="container">
    <div class="col" :ref="`col_${number}`" v-for="number in columnNumber" :key="number">
      <div
        class="item"
        v-for="(col, index) in columnData[number-1]"
        :style="{height: col.height+'px',backgroundColor: col.backgroundColor}"
        :key="index"
      >{{col.count}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    columnNumber: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      columnData: [[], []],
      refs: [],
      count: 1
    }
  },
  // TODO:
  // 1.需要根据每列高度,动态计算,往高度最小的列新增数据,保持平衡
  // 2.需要根据可视区域进行可视区加载,虚拟滚动
  // 3.请求数据时,处理,是通过骨架屏的方式,有数据时替换还是通过loading的方式,去提示用于正在下拉加载中!(骨架屏需要考虑的边界问题会少一点);
  // 4.通过插槽的方式,扩展固定展示位,合并展示位等等.
  // 单独在维护一份渲染数据列表, 每次将渲染列表中的进行排序渲染
  mounted() {
    // refs
    for (var i = 1; i <= this.columnNumber; i++) {
      this.refs.push(this.$refs[`col_${i}`][0])
    }
    // 补充数组
    // while (this.columnNumber - this.columnData.length > 0) {
    //   this.columnData.push([]);
    // }
    // console.log('columnNumber', this.columnData);
    // 判断是否可视区域,滚动条离底部至少200px
    // 判断滚动条距离底部小于100px,加载下一次random
    // console.log('arr', this.random());
    this.scroll();
    this.scroll();
    window.addEventListener('scroll', this.scroll);
  },
  methods: {
    loading() {
      const arr = this.random();
      arr.forEach(async item => {
        const minI = await this.minHeightCol();
        this.columnData[minI].push(item);
      })
    },
    scroll(e) {
      // console.log('e',e);
      const container = document.getElementsByClassName('container')[0];
      const pageY = window.pageYOffset;
      const clientHeight = document.body.clientHeight;
      console.log(container.offsetHeight - (pageY + clientHeight));
      if (container.offsetHeight - (pageY + clientHeight) <= 200) {
        this.loading();
      }
      console.log(window.pageYOffset)
      console.log('', document.body.clientHeight);
    },
    random(min = 100, max = 250, n = 50) {
      let arr = [];
      // for (var i = 0; i < this.columnNumber; i++) {
      for (var i = 0; i < 10; i++) {
        const height = Math.floor((Math.random() * (max - min) + min + 1) / n) * n;
        const backgroundColor = '#' + Math.random().toString(16).slice(2, 8);
        arr.push({ height, backgroundColor, count: this.count++ });
      }
      return arr;
    },
    minHeightCol() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // console.log(document.getElementsByClassName('col')[0].offsetHeight);
          const offsetArr = this.refs.map(item => item.offsetHeight)
          const minH = Math.min.apply(null, offsetArr);
          const minI = offsetArr.findIndex(index => index === minH);
          resolve(minI);
        }, 0);
      })
    }
  }

}
</script>

<style lang="less" scoped>
.container {
  overflow: hidden;
  // display: flex;
  // flex-direction: row;
  .col {
    float: left;
    // display: flex;
    // flex-direction: column;
    // flex: 1;
    width: 50%;
    padding: 0 5px;
    .item {
      text-align: center;
      font-size: 50px;
      font-weight: 600;
      line-height: 2;
      color: #101010;
      margin-bottom: 10px;
      border-radius: 8px;
    }
  }
}
/** 下面这种瀑布流好像有单张插入时位置变换效果 */
// <template>
//   <div class="masonry">
//     <div class="colmun">
//       <img class="item" :src="i.img" :key="i.id" v-for="i in data1" />
//     </div>
//     <div class="colmun">
//       <img class="item" :src="i.img" :key="i.id" v-for="i in data2" />
//     </div>
//     <div class="colmun">
//       <img class="item" :src="i.img" :key="i.id" v-for="i in data3" />
//     </div>
//   </div>
// </template>

// <script>
// import data from "./data.js";
//       console.log('data',data);

// export default {
//   data() {
//     let data1 = [], //第一列
//       data2 = [], //第二列
//       data3 = [], //第三列
//       i = 0;

//     while (i < data.length) {
//       data1.push(data[i++]);
//       if (i < data.length) {
//         data2.push(data[i++]);
//       }
//       if (i < data.length) {
//         data3.push(data[i++]);
//       }
//     }
//     console.log('data1', data1);
//     console.log('data1', data2);
//     console.log('data1', data3);
//     return {
//       //第一列
//       data1,
//       //第二列
//       data2,
//       //第三列
//       data3
//     };
//   }
// };
// </script>

// <style lang="less" scoped>
// .masonry {
//   display: flex;
//   flex-direction: row;
//   .colmun {
//     display: flex;
//     flex-direction: column;
//     flex: 1;
//     padding: 0 2px;
//     .item {
//       margin-bottom: 5px;
//       width: 100%;
//     }
//   }
// }
//
// </style>
</style>


