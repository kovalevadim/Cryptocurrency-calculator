module.exports = {
  pwa: {
    name: 'Cryptocurrency calculator',
    themeColor: '#212121',
    msTileColor: '#212121',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'service-worker.js',
    }
  },

  // pluginOptions: {
  //   i18n: {
  //     locale: 'en',
  //     fallbackLocale: 'en',
  //     localeDir: 'locales',
  //     enableInSFC: false
  //   }
  // }
}
