<template>
  <div class="main">
    <div class="container">
      <Calculator/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Calculator from '@/components/Calculator.vue'

export default {
  name: 'Home',
  components: {
    Calculator
  }
}
</script>
