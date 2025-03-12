// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import type { ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const customLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#F8F9F9',
    surface: '#EAECEE',
    primary: '#BB8FCE',
    'primary-darken-1': '#5B2C6F',
    error: '#B00020',
    info: '#85929E',
    success: '#4CAF50',
    warning: '#F7DC6F',
  },
}

const customDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#1B1B1B',
    surface: '#353434',
    primary: '#6C3483',
    'primary-darken-1': '#A569BD',
    error: '#EC7063',
    info: '#808B96',
    success: '#7DCEA0',
    warning: '#F1C40F',
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'customDarkTheme',
      themes: {
        customDarkTheme,
        customLightTheme,
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
