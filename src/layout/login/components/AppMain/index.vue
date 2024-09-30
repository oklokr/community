<template lang="pug">
.applogin-container
  section.app-main
    router-view
</template>

<script>
export default {
  name: 'AppMain',
  components: {},
}
</script>

<style lang="scss">
.form {
  width: 100%;
  max-width: 400px;
  padding: 30px;
  border: 1px solid #efefef;
  border-radius: 12px;
  box-shadow: 0px 0px 10px 0px rgba(220, 223, 230, 1);
  .title {
    text-align: center;
    & + .el-form {
      margin-top: 20px;
    }
  }
}
</style>
