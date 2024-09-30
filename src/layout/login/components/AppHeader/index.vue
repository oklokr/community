<template lang="pug">
.header-container
  h1.logo
    a(href="/login") #[Logo]
</template>

<script>
import Logo from '../../../../../public/logo.svg'

export default {
  name: 'Header',
  components: { Logo },
  computed: {},
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  height: 58px;
  padding: 0 16px;
}

.logo {
  display: flex;
  align-items: center;
  transition: 0.2s ease-in-out;
  transform: rotate(0);
  &:hover {
    transform: rotate(-90deg);
  }
  svg {
    width: 38px;
    height: 38px;
  }
}
</style>
