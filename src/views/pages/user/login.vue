<template lang="pug">
.content-area 
  .form
    h2.title 로그인
    el-form(label-width="auto")
      el-form-item(label="ID")
        el-input(v-model="postForm.userId" clearable)
      el-form-item(label="PW")
        el-input(v-model="postForm.userPw" type="password" show-password clearable)
    .message-btns
      el-button(type='primary' text) 비밀번호를 잊으셨나요?
    .btn.full
      el-button(type="primary" size="large") 로그인
      el-button(size="large" @click="$router.push('/join')") 회원가입
</template>
<script>
export default {
  name: 'MainPage',
  components: {},
  computed: {
    osState() {
      const userAgent = window.navigator.userAgent
      if (/Android/i.test(userAgent)) {
        return 'android'
      } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
        return 'ios'
      } else {
        return 'web'
      }
    },
  },
  data() {
    return {
      postForm: {
        userId: '',
        userPw: '',
      },
    }
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.content-area {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 58px);
}

.message-btns .el-button {
  padding: initial;
  height: fit-content;
}

.btn.full {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 28px;
  .el-button {
    width: 100%;

    & + .el-button {
      margin: initial;
    }
  }
}
</style>
