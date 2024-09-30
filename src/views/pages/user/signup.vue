<template lang="pug">
.content-area 
  .form
    h2.title 회원가입
    el-form
      el-form-item(label="이름")
        el-input
      el-form-item(label="ID")
        el-input
      el-form-item(label="PW")
        el-input
      el-form-item(label="PW 재확인")
        el-input
    .btn
      el-button 로그인
</template>
<script>
export default {
  name: 'Join',
  components: {},
  computed: {},
  data() {
    return {}
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
</style>
