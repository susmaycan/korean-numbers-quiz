<script setup lang="ts">
const { voiceSpeed } = useSettings()
</script>
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
  >
    <template v-slot:append>
      <span>{{ voiceSpeed }}</span>
    </template>
  </v-slider>
</template>
