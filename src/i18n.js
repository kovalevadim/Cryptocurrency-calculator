import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

function loadLocaleMessages() {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

function baseLocale() {
  let browserLang = navigator.language || navigator.userLanguage
  if (browserLang == 'ru' || browserLang == 'uk') {
    localStorage.locale = 'ru'
    return 'ru'
  } else {
    localStorage.locale = 'en'
    return 'en'
  }
}

export default new VueI18n({
  locale: localStorage.locale || baseLocale(),
  fallbackLocale: localStorage.locale || baseLocale(),
  messages: loadLocaleMessages()
})
