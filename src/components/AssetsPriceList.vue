<template>
  <div class="assets-price-list">
    <div
      v-for="assets in $store.getters['assets/gatAssets']"
      :key="assets.symbol"
      class="item"
    >
      <div class="symbol">
        {{ assets.symbol }}
      </div>
      <div class="price">
        ${{ assets.priceUsd | fixesPrice }}
      </div> 
    </div>
  </div>
</template>

<script>
// import io from 'socket.io-client';
// import axios from 'axios'

export default {
  name: 'Calculator',
  data() {
    return {
      isGetting: false
    }
  },
  filters: {
    fixesPrice: value => {
      return Number(value).toFixed(4)
    }
  }
}
</script>

<style lang="scss">
.assets-price-list {
  display: flex;
  justify-content: space-around;
  font-size: 0.875rem;
  color: rgba($primary-text, $secondary-opacity);
  .item {
    padding: 0 .5rem;
    text-align: center;
    .symbol {
      font-size: 1.25rem;
    }
  }
}
</style>
