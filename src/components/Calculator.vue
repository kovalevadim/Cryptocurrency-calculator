<template>
  <div class="calculator">
    <div class="select-currency">
      <input type="tel" class="value">
      <select name="" id="" class="currency-list">
        <option value="BTC">BTC</option>
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
export default {
  name: 'Calculator',
  data() {
    return {
      activeSidebar: false,
      isShowDropdownMenu: false
    }
  },
  methods: {
    changeTrigger(functionName) {
      this.$emit(functionName)
    }
  }
}
</script>

<style lang="scss">
.calculator {
  display: flex;
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
}
</style>
