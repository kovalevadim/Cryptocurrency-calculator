<template>
  <div class="assets-price-list">
    <div
      v-for="asset in assets"
      :key="asset.symbol"
      @click="changeSelectedAsset({id: asset.id, symbol: asset.symbol})"
      class="item"
    >
      <div class="symbol">
        {{ asset.symbol }}
      </div>
      <div class="price" :class="{up: asset.priceChangeStatus === 'up', down: asset.priceChangeStatus === 'down'}">
        ${{ asset.priceUsd.toFixed(4) }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Calculator',
  data() {
    return {
      isGetting: false
    }
  },
  computed: {
    ...mapState('assets', [
      'assets'
    ])
  },
  methods: {
    ...mapMutations('assets', [
      'changeSelectedAsset'
    ]),
  }
}
</script>

<style lang="scss">
.assets-price-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-size: 0.875rem;
  color: rgba($primary-text, $secondary-opacity);
  .item {
    padding: 0 .5rem;
    text-align: center;
    cursor: pointer;
    .symbol {
      font-size: 1.25rem;
      font-weight: $fw-light;
    }
    .price {
      transition: color $transition-duration $transition-timing-function;
      &.up {
        color: rgba($primary, $secondary-opacity);
      }
      &.down {
        color: rgba($danger, $secondary-opacity);
      }
    }
  }
}
</style>
