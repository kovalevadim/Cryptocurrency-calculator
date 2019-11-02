<template>
  <select v-model="$i18n.locale" @change="changeLang($i18n.locale)" class="change-locale">
    <option
      v-for="(lang, i) in langs"
      :key="`Lang${i}`"
      :value="lang.k"
    >
      {{ lang.t }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'LangSelection',
  data() {
    return {
      langs: [
        {
          k: 'en',
          t: 'English'
        },
        {
          k: 'ru',
          t: 'Русский'
        }
      ]
    }
  },
  methods: {
    changeLang(l) {
      localStorage.locale = l
      var html = document.documentElement
      console.log(html)
      document.documentElement.lang = l
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

select.change-locale {
  // margin-top: 2rem;
  font-weight: 300;
  color: $secondary-text;
  option {
    color: $black;
  }
}
</style>
