<template>
  <div class="calculator">
    <!-- <div class="select-currency">
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
    </div> -->
    <div class="row">
      <input type="text" v-model="message" @keyup.enter="sendMessage()">
    </div>
    <ul>
      <li v-for="(message, key) in messages" :key="key">
        {{ message }}
      </li>
    </ul>
  </div>
</template>

<script>
// import io from 'socket.io-client';

export default {
  name: 'Calculator',
  data() {
    return {
      // wsUrl: 'ws.kraken.com',
      message: '',
      messages: [],
      socket: {},
      activeSidebar: false,
      isShowDropdownMenu: false,
      msg: '',
      socketStatus: ''
    }
  },
  created() {
    this.sockets.subscribe('BTC', (data) => {
      this.msg = data.message;
    });
  },
  sockets: {
    connect: function () {
      this.socketStatus = 'socket connected'
    },
    // customEmit: function (data) {
    //   $io.emit("customEmit", data)
    //   console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    // }
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
  flex-wrap: wrap;
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
