module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          type: 'javascript/auto',
          test: /\.mjs$/,
          use: [],
        },
      ]
    }
  }
}
