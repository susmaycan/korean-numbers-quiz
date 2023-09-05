<template>
  <v-app-bar scroll-behavior="elevate">
    <template v-slot:prepend>
      <v-icon icon="mdi-tune" color="info" @click.stop="toggleDrawer" />
    </template>

    <v-app-bar-title class="font-weight-bold">{{
      $t('app_title')
    }}</v-app-bar-title>

    <lang-switcher />
    <theme-switcher />
  </v-app-bar>
</template>

<script setup lang="ts">
const emits = defineEmits(['toggle-drawer'])

const toggleDrawer = () => {
  emits('toggle-drawer')
}
</script>
