<template lang="pug">
  .app-wrap(:class="{'is-login': this.$route.path === '/login' }")
    app-header
    app-main
</template>

<script>
import AppMain from './components/AppMain/index.vue'
import AppHeader from './components/AppHeader/index.vue'

export default {
  components: {
    AppMain,
    AppHeader,
  },
}
</script>

<style lang="scss" scoped></style>
