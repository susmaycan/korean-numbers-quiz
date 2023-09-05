<template>
  <v-slider
    v-model="voiceSpeed"
    hide-details
    color="primary"
    track-color="primary"
    :min="0"
    :max="1"
    :step="0.1"
    :label="$t('listening_speed')"
    :disabled="!isListeningCompatible"
  >
    <template v-slot:append>
      <span>{{ voiceSpeed }}</span>
    </template>
  </v-slider>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '@/stores/settings'
const store = useSettingsStore()

const { voiceSpeed, isListeningCompatible } = storeToRefs(store)
</script>

<style lang="scss" scoped></style>
