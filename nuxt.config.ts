// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Korean Numbers Quiz',
      charset: 'utf-8',
    },
  },
  devtools: { enabled: true },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@nuxtjs/i18n',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
  i18n: {
    legacy: false,
    defaultLocale: 'en',
    langDir: 'locales',
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.js',
      },
      {
        code: 'es',
        name: 'Español',
        file: 'es.js',
      },
      // {
      //   code: 'kr',
      //   name: '한국어',
      //   file: 'kr.js',
      // },
    ],
  },
})
