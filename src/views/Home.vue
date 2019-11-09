<template>
  <div class="main">
    <div class="container">
      <Calculator/>
      <AssetsPriceList />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Calculator from '@/components/Calculator.vue'
import AssetsPriceList from '@/components/AssetsPriceList.vue'

export default {
  name: 'Home',
  components: {
    Calculator,
    AssetsPriceList
  },
  created() {
    this.$store.dispatch('assets/getAssets')
    this.$store.dispatch('assets/updateAssets')
  }
}
</script>
