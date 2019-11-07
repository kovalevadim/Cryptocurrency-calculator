<template>
  <div class="calculator">
    <div class="select-currency">
      <input type="tel" class="value">
      <select name="" id="" class="currency-list">
        <option v-for="currency in $store.getters['assets/gatAssets']" :key="currency.symbol" :value="currency.symbol">{{ currency.symbol }}</option>
      </select>
    </div>
    <div class="equally">=</div>
    <div class="select-currency">
      <input type="tel" class="value">
      <select name="" id="" class="currency-list">
        <option value="USD">USD</option>
      </select>
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
      isGetting: false,
      apiUrl: 'https://api.coincap.io/v2/',
      wsUrl: 'wss://ws.coincap.io/',
      assetsList: 'bitcoin,ethereum,monero,litecoin',
      socketStatus: '',
      assets: [],
    }
  },
  methods: {
    getWss() {
      const tradeWs = new WebSocket(`${this.wsUrl}prices?assets=${this.$store.getters['assets/assetsList']}`)

      tradeWs.onmessage = (msg) => {
        console.log(msg.data)
      }
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
  // flex-wrap: wrap;
  margin: auto;
  font-size: 2rem;
  .select-currency {
    display: flex;
  }
  .equally {
    display: flex;
    align-items: center;
    padding: 0 1rem;
  }
  input, select {
    width: 50%;
    padding: .75rem 1rem;
    border: 1px solid $primary;
    font-size: 1.5rem;
    color: $primary-text;
    background-color: $bg-dark;
  }
  input {
    border-right: none;
    border-top-left-radius: $bd-rs;
    border-bottom-left-radius: $bd-rs;
  }
  select {
    border-top-right-radius: $bd-rs;
    border-bottom-right-radius: $bd-rs;
    option {
      padding: .5rem 1rem;
    }
  }
  .row {
    width: 100%;
  }
}
</style>
