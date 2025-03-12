<template>
  <v-btn @click="toggleTheme" :color="iconColor" icon="mdi-theme-light-dark" />
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

const toggleTheme = () =>
  (theme.global.name.value = theme.global.current.value.dark
    ? 'customLightTheme'
    : 'customDarkTheme')

const iconColor = computed(() =>
  theme.global.current.value.dark ? 'orange-lighten-2' : 'light-blue-darken-4'
)
</script>
