<template>
  <div>
    <Nuxt />

    <!-- up-top -->
    <a-back-top>
      <div class="ant-back-top-inner">UP</div>
    </a-back-top>
  </div>
</template>

<style lang="less">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

// up-top
.ant-back-top-inner {
  cursor: @cursor-pointer;
  transition: all 0.5s ease;
  height: 100%;
  line-height: 36px;
  text-align: center;
  border: 2px dotted @border-color-base;
  border-radius: 20px;
  box-shadow: @box-shadow-base;
  &:hover {
    box-shadow: 0 2px 10px rgba(255, 0, 0, 0.5);
  }
}
</style>
