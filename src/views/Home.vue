<template>
  <div class="main">
    <div class="container">
      <Calculator/>
      <AssetsPriceList />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Calculator from '@/components/Calculator.vue'
import AssetsPriceList from '@/components/AssetsPriceList.vue'

export default {
  name: 'Home',
  components: {
    Calculator,
    AssetsPriceList
  },
  created() {
    this.getAssets()
    this.updateAssets()
  },
  methods: {
    ...mapActions('assets', [
      'getAssets',
      'updateAssets'
    ])
  }
}
</script>
