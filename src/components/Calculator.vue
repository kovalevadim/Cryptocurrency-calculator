<template>
  <div class="calculator">
    <div class="select-currency">
      <input v-model="coinAmmount" type="tel" class="value">
      <div @click="isShowAssetsList = !isShowAssetsList" class="selected-assets">
        <div class="header">
          <div class="name">
            {{ $store.getters['assets/getSelectedAsset'].symbol }}
          </div>
          <div class="icon" :class="{active: isShowAssetsList}">
            <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" width="24" height="24" viewBox="0 0 24 24"><path class="svg-icon-path" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
          </div>
        </div>
        <div v-if="isShowAssetsList" class="assets-list">
          <div
            v-for="asset in $store.getters['assets/getAssets']"
            :key="asset.id"
            @click="changeSelectedAssetsID({id: asset.id, symbol: asset.symbol})"
            class="item"
          >
            {{ asset.symbol }}
          </div>
        </div>
      </div>
    </div>
    <div class="equally">=</div>
    <div class="select-currency">
      <div class="result">{{ result.toFixed(2) }}</div>
      <div class="selected-assets">
        <div class="header">USD</div>
      </div>
    </div>
  </div>
</template>

<script>
// import io from 'socket.io-client'
// import axios from 'axios'

export default {
  name: 'Calculator',
  data() {
    return {
      isShowAssetsList: false,
      coinAmmount: 1
    }
  },
  computed: {
    result: function() {
      let status = this.$store.getters['assets/getStatusDownload']
      if (status) {
        let selectedAsset = this.$store.getters['assets/getSelectedAsset']
        let assets = this.$store.getters['assets/getAssets']
        let priceSelectedAsset = assets.find(assets => assets.id == selectedAsset.id).priceUsd
        let result = this.coinAmmount * priceSelectedAsset
        return result
      } else {
        return 0
      }
    }
  },
  methods: {
    changeSelectedAssetsID(value) {
      this.$store.commit('assets/changeSelectedAsset', value)
    },
    changeTrigger(functionName) {
      this.$emit(functionName)
    }
  }
}
</script>

<style lang="scss">
.calculator {
  display: flex;
  justify-content: space-between;
  margin: auto;
  font-size: 2rem;
  .select-currency {
    display: flex;
    width: 44%;
  }
  .value {
    width: 60%;
    padding: .75rem 1rem;
    border: 1px solid $primary;
    font-size: 1.5rem;
    color: $primary-text;
    background-color: $bg-dark;
    border-right: none;
    border-top-left-radius: $bd-rs;
    border-bottom-left-radius: $bd-rs;
  }
  .selected-assets {
    width: 40%;
    padding: .75rem .25rem;
    border: 1px solid $primary;
    font-size: 1.5rem;
    color: $primary-text;
    background-color: $bg-dark;
    border-top-right-radius: $bd-rs;
    border-bottom-right-radius: $bd-rs;
    position: relative;
    cursor: pointer;
    user-select: none;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon {
        height: 1.5rem;
        &.active {
          .svg-icon {
            transform: rotate(180deg)
          }
        }
      }
      .svg-icon {
        transition: transform $transition-duration $transition-timing-function;
        .svg-icon-path {
          fill: $white
        }
      }
    }
    .assets-list {
      position: absolute;
      top: 100%;
      left: $bd-rs;
      right: $bd-rs;
      border: 1px solid $primary;
      border-bottom-right-radius: $bd-rs;
      border-bottom-left-radius: $bd-rs;
      .item {
        padding: .25rem;
      }
    }
  }
  .equally {
    display: flex;
    align-items: center;
    padding: 0 1rem;
  }
  .result {
    width: 60%;
    padding: .75rem 1rem;
    border: 1px solid $primary;
    font-size: 1.5rem;
    color: $primary-text;
    background-color: $bg-dark;
    border-right: none;
    border-top-left-radius: $bd-rs;
    border-bottom-left-radius: $bd-rs;
  }
  .row {
    width: 100%;
  }
}
</style>
