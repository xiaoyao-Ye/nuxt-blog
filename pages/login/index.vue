<template>
  <div class="login">
    <!-- <a-button type="dashed" @click="$router.push('/')">登录页面开发中...(*^▽^*)去看看别的页面吧!</a-button> -->
    <a-form id="components-form-demo-normal-login" :form="form" class="login-form" @submit="handleSubmit">
      <a-form-item>
        <a-input v-decorator="userName" placeholder="Username">
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="password" type="password" placeholder="Password">
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox v-decorator="remember">Remember me</a-checkbox>
        <a class="login-form-forgot" href>忘记密码?</a>
        <a-button type="primary" html-type="submit" class="login-form-button">Log in</a-button>Or
        <a href>立即注册!</a>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
const userName = ['userName', { rules: [{ required: true, message: 'Please input your username!' }] },]
const password = ['password', { rules: [{ required: true, message: 'Please input your Password!' }] },]
const remember = ['remember', { valuePropName: 'checked', initialValue: true, },]

export default {
  data() {
    return {
      form: this.$form.createForm(this, { name: 'normal_login' })
    }
  },
  computed: {
    userName() { return userName },
    password() { return password },
    remember() { return remember },
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          const res = await this.$axios.post('/auth/login', {
            account: values.userName,
            password: values.password
          })
          console.log('res', res);
          if (res.data.code == 200) {
            this.$router.push('/')
          }
        }
      });
    },
  },
}
</script>

<style lang="less" scoped>
.login {
  min-height: 100vh;
  height: 935px;
  background: url("../../assets/img/_Ghosteye.jpg") center;
  background-size: 110% 110%;
  background-position-x: 200%;
}
#components-form-demo-normal-login {
  position: fixed;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
}
#components-form-demo-normal-login {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
/deep/#components-form-demo-normal-login {
  .ant-form-explain,
  span {
    color: #fff;
  }
}
</style>
