<template>
  <client-only>
    <v-app>
      <v-layout ref="app" class="rounded rounded-md">
        <app-bar @toggle-drawer="toggleDrawer" />

        <navigation-drawer :show="showDrawer" @toggle-drawer="toggleDrawer" />
        <v-main class="d-flex align-center justify-center">
          <v-container>
            <slot />
          </v-container>
        </v-main>
      </v-layout>
    </v-app>
  </client-only>
</template>

<script setup lang="ts">
const showDrawer = ref(true)

const toggleDrawer = () => {
  showDrawer.value = !showDrawer.value
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap');

html {
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 15px;
  overflow-x: none;
}
</style>
