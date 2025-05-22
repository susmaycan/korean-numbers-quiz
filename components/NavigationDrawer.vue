<template>
  <v-navigation-drawer width="500" :model-value="show" app>
    <quiz-settings @toggle-drawer="toggleDrawer" />
    <template v-slot:append>
      <k-footer />
    </template>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
defineProps<{
  show: boolean
}>()

const emits = defineEmits(['toggle-drawer'])

const toggleDrawer = () => {
  emits('toggle-drawer')
}
</script>
