<template>
  <footer class="footer">
    <div class="container">
      <ChangeLocale />
      <div class="name">{{ $store.getters['user/getName'] }}</div>
    </div>
  </footer>
</template>

<script>
import ChangeLocale from '@/components/base/ChangeLocale'

export default {
  name: 'Footer',
  components: {
    ChangeLocale
  },
  // data() {
  //   return {
  //     activeSidebar: false,
  //     isShowDropdownMenu: false
  //   }
  // }
}
</script>

<style lang="scss">

</style>
