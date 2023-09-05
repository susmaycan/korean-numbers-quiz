<template>
  <v-snackbar
    :model-value="!isListeningCompatible"
    color="warning"
    :timeout="4000"
  >
    {{ $t('browser_not_compatible') }}
  </v-snackbar>
</template>

<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'

const settingsStore = useSettingsStore()

const { isListeningCompatible } = storeToRefs(settingsStore)
</script>
