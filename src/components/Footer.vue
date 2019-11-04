<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col">
          <ChangeLocale />
        </div>
        <div class="col">
          <div class="name">{{ $store.getters['user/getName'] }}</div>
        </div>
      </div>
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
.footer {
  .row {
    display: flex;
    justify-content: space-around;
  }
}
</style>
