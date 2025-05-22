// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Numbers Quiz',
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
        file: 'en.json',
      },
      {
        code: 'es',
        name: 'Español',
        file: 'es.json',
      },
      // {
      //   code: 'kr',
      //   name: '한국어',
      //   file: 'kr.json',
      // },
    ],
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  imports: {
    dirs: ['./types', './constants', './stores', './utils'],
  },

  compatibilityDate: '2025-03-12',
})
