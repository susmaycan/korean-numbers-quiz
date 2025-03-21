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

  modules: ['@nuxtjs/i18n'],

  i18n: {
    defaultLocale: 'en',
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

  imports: {
    dirs: ['./types', './constants', './stores', './utils'],
  },

  compatibilityDate: '2025-03-12',
})