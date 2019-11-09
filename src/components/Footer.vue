<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col">
          <ChangeLocale />
        </div>
        <div class="col">
          <div class="name">&copy; {{ $store.getters['user/getName'] }} {{ currentYear }}</div>
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
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
.footer {
  .row {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .name {
    color: rgba($primary-text, $secondary-opacity);
  }
}
</style>
