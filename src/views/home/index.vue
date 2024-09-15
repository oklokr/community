<template lang="pug">
  .app-wrap testesteste
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.app-wrap {
  display: flex;
  width: 1280px;
  min-width: 1280px;
  height: 100%;
  @media (max-width: 768px) {
    width: 100%;
    min-width: 360px;
  }
  margin: 0 auto;
}
</style>
