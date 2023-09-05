<template>
  <div class="pr-5">
    <v-switch
      v-model="showResults"
      hide-details
      :label="showResults ? $t('hide_results') : $t('reveal_results')"
    ></v-switch>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()

const { showResults } = storeToRefs(settingsStore)
</script>
