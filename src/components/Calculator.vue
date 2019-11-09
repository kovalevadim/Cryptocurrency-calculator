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
        USD
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
  width: 100%;
  margin: auto;
  font-size: 1.5rem;
  @media only screen and (max-width: 767px) {
    font-size: 1rem;
  }
  .select-currency {
    display: flex;
    flex: 1 1;
    padding: .5rem .25rem;
    border: 1px solid $primary;
    border-radius: $bd-rs;
    .value, .result {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60%;
      padding: 0;
      border: none;
      border-right: 1px solid $primary;
      line-height: 1.2;
      color: $primary-text;
      background-color: transparent;
    }
    .value {
      text-align: center;
      font-size: 1.5rem;
      @media only screen and (max-width: 767px) {
        font-size: 1rem;
      }
    }
    .selected-assets {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 40%;
      font-weight: $fw-light;
      color: $primary-text;
      @media only screen and (max-width: 767px) {
        font-size: .875rem;
      }
    }
  }
  .equally {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    font-size: 1.5rem;
  }
  .selected-assets {
    position: relative;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 0.25rem;
      width: 100%;
      cursor: pointer;
      user-select: none;
      .icon {
        height: 1.5rem;
        @media only screen and (max-width: 767px) {
          width: 1rem;
          height: 1rem;
        }
        &.active {
          .svg-icon {
            transform: rotate(180deg)
          }
        }
      }
      .svg-icon {
        width: 100%;
        height: 100%;
        transition: transform $transition-duration $transition-timing-function;
        .svg-icon-path {
          fill: $white
        }
      }
    }
    .assets-list {
      position: absolute;
      top: calc(100% + .5rem);
      left: 0;
      right: $bd-rs;
      border: 1px solid $primary;
      border-top: none;
      .item {
        padding: .25rem;
      }
    }
  }
  .row {
    width: 100%;
  }
}
</style>
